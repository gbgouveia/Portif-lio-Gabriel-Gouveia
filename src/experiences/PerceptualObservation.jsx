import React, { useState } from 'react';
import { useI18n } from '../i18n';
import './PerceptualObservation.css';

export const PerceptualObservation = () => {
  const { t } = useI18n();
  const [activeTag, setActiveTag] = useState('light');

  const tags = [
    { id: 'light', label: t.perceptual.tags.light },
    { id: 'context', label: t.perceptual.tags.context },
    { id: 'gesture', label: t.perceptual.tags.gesture },
    { id: 'time', label: t.perceptual.tags.time },
    { id: 'distance', label: t.perceptual.tags.distance },
    { id: 'intention', label: t.perceptual.tags.intention }
  ];

  return (
    <section id="observation" className="perceptual-section section-padding">
      <div className="container">
        <div className="section-label">01 // PRIMEIRA QUEBRA DE EXPECTATIVA</div>

        <div className="perceptual-header">
          <h2 className="perceptual-title">{t.perceptual.question}</h2>
        </div>

        <div className="perceptual-canvas">
          <div className="perceptual-frame" data-cursor="EXPLORE">
            <svg viewBox="0 0 900 500" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
              <rect width="900" height="500" fill="#0A0D12" />
              <circle cx="450" cy="250" r="180" fill="none" stroke="var(--blue-deep)" strokeWidth="2" />
              <path d="M 200 250 Q 450 100 700 250" fill="none" stroke="var(--blue)" strokeWidth="2" strokeDasharray="6,6" />
              <text x="450" y="255" dominantBaseline="middle" textAnchor="middle" fill="var(--gray-300)" fontSize="14" fontFamily="JetBrains Mono, monospace">
                OBSERVATION_CANVAS // {activeTag.toUpperCase()}
              </text>
            </svg>

            {/* Human Tag Markers */}
            <div className="perceptual-tags-wrapper">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  className={`human-tag-btn ${activeTag === tag.id ? 'is-active' : ''}`}
                  onClick={() => setActiveTag(tag.id)}
                  data-cursor="HOVER"
                >
                  <span className="tag-marker">+</span>
                  <span className="tag-text">{tag.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="perceptual-explanation-card">
            <span className="exp-label">OBSERVAÇÃO HUMANA // {tags.find(t => t.id === activeTag).label}</span>
            <p className="exp-text">{t.perceptual.explanations[activeTag]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
