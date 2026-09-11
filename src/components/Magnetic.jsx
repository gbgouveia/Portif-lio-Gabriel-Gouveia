import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const Magnetic = ({ children, strength = 0.35 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const onMouseMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) * strength;
      const y = (e.clientY - (top + height / 2)) * strength;

      gsap.to(el, {
        x: x,
        y: y,
        duration: 0.5,
        ease: 'power3.out'
      });
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength]);

  return React.cloneElement(React.Children.only(children), { ref });
};
