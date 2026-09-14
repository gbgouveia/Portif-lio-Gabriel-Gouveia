import React from 'react';
import './NextChapterSection.css';
import { Compass } from 'lucide-react';

const LEARNING_ITEMS = [
  { name: 'Next.js', category: 'FRAMEWORK FRONTEND', focus: 'App Router & SSR' },
  { name: 'React Native', category: 'MOBILE', focus: 'UX & Interfaces Nativas' },
  { name: 'Django Avançado', category: 'BACKEND', focus: 'Arquitetura Limpa & Celery' },
  { name: 'Arquitetura de APIs', category: 'DESIGN DE SISTEMAS', focus: 'Idempotência & Rate Limit' },
  { name: 'IA & Automação', category: 'INTEGRAÇÃO', focus: 'LLMs & Workflows' }
];

export const NextChapterSection = () => {
  return (
    <section className="next-chapter-section" id="evolucao">
      <div className="next-chapter-container">
        {/* Section 1: TECNOLOGIAS EM ESTUDO */}
        <div className="building-block">
          <header className="next-editorial-header">
            <div className="next-tag">
              <span>EXPLORAÇÃO TÉCNICA</span>
            </div>
            <h2 className="next-main-title">TECNOLOGIAS EM ESTUDO</h2>
            <p className="next-subtitle">
              Ferramentas e domínios em fase de aprofundamento técnico.
            </p>
          </header>

          <div className="learning-grid">
            {LEARNING_ITEMS.map((item, idx) => (
              <div key={idx} className="learning-card">
                <div className="learning-card-top">
                  <span className="learning-category">{item.category}</span>
                </div>
                <h3 className="learning-name">{item.name}</h3>
                <p className="learning-focus">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: VISÃO PROFISSIONAL */}
        <div className="future-chapter-block">
          <div className="future-card-wrapper">
            <header className="next-editorial-header">
              <div className="next-tag tag-cyan">
                <Compass size={14} />
                <span>PERSPECTIVA</span>
              </div>
              <h2 className="next-main-title">VISÃO & OBJETIVO</h2>
            </header>

            <p className="future-narrative-text">
              Busco desenvolver software com rigor técnico e clareza de propósito, combinando engenharia backend, interfaces reativas e direção de arte visual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextChapterSection;

