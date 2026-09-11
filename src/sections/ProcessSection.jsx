import React from 'react';
import './ProcessSection.css';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'ENTENDO',
    description: 'Análise aprofundada do problema de negócio, requisitos do usuário, limites de infraestrutura e definição clara do resultado esperado antes de escrever a primeira linha de código.'
  },
  {
    step: '02',
    title: 'ESTRUTURO',
    description: 'Modelagem de dados relacional/não-relacional, arquitetura de rotas, definição de contratos de APIs, escolhas de stack e planejamento do fluxo de informação.'
  },
  {
    step: '03',
    title: 'DESENVOLVO',
    description: 'Construção modular com código limpo, aplicação de boas práticas de POO/funcional, controle de versão rigoroso e componentes desacoplados de alta manutenibilidade.'
  },
  {
    step: '04',
    title: 'TESTO',
    description: 'Validação rigorosa de casos de borda, testes funcionais, verificação de concorrência transacional, segurança de rotas e auditoria de resposta de requisições.'
  },
  {
    step: '05',
    title: 'EVOLUO',
    description: 'Monitoramento de métricas operacionais, refatoração orientada a dados, otimização de consultas e evolução contínua da experiência do usuário.'
  }
];

export const ProcessSection = () => {
  return (
    <section className="process-section" id="processo">
      <div className="process-container">
        <header className="process-header">
          <div className="process-tag">
            <span className="process-tag-dot" />
            <span>METODOLOGIA & METICULOIDADE</span>
          </div>
          <h2 className="process-title">COMO EU CONSTRUO</h2>
          <p className="process-subtitle">
            Desenvolvimento de software não é sobre digitação de sintaxe; é um processo estruturado de engenharia e criação contínua.
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
