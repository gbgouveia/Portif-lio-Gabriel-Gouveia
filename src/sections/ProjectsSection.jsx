import React, { useState } from 'react';
import './ProjectsSection.css';
import { ExternalLink, Github, ChevronRight, Utensils, FileText, DollarSign, ShoppingBag, Heart } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 'lanches-escolares',
    number: '01',
    title: 'CONTROLE DE LANCHES ESCOLARES',
    category: 'GESTÃO ESCOLAR & FIREBASE',
    year: '2026',
    icon: Utensils,
    problem: 'Escolas precisam gerenciar a retirada diária de lanches por diferentes perfis de usuário (aluno, professor, coordenação, refeitório), cada um com permissões e fluxos distintos, sem controle manual em papel.',
    construction: 'Desenvolvi um sistema completo com React 18 + TypeScript + Vite, autenticação via Firebase Authentication com persistência de sessão e role claims, banco de dados Cloud Firestore com Security Rules para RBAC, validação de retirada via QR Code SVG + leitor html5-qrcode, e módulo de reconhecimento facial.',
    stack: ['React', 'TypeScript', 'Vite', 'Firebase Auth', 'Cloud Firestore', 'QR Code', 'Vitest', 'Cypress E2E'],
    result: 'Sistema funcional com cinco níveis de acesso, validação presencial por QR Code e testes automatizados cobrindo fluxo ponta a ponta.',
    github: 'https://github.com/gbgouveia/site-paulo-freire-compelto',
    demo: null
  },
  {
    id: 'poliscon',
    number: '02',
    title: 'PROPOSTA COMERCIAL — POLISCON',
    category: 'LANDING PAGE & ANIMAÇÃO',
    year: '2026',
    icon: FileText,
    problem: 'A Poliscon precisava de uma página de apresentação comercial para o Dashboard Inteligente e o assistente virtual Richard IA, com visual de software de alto padrão e interatividade marcante.',
    construction: 'Criei uma landing page com React 19 + Vite, animações combinando GSAP (efeitos magnéticos e paralaxe 3D) e Framer Motion, rolagem suave com Lenis, glassmorphism e gradientes dinâmicos via CSS customizado, e efeito de confetti com Canvas ao aprovar a proposta.',
    stack: ['React', 'Vite', 'GSAP', 'Framer Motion', 'Lenis', 'CSS Custom', 'gh-pages'],
    result: 'Página publicada no GitHub Pages com animações fluidas, paralaxe 3D e efeito de celebração interativo.',
    github: 'https://github.com/gbgouveia/proposta-comercial-poliscon',
    demo: 'https://gbgouveia.github.io/proposta-comercial-poliscon/'
  },
  {
    id: 'flow-finance',
    number: '03',
    title: 'FLOW FINANCE',
    category: 'FINANÇAS PESSOAIS & REACT',
    year: '2026',
    icon: DollarSign,
    problem: 'Controlar receitas, despesas e fluxo de caixa pessoal de forma prática, sem depender de planilhas avulsas ou aplicativos fechados.',
    construction: 'Aplicação React + Vite organizada em componentes, páginas, contexts (estado global), services (lógica de negócio isolada) e utils — arquitetura modular preparada para escalar com novas funcionalidades.',
    stack: ['React', 'Vite', 'JavaScript', 'Context API'],
    result: 'Interface funcional para registro e visualização de movimentações financeiras com separação clara entre lógica, apresentação e estado.',
    github: 'https://github.com/gbgouveia/Flow_Finance',
    demo: null
  },
  {
    id: 'leves-para-servir',
    number: '04',
    title: 'LEVES PARA SERVIR',
    category: 'E-COMMERCE & PWA',
    year: '2026',
    icon: ShoppingBag,
    problem: 'Negócio de alimentação precisava de presença digital com catálogo de produtos, página de contato e funcionamento offline para clientes com conexão instável.',
    construction: 'Construí um site multi-página (HTML + CSS + JS) integrado ao Firebase Hosting, com Firestore para dados dinâmicos, Service Worker para cache offline e manifest.json configurado para instalação como PWA. Inclui SEO com sitemap.xml e robots.txt.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase Hosting', 'Firestore', 'PWA', 'Service Worker'],
    result: 'Site publicado com instalação nativa no celular, acesso offline às páginas e catálogo de produtos com navegação completa.',
    github: 'https://github.com/gbgouveia/Leves_Para_Servir',
    demo: null
  },
  {
    id: 'convite-ester',
    number: '05',
    title: 'CONVITE DIGITAL — ESTER',
    category: 'CONVITE INTERATIVO & WEB',
    year: '2026',
    icon: Heart,
    problem: 'Criar um convite digital personalizado e interativo para substituir convites impressos, com experiência visual marcante acessível por link.',
    construction: 'Desenvolvi uma aplicação JavaScript com deploy via GitHub Pages, focada em composição visual e interatividade para o destinatário.',
    stack: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages'],
    result: 'Convite funcional acessível por URL, publicado no GitHub Pages e compartilhável diretamente por link.',
    github: 'https://github.com/gbgouveia/Convite_Ester',
    demo: null
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
            <span>PROJETOS EM DESTAQUE</span>
          </div>
          <h2 className="projects-title">PROJETOS</h2>
          <p className="projects-subtitle">
            Sistemas desenvolvidos com foco em arquitetura desacoplada, modelo de dados consistente e solução de problemas reais.
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
                    {current.demo && (
                      <a
                        href={current.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-secondary"
                      >
                        <ExternalLink size={18} />
                        <span>VER DEMO</span>
                      </a>
                    )}
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
