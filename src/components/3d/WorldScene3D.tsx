"use client";

import React, {
  useRef,
  useMemo,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Client Color Palette Constants ─────────────────────── */
const NAVY = "#0F2A47";
const STEEL_BLUE = "#2F6690";
const SAFETY_ORANGE = "#F26A1B";
const BG_WARM = "#F7F5F0";
const BG_ALT = "#E9E6DF";
const BORDER_TONE = "#CFCBC2";

/* ─── Shared Context ─────────────────────────────────────── */
interface WorldSceneCtx {
  scrollProgress: number;
  bridgeProgress: number;
  setBridgeProgress: (v: number) => void;
}
export const WorldSceneContext = createContext<WorldSceneCtx>({
  scrollProgress: 0,
  bridgeProgress: 0,
  setBridgeProgress: () => {},
});
export const useWorldScene = () => useContext(WorldSceneContext);

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768 || navigator.maxTouchPoints > 1;
}

/* ─── 1. Architectural Daylight Sky ──────────────────────── */
function SkyPlane() {
  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(360, 200, 1, 6);
    const pos = g.attributes.position;
    const colors: number[] = [];
    // Daylight sky: steel blue tone at top fading to soft warm architectural horizon
    const palette = [
      new THREE.Color("#4A7E9F"), // deep steel daylight
      new THREE.Color("#73A5C5"), // mid steel sky
      new THREE.Color("#A8C8DE"), // pale steel
      new THREE.Color("#D4E3ED"), // crisp ice
      new THREE.Color("#E9E6DF"), // warm alt section tone
      new THREE.Color(BG_WARM),   // base warm cream
    ];
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const t = Math.max(0, Math.min(1, (y + 100) / 200));
      const segment = Math.min(Math.floor(t * (palette.length - 1)), palette.length - 2);
      const localT = t * (palette.length - 1) - segment;
      const c = palette[segment].clone().lerp(palette[segment + 1], localT);
      colors.push(c.r, c.g, c.b);
    }
    g.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return g;
  }, []);

  return (
    <mesh position={[0, 40, -110]} rotation={[0, 0, 0]}>
      <primitive object={geo} />
      <meshBasicMaterial vertexColors side={THREE.FrontSide} />
    </mesh>
  );
}

/* ─── 2. Water Plane (Steel Blue Hydrology) ──────────────── */
function WaterPlane() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = -0.5 + Math.sin(clock.getElapsedTime() * 0.7) * 0.02;
    }
  });

  return (
    <mesh ref={ref} position={[0, -0.5, -12]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[140, 80, 1, 1]} />
      <meshStandardMaterial
        color={STEEL_BLUE}
        roughness={0.2}
        metalness={0.3}
        transparent
        opacity={0.82}
      />
    </mesh>
  );
}

/* ─── 3. Skyline City Buildings ─────────────────────────── */
function CityBuildings({ mobile }: { mobile: boolean }) {
  const count = mobile ? 40 : 90;
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const palette = useMemo(
    () => [
      new THREE.Color("#FFFFFF"),
      new THREE.Color(BG_ALT),
      new THREE.Color(BORDER_TONE),
      new THREE.Color("#B8C2CC"),
      new THREE.Color("#8FA3B5"),
    ],
    []
  );

  useEffect(() => {
    if (!mesh.current) return;
    let idx = 0;

    const rows = [
      { z: -55, count: Math.floor(count * 0.45), hScale: 1.6 },
      { z: -35, count: Math.floor(count * 0.35), hScale: 1.1 },
      { z: -20, count: Math.floor(count * 0.20), hScale: 0.75 },
    ];

    for (const row of rows) {
      const rowCount = Math.min(row.count, count - idx);
      for (let i = 0; i < rowCount && idx < count; i++) {
        const x = -70 + (i / rowCount) * 140 + (Math.random() - 0.5) * 8;
        if (Math.abs(x) < 5 || (x > 6 && x < 14)) continue;

        const h = (4 + Math.random() * 20) * row.hScale;
        const w = 1.8 + Math.random() * 3.5;
        dummy.position.set(x, h / 2 - 1, row.z);
        dummy.scale.set(w, h, w * 0.9);
        dummy.updateMatrix();
        mesh.current.setMatrixAt(idx, dummy.matrix);

        const col = palette[Math.floor(Math.random() * palette.length)].clone();
        mesh.current.setColorAt!(idx, col);
        idx++;
      }
    }

    for (let i = idx; i < count; i++) {
      dummy.position.set(0, -200, 0);
      dummy.scale.set(0.01, 0.01, 0.01);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }

    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
  }, [count, dummy, palette]);

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0.4} metalness={0.15} />
    </instancedMesh>
  );
}

