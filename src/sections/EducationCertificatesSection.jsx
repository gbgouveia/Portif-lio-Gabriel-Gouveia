import React, { useState } from 'react';
import './EducationCertificatesSection.css';
import { Award, GraduationCap, Calendar, Building2, Eye, X, CheckCircle2 } from 'lucide-react';

const EDUCATION_DATA = [
  {
    institution: 'SENAI-DF',
    course: 'Desenvolvimento de Sistemas',
    period: '2023 — 2024',
    type: 'TÉCNICO / PROFISSIONALIZANTE',
    description: 'Formação em desenvolvimento de software, lógica de programação, modelagem de banco de dados relacional, arquitetura de sistemas web, POO e engenharia de software.'
  }
];

const CERTIFICATES_DATA = [
  {
    id: 'c1',
    name: 'Desenvolvimento de Sistemas',
    institution: 'SENAI-DF',
    year: '2024',
    area: 'Tecnologia & Software',
    hours: '1200h',
    summary: 'Certificado de conclusão do curso técnico em Desenvolvimento de Sistemas, abrangendo desenvolvimento full-stack, bancos de dados e engenharia de requisitos.'
  },
  {
    id: 'c2',
    name: 'Programação Back-end & APIs RESTful',
    institution: 'SENAI-DF / Capacitação Técnica',
    year: '2024',
    area: 'Back-end & Arquitetura',
    hours: '180h',
    summary: 'Construção de APIs REST com Python, Django e Flask, autenticação JWT, ORM e integração transacional.'
  },
  {
    id: 'c3',
    name: 'Bancos de Dados Relacionais & SQL',
    institution: 'SENAI-DF',
    year: '2024',
    area: 'Engenharia de Dados',
    hours: '120h',
    summary: 'Modelagem relacional, normalização até 3FN, índices, transações ACID e consultas otimizadas PostgreSQL.'
  },
  {
    id: 'c4',
    name: 'Fotografia & Linguagem Visual Autoral',
    institution: 'Formação Técnica & Prática Autoral',
    year: '2023',
    area: 'Audiovisual & Composição',
    hours: '80h',
    summary: 'Linguagem cinematográfica, controle de iluminação de estúdio, direção de modelos, edição técnica e estética editorial.'
  }
];

export const EducationCertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="education-certs-section" id="formacao">
      <div className="education-certs-container">
        {/* Education Section */}
        <div className="education-block">
          <header className="section-editorial-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>TRAJETÓRIA ACADÊMICA</span>
            </div>
            <h2 className="section-main-title">FORMAÇÃO</h2>
          </header>

          <div className="education-timeline">
            {EDUCATION_DATA.map((edu, idx) => (
              <article key={idx} className="education-card">
                <div className="education-card-header">
                  <div className="edu-icon-badge">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <span className="edu-type-tag">{edu.type}</span>
                    <h3 className="edu-institution">{edu.institution}</h3>
                  </div>
                </div>

                <div className="edu-details-row">
                  <h4 className="edu-course-name">{edu.course}</h4>
                  <span className="edu-period">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <p className="edu-description">{edu.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="certificates-block" id="certificados">
          <header className="section-editorial-header">
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>RECONHECIMENTO & QUALIFICAÇÕES</span>
            </div>
            <h2 className="section-main-title">CERTIFICADOS</h2>
          </header>

          <div className="certificates-grid">
            {CERTIFICATES_DATA.map((cert) => (
              <article
                key={cert.id}
                className="certificate-card"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="cert-card-top">
                  <div className="cert-badge">
                    <Award size={18} className="cert-badge-icon" />
                    <span>{cert.area}</span>
                  </div>
                  <span className="cert-year">{cert.year}</span>
                </div>

                <h3 className="cert-title">{cert.name}</h3>

                <div className="cert-meta-info">
                  <span className="cert-institution">
                    <Building2 size={14} />
                    <span>{cert.institution}</span>
                  </span>
                  <span className="cert-hours">{cert.hours}</span>
                </div>

                <div className="cert-action-bar">
                  <span>VISUALIZAR CERTIFICADO</span>
                  <Eye size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal Preview */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              <X size={24} />
            </button>

            <div className="cert-modal-header">
              <div className="cert-modal-badge">
                <Award size={20} />
                <span>CERTIFICADO VERIFICADO</span>
              </div>
              <h3 className="cert-modal-title">{selectedCert.name}</h3>
              <p className="cert-modal-institution">{selectedCert.institution} · {selectedCert.year}</p>
            </div>

            <div className="cert-modal-body">
              <div className="cert-summary-box">
                <h4 className="summary-title">ESCOPO TÉCNICO & CONTEÚDO:</h4>
                <p className="summary-text">{selectedCert.summary}</p>
              </div>

              <div className="cert-details-grid">
                <div className="cert-detail-item">
                  <span className="detail-label">CARGA HORÁRIA</span>
                  <span className="detail-value">{selectedCert.hours}</span>
                </div>
                <div className="cert-detail-item">
                  <span className="detail-label">ÁREA DE DOMÍNIO</span>
                  <span className="detail-value">{selectedCert.area}</span>
                </div>
                <div className="cert-detail-item">
                  <span className="detail-label">STATUS DE EMISSÃO</span>
                  <span className="detail-value status-valid">
                    <CheckCircle2 size={14} /> VALIDADE TÉCNICA ATIVA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
