import React from 'react';
import { useI18n } from '../i18n';
import './BehindCodeSection.css';

export const BehindCodeSection = () => {
  const { t } = useI18n();

  const label = t?.behindCode?.label || '02 // PHILOSOPHY';
  const title = t?.behindCode?.title || 'POR TRÁS DO CÓDIGO';
  const lead = t?.behindCode?.lead || 'Código não é apenas sintaxe. É a formalização de uma intenção.';
  const text = t?.behindCode?.text || 'Toda linha escrita é uma escolha entre clareza e complexidade, velocidade e manutenção.';
  const pillars = t?.behindCode?.pillars || [
    { id: '01', title: 'CLAREZA', desc: 'Código simples de ler é simples de manter e evoluir.' },
    { id: '02', title: 'RESILIÊNCIA', desc: 'Sistemas devem falhar graciosamente e se recuperar sem intervenção.' },
    { id: '03', title: 'PROPÓSITO', desc: 'Tecnologia serve ao problema humano, não ao ego do desenvolvedor.' }
  ];

  return (
    <section className="behind-code-section section-padding">
      <div className="container">
        <div className="section-label">{label}</div>

        <div className="behind-code-header">
          <h2 className="behind-code-title">{title}</h2>
          <p className="behind-code-lead">{lead}</p>
          <p className="behind-code-text">{text}</p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="pillar-card" data-cursor="HOVER">
              <span className="pillar-card-id">{pillar.id}</span>
              <h3 className="pillar-card-title">{pillar.title}</h3>
              <p className="pillar-card-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