/* ─── 4. Construction Cranes (Safety Orange) ─────────────── */
function TowerCranes() {
  const jibs = useRef<(THREE.Group | null)[]>([null, null, null, null]);
  const defs = useMemo(
    () => [
      { pos: [18, 14, -26] as [number, number, number], h: 18, speed: 0.22 },
      { pos: [-18, 12, -30] as [number, number, number], h: 16, speed: -0.18 },
      { pos: [32, 10, -40] as [number, number, number], h: 14, speed: 0.15 },
      { pos: [-36, 11, -38] as [number, number, number], h: 15, speed: -0.2 },
    ],
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    jibs.current.forEach((jib, i) => {
      if (jib) jib.rotation.y = Math.sin(t * defs[i].speed) * 0.8;
    });
  });

  return (
    <group>
      {defs.map((d, i) => (
        <group key={i} position={d.pos}>
          {/* Mast in Safety Orange */}
          <mesh position={[0, d.h / 2, 0]}>
            <boxGeometry args={[0.3, d.h, 0.3]} />
            <meshStandardMaterial color={SAFETY_ORANGE} roughness={0.3} />
          </mesh>
          {/* Rotating Jib */}
          <group
            ref={(el) => {
              jibs.current[i] = el;
            }}
            position={[0, d.h, 0]}
          >
            {/* Front arm */}
            <mesh position={[4, 0.15, 0]}>
              <boxGeometry args={[9, 0.2, 0.2]} />
              <meshStandardMaterial color={SAFETY_ORANGE} roughness={0.3} />
            </mesh>
            {/* Counterweight rear in Navy */}
            <mesh position={[-2, 0.15, 0]}>
              <boxGeometry args={[4, 0.2, 0.2]} />
              <meshStandardMaterial color={NAVY} roughness={0.5} />
            </mesh>
            {/* Counterweight block */}
            <mesh position={[-3.5, -0.2, 0]}>
              <boxGeometry args={[0.9, 0.6, 0.6]} />
              <meshStandardMaterial color="#2E3E50" roughness={0.8} />
            </mesh>
            {/* Hook cable */}
            <mesh position={[5.5, -2, 0]}>
              <cylinderGeometry args={[0.015, 0.015, 4, 4]} />
              <meshBasicMaterial color={NAVY} />
            </mesh>
            {/* Hook in Safety Orange */}
            <mesh position={[5.5, -4, 0]}>
              <boxGeometry args={[0.2, 0.3, 0.2]} />
              <meshStandardMaterial color={SAFETY_ORANGE} />
            </mesh>
          </group>
        </group>
      ))}
    </group>
  );
}

