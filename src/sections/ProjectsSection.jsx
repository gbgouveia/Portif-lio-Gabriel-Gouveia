import React, { useState } from 'react';
import './ProjectsSection.css';
import { ExternalLink, Github, ChevronRight, Layers, ShieldCheck, Ticket, Bell, Utensils } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 'paprica',
    number: '01',
    title: 'PÁPRICA',
    category: 'E-COMMERCE FULL-STACK',
    year: '2025',
    icon: Layers,
    problem: 'Sistemas de e-commerce convencionais sofrem com desacoplamento entre estoque, gateway de pagamento e concorrência transacional no checkout.',
    construction: 'Desenvolvi a plataforma do zero utilizando Flask e PostgreSQL com suporte a webhooks assíncronos do Stripe. A arquitetura implementa controle estrito de sessão via Flask-Login e isolamento transacional para evitar falhas durante altas demandas de compra.',
    stack: ['Python', 'Flask', 'PostgreSQL', 'Flask-Login', 'Stripe', 'Render'],
    result: 'Aplicação transacional estável com tempo de resposta sub-segundo, fluxo de checkout seguro idempotente e painel administrativo integrado.',
    github: 'https://github.com/gabrielgouveia',
    demo: '#'
  },
  {
    id: 'notifyflow',
    number: '02',
    title: 'NOTIFYFLOW',
    category: 'SISTEMAS DISTRIBUÍDOS & MENSAGERIA',
    year: '2024',
    icon: Bell,
    problem: 'O envio síncrono de notificações de alta prioridade gerava gargalos severos de requisição na API principal, travando a experiência dos usuários.',
    construction: 'Projetei e containerizei com Docker uma arquitetura desacoplada baseada em RabbitMQ e workers assíncronos Celery. O sistema roteia payloads através de trocas AMQP com política de dead-letter exchange e retries exponenciais.',
    stack: ['Django REST Framework', 'RabbitMQ', 'Celery', 'Docker', 'Redis'],
    result: 'Vazão contínua de disparo de eventos assíncronos em escala sem impacto no tempo de resposta do backend principal.',
    github: 'https://github.com/gabrielgouveia',
    demo: '#'
  },
  {
    id: 'merenda-escolar',
    number: '03',
    title: 'SISTEMA DE MERENDA ESCOLAR',
    category: 'GESTÃO ESCOLAR & QR CODE',
    year: '2025',
    icon: Utensils,
    problem: 'Filas extensas no refeitório, desperdício de tempo letivo, falta de visibilidade prévia do cardápio e extrema dificuldade da coordenação para controlar o limite diário de refeições por aluno.',
    construction: 'Construí um sistema completo de gestão de merenda dividida por níveis de acesso (Alunos, Professores, Coordenação e Administração). Os alunos recebem tokens dinâmicos com QR Code no celular para validação rápida na fila de retirada, permitindo ao gerenciador acompanhar o estoque de insumos e refeições servidas em um dashboard em tempo real.',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'QR Code API', 'Dashboard Analytics'],
    result: 'Redução expressiva do tempo de espera na fila, eliminação total do uso de fichas de papel e controle analítico em tempo real da distribuição nutricional escolar.',
    github: 'https://github.com/gabrielgouveia',
    demo: '#'
  },
  {
    id: 'safeaccess',
    number: '04',
    title: 'SAFEACCESS',
    category: 'SEGURANÇA & AUDITORIA DE SISTEMAS',
    year: '2025',
    icon: ShieldCheck,
    problem: 'Ambientes corporativos necessitam de restrição rigorosa de privilégios e registro imutável de acessos para conformidade e auditoria técnica.',
    construction: 'Desenvolvi um middleware de autorização baseado em papéis (RBAC) integrado a um mecanismo de log imutável de eventos e geração automática de relatórios em PDF com integridade relacional.',
    stack: ['Python', 'Flask', 'RBAC Security', 'Audit Trail', 'PDF Engine', 'PostgreSQL'],
    result: 'Módulo de segurança corporativo pronto para auditorias, garantindo validações de permissão sem adicionar latência perceptível.',
    github: 'https://github.com/gabrielgouveia',
    demo: '#'
  },
  {
    id: 'chamados',
    number: '05',
    title: 'SISTEMA DE CHAMADOS',
    category: 'API REST & GESTÃO DE TICKETS',
    year: '2024',
    icon: Ticket,
    problem: 'Atendimentos técnicos estagnados devido à falta de priorização padronizada, SLA indefinido e ausência de histórico estruturado por chamado.',
    construction: 'Construí uma API RESTful completa com Django REST Framework, autenticação JWT e serializadores customizados para rastrear o ciclo de vida dos chamados desde a abertura até a resolução.',
    stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'JWT Auth'],
    result: 'Controle centralizado dos prazos de atendimento (SLA), histórico automatizado de interações e métricas claras para suporte.',
    github: 'https://github.com/gabrielgouveia',
    demo: '#'
  }
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-container">
        {/* Editorial Section Header */}
        <header className="projects-header">
          <div className="projects-tag">
            <span className="projects-tag-dot" />
            <span>DESENVOLVIMENTO DE SISTEMAS</span>
          </div>
          <h2 className="projects-title">PROJETOS</h2>
          <p className="projects-subtitle">
            Soluções reais construídas com arquitetura limpa, foco em problemas concretos e código sustentável.
          </p>
        </header>

        {/* Editorial Project Showcase */}
        <div className="projects-editorial-grid">
          {/* Navigation / List Side */}
          <div className="projects-selector-column">
            {PROJECTS_DATA.map((proj, idx) => {
              const Icon = proj.icon;
              const isActive = idx === activeProject;
              return (
                <button
                  key={proj.id}
                  className={`project-tab-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveProject(idx)}
                >
                  <span className="project-tab-number">{proj.number}</span>
                  <div className="project-tab-meta">
                    <span className="project-tab-category">{proj.category}</span>
                    <h3 className="project-tab-title">{proj.title}</h3>
                  </div>
                  <ChevronRight className="project-tab-arrow" size={20} />
                </button>
              );
            })}
          </div>

          {/* Active Project Detail View */}
          <div className="project-detail-panel">
            {(() => {
              const current = PROJECTS_DATA[activeProject];
              const Icon = current.icon;
              return (
                <article key={current.id} className="project-editorial-card">
                  <div className="project-card-topbar">
                    <div className="project-badge">
                      <Icon size={18} className="project-badge-icon" />
                      <span>{current.category}</span>
                    </div>
                    <span className="project-year-tag">{current.year}</span>
                  </div>

                  <h3 className="project-display-title">{current.title}</h3>

                  <div className="project-story-blocks">
                    <div className="story-block">
                      <h4 className="story-label">PROBLEMA</h4>
                      <p className="story-text">{current.problem}</p>
                    </div>

                    <div className="story-block">
                      <h4 className="story-label">CONSTRUÇÃO</h4>
                      <p className="story-text">{current.construction}</p>
                    </div>

                    <div className="story-block">
                      <h4 className="story-label">RESULTADO</h4>
                      <p className="story-text">{current.result}</p>
                    </div>
                  </div>

                  <div className="project-stack-section">
                    <h4 className="story-label">TECNOLOGIAS UTILIZADAS</h4>
                    <div className="project-stack-tags">
                      {current.stack.map((tech) => (
                        <span key={tech} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    <a
                      href={current.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-primary"
                    >
                      <Github size={18} />
                      <span>CÓDIGO NO GITHUB</span>
                    </a>
                  </div>
                </article>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
