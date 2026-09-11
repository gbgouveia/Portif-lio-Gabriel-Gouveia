import React, { useRef } from 'react';
import { gsap } from 'gsap';
import './MagneticButton.css';

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 0.35,
  ariaLabel,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(btn, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    const btn = buttonRef.current;
    if (!btn) return;

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`magnetic-button-root ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span className="magnetic-button-content">{children}</span>
    </button>
  );
};

export default MagneticButton;