/* ─── 5. LANDMARK TOWER (Navy & Steel Blue Architecture) ──── */
function LandmarkTower({ mobile = false }: { mobile?: boolean }) {
  const beaconRef = useRef<THREE.PointLight>(null!);
  const beaconMeshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (beaconRef.current) {
      beaconRef.current.intensity = 1.4 + Math.sin(t * 4) * 0.6;
    }
    if (beaconMeshRef.current) {
      const s = 1 + Math.sin(t * 4) * 0.2;
      beaconMeshRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group position={[mobile ? 6 : 13.5, 0, -14]}>
      {/* Structural Podium */}
      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[7.0, 8, 7.0]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.2} />
      </mesh>
      {/* Steel Blue Podium Glass Band */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[7.15, 3.5, 7.15]} />
        <meshStandardMaterial color={STEEL_BLUE} roughness={0.1} metalness={0.7} />
      </mesh>
      {/* Navy Base Accent Strip */}
      <mesh position={[0, 7.8, 0]}>
        <boxGeometry args={[7.2, 0.5, 7.2]} />
        <meshStandardMaterial color={NAVY} roughness={0.3} />
      </mesh>

      {/* Main Tower Body - Lower Tier */}
      <mesh position={[0, 15, 0]}>
        <boxGeometry args={[5.2, 14, 5.2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.25} />
      </mesh>
      {/* Glass facade curtain columns */}
      <mesh position={[0, 15, 0]}>
        <boxGeometry args={[5.4, 13.5, 4.8]} />
        <meshStandardMaterial color={STEEL_BLUE} roughness={0.08} metalness={0.8} />
      </mesh>
      <mesh position={[0, 15, 0]}>
        <boxGeometry args={[4.8, 13.5, 5.4]} />
        <meshStandardMaterial color={STEEL_BLUE} roughness={0.08} metalness={0.8} />
      </mesh>

      {/* Primary Navy Signature Architectural Crown Band */}
      <mesh position={[0, 22.3, 0]}>
        <boxGeometry args={[5.6, 1.0, 5.6]} />
        <meshStandardMaterial color={NAVY} roughness={0.2} metalness={0.4} />
      </mesh>

      {/* Main Tower Body - Mid Tapered Tier */}
      <mesh position={[0, 28, 0]}>
        <boxGeometry args={[4.0, 10, 4.0]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.3} />
      </mesh>
      {/* Mid Steel Blue Glass Facet */}
      <mesh position={[0, 28, 0]}>
        <boxGeometry args={[4.15, 9.5, 3.6]} />
        <meshStandardMaterial color={STEEL_BLUE} roughness={0.08} metalness={0.8} />
      </mesh>
      <mesh position={[0, 28, 0]}>
        <boxGeometry args={[3.6, 9.5, 4.15]} />
        <meshStandardMaterial color={STEEL_BLUE} roughness={0.08} metalness={0.8} />
      </mesh>

      {/* Mid Accent Floor in Navy */}
      <mesh position={[0, 33.3, 0]}>
        <boxGeometry args={[4.3, 0.6, 4.3]} />
        <meshStandardMaterial color={NAVY} roughness={0.2} />
      </mesh>

      {/* Upper Setback Tier */}
      <mesh position={[0, 37, 0]}>
        <boxGeometry args={[2.8, 7, 2.8]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.3} />
      </mesh>
      <mesh position={[0, 37, 0]}>
        <boxGeometry args={[2.95, 6.5, 2.5]} />
        <meshStandardMaterial color={STEEL_BLUE} roughness={0.08} metalness={0.8} />
      </mesh>

      {/* Navy Upper Crown Cornice */}
      <mesh position={[0, 40.8, 0]}>
        <boxGeometry args={[3.1, 0.6, 3.1]} />
        <meshStandardMaterial color={NAVY} roughness={0.2} />
      </mesh>

      {/* Crown Pavilion */}
      <mesh position={[0, 43, 0]}>
        <boxGeometry args={[1.8, 3.8, 1.8]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.5} />
      </mesh>
      <mesh position={[0, 43, 0]}>
        <boxGeometry args={[1.9, 3.2, 1.5]} />
        <meshStandardMaterial color={STEEL_BLUE} roughness={0.08} metalness={0.8} />
      </mesh>

      {/* Landmark Spire in Crisp Steel Tone */}
      <mesh position={[0, 50, 0]}>
        <cylinderGeometry args={[0.08, 0.5, 11, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Spire Middle Ring in Navy */}
      <mesh position={[0, 48, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.6, 16]} />
        <meshStandardMaterial color={NAVY} />
      </mesh>

      {/* Safety Orange Aviation Beacon at Peak */}
      <mesh ref={beaconMeshRef} position={[0, 55.6, 0]}>
        <sphereGeometry args={[0.42, 16, 16]} />
        <meshBasicMaterial color={SAFETY_ORANGE} />
      </mesh>
      <pointLight ref={beaconRef} position={[0, 55.6, 0]} color={SAFETY_ORANGE} distance={35} intensity={2.5} />
    </group>
  );
}

/* ─── 6. Cable-Stayed Bridge (Navy & Steel Blue) ─────────── */
function CableStayedBridge({ progress = 1 }: { progress?: number }) {
  const pylonZPositions = [-10, 10];
  const deckRef = useRef<THREE.InstancedMesh>(null!);
  const deckCount = 36;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (!deckRef.current) return;
    const activeUnits = Math.floor(deckCount * Math.max(0.2, progress));
    for (let i = 0; i < deckCount; i++) {
      if (i < activeUnits) {
        const z = -24 + (i / deckCount) * 48;
        dummy.position.set(0, 0, z);
        dummy.scale.set(4.6, 0.4, 48 / deckCount);
        dummy.updateMatrix();
        deckRef.current.setMatrixAt(i, dummy.matrix);
      } else {
        dummy.position.set(0, -100, 0);
        dummy.scale.set(0.01, 0.01, 0.01);
        dummy.updateMatrix();
        deckRef.current.setMatrixAt(i, dummy.matrix);
      }
    }
    deckRef.current.instanceMatrix.needsUpdate = true;
  }, [progress, deckCount, dummy]);

  // Procedural stay cables in Steel Blue
  const cableObjs = useMemo(() => {
    const list: THREE.Line[] = [];
    const mat = new THREE.LineBasicMaterial({
      color: STEEL_BLUE,
      transparent: true,
      opacity: 0.7,
    });
    const anchorY = 15;

    pylonZPositions.forEach((pz) => {
      [-1.8, 1.8].forEach((px) => {
        for (let i = 1; i <= 6; i++) {
          const zOffset = i * 2.8;
          // Cable forward
          const gF = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(px, anchorY - i * 0.4, pz),
            new THREE.Vector3(px > 0 ? 2.1 : -2.1, 0.2, pz + zOffset),
          ]);
          list.push(new THREE.Line(gF, mat));

          // Cable backward
          const gB = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(px, anchorY - i * 0.4, pz),
            new THREE.Vector3(px > 0 ? 2.1 : -2.1, 0.2, pz - zOffset),
          ]);
          list.push(new THREE.Line(gB, mat));
        }
      });
    });
    return list;
  }, []);

  return (
    <group position={[-9, 0, 0]}>
      {/* Pylons */}
      <group>
        {pylonZPositions.map((pz, idx) => (
          <group key={idx} position={[0, 0, pz]}>
            {/* Foundation Piers in Water */}
            <mesh position={[-2.4, -1.8, 0]}>
              <cylinderGeometry args={[0.8, 1.1, 3.5, 12]} />
              <meshStandardMaterial color={NAVY} roughness={0.5} />
            </mesh>
            <mesh position={[2.4, -1.8, 0]}>
              <cylinderGeometry args={[0.8, 1.1, 3.5, 12]} />
              <meshStandardMaterial color={NAVY} roughness={0.5} />
            </mesh>

            {/* Left Pylon Leg in White */}
            <mesh position={[-1.8, 8, 0]} rotation={[0, 0, -0.06]}>
              <boxGeometry args={[1.1, 18, 1.4]} />
              <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.25} />
            </mesh>
            {/* Right Pylon Leg in White */}
            <mesh position={[1.8, 8, 0]} rotation={[0, 0, 0.06]}>
              <boxGeometry args={[1.1, 18, 1.4]} />
              <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.25} />
            </mesh>

            {/* Cross Strut */}
            <mesh position={[0, 7.5, 0]}>
              <boxGeometry args={[3.2, 0.8, 1.2]} />
              <meshStandardMaterial color={BORDER_TONE} roughness={0.3} metalness={0.3} />
            </mesh>

            {/* Navy Signature Brand Band */}
            <mesh position={[0, 16.2, 0]}>
              <boxGeometry args={[2.8, 0.6, 1.6]} />
              <meshStandardMaterial color={NAVY} roughness={0.2} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Road Deck in Light Stone */}
      <instancedMesh ref={deckRef} args={[undefined, undefined, deckCount]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={BG_ALT} roughness={0.3} metalness={0.2} />
      </instancedMesh>

      {/* Guardrails in Steel Blue */}
      {[-2.25, 2.25].map((x) => (
        <mesh key={x} position={[x, 0.5, 0]}>
          <boxGeometry args={[0.1, 0.7, 48]} />
          <meshStandardMaterial color={STEEL_BLUE} roughness={0.3} />
        </mesh>
      ))}

      {/* Stay Cables */}
      {cableObjs.map((obj, i) => (
        <primitive key={i} object={obj} />
      ))}
    </group>
  );
}

