import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('DEFAULT');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile or touch device
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1024 || 'ontouchstart' in window;
      setIsMobile(mobile);
      if (!mobile) {
        document.body.classList.add('has-custom-cursor');
      } else {
        document.body.classList.remove('has-custom-cursor');
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check cursor state from hovered element attribute
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const state = target.getAttribute('data-cursor') || 'DEFAULT';
        setCursorState(state.toUpperCase());
      } else if (e.target.closest('a, button, [role="button"]')) {
        setCursorState('HOVER');
      } else {
        setCursorState('DEFAULT');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('resize', checkMobile);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  const showLabel = ['VIEW', 'OPEN', 'DRAG', 'EXPLORE'].includes(cursorState);

  return (
    <div
      className={`custom-cursor state-${cursorState.toLowerCase()}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      {showLabel && (
        <span className="cursor-label">
          {cursorState}
        </span>
      )}
    </div>
  );
};
