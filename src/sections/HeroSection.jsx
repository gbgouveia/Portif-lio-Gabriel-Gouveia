import React from 'react';
import { motion } from 'framer-motion';
import { CursorScrubCanvas } from '../components/ui/CursorScrubCanvas';
import './HeroSection.css';

export const HeroSection = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Discreet, elegant reveal animation for author signature & UI elements
  const revealVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="hero-fullscreen-section" aria-label="Hero Gabriel Gouveia">
      {/* 1º & 2º PROTAGONISTA: Fullscreen Canvas 2D WebP Sequence with Centered Character */}
      <CursorScrubCanvas
        frameCount={240}
        axis="horizontal"
        reverse={false}
        smoothing={0.35}
        objectFit="cover"
        backgroundColor="#201D1E"
        enableSubpixelBlending={true}
        className="hero-video-layer"
      />

      {/* Layer 2: Ambient Vignette & Grid (Leaves Character Center Unobstructed & Bright) */}
      <div className="hero-overlay-vignette" />
      <div className="hero-grid-overlay" />

      {/* Layer 3: Editorial Overlay with Corner Negative Space Signature Layout */}
      <motion.div
        className="hero-content-layer"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
      >
        {/* Top Minimal Header */}
        <motion.header className="hero-header-minimal" variants={revealVariants}>
          <div className="hero-brand">
            <span className="brand-name">GABRIEL GOUVEIA</span>
            <span className="brand-dot" />
          </div>

          <nav className="hero-nav" aria-label="Navegação Principal">
            <button onClick={() => scrollToSection('about')} className="nav-item">
              <span className="nav-num">01</span>
              <span>SOBRE</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-item">
              <span className="nav-num">02</span>
              <span>PROJETOS</span>
            </button>
            <button onClick={() => scrollToSection('photography')} className="nav-item">
              <span className="nav-num">03</span>
              <span>FOTOGRAFIA</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-item">
              <span className="nav-num">04</span>
              <span>CONTATO</span>
            </button>
          </nav>
        </motion.header>

        {/* 3º ASSINATURA EDITORIAL EM DUAS LINHAS: Positioned in Left Corner Negative Space */}
        <div className="hero-aside-layout">
          <motion.div className="hero-headline-aside" variants={revealVariants}>
            <h1 className="hero-editorial-signature">
              <span className="sig-line-1">Gabriel</span>
              <span className="sig-line-2">Gouveia</span>
            </h1>
          </motion.div>
        </div>

        {/* 4º MICROINFORMAÇÃO & INTERACT HINT: Bottom Bar */}
        <motion.footer className="hero-bottom-bar" variants={revealVariants}>
          <div className="hero-micro-info">
            <span className="meta-cyan-badge">PORTFÓLIO</span>
            <span className="meta-sep">•</span>
            <span className="meta-location">2026</span>
          </div>

          <div className="hero-scrub-hint">
            <div className="hint-arrows">
              <span>←</span>
              <span className="hint-line" />
              <span>→</span>
            </div>
            <span className="hint-label">MOVE TO EXPLORE</span>
          </div>

          <div className="hero-action-box">
            <button onClick={() => scrollToSection('footer-contact')} className="action-btn">
              <span>CONTATO</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </motion.footer>
      </motion.div>
    </section>
  );
};

export default HeroSection;