/* ─── 7. Vehicle Traffic (Navy, Steel Blue, Safety Orange) ─ */
function VehicleTraffic() {
  const count = 22;
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const vehicles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      z: (Math.random() - 0.5) * 46,
      speed: (i < count / 2 ? 1 : -1) * (0.05 + Math.random() * 0.04),
      lane: (i < count / 2 ? 0.9 : -0.9) - 9,
      color: i % 3 === 0 ? SAFETY_ORANGE : i % 3 === 1 ? NAVY : STEEL_BLUE,
    })),
    [count]
  );

  useEffect(() => {
    if (!mesh.current) return;
    vehicles.forEach((v, i) => {
      mesh.current.setColorAt!(i, new THREE.Color(v.color));
    });
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
  }, [vehicles]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    vehicles.forEach((v, i) => {
      v.z += v.speed * delta * 60 * 0.06;
      if (v.z > 24) v.z = -24;
      if (v.z < -24) v.z = 24;
      dummy.position.set(v.lane, 0.35, v.z);
      dummy.scale.set(0.7, 0.35, 1.4);
      dummy.rotation.y = v.speed > 0 ? 0 : Math.PI;
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0.3} metalness={0.3} />
    </instancedMesh>
  );
}

/* ─── 8. Camera Controller ──────────────────────────────── */
function CameraRig({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 2, y: 14, z: 22 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    const sp = scrollProgress;
    let tx: number, ty: number, tz: number;

    if (sp < 0.22) {
      const t = sp / 0.22;
      tx = 2 + t * 4;
      ty = 13 - t * 3;
      tz = 22 - t * 4;
    } else if (sp < 0.5) {
      const t = (sp - 0.22) / 0.28;
      tx = -10 + t * 24;
      ty = 6 + Math.sin(t * Math.PI) * 4;
      tz = 12 + t * 6;
    } else if (sp < 0.75) {
      const t = (sp - 0.5) / 0.25;
      const angle = t * Math.PI * 0.5;
      tx = 11 + Math.sin(angle) * 16;
      ty = 10 + t * 3;
      tz = -16 + Math.cos(angle) * 16;
    } else {
      const t = (sp - 0.75) / 0.25;
      tx = 2;
      ty = 12 + t * 4;
      tz = 24 + t * 6;
    }

    tx += mouse.current.x * 2.0;
    ty += -mouse.current.y * 1.2;

    target.current.x += (tx - target.current.x) * 0.04;
    target.current.y += (ty - target.current.y) * 0.04;
    target.current.z += (tz - target.current.z) * 0.04;

    camera.position.set(target.current.x, target.current.y, target.current.z);
    camera.lookAt(4, 10, -10);
  });

  return null;
}

