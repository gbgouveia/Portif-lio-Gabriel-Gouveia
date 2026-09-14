import React, { useState, useEffect } from 'react';
import './PhotographySection.css';
import SphereImageGrid from '../components/ui/img-sphere';

const PORTFOLIO_PHOTOGRAPHY = [
  {
    id: 'photo-1',
    title: 'Luz & Sombra — Retrato Masculino',
    category: 'RETRATOS',
    src: '/photos/retrato-01.jpg',
    url: '/photos/retrato-01.jpg',
    description: 'Ensaio editorial focado em luz natural direcionada, contraste dramático e expressão autêntica.'
  },
  {
    id: 'photo-2',
    title: 'Lusco-Fusco no Litoral',
    category: 'CASAIS',
    src: '/photos/casal-01.jpg',
    url: '/photos/casal-01.jpg',
    description: 'Conexão espontânea ao entardecer, capturando movimento, afeto e a luz quente do sol poente.'
  },
  {
    id: 'photo-3',
    title: 'Celebração & Brinde',
    category: 'EVENTOS',
    src: '/photos/evento-01.jpg',
    url: '/photos/evento-01.jpg',
    description: 'Cobertura documental de evento social com atmosfera calorosa e iluminação cênica.'
  },
  {
    id: 'photo-4',
    title: 'Direção Audiovisual & Cinema',
    category: 'FILMMAKING',
    src: '/photos/filmmaking-01.jpg',
    url: '/photos/filmmaking-01.jpg',
    description: 'Produção audiovisual, enquadramento cinematográfico e composição visual para marcas.'
  },
  {
    id: 'photo-5',
    title: 'Ensaio Editorial 15 Anos',
    category: '15 ANOS',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    description: 'Retrato de celebração de 15 anos com atmosfera delicada e elegante.'
  },
  {
    id: 'photo-6',
    title: 'Cerimônia ao Ar Livre',
    category: 'CASAMENTOS',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    description: 'Registro emocionante da troca de votos em luz natural ao ar livre.'
  },
  {
    id: 'photo-7',
    title: 'Risos Espontâneos',
    category: 'MOMENTOS ESPONTÂNEOS',
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    description: 'Captura documental de alegrias genuínas e momentos não ensaiados.'
  },
  {
    id: 'photo-8',
    title: 'Textura & Detalhes',
    category: 'DETALHES',
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    description: 'Composição minimalista atenta às texturas e elementos do ambiente.'
  },
  {
    id: 'photo-9',
    title: 'Estudo de Luz — Retrato Autoral',
    category: 'FOTOGRAFIA AUTORAL',
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    description: 'Fotografia autoral explorando volumetria e chiaroscuro.'
  },
  {
    id: 'photo-10',
    title: 'Abraço ao Entardecer',
    category: 'CASAIS',
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',
    description: 'Ensaio pré-wedding registrando carinho e intimidade sob a luz dourada.'
  },
  {
    id: 'photo-11',
    title: 'Recepção de Gala',
    category: 'EVENTOS',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    description: 'Iluminação cênica e energia pulsante em grande evento social.'
  },
  {
    id: 'photo-12',
    title: 'Conexão & Afeto',
    category: 'FAMÍLIA',
    src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80',
    description: 'Conexão e afeto entre gerações reunidas em momento especial.'
  }
];

const SPHERE_ITEMS = Array.from({ length: 48 }, (_, i) => {
  const base = PORTFOLIO_PHOTOGRAPHY[i % PORTFOLIO_PHOTOGRAPHY.length];
  return {
    ...base,
    id: `sphere-photo-${i + 1}`
  };
});

export const PhotographySection = () => {
  const [sphereConfig, setSphereConfig] = useState({
    containerSize: 700,
    sphereRadius: 260
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile: 320–380px container
        const size = Math.min(360, Math.max(320, width - 32));
        setSphereConfig({
          containerSize: size,
          sphereRadius: Math.round(size * 0.41)
        });
      } else if (width < 1024) {
        // Tablet: 500–600px container
        setSphereConfig({
          containerSize: 550,
          sphereRadius: 215
        });
      } else {
        // Desktop: 600–750px container
        setSphereConfig({
          containerSize: 720,
          sphereRadius: 275
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="photography-sphere-section" id="fotografia">
      <div className="photography-sphere-wrapper">
        <SphereImageGrid
          items={SPHERE_ITEMS}
          containerSize={sphereConfig.containerSize}
          radius={sphereConfig.sphereRadius}
          autoRotate={true}
          autoRotateSpeed={0.2}
          dragSensitivity={0.85}
          momentumDecay={0.96}
        />
      </div>
    </section>
  );
};

export default PhotographySection;

