"use client";

import React, { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Check if device is mobile or low powered
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768 || navigator.maxTouchPoints > 1);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// Procedural City Skyline using InstancedMesh for extreme performance
function CitySkyline() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 120;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colors = useMemo(() => {
    const palette = [
      new THREE.Color("#0d0f28"), // Dark base
      new THREE.Color("#14143f"), // Deep Indigo
      new THREE.Color("#5B1FA0"), // Infrazen Violet
      new THREE.Color("#8B5CF6"), // Electric Violet
      new THREE.Color("#E8348F"), // Sunset Magenta
      new THREE.Color("#3DD6E8"), // Cyan Glow
    ];
    return palette;
  }, []);

  useEffect(() => {
    if (!meshRef.current) return;

    // Seeded-like procedural arrangement
    let idx = 0;
    const spreadX = 75;
    const spreadZ = 50;

    for (let i = 0; i < count; i++) {
      // Leave center clearing for highway & hero tower
      let x = (Math.random() - 0.5) * spreadX;
      if (Math.abs(x) < 4) {
        x += Math.sign(x || 1) * 6;
      }
      const z = -5 - Math.random() * spreadZ;
      const height = 4 + Math.random() * 26 + (Math.abs(x) < 18 ? 8 : 0);
      const width = 1.6 + Math.random() * 2.8;
      const depth = 1.6 + Math.random() * 2.8;

      dummy.position.set(x, height / 2 - 2, z);
      dummy.scale.set(width, height, depth);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(idx, dummy.matrix);

      // Random color favoring darker tones with emissive accent highlights
      const colorRoll = Math.random();
      let col: THREE.Color;
      if (colorRoll > 0.88) {
        col = colors[5]; // Cyan
      } else if (colorRoll > 0.76) {
        col = colors[4]; // Magenta
      } else if (colorRoll > 0.6) {
        col = colors[3]; // Violet
      } else if (colorRoll > 0.4) {
        col = colors[2];
      } else {
        col = colors[1];
      }

      meshRef.current.setColorAt(idx, col);
      idx++;
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [dummy, colors]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        roughness={0.25}
        metalness={0.7}
        color="#101235"
        emissive="#0a0b1e"
        emissiveIntensity={0.2}
      />
    </instancedMesh>
  );
}

// Hero Central Tower with Glowing Spire & Beacon
function HeroTower() {
  const beaconRef = useRef<THREE.PointLight>(null!);

  useFrame(({ clock }) => {
    if (beaconRef.current) {
      const t = clock.getElapsedTime();
      beaconRef.current.intensity = 1.5 + Math.sin(t * 3.5) * 0.8;
    }
  });

  return (
    <group position={[0, 0, -22]}>
      {/* Base tiered building */}
      <mesh position={[0, 10, 0]}>
        <boxGeometry args={[5, 20, 5]} />
        <meshStandardMaterial color="#14143F" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Mid section */}
      <mesh position={[0, 22.5, 0]}>
        <boxGeometry args={[3.6, 6, 3.6]} />
        <meshStandardMaterial color="#1a1c4b" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Spire base */}
      <mesh position={[0, 26.5, 0]}>
        <cylinderGeometry args={[0.3, 1.4, 3, 8]} />
        <meshStandardMaterial color="#5B1FA0" emissive="#8B5CF6" emissiveIntensity={0.6} />
      </mesh>

      {/* Tapering glowing needle */}
      <mesh position={[0, 31, 0]}>
        <cylinderGeometry args={[0.04, 0.25, 7, 8]} />
        <meshStandardMaterial color="#3DD6E8" emissive="#3DD6E8" emissiveIntensity={2.5} />
      </mesh>

      {/* Top Beacon Light */}
      <pointLight ref={beaconRef} position={[0, 34.6, 0]} color="#3DD6E8" distance={40} intensity={2} />
      <mesh position={[0, 34.6, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#3DD6E8" />
      </mesh>
    </group>
  );
}

// Silhouetted Construction Tower Cranes slowly rotating
function TowerCranes() {
  const jib1Ref = useRef<THREE.Group>(null!);
  const jib2Ref = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (jib1Ref.current) jib1Ref.current.rotation.y = Math.sin(t * 0.25) * 0.6 + 0.3;
    if (jib2Ref.current) jib2Ref.current.rotation.y = -Math.sin(t * 0.2) * 0.8 - 0.5;
  });

  return (
    <group>
      {/* Crane 1 (Left Building) */}
      <group position={[-9, 21, -25]}>
        {/* Mast */}
        <mesh position={[0, 4, 0]}>
          <boxGeometry args={[0.3, 8, 0.3]} />
          <meshBasicMaterial color="#2E3E50" />
        </mesh>
        {/* Rotating Jib assembly */}
        <group ref={jib1Ref} position={[0, 8, 0]}>
          {/* Main boom */}
          <mesh position={[4, 0, 0]}>
            <boxGeometry args={[8, 0.2, 0.2]} />
            <meshBasicMaterial color="#FF9A5C" />
          </mesh>
          {/* Counter jib & weight */}
          <mesh position={[-2, 0, 0]}>
            <boxGeometry args={[4, 0.2, 0.2]} />
            <meshBasicMaterial color="#2E3E50" />
          </mesh>
          <mesh position={[-3.6, -0.4, 0]}>
            <boxGeometry args={[1, 0.8, 0.6]} />
            <meshBasicMaterial color="#14143F" />
          </mesh>
          {/* Beacon atop crane */}
          <mesh position={[0, 0.6, 0]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="#E8348F" />
          </mesh>
        </group>
      </group>

      {/* Crane 2 (Right Building) */}
      <group position={[12, 18, -30]}>
        {/* Mast */}
        <mesh position={[0, 4, 0]}>
          <boxGeometry args={[0.3, 8, 0.3]} />
          <meshBasicMaterial color="#2E3E50" />
        </mesh>
        {/* Rotating Jib assembly */}
        <group ref={jib2Ref} position={[0, 8, 0]}>
          <mesh position={[-4, 0, 0]}>
            <boxGeometry args={[8, 0.2, 0.2]} />
            <meshBasicMaterial color="#3DD6E8" />
          </mesh>
          <mesh position={[2, 0, 0]}>
            <boxGeometry args={[4, 0.2, 0.2]} />
            <meshBasicMaterial color="#2E3E50" />
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="#FF9A5C" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

// Curved Elevated Highways with Streaming Light Trails
function HighwayLightTrails() {
  const count = 90;
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate 2 curving highway spline paths
  const curveA = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-25, 0.5, 5),
      new THREE.Vector3(-12, 1.8, -10),
      new THREE.Vector3(-3, 3.2, -22),
      new THREE.Vector3(5, 4.5, -35),
      new THREE.Vector3(18, 5.5, -50),
    ]);
  }, []);

  const curveB = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(25, 0.8, 6),
      new THREE.Vector3(14, 2.2, -8),
      new THREE.Vector3(2, 3.6, -20),
      new THREE.Vector3(-8, 4.8, -34),
      new THREE.Vector3(-22, 6.0, -52),
    ]);
  }, []);

  // Road geometry meshes
  const roadTubeA = useMemo(() => new THREE.TubeGeometry(curveA, 64, 0.8, 8, false), [curveA]);
  const roadTubeB = useMemo(() => new THREE.TubeGeometry(curveB, 64, 0.8, 8, false), [curveB]);

  // Trail particles data
  const particles = useMemo(() => {
    const list = [];
    for (let i = 0; i < count; i++) {
      const isCurveA = i < count / 2;
      list.push({
        curve: isCurveA ? curveA : curveB,
        progress: Math.random(),
        speed: 0.04 + Math.random() * 0.05,
        offset: (Math.random() - 0.5) * 0.6,
        color: isCurveA
          ? (Math.random() > 0.3 ? "#E8348F" : "#FF9A5C") // Magenta / Amber taillights
          : (Math.random() > 0.3 ? "#3DD6E8" : "#FAF8F4"), // Cyan / White headlights
      });
    }
    return list;
  }, [count, curveA, curveB]);

  useEffect(() => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      meshRef.current.setColorAt(i, new THREE.Color(p.color));
    });
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [particles]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      p.progress += p.speed * delta;
      if (p.progress > 1) p.progress = 0;

      const pos = p.curve.getPointAt(p.progress);
      const tangent = p.curve.getTangentAt(p.progress);

      dummy.position.copy(pos);
      // Lift slightly above road
      dummy.position.y += 0.3;
      dummy.position.x += p.offset;

      dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent);
      dummy.scale.set(0.18, 0.12, 1.4);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      {/* Physical road beds */}
      <mesh geometry={roadTubeA}>
        <meshStandardMaterial color="#0e1026" roughness={0.7} metalness={0.2} />
      </mesh>
      <mesh geometry={roadTubeB}>
        <meshStandardMaterial color="#0e1026" roughness={0.7} metalness={0.2} />
      </mesh>

      {/* Instanced traffic trails */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

// Celestial Moon/Sun Disc Glow
function CelestialDisc() {
  return (
    <group position={[18, 22, -65]}>
      {/* Outer soft glow ring */}
      <mesh>
        <circleGeometry args={[12, 32]} />
        <meshBasicMaterial
          color="#FF9A5C"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      {/* Mid glow */}
      <mesh position={[0, 0, 0.1]}>
        <circleGeometry args={[7, 32]} />
        <meshBasicMaterial
          color="#E8348F"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      {/* Core luminous disc */}
      <mesh position={[0, 0, 0.2]}>
        <circleGeometry args={[3.2, 32]} />
        <meshBasicMaterial
          color="#FAF8F4"
          transparent
          opacity={0.85}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

// Floating atmospheric particles
function FloatingParticles({ count = 80 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = Math.random() * 25;
      pos[i * 3 + 2] = -5 - Math.random() * 40;
    }
    return [pos];
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime() * 0.1;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(t + i) * 0.01;
      if (pos[i * 3 + 1] > 28) pos[i * 3 + 1] = 0;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        color="#3DD6E8"
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  );
}

// Camera Rig syncing with mouse parallax and scroll position
function CameraController() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    // Target position derived from scroll fly-through and mouse parallax
    const targetX = mouse.current.x * 2.2;
    const targetY = 6 - mouse.current.y * 1.2 - Math.min(scrollY.current * 0.006, 4);
    const targetZ = 12 - Math.min(scrollY.current * 0.015, 10);

    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.position.z += (targetZ - camera.position.z) * 0.04;

    // Look slightly downward into the cityscape
    camera.lookAt(0, 7 - Math.min(scrollY.current * 0.004, 3), -22);
  });

  return null;
}