/* ─── Scene Contents ────────────────────────────────────── */
function SceneContents({
  scrollProgress,
  bridgeProgress,
  mobile,
}: {
  scrollProgress: number;
  bridgeProgress: number;
  mobile: boolean;
}) {
  return (
    <>
      <ambientLight intensity={1.5} color="#FFFFFF" />
      <directionalLight
        position={[35, 45, 25]}
        intensity={2.2}
        color="#FFFBEB"
        castShadow={false}
      />
      <directionalLight position={[12, 30, 22]} intensity={1.6} color="#FFFFFF" />
      <directionalLight position={[-20, 25, -10]} intensity={0.8} color="#D4E3ED" />
      <hemisphereLight args={["#73A5C5", BG_WARM, 0.9]} />

      <SkyPlane />
      <WaterPlane />
      <CityBuildings mobile={mobile} />
      <LandmarkTower mobile={mobile} />
      <TowerCranes />
      <CableStayedBridge progress={bridgeProgress || 1} />
      <VehicleTraffic />
      <CameraRig scrollProgress={scrollProgress} />
    </>
  );
}

/* ─── Exported WorldScene3D ─────────────────────────────── */
export default function WorldScene3D() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bridgeProgress, setBridgeProgress] = useState(1);
  const mobile = useMemo(() => (typeof window !== "undefined" ? isMobile() : false), []);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      if (max > 0) setScrollProgress(window.scrollY / max);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <WorldSceneContext.Provider value={{ scrollProgress, bridgeProgress, setBridgeProgress }}>
      <div
        id="world-3d-canvas-container"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Canvas
          camera={{ position: [2, 14, 22], fov: 46, near: 0.1, far: 250 }}
          dpr={Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.75)}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <SceneContents
            scrollProgress={scrollProgress}
            bridgeProgress={bridgeProgress}
            mobile={mobile}
          />
        </Canvas>
      </div>
    </WorldSceneContext.Provider>
  );
}
