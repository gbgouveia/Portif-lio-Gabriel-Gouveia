import React, { useState } from 'react';
import { useI18n } from '../i18n';
import { SceneCanvas } from '../components/3d/SceneCanvas';
import { MindSceneContent } from '../components/3d/MindScene';
import './ThinkerSection.css';

export const ThinkerSection = () => {
  const { t } = useI18n();
  const [activeStage, setActiveStage] = useState(0);

  const label = t?.problemSolving?.label || t?.thinkingMode?.title || '04 // METHODOLOGY';
  const title = t?.problemSolving?.title || 'COMO EU PENSO E RESOLVO PROBLEMAS.';
  const subtitle = t?.problemSolving?.subtitle || 'Estrutura de 5 etapas para transformar o caos em sistemas previsíveis.';

  const defaultStages = [
    { id: 'DESCONSTRUÇÃO', question: 'O que realmente está acontecendo aqui?', desc: 'Separar ruído de dados reais antes de propor qualquer arquitetura.' },
    { id: 'MAPEAMENTO', question: 'Quais são os limites e dependências?', desc: 'Identificar restrições de sistema, rede, banco e experiência do usuário.' },
    { id: 'ABSTRAÇÃO', question: 'Qual é o modelo mais simples que funciona?', desc: 'Desenhar a menor interface ou estrutura atômica necessária.' },
    { id: 'EXECUÇÃO', question: 'Como construir com resiliência e clareza?', desc: 'Implementar código limpo, auditável, tipado e com tratamento de exceções.' },
    { id: 'VALOR', question: 'A solução resolveu o problema original?', desc: 'Medir utilidade real, latência e feedback operacional.' }
  ];

  const stages = t?.problemSolving?.stages || defaultStages;
  const currentStage = stages[activeStage] || stages[0];

  return (
    <section id="process" className="thinker-section section-padding">
      <div className="container">
        <div className="section-label">{label}</div>

        <div className="thinker-header">
          <h2 className="thinker-title">{title}</h2>
          <p className="thinker-subtitle">{subtitle}</p>
        </div>

        <div className="thinker-grid">
          {/* 3D Dynamic Particle Reorganization Canvas */}
          <div className="thinker-canvas-wrapper">
            <SceneCanvas fallbackTitle="CHAOTIC FRAGMENTS → REFINED FORM">
              <MindSceneContent activeStage={activeStage} />
            </SceneCanvas>

            <div className="canvas-stage-badge">
              <span>STAGE 0{activeStage + 1} // {currentStage.id}</span>
            </div>
          </div>

          {/* 5-Stage Methodology Selector */}
          <div className="thinker-stages-list">
            {stages.map((stage, idx) => (
              <div
                key={stage.id || idx}
                className={`stage-card ${activeStage === idx ? 'is-active' : ''}`}
                onClick={() => setActiveStage(idx)}
                data-cursor="HOVER"
              >
                <div className="stage-card-header">
                  <span className="stage-index">STAGE 0{idx + 1}</span>
                  <h3 className="stage-name">{stage.id}</h3>
                </div>

                <div className="stage-card-body">
                  <p className="stage-question">"{stage.question}"</p>
                  {activeStage === idx && (
                    <p className="stage-desc">{stage.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
