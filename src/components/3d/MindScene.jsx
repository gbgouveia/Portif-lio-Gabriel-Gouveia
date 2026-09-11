import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const MindSceneContent = ({ activeStage = 0 }) => {
  const groupRef = useRef();
  const pointsRef = useRef();
  const meshRef = useRef();

  const particleCount = 200;

  // Generate target position sets for each stage
  const stagePositions = useMemo(() => {
    // Stage 0: OBSERVE - Dispersed random particles
    const pos0 = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos0[i * 3] = (Math.random() - 0.5) * 6;
      pos0[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos0[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    // Stage 1: UNDERSTAND - Clustered relationships
    const pos1 = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const clusterIndex = i % 3;
      const offset = (clusterIndex - 1) * 1.8;
      pos1[i * 3] = offset + (Math.random() - 0.5) * 1.2;
      pos1[i * 3 + 1] = (Math.random() - 0.5) * 1.2;
      pos1[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
    }

    // Stage 2: DESIGN - Planar grid structure
    const pos2 = new Float32Array(particleCount * 3);
    const side = Math.floor(Math.sqrt(particleCount));
    for (let i = 0; i < particleCount; i++) {
      const row = Math.floor(i / side);
      const col = i % side;
      pos2[i * 3] = (col / side - 0.5) * 3.5;
      pos2[i * 3 + 1] = (row / side - 0.5) * 3.5;
      pos2[i * 3 + 2] = 0;
    }

    // Stage 3 & 4: Bound into wireframe box & solid crystalline polyhedra
    const pos3 = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.3;
      pos3[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos3[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos3[i * 3 + 2] = r * Math.cos(phi);
    }

    return [pos0, pos1, pos2, pos3, pos3];
  }, [particleCount]);

  // Current interpolated position buffer
  const currentPositions = useMemo(() => new Float32Array(particleCount * 3), [particleCount]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x += delta * 0.1;
    }

    const targetPos = stagePositions[Math.min(activeStage, 4)];
    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < particleCount * 3; i++) {
        currentPositions[i] += (targetPos[i] - currentPositions[i]) * 0.08;
        attr.array[i] = currentPositions[i];
      }
      attr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#e4c498" />

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Dynamic Particles */}
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={currentPositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.045}
            color={activeStage >= 3 ? '#e4c498' : '#f4f4f5'}
            transparent
            opacity={0.85}
          />
        </points>

        {/* Refined Form Mesh for Stage 3 (BUILD) & 4 (REFINE) */}
        {activeStage >= 3 && (
          <mesh ref={meshRef} scale={1.2}>
            <octahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color="#18181c"
              roughness={0.2}
              metalness={0.9}
              wireframe={activeStage === 3}
              transparent
              opacity={activeStage === 4 ? 0.95 : 0.4}
            />
          </mesh>
        )}
      </Float>
    </group>
  );
};
