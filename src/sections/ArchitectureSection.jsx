import React, { useState } from 'react';
import { useI18n } from '../i18n';
import './ArchitectureSection.css';

export const ArchitectureSection = () => {
  const { t } = useI18n();
  const [activeLayer, setActiveLayer] = useState(0);

  const label = t?.architecture?.label || '03 // ARCHITECTURE';
  const title = t?.architecture?.title || 'ARQUITETURA E CAMADAS DE SISTEMA';
  const subtitle = t?.architecture?.subtitle || 'Como organizo o fluxo de dados desde o banco de dados até a experiência do usuário.';

  const defaultLayers = [
    { name: 'INTERFACE & GSAP', desc: 'Design de interações responsivas, acessibilidade e micro-animações performáticas.' },
    { name: 'REQUISIÇÕES & CONTROLES', desc: 'Validação de payload, rotas RESTful, sanitização de entrada e middleware.' },
    { name: 'CAMADA DE NEGÓCIO', desc: 'Regras de domínio desacopladas, trabalhadores assíncronos e mensageria.' },
    { name: 'PERSISTÊNCIA & CACHE', desc: 'Modelagem relacional PostgreSQL, indexação e suporte a fallbacks em cache.' }
  ];

  const layers = t?.architecture?.layers || defaultLayers;
  const currentLayer = layers[activeLayer] || layers[0];

  return (
    <section className="architecture-section section-padding">
      <div className="container">
        <div className="section-label">{label}</div>

        <div className="architecture-header">
          <h2 className="architecture-title">{title}</h2>
          <p className="architecture-subtitle">{subtitle}</p>
        </div>

        <div className="architecture-explorer">
          {/* Layer Selector Pipeline */}
          <div className="pipeline-track">
            {layers.map((layer, idx) => (
              <button
                key={idx}
                className={`pipeline-node ${activeLayer === idx ? 'is-active' : ''}`}
                onClick={() => setActiveLayer(idx)}
                data-cursor="HOVER"
              >
                <span className="node-num">0{idx + 1}</span>
                <span className="node-name">{layer.name}</span>
              </button>
            ))}
          </div>

          {/* Active Layer Detail Card */}
          <div className="layer-detail-card">
            <div className="layer-card-top">
              <span className="layer-badge">0{activeLayer + 1} // LAYER</span>
              <h3 className="layer-card-title">{currentLayer.name}</h3>
            </div>
            <p className="layer-card-desc">{currentLayer.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
