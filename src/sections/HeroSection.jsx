import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, ArrowDownRight } from 'lucide-react';
import CursorScrubCanvas from '../components/ui/CursorScrubCanvas';
import './HeroSection.css';

const NAV_ITEMS = [
  { label: 'INÍCIO', href: '#hero' },
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'SOBRE', href: '#sobre' },
  { label: 'CONTATO', href: '#contato' },
];

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/gbgouveia', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gabriel-gouveia-de-paula-599a01384', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:gb.gouveia.ps@gmail.com', label: 'Email' },
];

export const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="editorial-hero-root" aria-label="Hero Gabriel Gouveia">
      {/* CAMADA 3: Personagem 3D Fullscreen (CursorScrubCanvas) */}
      <CursorScrubCanvas
        frameCount={240}
        axis="horizontal"
        reverse={false}
        smoothing={0.35}
        objectFit="cover"
        backgroundColor="#201D1E"
        enableSubpixelBlending={true}
        className="hero-character-layer"
      />

      {/* CAMADA 2: Atmosfera Cênica (Vinheta & Grade Sutil) */}
      <div className="hero-ambient-vignette" />
      <div className="hero-ambient-grid" />

      {/* CAMADA 5: Navegação Superior Minimalista (Header) */}
      <header className="hero-top-bar hero-layer-ui">
        <div className="hero-brand-group">
          <span className="hero-brand-name">GABRIEL GOUVEIA</span>
          <span className="hero-brand-sep">•</span>
          <span className="hero-brand-role">DESENVOLVEDOR</span>
        </div>

        <nav className="hero-desktop-nav" aria-label="Navegação Principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="hero-nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="hero-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu de Navegação"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="hero-mobile-drawer"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  scrollToSection(e, item.href);
                  setMobileMenuOpen(false);
                }}
                className="hero-mobile-link"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CAMADA 4: Textos & Headline Editorial em Espaço Negativo */}
      <div className="hero-editorial-stage hero-layer-ui">
        {/* Descrição Profissional & CTA Discreto (Esquerda) */}
        <motion.div
          className="hero-desc-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="hero-narrative-desc">
            Desenvolvo experiências digitais que combinam estratégia, tecnologia e direção criativa — do conceito à execução.
          </p>

          <a
            href="#projetos"
            onClick={(e) => scrollToSection(e, '#projetos')}
            className="hero-discreet-cta"
          >
            <span>EXPLORAR PROJETOS</span>
            <ArrowDownRight size={14} className="cta-icon" />
          </a>
        </motion.div>

        {/* Headline Principal (Direita) */}
        <motion.div
          className="hero-headline-block"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <h1 className="hero-editorial-headline">
            <span>EU PENSO.</span>
            <span>DESENVOLVO.</span>
            <span className="highlight-line">CRIO.</span>
          </h1>
        </motion.div>
      </div>

      {/* CAMADA 6: Microinformações do Rodapé */}
      <footer className="hero-bottom-bar hero-layer-ui">
        <div className="hero-social-group">
          {SOCIAL_LINKS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="hero-social-link"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <div className="hero-location-info">
          <span>BRASÍLIA — DF, BRASIL</span>
        </div>
      </footer>
    </section>
  );
};

export default HeroSection;


