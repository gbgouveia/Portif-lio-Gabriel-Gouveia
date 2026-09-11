import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { WebGLFallback } from './WebGLFallback';

export const SceneCanvas = ({ children, fallbackTitle }) => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLowPower, setIsLowPower] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }

    // Check device hardware concurrency or mobile for adaptive performance
    if (window.innerWidth < 768 || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)) {
      setIsLowPower(true);
    }

    const handleMouseMove = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!hasWebGL) {
    return <WebGLFallback title={fallbackTitle} />;
  }

  return (
    <Suspense fallback={<WebGLFallback title={fallbackTitle} />}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={isLowPower ? [1, 1.5] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%' }}
      >
        {React.cloneElement(children, { mousePos })}
      </Canvas>
    </Suspense>
  );
};
