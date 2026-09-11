import React, { useState } from 'react';
import './PhotoInteractionSection.css';

export const PhotoInteractionSection = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseCoord, setMouseCoord] = useState({ x: 50, y: 50 });

  const transformationSteps = [
    { name: 'CAMERA', label: '01. OPTICAL CAPTURE', desc: 'Light passing through 35mm glass lens onto sensor.' },
    { name: 'IMAGE', label: '02. COMPOSITION', desc: 'Raw color matrix, luminance values, and dynamic contrast.' },
    { name: 'PIXELS', label: '03. RASTER DISCRETIZATION', desc: '1920x1080 spatial grid of RGBA floating point tuples.' },
    { name: 'DATA', label: '04. STRUCTURAL ARRAYS', desc: 'Binary buffers, compression shaders, and memory allocation.' },
    { name: 'CODE', label: '05. PROGRAMMING MEDIUM', desc: 'Logic functions transforming input parameters into visual outputs.' },
    { name: 'EXPERIENCE', label: '06. INTERACTION', desc: 'Human interface layer responding fluidly to touch and motion.' }
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setMouseCoord({ x, y });
  };

  return (
    <section className="photo-section section-padding">
      <div className="container">
        <div className="section-label">02.1 // THE OBSERVATIONAL MEDIUM</div>

        <div className="photo-wrapper">
          {/* Interactive Photograph Viewport */}
          <div
            className={`photo-viewport step-mode-${activeStepIndex}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-cursor="EXPLORE"
          >
            {/* SVG Generative Photographic Scene */}
            <div className="photo-canvas-layer">
              <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="photoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a1c23" />
                    <stop offset="50%" stopColor="#0d0e12" />
                    <stop offset="100%" stopColor="#1e2029" />
                  </linearGradient>
                  <radialGradient id="lensGlow" cx={`${mouseCoord.x}%`} cy={`${mouseCoord.y}%`} r="40%">
                    <stop offset="0%" stopColor="rgba(228, 196, 152, 0.25)" />
                    <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                  </radialGradient>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#photoGrad)" />
                <rect width="100%" height="100%" fill="url(#lensGlow)" />

                {/* Geometric Photographic Composition lines */}
                <circle cx="500" cy="300" r="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                <circle cx="500" cy="300" r="120" stroke="rgba(228,196,152,0.15)" strokeWidth="1" fill="none" />
                <line x1="0" y1="300" x2="1000" y2="300" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="500" y1="0" x2="500" y2="600" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                {/* Pixel Grid Overlay when step >= 2 */}
                {activeStepIndex >= 2 && (
                  <g opacity="0.3">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" stroke="#f4f4f5" strokeWidth="0.5" strokeDasharray="2,4" />
                    ))}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <line key={`h-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="#f4f4f5" strokeWidth="0.5" strokeDasharray="2,4" />
                    ))}
                  </g>
                )}

                {/* Data / Code Matrix Streams when step >= 3 */}
                {activeStepIndex >= 3 && (
                  <text x="60" y="80" fill="var(--accent-warm)" fontSize="12" fontFamily="Space Grotesk, monospace" opacity="0.7">
                    0x7F4A89 // RGBA[255, 196, 140, 1.0] // DISCRETIZATION_INDEX: {mouseCoord.x * 12}
                  </text>
                )}
              </svg>
            </div>

            {/* Dynamic Hover Camera EXIF Metadata Overlay */}
            <div className={`exif-overlay ${isHovered ? 'is-visible' : ''}`}>
              <div className="exif-tag"><span>ISO</span> <strong>100</strong></div>
              <div className="exif-tag"><span>SHUTTER</span> <strong>1/500s</strong></div>
              <div className="exif-tag"><span>APERTURE</span> <strong>f/1.8</strong></div>
              <div className="exif-tag"><span>FOCAL</span> <strong>50mm</strong></div>
              <div className="exif-tag"><span>COORD</span> <strong>X:{mouseCoord.x}% Y:{mouseCoord.y}%</strong></div>
            </div>

            {/* Crosshair Center Pointer */}
            {isHovered && (
              <div
                className="photo-crosshair"
                style={{ left: `${mouseCoord.x}%`, top: `${mouseCoord.y}%` }}
              >
                <div className="ch-h"></div>
                <div className="ch-v"></div>
              </div>
            )}
          </div>

          {/* Transformation Stepper Bar */}
          <div className="stepper-bar">
            {transformationSteps.map((step, idx) => (
              <button
                key={idx}
                className={`step-btn ${activeStepIndex === idx ? 'is-active' : ''}`}
                onClick={() => setActiveStepIndex(idx)}
                data-cursor="HOVER"
              >
                <span className="step-num">0{idx + 1}</span>
                <span className="step-name">{step.name}</span>
              </button>
            ))}
          </div>

          {/* Current Transformation Step Explanation */}
          <div className="step-info-card">
            <span className="step-info-label">{transformationSteps[activeStepIndex].label}</span>
            <p className="step-info-desc">{transformationSteps[activeStepIndex].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
