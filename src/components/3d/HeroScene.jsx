import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Wireframe } from '@react-three/drei';
import * as THREE from 'three';

export const HeroSceneContent = ({ mousePos }) => {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const particleGroupRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate object
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      // Mouse influence
      const targetX = (mousePos.current.x * Math.PI) / 6;
      const targetY = (mousePos.current.y * Math.PI) / 6;

      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
    }

    if (particleGroupRef.current) {
      particleGroupRef.current.rotation.y -= delta * 0.15;
    }
  });

  // Create procedural particle ring
  const particleCount = 120;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.4 + (Math.random() - 0.5) * 0.4;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, [particleCount]);

  return (
    <group>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#f4f4f5" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#e4c498" />

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Core Organic Sculptural Form */}
        <mesh ref={meshRef} scale={1.3}>
          <icosahedronGeometry args={[1.2, 4]} />
          <MeshWobbleMaterial
            factor={0.35}
            speed={1.2}
            color="#18181b"
            roughness={0.2}
            metalness={0.8}
            wireframe={false}
          />

          {/* Structural Wireframe Overlay (IDEA -> STRUCTURE) */}
          <mesh ref={wireframeRef} scale={1.01}>
            <icosahedronGeometry args={[1.2, 2]} />
            <meshBasicMaterial
              color="#e4c498"
              wireframe
              transparent
              opacity={0.25}
            />
          </mesh>
        </mesh>

        {/* Orbiting Particle Ring (STRUCTURE -> EXPERIENCE) */}
        <group ref={particleGroupRef}>
          <points>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={particleCount}
                array={positions}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial
              size={0.035}
              color="#f4f4f5"
              transparent
              opacity={0.7}
              sizeAttenuation
            />
          </points>
        </group>
      </Float>
    </group>
  );
};
