import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { Navbar } from '../components/Navbar';
import { CustomCursor } from '../components/CustomCursor';
import { Footer } from '../components/Footer';
import { useLenis } from '../hooks/useLenis';
import './ProjectPage.css';

export const ProjectPage = () => {
  useLenis();
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectIndex = PROJECTS.findIndex(p => p.slug === slug);
  const project = PROJECTS[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>CASE STUDY NOT FOUND</h2>
        <Link to="/" className="back-link">RETURN TO INDEX</Link>
      </div>
    );
  }

  const nextProjectIndex = (projectIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextProjectIndex];

  return (
    <div className="project-page">
      <CustomCursor />
      <Navbar />

      <main className="project-container">
        {/* Project Hero Header */}
        <section className="project-hero section-padding">
          <div className="container">
            <Link to="/#work" className="back-to-work-btn" data-cursor="HOVER">
              ← BACK TO SELECTED WORK
            </Link>

            <div className="project-hero-meta">
              <span className="p-category">{project.category}</span>
              <span className="p-year">{project.year}</span>
            </div>

            <h1 className="project-title">{project.title}</h1>
            <p className="project-tagline">{project.tagline}</p>
          </div>
        </section>

        {/* Narrative Context & Problem */}
        <section className="project-body-section">
          <div className="container container-narrow">
            <div className="project-block">
              <h2 className="block-title">01 // THE CONTEXT & PROBLEM</h2>
              <p className="block-lead">{project.problem}</p>
              <p className="block-text">{project.description}</p>
            </div>

            <div className="project-block">
              <h2 className="block-title">02 // CREATIVE THINKING & APPROACH</h2>
              <p className="block-text">{project.approach}</p>
            </div>

            {/* Architecture / Flow Visualizer */}
            {project.flowSteps && (
              <div className="project-block">
                <h2 className="block-title">03 // ARCHITECTURE & SYSTEM PIPELINE</h2>
                <div className="architecture-grid">
                  {project.flowSteps.map((step, idx) => (
                    <div key={idx} className="arch-node">
                      <span className="arch-num">{step.step}</span>
                      <h4 className="arch-title">{step.title}</h4>
                      <p className="arch-desc">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="project-block">
              <h2 className="block-title">04 // CHALLENGES & TECHNICAL SOLUTION</h2>
              <div className="challenges-grid">
                <div className="challenge-card">
                  <h3>THE CHALLENGE</h3>
                  <p>{project.challenges}</p>
                </div>
                <div className="solution-card">
                  <h3>THE SOLUTION</h3>
                  <p>{project.solution}</p>
                </div>
              </div>
            </div>

            <div className="project-block">
              <h2 className="block-title">05 // THE RESULT</h2>
              <p className="block-lead result-highlight">{project.result}</p>

              {project.endingQuote && (
                <div className="case-quote-box">
                  <p className="case-quote">"{project.endingQuote}"</p>
                </div>
              )}
            </div>

            {/* Tech Stack List */}
            <div className="project-block">
              <h2 className="block-title">06 // TECHNOLOGIES USED</h2>
              <div className="project-stack-tags">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="p-stack-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Footer Link */}
        <section className="next-project-section">
          <div className="container">
            <span className="next-label">UP NEXT</span>
            <Link to={`/work/${nextProject.slug}`} className="next-project-link" data-cursor="VIEW">
              <span className="next-title">{nextProject.title}</span>
              <span className="next-arrow">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
