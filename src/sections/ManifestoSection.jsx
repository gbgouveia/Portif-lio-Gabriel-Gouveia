import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../animations/gsapSetup';
import './ManifestoSection.css';

export const ManifestoSection = () => {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const lines = [line1Ref.current, line2Ref.current, line3Ref.current];

      lines.forEach((line) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { opacity: 0.15, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: line,
              start: 'top 80%',
              end: 'top 35%',
              scrub: 0.5,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="manifesto-section section-padding">
      <div className="container">
        <div className="section-label">01 // MANIFESTO</div>

        <div className="manifesto-grid">
          <h2 ref={line1Ref} className="manifesto-line line-1">
            I DON'T CHASE TECHNOLOGY.
          </h2>
          <h2 ref={line2Ref} className="manifesto-line line-2">
            I USE IT.
          </h2>
          <h2 ref={line3Ref} className="manifesto-line line-3">
            TO MAKE IDEAS REAL.
          </h2>
        </div>
      </div>
    </section>
  );
};
