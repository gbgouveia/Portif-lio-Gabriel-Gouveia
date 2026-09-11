import React, { useEffect, useRef } from 'react';
import { useI18n } from '../i18n';
import { gsap } from '../animations/gsapSetup';
import './PrinciplesSection.css';

export const PrinciplesSection = () => {
  const { t } = useI18n();
  const sectionRef = useRef(null);

  const label = t?.manifesto?.label || '03 // MANIFESTO';
  const title = t?.manifesto?.title || 'PRINCÍPIOS DE CONSTRUÇÃO';
  const lines = t?.manifesto?.lines || [
    'Software deve responder com clareza visual e previsibilidade técnica.',
    'A simplicidade de interface é o resultado de decisões difíceis no código.',
    'A estética não mascara falhas de arquitetura; ela reforça a utilidade.',
    'Construir com intenção significa entender o impacto de cada decisão.'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const lineElements = gsap.utils.toArray('.principle-statement');
      lineElements.forEach((line) => {
        gsap.fromTo(
          line,
          { opacity: 0.2, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              end: 'top 45%',
              scrub: 0.5
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [t]);

  return (
    <section ref={sectionRef} className="principles-section section-padding">
      <div className="container">
        <div className="section-label">{label}</div>

        <div className="principles-header">
          <h2 className="principles-title">{title}</h2>
        </div>

        <div className="principles-list">
          {lines.map((line, idx) => (
            <div key={idx} className="principle-item">
              <span className="principle-num">0{idx + 1}</span>
              <h3 className="principle-statement">{line}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
