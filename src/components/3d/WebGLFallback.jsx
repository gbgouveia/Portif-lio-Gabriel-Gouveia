import React, { useEffect, useRef } from 'react';

export const WebGLFallback = ({ title = 'IDEA → STRUCTURE → EXPERIENCE' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;

      // Draw mathematical wave lattice
      const step = 40;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += step) {
          const dx = Math.sin(time + x * 0.01) * 10;
          const dy = Math.cos(time + y * 0.01) * 10;
          ctx.lineTo(x + dx, y + dy);
        }
        ctx.stroke();
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = 'rgba(244, 244, 245, 0.6)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        fontFamily: 'Space Grotesk, monospace',
        fontSize: '0.75rem',
        letterSpacing: '0.15em',
        color: 'var(--text-muted)'
      }}>
        {title}
      </div>
    </div>
  );
};
