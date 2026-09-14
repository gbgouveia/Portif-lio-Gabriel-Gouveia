import React from 'react';
import { MagneticButton } from './MagneticButton';
import './CinematicFooter.css';

export const CinematicFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const marqueeText = "DESENVOLVIMENTO ✦ FOTOGRAFIA ✦ FILMMAKING ✦ EXPERIÊNCIAS DIGITAIS ✦ ";

  return (
    <footer id="contato" className="cinematic-footer-root">
      {/* Infinite Autoral Marquee Bar */}
      <div className="footer-marquee-container" aria-hidden="true">
        <div className="footer-marquee-track">
          <span>{marqueeText.repeat(4)}</span>
          <span>{marqueeText.repeat(4)}</span>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="footer-container">
        <div className="footer-hero-statement">
          <span className="statement-tag">CONTATO & REDES</span>
          <h2 className="statement-title">CONTATO</h2>
          <p className="statement-sub">
            Disponível para desenvolvimento de sistemas, engenharia de software e projetos visuais.
          </p>
        </div>

        {/* Magnetic Action Buttons Grid */}
        <div className="footer-magnetic-grid">
          <MagneticButton onClick={() => window.open('https://github.com/gbgouveia', '_blank')}>
            <span>GITHUB</span>
            <span className="btn-arrow">↗</span>
          </MagneticButton>

          <MagneticButton onClick={() => window.open('https://www.linkedin.com/in/gabriel-gouveia-de-paula-599a01384', '_blank')}>
            <span>LINKEDIN</span>
            <span className="btn-arrow">↗</span>
          </MagneticButton>

          <MagneticButton onClick={() => window.open('mailto:gb.gouveia.ps@gmail.com', '_self')}>
            <span>E-MAIL</span>
            <span className="btn-arrow">✉</span>
          </MagneticButton>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-credits">
            <span className="credit-name">GABRIEL GOUVEIA</span>
            <span className="credit-dot">•</span>
            <span className="credit-role">DESENVOLVEDOR</span>
            <span className="credit-dot">•</span>
            <span className="credit-year">2026</span>
          </div>

          <div className="footer-back-to-top">
            <MagneticButton onClick={scrollToTop} strength={0.4} ariaLabel="Voltar ao topo">
              <span>VOLTAR AO TOPO</span>
              <span className="up-arrow">↑</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CinematicFooter;
