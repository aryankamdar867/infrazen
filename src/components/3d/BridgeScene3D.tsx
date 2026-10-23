"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BridgeProps {
  progress: number; // 0.0 to 1.0 based on scroll
}

function BridgeModel({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  const deckRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Number of road deck segments
  const totalSegments = 30;

  // Cables coordinates
  const cables = useMemo(() => {
    const list: Array<{ start: [number, number, number]; end: [number, number, number]; threshold: number }> = [];
    const pylonHeight = 12;

    // Cables from Left Pylon (x = -6)
    for (let i = 1; i <= 6; i++) {
      const zOffset = i * 2.8;
      const heightStep = pylonHeight - (7 - i) * 1.2;
      list.push({
        start: [-6, heightStep, 0],
        end: [-6 + 1.2, 0.4, zOffset],
        threshold: 0.2 + (i / 12) * 0.4,
      });
      list.push({
        start: [-6, heightStep, 0],
        end: [-6 - 1.2, 0.4, zOffset],
        threshold: 0.2 + (i / 12) * 0.4,
      });
      list.push({
        start: [-6, heightStep, 0],
        end: [-6 + 1.2, 0.4, -zOffset],
        threshold: 0.2 + (i / 12) * 0.4,
      });
      list.push({
        start: [-6, heightStep, 0],
        end: [-6 - 1.2, 0.4, -zOffset],
        threshold: 0.2 + (i / 12) * 0.4,
      });
    }

    // Cables from Right Pylon (x = 6)
    for (let i = 1; i <= 6; i++) {
      const zOffset = i * 2.8;
      const heightStep = pylonHeight - (7 - i) * 1.2;
      list.push({
        start: [6, heightStep, 0],
        end: [6 + 1.2, 0.4, zOffset],
        threshold: 0.35 + (i / 12) * 0.4,
      });
      list.push({
        start: [6, heightStep, 0],
        end: [6 - 1.2, 0.4, zOffset],
        threshold: 0.35 + (i / 12) * 0.4,
      });
      list.push({
        start: [6, heightStep, 0],
        end: [6 + 1.2, 0.4, -zOffset],
        threshold: 0.35 + (i / 12) * 0.4,
      });
      list.push({
        start: [6, heightStep, 0],
        end: [6 - 1.2, 0.4, -zOffset],
        threshold: 0.35 + (i / 12) * 0.4,
      });
    }

    return list;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    // Gentle floating cinematic camera drift
    const t = clock.getElapsedTime() * 0.3;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(-0.4, 0.35, progress) + Math.sin(t) * 0.04;
    groupRef.current.position.y = THREE.MathUtils.lerp(-2.5, -1.8, progress);

    if (deckRef.current) {
      // Assemble road slabs based on scroll progress
      for (let i = 0; i < totalSegments; i++) {
        const segFraction = i / totalSegments;
        const isBuilt = progress >= segFraction * 0.85;
        const z = (i - totalSegments / 2) * 1.5;

        const currentScaleY = isBuilt ? 1 : 0.001;
        const currentY = isBuilt ? 0 : -8 + (progress / segFraction) * 8;

        dummy.position.set(0, currentY, z);
        dummy.scale.set(4.2, currentScaleY, 1.4);
        dummy.updateMatrix();

        deckRef.current.setMatrixAt(i, dummy.matrix);
      }
      deckRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  // Calculate pylon assembly height based on progress (steps 1 & 2)
  const pylonScaleY = Math.min(1, Math.max(0.1, progress * 1.8));

  return (
    <group ref={groupRef}>
      {/* River / Water Bed below */}
      <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[70, 70]} />
        <meshStandardMaterial color="#0A0B1E" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Concrete Piers / Pylons (Left & Right) */}
      <group scale={[1, pylonScaleY, 1]}>
        {/* Left Pylon Tower */}
        <group position={[-6, 6, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.6, 14, 2.2]} />
            <meshStandardMaterial color="#1E234A" roughness={0.4} metalness={0.6} />
          </mesh>
          {/* Pylon Top Crossbeam */}
          <mesh position={[0, 6, 0]}>
            <boxGeometry args={[3.2, 1.2, 2.4]} />
            <meshStandardMaterial color="#5B1FA0" emissive="#5B1FA0" emissiveIntensity={0.4} />
          </mesh>
        </group>

        {/* Right Pylon Tower */}
        <group position={[6, 6, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.6, 14, 2.2]} />
            <meshStandardMaterial color="#1E234A" roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[0, 6, 0]}>
            <boxGeometry args={[3.2, 1.2, 2.4]} />
            <meshStandardMaterial color="#5B1FA0" emissive="#5B1FA0" emissiveIntensity={0.4} />
          </mesh>
        </group>
      </group>

      {/* Pier Foundations Submerged */}
      <mesh position={[-6, -2.5, 0]}>
        <cylinderGeometry args={[2, 2.4, 4, 16]} />
        <meshStandardMaterial color="#14143F" roughness={0.8} />
      </mesh>
      <mesh position={[6, -2.5, 0]}>
        <cylinderGeometry args={[2, 2.4, 4, 16]} />
        <meshStandardMaterial color="#14143F" roughness={0.8} />
      </mesh>

      {/* Roadway Deck Segments (Instanced) */}
      <instancedMesh ref={deckRef} args={[undefined, undefined, totalSegments]}>
        <boxGeometry args={[1, 0.4, 1]} />
        <meshStandardMaterial color="#141638" roughness={0.3} metalness={0.7} />
      </instancedMesh>

      {/* Center glowing lane divider */}
      <mesh position={[0, 0.22, 0]}>
        <boxGeometry args={[0.2, 0.05, 42 * Math.min(1, progress * 1.2)]} />
        <meshBasicMaterial color="#3DD6E8" />
      </mesh>

      {/* Outer Guardrails with Sunset Magenta Glow */}
      <mesh position={[-2.1, 0.6, 0]}>
        <boxGeometry args={[0.1, 0.6, 42 * Math.min(1, progress * 1.2)]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[2.1, 0.6, 0]}>
        <boxGeometry args={[0.1, 0.6, 42 * Math.min(1, progress * 1.2)]} />
        <meshStandardMaterial color="#E8348F" emissive="#E8348F" emissiveIntensity={0.5} />
      </mesh>

      {/* Stay Suspension Cables that draw in with progress */}
      {cables.map((cable, idx) => {
        if (progress < cable.threshold) return null;
        const cableProgress = Math.min(1, (progress - cable.threshold) * 4);

        const currentEnd = [
          cable.start[0] + (cable.end[0] - cable.start[0]) * cableProgress,
          cable.start[1] + (cable.end[1] - cable.start[1]) * cableProgress,
          cable.start[2] + (cable.end[2] - cable.start[2]) * cableProgress,
        ] as [number, number, number];

        const points = [new THREE.Vector3(...cable.start), new THREE.Vector3(...currentEnd)];
        const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
        const lineMat = new THREE.LineBasicMaterial({ color: "#3DD6E8", transparent: true, opacity: 0.7 });
        const lineObject = new THREE.Line(lineGeom, lineMat);

        return <primitive key={idx} object={lineObject} />;
      })}
    </group>
  );
}

export default function BridgeScene3D({ progress = 0.5 }: BridgeProps) {
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

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#14143F] to-[#0A0B1E] rounded-3xl p-6 text-center border border-white/10">
        <div>
          <span className="text-cyan-glow font-heading text-lg font-bold">Interactive Civil Model</span>
          <p className="text-xs text-slate-400 mt-2">Assembly stage {Math.min(3, Math.floor(progress * 3) + 1)} of 3</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[460px] relative select-none rounded-2xl overflow-hidden">
      <Canvas
        camera={{ position: [14, 8, 16], fov: 42, near: 0.1, far: 100 }}
        dpr={Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.75)}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} color="#14143F" />
        <directionalLight position={[10, 20, 10]} intensity={1.4} color="#FAF8F4" />
        <pointLight position={[0, 12, 0]} color="#3DD6E8" intensity={2} distance={30} />
        <pointLight position={[-6, 4, 5]} color="#E8348F" intensity={1.5} distance={25} />
        <pointLight position={[6, 4, -5]} color="#FF9A5C" intensity={1.5} distance={25} />

        <BridgeModel progress={progress} />
      </Canvas>

      {/* Assembly HUD overlay */}
      <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-slate-300">
        <span className="text-cyan-glow mr-1.5 font-bold">●</span>
        <span>STRUCTURAL ASSEMBLY: {Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
}
