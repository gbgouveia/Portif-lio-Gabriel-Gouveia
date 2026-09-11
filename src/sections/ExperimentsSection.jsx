import React, { useState } from 'react';
import { EXPERIMENTS } from '../data/experiments';
import { CursorScrubVideo } from '../components/CursorScrubVideo.jsx';
import headVideoSrc from '../assets/gbanimado.mp4';
import './ExperimentsSection.css';

export const ExperimentsSection = () => {
  const [filter, setFilter] = useState('ALL');

  const filterOptions = ['ALL', '3D', 'MOTION', 'GENERATIVE', 'UI', 'INTERACTION'];

  const filteredExperiments = filter === 'ALL'
    ? EXPERIMENTS
    : EXPERIMENTS.filter(item => item.type === filter || item.category.includes(filter));

  return (
    <section id="experiments" className="experiments-section section-padding">
      <div className="container">
        <div className="section-label">06 // DIGITAL LABORATORY</div>

        <div className="experiments-header">
          <h2 className="experiments-title">
            NOT EVERYTHING NEEDS A CLIENT.
          </h2>
          <p className="experiments-subtitle">
            "Some ideas exist simply because I wanted to know if I could build them."
          </p>

          <div className="experiments-filters">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                className={`filter-btn ${filter === opt ? 'is-active' : ''}`}
                onClick={() => setFilter(opt)}
                data-cursor="HOVER"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Interactive Showcase: Framer Code Component - CursorScrubVideo */}
        <div className="scrub-video-showcase" style={{ marginBottom: '2.5rem' }}>
          <div className="experiment-card scrub-card" style={{ gridColumn: '1 / -1', minHeight: 'auto', padding: '1.75rem' }}>
            <div className="exp-card-header">
              <span className="exp-id">EXP_00</span>
              <span className="exp-category">FRAMER COMPONENT / MOTION</span>
              <span className="exp-year">2026</span>
            </div>

            <h3 className="exp-title">CursorScrubVideo (Framer Code Component)</h3>
            <p className="exp-desc">
              Move your mouse horizontally across the preview container below to control character head movement frame by frame in real-time with smooth inertia lerping.
            </p>

            <div
              className="scrub-container"
              style={{
                width: '100%',
                height: '360px',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--border-subtle)',
                marginTop: '1rem',
                marginBottom: '1.25rem',
                backgroundColor: '#222',
              }}
            >
              <CursorScrubVideo
                videoFile={headVideoSrc}
                axis="horizontal"
                trackingArea="component"
                smoothing={0.2}
                objectFit="contain"
                borderRadius={8}
              />
            </div>

            <div className="exp-tech">
              <span className="exp-tech-label">STACK:</span>
              <span className="exp-tech-val">Framer API · React · TypeScript · RAF Inertia Lerp · Keyframe GOP=1</span>
            </div>
          </div>
        </div>

        <div className="experiments-grid">
          {filteredExperiments.map((exp) => (
            <div key={exp.id} className="experiment-card" data-cursor="EXPLORE">
              <div className="exp-card-header">
                <span className="exp-id">{exp.id}</span>
                <span className="exp-category">{exp.category}</span>
                <span className="exp-year">{exp.year}</span>
              </div>

              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-desc">{exp.description}</p>

              <div className="exp-tech">
                <span className="exp-tech-label">STACK:</span>
                <span className="exp-tech-val">{exp.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

