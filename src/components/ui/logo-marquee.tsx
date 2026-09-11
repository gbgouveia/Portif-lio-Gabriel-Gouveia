import React from 'react';
import useMeasure from 'react-use-measure';
import { motion, useMotionValue, animate } from 'framer-motion';
import './logo-marquee.css';

export interface LogoMarqueeProps {
  items?: string[];
  speed?: number;
  className?: string;
}

const defaultTechs = [
  'PYTHON',
  'JAVASCRIPT',
  'REACT',
  'REACT NATIVE',
  'NEXT.JS',
  'DJANGO',
  'FLASK',
  'POSTGRESQL',
  'FIREBASE',
  'SUPABASE',
  'DOCKER',
  'GIT',
  'GITHUB',
  'RABBITMQ',
  'CELERY',
  'TAILWIND CSS',
  'SHADCN/UI',
  'OLLAMA / IA'
];

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  items = defaultTechs,
  speed = 25,
  className = ''
}) => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  React.useEffect(() => {
    if (!width || width === 0) return;
    const finalPosition = -width / 2;
    const controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: speed,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    });
    return () => controls.stop();
  }, [xTranslation, width, speed]);

  const displayList = [...items, ...items];

  return (
    <div className={`logo-marquee-root ${className}`}>
      <div className="marquee-fade-left" />
      <div className="marquee-fade-right" />
      
      <motion.div
        ref={ref}
        className="marquee-track"
        style={{ x: xTranslation }}
      >
        {displayList.map((item, index) => (
          <div key={`${item}-${index}`} className="marquee-item">
            <span className="marquee-item-text">{item}</span>
            <span className="marquee-dot">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;
