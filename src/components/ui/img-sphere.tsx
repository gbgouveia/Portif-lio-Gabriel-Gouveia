import React, { useEffect, useRef, useState, useCallback } from 'react';
import './img-sphere.css';

export interface PhotoItem {
  id: string;
  title: string;
  category: string;
  url?: string;
}

export interface ImgSphereProps {
  items?: PhotoItem[];
  radius?: number;
  onSelectPhoto?: (item: PhotoItem) => void;
  className?: string;
}

const defaultPhotos: PhotoItem[] = [
  { id: 'p1', title: 'RETRATOS EDITORIAIS', category: 'RETRATOS' },
  { id: 'p2', title: 'LUSCO-FUSCO & CASAIS', category: 'CASAIS' },
  { id: 'p3', title: 'MOMENTOS EM FAMÍLIA', category: 'FAMÍLIA' },
  { id: 'p4', title: 'EVENTOS & COBERTURA', category: 'EVENTOS' },
  { id: 'p5', title: '15 ANOS & CELEBRAÇÃO', category: '15 ANOS' },
  { id: 'p6', title: 'FORMATURAS & CONQUISTA', category: 'FORMATURAS' },
  { id: 'p7', title: 'AUDIOVISUAL & FILMMAKING', category: 'FILMMAKING' },
  { id: 'p8', title: 'ENSAIO INFANTIL', category: 'INFANTIL' }
];

export const ImgSphere: React.FC<ImgSphereProps> = ({
  items = defaultPhotos,
  radius = 220,
  onSelectPhoto,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);

  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0.1, y: 0.15 });
  const animIdRef = useRef<number | null>(null);

  // Inertia momentum loop
  useEffect(() => {
    const loop = () => {
      if (!isDraggingRef.current) {
        setRotX((prev) => prev + velRef.current.x * 0.5);
        setRotY((prev) => prev + velRef.current.y * 0.5);
        velRef.current.x *= 0.98;
        velRef.current.y *= 0.98;
      }
      animIdRef.current = requestAnimationFrame(loop);
    };

    animIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMouseRef.current.x;
    const dy = e.clientY - lastMouseRef.current.y;

    velRef.current = { x: -dy * 0.25, y: dx * 0.25 };
    setRotX((prev) => prev - dy * 0.25);
    setRotY((prev) => prev + dx * 0.25);

    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // Compute 3D position for N sphere items using Fibonacci distribution
  const count = items.length;

  return (
    <div
      ref={containerRef}
      className={`img-sphere-container ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div
        className="img-sphere-3d-stage"
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`
        }}
      >
        {items.map((photo, i) => {
          const phi = Math.acos(-1 + (2 * i + 1) / count);
          const theta = Math.sqrt(count * Math.PI) * phi;

          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);

          return (
            <div
              key={photo.id}
              className="sphere-photo-card"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${theta}rad) rotateX(${phi}rad)`
              }}
              onClick={() => onSelectPhoto && onSelectPhoto(photo)}
            >
              <div className="sphere-card-inner">
                {photo.url && (
                  <img src={photo.url} alt={photo.title} className="sphere-card-img" />
                )}
                <div className="sphere-card-overlay">
                  <span className="card-cat-badge">{photo.category}</span>
                  <h4 className="card-photo-title">{photo.title}</h4>
                  <span className="card-click-hint">VER ENSAIO →</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="sphere-drag-hint">
        <span>ARRASTE PARA GIRAR A ESFERA FOTOGRÁFICA</span>
      </div>
    </div>
  );
};

export default ImgSphere;
