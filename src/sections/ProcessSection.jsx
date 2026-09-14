import React from 'react';
import './ProcessSection.css';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'COMPREENSÃO DO PROBLEMA',
    description: 'Análise detalhada de requisitos, regras de negócio, restrições técnicas e definição clara do objetivo antes do desenvolvimento.'
  },
  {
    step: '02',
    title: 'ARQUITETURA & DADOS',
    description: 'Modelagem relacional de dados, estruturação de rotas REST, definição do contrato de APIs e planejamento de infraestrutura.'
  },
  {
    step: '03',
    title: 'IMPLEMENTAÇÃO',
    description: 'Desenvolvimento modular em Python e JavaScript com código limpo, controle de versão e desacoplamento de componentes.'
  },
  {
    step: '04',
    title: 'VALIDAÇÃO & TESTES',
    description: 'Verificação de casos de borda, validação de rotas, integridade de dados e auditoria de desempenho de requisições.'
  },
  {
    step: '05',
    title: 'IMPLANTAÇÃO & MANUTENÇÃO',
    description: 'Publicação do sistema, monitoramento de logs, otimização de consultas SQL e suporte contínuo.'
  }
];

export const ProcessSection = () => {
  return (
    <section className="process-section" id="processo">
      <div className="process-container">
        <header className="process-header">
          <div className="process-tag">
            <span>MÉTODO DE TRABALHO</span>
          </div>
          <h2 className="process-title">PROCESSO DE DESENVOLVIMENTO</h2>
          <p className="process-subtitle">
            Etapas seguidas para transformar requisitos e problemas de negócio em software em produção.
          </p>
        </header>

        <div className="process-grid">
          {PROCESS_STEPS.map((item) => (
            <article key={item.step} className="process-card">
              <span className="process-number">{item.step}</span>
              <h3 className="process-step-title">{item.title}</h3>
              <p className="process-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
