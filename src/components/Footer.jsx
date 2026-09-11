import React from 'react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <span className="footer-brand">GABRIEL GOUVEIA</span>
          <p className="footer-tagline">
            I build digital experiences where technology meets visual storytelling.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <span className="footer-col-title">CONNECT</span>
            <a href="https://github.com/gabrielgouveia" target="_blank" rel="noopener noreferrer" className="footer-link" data-cursor="HOVER">
              GITHUB ↗
            </a>
            <a href="https://linkedin.com/in/gabrielgouveia" target="_blank" rel="noopener noreferrer" className="footer-link" data-cursor="HOVER">
              LINKEDIN ↗
            </a>
            <a href="mailto:gabriel@gouveia.dev" className="footer-link" data-cursor="HOVER">
              EMAIL ↗
            </a>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">DISCIPLINES</span>
            <span className="footer-text">CREATIVE CODING</span>
            <span className="footer-text">SYSTEMS ARCHITECTURE</span>
            <span className="footer-text">VISUAL STORYTELLING</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="footer-copy">
            © {currentYear} GABRIEL GOUVEIA. ALL RIGHTS RESERVED.
          </p>
          <div className="footer-status">
            <span className="status-indicator"></span>
            <span>AVAILABLE FOR SELECTIVE PROJECTS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
