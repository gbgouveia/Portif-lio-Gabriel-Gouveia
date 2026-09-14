import React from 'react';
import { LogoMarquee } from '../components/ui/logo-marquee';
import './ProgrammingSection.css';

export const ProgrammingSection = () => {
  const categories = [
    {
      title: 'FRONT-END',
      items: [
        { name: 'HTML5', status: 'Uso' },
        { name: 'CSS3', status: 'Uso' },
        { name: 'JavaScript (ES6+)', status: 'Uso' },
        { name: 'React', status: 'Uso' },
        { name: 'React Native', status: 'Estudo' },
        { name: 'Next.js', status: 'Estudo' },
        { name: 'Tailwind CSS', status: 'Uso' },
        { name: 'shadcn/ui', status: 'Uso' },
      ],
    },
    {
      title: 'BACK-END',
      items: [
        { name: 'Python', status: 'Uso' },
        { name: 'Flask', status: 'Uso' },
        { name: 'Django', status: 'Uso' },
        { name: 'Django REST Framework', status: 'Uso' },
        { name: 'APIs RESTful', status: 'Uso' },
      ],
    },
    {
      title: 'BANCO DE DADOS',
      items: [
        { name: 'PostgreSQL', status: 'Uso' },
        { name: 'Firebase', status: 'Estudo' },
        { name: 'Supabase', status: 'Exploração' },
      ],
    },
    {
      title: 'INFRAESTRUTURA',
      items: [
        { name: 'Docker', status: 'Uso' },
        { name: 'RabbitMQ', status: 'Uso' },
        { name: 'Celery', status: 'Uso' },
        { name: 'Render', status: 'Uso' },
      ],
    },
    {
      title: 'FERRAMENTAS & IA',
      items: [
        { name: 'Git & GitHub', status: 'Uso' },
        { name: 'VS Code', status: 'Uso' },
        { name: 'PyInstaller', status: 'Uso' },
        { name: 'IA aplicada ao dev', status: 'Exploração' },
        { name: 'Ollama / LLMs', status: 'Exploração' },
        { name: 'Automação de APIs', status: 'Uso' },
      ],
    },
  ];

  return (
    <section id="programming" className="programming-editorial-section">
      <div className="container">
        <div className="section-meta-tag">
          <span className="tag-line" />
          <span>TECNOLOGIAS & STACK</span>
        </div>

        {/* Section Headline */}
        <div className="programming-header">
          <h2 className="programming-main-title">FERRAMENTAS & ENGENHARIA</h2>
          <p className="programming-lead">
            Tecnologias e linguagens aplicadas no desenvolvimento de sistemas web, APIs RESTful, persistência e infraestrutura.
          </p>
        </div>

        {/* Tech Grid by Categories */}
        <div className="tech-categories-grid">
          {categories.map((cat) => (
            <div key={cat.title} className="tech-category-card">
              <h3 className="category-title">{cat.title}</h3>
              <div className="tech-items-list">
                {cat.items.map((tech) => (
                  <div key={tech.name} className="tech-pill">
                    <span className="tech-name">{tech.name}</span>
                    <span className={`tech-status-badge status-${tech.status.toLowerCase()}`}>
                      {tech.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Logo Marquee Ribbon */}
      <div className="programming-marquee-wrap">
        <LogoMarquee speed={28} />
      </div>
    </section>
  );
};

export default ProgrammingSection;
