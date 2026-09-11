import React, { useState } from 'react';
import { useI18n } from '../i18n';
import './CertificatesSection.css';

export const CertificatesSection = () => {
  const { t } = useI18n();
  const [selectedCert, setSelectedCert] = useState(null);

  const label = t?.certificates?.label || t?.learning?.title || '08 // FORMAÇÃO';
  const title = t?.certificates?.title || t?.learning?.title || 'O QUE EU APRENDI NO CAMINHO.';
  const viewModal = t?.certificates?.viewModal || t?.learning?.view || 'ABRIR DOCUMENTO';

  const certificatesList = [
    {
      id: 'cert-01',
      title: 'Desenvolvimento de Sistemas & Arquitetura Web',
      institution: 'IFB / Formação Técnica Superior',
      year: '2024',
      category: 'SISTEMAS'
    },
    {
      id: 'cert-02',
      title: 'Python Backend Architecture & Microservices',
      institution: 'Specialized Track',
      year: '2024',
      category: 'BACKEND'
    },
    {
      id: 'cert-03',
      title: 'React & Creative Frontend Engineering',
      institution: 'Advanced Development',
      year: '2025',
      category: 'FRONTEND'
    },
    {
      id: 'cert-04',
      title: 'Direção Visual & Composição Fotográfica',
      institution: 'Estudos de Arte e Imagem',
      year: '2023',
      category: 'FOTOGRAFIA'
    }
  ];

  return (
    <section id="certificates" className="certificates-section section-padding">
      <div className="container">
        <div className="section-label">{label}</div>

        <div className="certificates-header">
          <h2 className="certificates-title">{title}</h2>
        </div>

        <div className="certificates-list">
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              className="cert-row"
              onClick={() => setSelectedCert(cert)}
              data-cursor="HOVER"
            >
              <div className="cert-row-main">
                <span className="cert-cat">{cert.category}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-inst">{cert.institution}</span>
              </div>
              <div className="cert-row-side">
                <span className="cert-year">{cert.year}</span>
                <span className="cert-btn">{viewModal} ↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <div className="cert-modal-header">
              <span className="cert-modal-cat">{selectedCert.category} // CERTIFICAÇÃO</span>
              <h2>{selectedCert.title}</h2>
              <p>{selectedCert.institution} • {selectedCert.year}</p>
            </div>

            <div className="cert-preview-frame">
              <svg viewBox="0 0 600 400" width="100%" height="100%">
                <rect width="600" height="400" fill="#0A0D12" stroke="var(--blue-deep)" strokeWidth="4" />
                <rect x="20" y="20" width="560" height="360" fill="none" stroke="rgba(255,255,255,0.05)" />
                <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fill="var(--blue-light)" fontSize="18" fontFamily="Space Grotesk, sans-serif">
                  CERTIFICADO DE CONCLUSÃO
                </text>
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="var(--white)" fontSize="14" fontFamily="Inter, sans-serif">
                  {selectedCert.title}
                </text>
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="var(--gray-300)" fontSize="12" fontFamily="JetBrains Mono, monospace">
                  {selectedCert.institution} — {selectedCert.year}
                </text>
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
