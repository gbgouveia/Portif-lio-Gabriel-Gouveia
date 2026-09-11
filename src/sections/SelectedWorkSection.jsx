import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { PROJECTS } from '../data/projects';
import './SelectedWorkSection.css';

export const SelectedWorkSection = () => {
  const { t } = useI18n();
  const [activeFlowStep, setActiveFlowStep] = useState(0);

  const label = t?.projects?.label || t?.works?.title || '05 // RESOLUÇÕES';
  const title = t?.projects?.title || t?.works?.title || 'ALGUMAS COISAS QUE EU TIVE QUE RESOLVER.';
  const readCase = t?.projects?.readCase || 'VER CASO COMPLETO →';

  return (
    <section id="projects" className="work-section section-padding">
      <div className="container">
        <div className="section-label">{label}</div>

        <div className="work-header">
          <h2 className="work-title">{title}</h2>
        </div>

        <div className="projects-list">
          {PROJECTS.map((project, idx) => (
            <article key={project.slug} className="project-chapter-card">
              <div className="chapter-meta">
                <span className="chapter-num">CASE 0{idx + 1}</span>
                <span className="chapter-category">{project.category}</span>
                <span className="chapter-year">{project.year}</span>
              </div>

              <div className="chapter-main">
                <div className="chapter-info">
                  <h3 className="chapter-title">
                    <Link to={`/work/${project.slug}`} data-cursor="VIEW">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="chapter-tagline">{project.tagline}</p>
                  <p className="chapter-problem">{project.problem}</p>

                  <div className="chapter-stack">
                    {project.stack.map((tech, sIdx) => (
                      <span key={sIdx} className="stack-tag">{tech}</span>
                    ))}
                  </div>

                  {/* Interactive Messaging Flow Component for NotifyFlow */}
                  {project.slug === 'notifyflow' && project.flowSteps && (
                    <div className="notifyflow-visualizer">
                      <div className="vf-header">
                        <span className="vf-title">FLUXO DE MENSAGERIA AMQP</span>
                        <span className="vf-hint">Clique para navegar nas etapas</span>
                      </div>

                      <div className="flow-steps-grid">
                        {project.flowSteps.map((step, fIdx) => (
                          <button
                            key={fIdx}
                            className={`flow-step-btn ${activeFlowStep === fIdx ? 'is-active' : ''}`}
                            onClick={() => setActiveFlowStep(fIdx)}
                            data-cursor="HOVER"
                          >
                            <span className="flow-num">{step.step}</span>
                            <span className="flow-name">{step.title}</span>
                          </button>
                        ))}
                      </div>

                      <div className="flow-step-details">
                        <span className="fs-badge">{project.flowSteps[activeFlowStep]?.step} // {project.flowSteps[activeFlowStep]?.title}</span>
                        <p className="fs-desc">{project.flowSteps[activeFlowStep]?.desc}</p>
                      </div>
                    </div>
                  )}

                  <div className="chapter-cta-wrapper">
                    <Link to={`/work/${project.slug}`} className="chapter-cta-btn" data-cursor="VIEW">
                      {readCase}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
