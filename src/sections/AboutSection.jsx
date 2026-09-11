import React from 'react';
import './AboutSection.css';

export const AboutSection = () => {
  return (
    <section id="about" className="about-editorial-section">
      <div className="container">
        <div className="about-tag">
          <span className="tag-line" />
          <span>01 // SOBRE GABRIEL GOUVEIA</span>
        </div>

        <div className="about-editorial-grid">
          <div className="about-headline-col">
            <h2 className="about-title">
              CÓDIGO E LUZ
              <span className="title-sub">COMO FORMAS DE CRIAR.</span>
            </h2>
          </div>

          <div className="about-body-col">
            <p className="about-lead">
              Sou Gabriel Gouveia, desenvolvedor, fotógrafo e filmmaker. Enxergo tecnologia e direção visual como duas manifestações da mesma disciplina: a capacidade de transformar problemas incertos e ideias abstratas em estruturas organizadas e experiências marcantes.
            </p>

            <p className="about-text">
              Na programação, desenvolvo sistemas desacoplados em Python (Django, Flask), interfaces reativas em JavaScript/React e arquiteturas resilientes com PostgreSQL, Docker e Celery. Na fotografia e no audiovisual, busco o contraste, a narrativa autoral e o momento exato em que a luz revela a intenção.
            </p>

            <div className="about-stats-grid">
              <div className="stat-box">
                <span className="stat-num">01</span>
                <span className="stat-label">SISTEMAS DESACOPLADOS</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">02</span>
                <span className="stat-label">NARRATIVA CINEMATOGRÁFICA</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">03</span>
                <span className="stat-label">ARQUITETURA & PRODUTO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