export default function HeroScene3D() {
  const isMobile = useIsMobile();
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  // High-performance static gradient fallback if WebGL fails
  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1E] via-[#14143F] to-[#0A0B1E] overflow-hidden">
        <div className="gradient-glow-hero -top-20 -left-20 w-[500px] h-[500px]" />
        <div className="gradient-glow-hero top-1/3 -right-20 w-[600px] h-[600px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 6, 12], fov: 50, near: 0.1, far: 200 }}
        dpr={isMobile ? 1 : Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.75)}
        gl={{
          antialias: !isMobile,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <color attach="background" args={["#0A0B1E"]} />
        <fog attach="fog" args={["#0A0B1E", 15, 75]} />

        {/* Cinematic ambient & directional lighting */}
        <ambientLight intensity={0.4} color="#14143F" />
        <directionalLight
          position={[20, 30, 10]}
          intensity={1.2}
          color="#3DD6E8"
          castShadow={false}
        />
        <pointLight position={[0, 15, -15]} color="#5B1FA0" intensity={2.5} distance={60} />
        <pointLight position={[0, 4, 0]} color="#E8348F" intensity={1.8} distance={35} />

        <Suspense fallback={null}>
          <CameraController />
          <CelestialDisc />
          <HeroTower />
          <TowerCranes />
          <HighwayLightTrails />
          <CitySkyline />
          <FloatingParticles count={isMobile ? 35 : 85} />
        </Suspense>
      </Canvas>
    </div>
  );
}
