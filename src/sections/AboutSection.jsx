import React from 'react';
import './AboutSection.css';

export const AboutSection = () => {
  return (
    <section id="sobre" className="about-editorial-section">
      <div className="container">
        <div className="about-tag">
          <span className="tag-line" />
          <span>SOBRE GABRIEL GOUVEIA</span>
        </div>

        <div className="about-editorial-grid">
          <div className="about-headline-col">
            <h2 className="about-title">
              ENGENHARIA &
              <span className="title-sub">DIREÇÃO VISUAL.</span>
            </h2>
          </div>

          <div className="about-body-col">
            <p className="about-lead">
              Desenvolvimento começa antes do código — na análise do problema, na estruturação dos dados e na escolha da arquitetura ideal para cada projeto.
            </p>

            <p className="about-text">
              Construo aplicações web e APIs RESTful em Python (Django, Flask) e interfaces em React, além de gerenciar persistência com PostgreSQL e conteinerização com Docker. Paralelamente, atuo com produção fotográfica e audiovisual, aplicando princípios de composição e controle de luz.
            </p>

            <div className="about-stats-grid">
              <div className="stat-box">
                <span className="stat-label">SISTEMAS DESACOPLADOS</span>
                <span className="stat-detail">Python · Django · Flask · PostgreSQL</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">INTERFACES REATIVAS</span>
                <span className="stat-detail">JavaScript · React · Tailwind CSS</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">DIREÇÃO & AUDIOVISUAL</span>
                <span className="stat-detail">Fotografia · Edição · Filmmaking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


