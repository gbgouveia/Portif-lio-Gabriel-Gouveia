import React from 'react';
import './NextChapterSection.css';
import { Compass, Cpu, Sparkles, ArrowUpRight } from 'lucide-react';

const LEARNING_ITEMS = [
  { name: 'Next.js', category: 'FRAMEWORK FRONTEND', focus: 'App Router & SSR Performance' },
  { name: 'React Native', category: 'MOBILE CROSS-PLATFORM', focus: 'Aplicativos Nativos & UX Mobile' },
  { name: 'Django Advanced', category: 'BACKEND & ORM', focus: 'Arquitetura Limpa & Celery Scale' },
  { name: 'Arquitetura de APIs', category: 'DESIGN DE SISTEMAS', focus: 'Idempotência, Rate Limit & REST' },
  { name: 'IA Aplicada (Ollama/LLMs)', category: 'INTEGRAÇÃO INTELIGENTE', focus: 'Workflows Determinísticos & Prompts' },
  { name: 'UX/UI & Design Editorial', category: 'EXPERIÊNCIA DE USUÁRIO', focus: 'Design Systems & Tipografia' },
  { name: 'Filmmaking & Color Grading', category: 'AUDIOVISUAL', focus: 'Direção de Cena & Lut Color Curves' }
];

export const NextChapterSection = () => {
  return (
    <section className="next-chapter-section" id="evolucao">
      <div className="next-chapter-container">
        {/* Section 22: EM CONSTRUÇÃO */}
        <div className="building-block">
          <header className="next-editorial-header">
            <div className="next-tag">
              <span className="next-tag-dot" />
              <span>APRENDIZADO CONTÍNUO</span>
            </div>
            <h2 className="next-main-title">EM CONSTRUÇÃO</h2>
            <p className="next-subtitle">
              Tecnologias, ferramentas e domínios visuais que estou estudando e explorando atualmente para expandir minha capacidade de criação.
            </p>
          </header>

          <div className="learning-grid">
            {LEARNING_ITEMS.map((item, idx) => (
              <div key={idx} className="learning-card">
                <div className="learning-card-top">
                  <span className="learning-category">{item.category}</span>
                  <span className="learning-pulse" />
                </div>
                <h3 className="learning-name">{item.name}</h3>
                <p className="learning-focus">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 23: PRÓXIMO CAPÍTULO */}
        <div className="future-chapter-block">
          <div className="future-card-wrapper">
            <header className="next-editorial-header">
              <div className="next-tag tag-cyan">
                <Compass size={14} />
                <span>DIREÇÃO PROFISSIONAL</span>
              </div>
              <h2 className="next-main-title">PRÓXIMO CAPÍTULO</h2>
            </header>

            <div className="intersection-formula-box">
              <div className="formula-item">TECNOLOGIA</div>
              <span className="formula-multiply">×</span>
              <div className="formula-item">CRIATIVIDADE</div>
              <span className="formula-multiply">×</span>
              <div className="formula-item">PRODUTO</div>
              <span className="formula-multiply">×</span>
              <div className="formula-item">AUDIOVISUAL</div>
            </div>

            <p className="future-narrative-text">
              Meu objetivo não é escolher entre código e imagem, mas operar no ponto exato onde a precisão técnica da engenharia de software encontra o olhar sensível do audiovisual. Quero continuar construindo sistemas robustos, plataformas autênticas e experiências digitais que deixem uma marca estética e funcional marcante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
