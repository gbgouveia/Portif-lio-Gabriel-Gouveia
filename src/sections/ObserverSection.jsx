import React, { useState } from 'react';
import { useI18n } from '../i18n';
import './ObserverSection.css';

export const ObserverSection = () => {
  const { t } = useI18n();
  const [activeHighlight, setActiveHighlight] = useState(null);

  const label = t?.observation?.label || t?.perceptual?.question || '01 // PERCEPTION';
  const title = t?.observation?.title || 'TEM COISA QUE VOCÊ SÓ PERCEBE QUANDO APRENDE A OLHAR.';
  const text = t?.observation?.text || 'Fotografia e desenvolvimento compartilham a mesma essência: atenção rigorosa a detalhes e contexto.';

  const highlights = [
    { id: 'detail', label: t?.observation?.tags?.detail || t?.perceptual?.tags?.light || 'DETALHE', desc: 'Perceber pequenas variações de alinhamento e hierarquia visual.' },
    { id: 'light', label: t?.observation?.tags?.light || t?.perceptual?.tags?.context || 'LUZ', desc: 'Direcionar a atenção do usuário através de contraste e iluminação.' },
    { id: 'context', label: t?.observation?.tags?.context || t?.perceptual?.tags?.gesture || 'CONTEXTO', desc: 'Entender o ambiente em que a solução digital será utilizada.' },
    { id: 'behavior', label: t?.observation?.tags?.behavior || t?.perceptual?.tags?.time || 'COMPORTAMENTO', desc: 'Mapear a intenção humana antes de estruturar formulários ou fluxos.' },
    { id: 'decision', label: t?.observation?.tags?.decision || t?.perceptual?.tags?.intention || 'DECISÃO', desc: 'Tomar cada decisão de código baseada em clareza e utilidade.' }
  ];

  return (
    <section id="observation" className="observer-section section-padding">
      <div className="container">
        <div className="section-label">{label}</div>

        <div className="observer-header">
          <h2 className="observer-title">{title}</h2>
          <p className="observer-text">{text}</p>
        </div>

        <div className="observer-discovery-viewport">
          <div className="discovery-photo-frame" data-cursor="EXPLORE">
            <svg viewBox="0 0 900 500" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
              <rect width="900" height="500" fill="#0A0D12" />
              <path d="M 100 400 Q 300 200 500 350 T 900 150" fill="none" stroke="var(--blue-deep)" strokeWidth="3" />
              <circle cx="500" cy="350" r="8" fill="var(--blue)" />
              <text x="520" y="355" fill="var(--white)" fontSize="12" fontFamily="JetBrains Mono, monospace">
                FOCUS_POINT // OBSERVATION
              </text>
            </svg>

            {/* Interactive Perceptual Tag Overlays */}
            <div className="tags-overlay">
              {highlights.map((h) => (
                <button
                  key={h.id}
                  className={`discovery-tag ${activeHighlight === h.id ? 'is-active' : ''}`}
                  onClick={() => setActiveHighlight(activeHighlight === h.id ? null : h.id)}
                  data-cursor="HOVER"
                >
                  <span className="tag-pulse"></span>
                  <span className="tag-label">{h.label}</span>
                </button>
              ))}
            </div>
          </div>

          {activeHighlight && (
            <div className="highlight-explanation-card">
              <span className="exp-badge">PERCEPTUAL TAG // {highlights.find(h => h.id === activeHighlight)?.label}</span>
              <p>{highlights.find(h => h.id === activeHighlight)?.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
