import React, { useState } from 'react';
import './PhotographySection.css';
import { ImgSphere } from '../components/ui/img-sphere';
import { X, ChevronLeft, ChevronRight, Camera, Film, Eye, Sparkles } from 'lucide-react';

const PHOTO_ITEMS = [
  {
    id: 'p1',
    title: 'LUZ & SOMBRA — RETRATO MASCULINO',
    category: 'RETRATOS',
    number: '01',
    url: '/photos/retrato-01.jpg',
    aspect: 'vertical',
    description: 'Ensaio editorial focado em luz natural direcionada, contraste dramático e expressão autêntica.'
  },
  {
    id: 'p2',
    title: 'LUSCO-FUSCO NO LITORAL',
    category: 'CASAIS',
    number: '02',
    url: '/photos/casal-01.jpg',
    aspect: 'horizontal',
    description: 'Conexão espontânea ao entardecer, capturando movimento, afeto e a luz quente do sol poente.'
  },
  {
    id: 'p3',
    title: 'CELEBRAÇÃO & BRINDE',
    category: 'EVENTOS',
    number: '04',
    url: '/photos/evento-01.jpg',
    aspect: 'vertical',
    description: 'Cobertura documental de evento corporativo e social com atmosfera calorosa e iluminação cênica.'
  },
  {
    id: 'p4',
    title: 'DIREÇÃO AUDIOVISUAL & FILMMAKING',
    category: 'FILMMAKING',
    number: '08',
    url: '/photos/filmmaking-01.jpg',
    aspect: 'wide',
    description: 'Produção audiovisual, enquadramento de cinema, rigging de câmera e composição visual para marcas e projetos.'
  }
];

const CATEGORIES = [
  'TODAS',
  'RETRATOS',
  'CASAIS',
  'FAMÍLIA',
  'EVENTOS',
  '15 ANOS',
  'FORMATURAS',
  'INFANTIL'
];

export const PhotographySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('TODAS');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredPhotos = selectedCategory === 'TODAS'
    ? PHOTO_ITEMS
    : PHOTO_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section className="photography-section" id="fotografia">
      {/* Terracotta Visual Shift Header */}
      <div className="photography-brand-banner">
        <div className="photography-banner-content">
          <span className="banner-editorial-tag">LARGURA DE BANDA VISUAL</span>
          <h2 className="banner-editorial-words">
            <span>LUZ</span> · <span>PESSOAS</span> · <span>MOMENTOS</span> · <span>HISTÓRIAS</span>
          </h2>
        </div>
      </div>

      <div className="photography-container">
        {/* Editorial Section Header */}
        <header className="photography-header">
          <div className="photography-tag">
            <span className="photography-tag-dot" />
            <span>EXPRESSÃO VISUAL & AUDIOVISUAL</span>
          </div>
          <h2 className="photography-title">FOTOGRAFIA</h2>
          <p className="photography-subtitle">
            A fotografia e o audiovisual não são atividades desconectadas da tecnologia. São formas paralelas de criar narrativa, controlar composição e capturar a verdade das pessoas.
          </p>
        </header>

        {/* 3D Photography Sphere */}
        <div className="sphere-wrapper-block">
          <div className="sphere-block-header">
            <span className="sphere-block-title">ESFERA FOTOGRÁFICA INTERATIVA</span>
            <span className="sphere-block-sub">3D COMPOSITION — ARRASTE PARA EXPLORAR</span>
          </div>
          <ImgSphere
            items={PHOTO_ITEMS}
            radius={210}
            onSelectPhoto={(photo) => {
              const idx = filteredPhotos.findIndex((p) => p.id === photo.id);
              if (idx !== -1) openLightbox(idx);
            }}
          />
        </div>

        {/* Editorial Gallery Category Filter */}
        <div className="gallery-filter-bar">
          <span className="filter-label">CATEGORIAS:</span>
          <div className="filter-buttons">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Gallery Grid */}
        <div className="editorial-gallery-grid">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`gallery-editorial-item aspect-${photo.aspect}`}
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-img-wrapper">
                <img src={photo.url} alt={photo.title} className="gallery-img" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-top">
                    <span className="gallery-num">{photo.number}</span>
                    <span className="gallery-cat">{photo.category}</span>
                  </div>
                  <div className="gallery-overlay-bottom">
                    <h3 className="gallery-item-title">{photo.title}</h3>
                    <span className="gallery-expand-btn">AMPLIAR FOTOGRAFIA →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filmmaking & Audiovisual Highlight Bar */}
        <div className="filmmaking-highlight-box">
          <div className="filmmaking-content">
            <div className="filmmaking-icon-group">
              <Film size={28} className="filmmaking-icon" />
              <Camera size={28} className="filmmaking-icon" />
            </div>
            <div className="filmmaking-text">
              <h3 className="filmmaking-title">FILMMAKING & DIREÇÃO VISUAL</h3>
              <p className="filmmaking-desc">
                Além de ensaios e retratos, Gabriel atua com produção de vídeo, direção de cena, enquadramento cinematográfico, edição e criação de conteúdo audiovisual de alta estética.
              </p>
            </div>
          </div>
          <div className="filmmaking-tags">
            <span>Fotografia</span>
            <span>Filmmaking</span>
            <span>Direção Visual</span>
            <span>Edição</span>
            <span>Conteúdo</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal View */}
      {lightboxIndex !== null && (
        <div className="photography-lightbox-modal" onClick={closeLightbox}>
          <div className="lightbox-backdrop" />

          <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Fechar">
            <X size={28} />
          </button>

          <button
            className="lightbox-nav-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            aria-label="Anterior"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            className="lightbox-nav-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="Próxima"
          >
            <ChevronRight size={36} />
          </button>

          <div className="lightbox-content-card" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-media-wrapper">
              <img
                src={filteredPhotos[lightboxIndex].url}
                alt={filteredPhotos[lightboxIndex].title}
                className="lightbox-image"
              />
            </div>
            <div className="lightbox-info-bar">
              <div>
                <span className="lightbox-category-tag">
                  {filteredPhotos[lightboxIndex].category}
                </span>
                <h3 className="lightbox-title">{filteredPhotos[lightboxIndex].title}</h3>
              </div>
              <p className="lightbox-description">
                {filteredPhotos[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
