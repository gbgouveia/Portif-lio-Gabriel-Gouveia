import React, { useState } from 'react';
import { useI18n } from '../i18n';
import { Magnetic } from '../components/Magnetic';
import './ContactSection.css';

export const ContactSection = () => {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const label = typeof t?.contact === 'object' ? t?.contact?.label : '09 // CONTATO';
  const title = typeof t?.contact === 'object' ? t?.contact?.title : t?.conclusion?.statement || 'AINDA TEM COISA PARA CONSTRUIR.';
  const subtitle = typeof t?.contact === 'object' ? t?.contact?.subtitle : t?.conclusion?.subtext || 'Se você trouxe uma ideia até aqui, talvez seja hora de dar forma a ela.';
  const cta = typeof t?.contact === 'object' ? t?.contact?.cta : t?.conclusion?.cta || 'CONVERSAR COM GABRIEL →';
  const finalStatement = typeof t?.contact === 'object' ? t?.contact?.finalStatement : t?.conclusion?.statement || 'AINDA TEM COISA PARA CONSTRUIR.';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-label">{label}</div>

        <div className="contact-card">
          <div className="contact-info">
            <h2 className="contact-title">{title}</h2>
            <p className="contact-subtitle">"{subtitle}"</p>

            <div className="contact-social-links">
              <a href="https://github.com/gabrielgouveia" target="_blank" rel="noopener noreferrer" className="social-link" data-cursor="HOVER">
                GITHUB ↗
              </a>
              <a href="https://linkedin.com/in/gabrielgouveia" target="_blank" rel="noopener noreferrer" className="social-link" data-cursor="HOVER">
                LINKEDIN ↗
              </a>
              <a href="mailto:gabriel@gouveia.dev" className="social-link" data-cursor="HOVER">
                EMAIL ↗
              </a>
            </div>
          </div>

          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="c-name">SEU NOME</label>
                <input
                  type="text"
                  id="c-name"
                  required
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-email">SEU EMAIL</label>
                <input
                  type="email"
                  id="c-email"
                  required
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-message">A IDEIA / PROBLEMA</label>
                <textarea
                  id="c-message"
                  required
                  rows="4"
                  placeholder="Conte sobre o projeto ou problema que precisa ser construído..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Magnetic strength={0.25}>
                <button type="submit" className="contact-submit-btn" data-cursor="HOVER">
                  {cta}
                </button>
              </Magnetic>
            </form>
          ) : (
            <div className="contact-success">
              <span className="success-icon">✓</span>
              <h3>MENSAGEM ENVIADA</h3>
              <p>Obrigado, {formData.name}. Retornarei em breve.</p>
              <button onClick={() => setSubmitted(false)} className="reset-btn">
                ENVIAR OUTRA MENSAGEM
              </button>
            </div>
          )}
        </div>

        {/* Final Visual Conclusion */}
        <div className="final-conclusion-block">
          <h3 className="final-statement-title">{finalStatement}</h3>
          <span className="final-brand-signature">GABRIEL GOUVEIA • DESENVOLVIMENTO • TECNOLOGIA • EXPERIÊNCIA • FOTOGRAFIA</span>
        </div>
      </div>
    </section>
  );
};
