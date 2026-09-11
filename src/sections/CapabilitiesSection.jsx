import React, { useState } from 'react';
import { useI18n } from '../i18n';
import './CapabilitiesSection.css';

export const CapabilitiesSection = () => {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState(0);

  const label = t?.skills?.label || '04 // REPERTÓRIO';
  const title = t?.skills?.title || 'HABILIDADES & FERRAMENTAS';

  const buildCat = t?.skills?.categories?.build || t?.giveProblem?.categories?.system || 'CONSTRUÇÃO';
  const structCat = t?.skills?.categories?.structure || t?.giveProblem?.categories?.api || 'ESTRUTURA';
  const autoCat = t?.skills?.categories?.automate || t?.giveProblem?.categories?.automation || 'AUTOMAÇÃO';
  const expCat = t?.skills?.categories?.experience || t?.giveProblem?.categories?.experience || 'EXPERIÊNCIA';

  const categories = [
    {
      name: buildCat,
      description: 'Desenvolvimento de software resiliente, aplicações web responsivas e mobile.',
      skills: ['JavaScript (ES6+)', 'React', 'React Native', 'Python', 'Django', 'Flask', 'HTML5', 'CSS3']
    },
    {
      name: structCat,
      description: 'Modelagem relacional de dados, endpoints RESTful e arquitetura de segurança.',
      skills: ['REST APIs', 'PostgreSQL', 'Authentication (JWT/OAuth)', 'Architecture', 'Databases', 'Integrations']
    },
    {
      name: autoCat,
      description: 'Orquestração de containers, mensageria assíncrona e pipelines de automação.',
      skills: ['Docker', 'RabbitMQ', 'Celery', 'AI Integration', 'Automation Workflows', 'CI/CD Pipelines']
    },
    {
      name: expCat,
      description: 'Design de interação, direção de arte visual, fotográfica e animações fluidas.',
      skills: ['UI Design', 'UX Strategy', 'Motion (GSAP)', 'Three.js / WebGL', 'Photography', 'Creative Direction']
    }
  ];

  const currentCat = categories[activeCategory] || categories[0];

  return (
    <section id="skills" className="capabilities-section section-padding">
      <div className="container">
        <div className="section-label">{label}</div>

        <div className="capabilities-header">
          <h2 className="capabilities-title">{title}</h2>
        </div>

        <div className="capabilities-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`cap-tab-btn ${activeCategory === idx ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(idx)}
              data-cursor="HOVER"
            >
              <span className="tab-num">0{idx + 1}</span>
              <span className="tab-name">{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="capabilities-content-card">
          <div className="card-top">
            <span className="card-cat-name">0{activeCategory + 1} // {currentCat.name}</span>
            <p className="card-cat-desc">{currentCat.description}</p>
          </div>

          <div className="skills-pills-grid">
            {currentCat.skills.map((skill, sIdx) => (
              <div key={sIdx} className="skill-pill-card" data-cursor="HOVER">
                <span className="skill-dot"></span>
                <span className="skill-pill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
