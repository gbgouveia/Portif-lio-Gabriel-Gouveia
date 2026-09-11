import React, { useState } from 'react';
import { useI18n } from '../i18n';
import './PhotographyGallerySection.css';

export const PhotographyGallerySection = () => {
  const { t } = useI18n();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    { id: 'photo-01', title: 'Urban Geometry', category: 'ARCHITECTURE & LIGHT', year: '2025' },
    { id: 'photo-02', title: 'Human Presence', category: 'STREET PORTRAIT', year: '2025' },
    { id: 'photo-03', title: 'Cinematic Shadows', category: 'CONTRAST & TIMING', year: '2024' },
    { id: 'photo-04', title: 'Monochrome Texture', category: 'COMPOSITION', year: '2024' }
  ];

  return (
    <section className="photography-section section-padding">
      <div className="container">
        <div className="section-label">{t.photography.label}</div>

        <div className="photography-header">
          <h2 className="photography-title">{t.photography.title}</h2>
          <p className="photography-text">"{t.photography.text}"</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedPhoto(item)}
              data-cursor="VIEW"
            >
              <div className="gallery-img-placeholder">
                <svg viewBox="0 0 400 300" width="100%" height="100%">
                  <rect width="400" height="300" fill="#0A0D12" />
                  <circle cx="200" cy="150" r="60" fill="none" stroke="var(--blue-deep)" strokeWidth="2" />
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="var(--gray-600)" fontSize="12" fontFamily="JetBrains Mono, monospace">
                    {item.title.toUpperCase()}
                  </text>
                </svg>
              </div>
              <div className="gallery-card-meta">
                <span className="g-title">{item.title}</span>
                <span className="g-cat">{item.category} • {item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="photo-modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="photo-modal-close" onClick={() => setSelectedPhoto(null)}>✕</button>
            <div className="photo-modal-view">
              <svg viewBox="0 0 800 600" width="100%" height="100%">
                <rect width="800" height="600" fill="#050608" />
                <circle cx="400" cy="300" r="140" fill="none" stroke="var(--blue)" strokeWidth="3" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="var(--white)" fontSize="20" fontFamily="Space Grotesk, sans-serif">
                  {selectedPhoto.title}
                </text>
              </svg>
            </div>
            <div className="photo-modal-info">
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.category} — {selectedPhoto.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
