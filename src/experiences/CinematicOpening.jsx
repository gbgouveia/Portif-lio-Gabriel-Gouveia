import React, { useEffect, useRef } from 'react';
import { useI18n } from '../i18n';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { gsap } from '../animations/gsapSetup';
import './CinematicOpening.css';

export const CinematicOpening = () => {
  const { t } = useI18n();
  const openingRef = useRef(null);
  const quoteRef = useRef(null);
  const brandRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(quoteRef.current, { opacity: 0, y: 30, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4, delay: 0.3 })
        .to(quoteRef.current, { opacity: 0.4, duration: 0.8 }, '+=0.8')
        .fromTo(brandRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2 }, '-=0.4');
    }, openingRef);

    return () => ctx.revert();
  }, [t]);

  return (
    <section ref={openingRef} className="cinematic-opening-section">
      <div className="container opening-container">
        <div className="opening-quote-box">
          <p ref={quoteRef} className="opening-quote">
            "{t.opening.quote}"
          </p>
        </div>

        <div ref={brandRef} className="opening-brand-box">
          <h1 className="opening-brand-title">{t.opening.name}</h1>
          <p className="opening-brand-subtitle">{t.opening.subtitle}</p>
        </div>

        <div className="opening-portrait-center">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
};
