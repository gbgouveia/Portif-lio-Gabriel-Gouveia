import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n';
import { AudioController } from './AudioController';
import './Navbar.css';

export const Navbar = () => {
  const { lang, setLang, t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    closeMenu();
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-brand" onClick={closeMenu} data-cursor="HOVER">
            <span className="brand-name">GABRIEL GOUVEIA</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="navbar-desktop" aria-label="Main Navigation">
            {isHome ? (
              <>
                <button onClick={() => scrollToSection('hero')} className="nav-link" data-cursor="HOVER">{t.nav.home}</button>
                <button onClick={() => scrollToSection('about')} className="nav-link" data-cursor="HOVER">{t.nav.about}</button>
                <button onClick={() => scrollToSection('process')} className="nav-link" data-cursor="HOVER">{t.nav.process}</button>
                <button onClick={() => scrollToSection('skills')} className="nav-link" data-cursor="HOVER">{t.nav.skills}</button>
                <button onClick={() => scrollToSection('projects')} className="nav-link" data-cursor="HOVER">{t.nav.projects}</button>
                <button onClick={() => scrollToSection('experiments')} className="nav-link" data-cursor="HOVER">{t.nav.experiments}</button>
                <button onClick={() => scrollToSection('certificates')} className="nav-link" data-cursor="HOVER">{t.nav.certificates}</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link" data-cursor="HOVER">{t.nav.contact}</button>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link" data-cursor="HOVER">{t.nav.home}</Link>
                <Link to="/#projects" className="nav-link" data-cursor="HOVER">{t.nav.projects}</Link>
                <Link to="/#contact" className="nav-link" data-cursor="HOVER">{t.nav.contact}</Link>
              </>
            )}
          </nav>

          {/* Controls: Audio & Language Switcher */}
          <div className="navbar-controls">
            <AudioController />

            <div className="lang-switcher" aria-label="Language selector">
              <button
                className={`lang-btn ${lang === 'pt-BR' ? 'is-active' : ''}`}
                onClick={() => setLang('pt-BR')}
                data-cursor="HOVER"
              >
                PT
              </button>
              <span className="lang-sep">|</span>
              <button
                className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}
                onClick={() => setLang('en')}
                data-cursor="HOVER"
              >
                EN
              </button>
              <span className="lang-sep">|</span>
              <button
                className={`lang-btn ${lang === 'es' ? 'is-active' : ''}`}
                onClick={() => setLang('es')}
                data-cursor="HOVER"
              >
                ES
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              className="navbar-mobile-toggle"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <span>{menuOpen ? '✕' : 'MENU'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'is-active' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="mobile-menu-label">GABRIEL GOUVEIA</span>
          </div>

          <nav className="mobile-menu-links">
            <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">01 — {t.nav.home}</button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">02 — {t.nav.about}</button>
            <button onClick={() => scrollToSection('process')} className="mobile-nav-link">03 — {t.nav.process}</button>
            <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">04 — {t.nav.skills}</button>
            <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">05 — {t.nav.projects}</button>
            <button onClick={() => scrollToSection('experiments')} className="mobile-nav-link">06 — {t.nav.experiments}</button>
            <button onClick={() => scrollToSection('certificates')} className="mobile-nav-link">07 — {t.nav.certificates}</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">08 — {t.nav.contact}</button>
          </nav>
        </div>
      </div>
    </>
  );
};
