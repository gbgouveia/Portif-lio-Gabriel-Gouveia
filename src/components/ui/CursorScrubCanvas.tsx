import React, { useEffect, useRef, useState, useCallback } from 'react';
import './CursorScrubCanvas.css';

export interface CursorScrubCanvasProps {
  framePathPattern?: string;
  frameCount?: number;
  axis?: "horizontal" | "vertical";
  reverse?: boolean;
  smoothing?: number;
  objectFit?: "cover" | "contain";
  backgroundColor?: string;
  className?: string;
  ariaLabel?: string;
  enableSubpixelBlending?: boolean;
}

export const CursorScrubCanvas: React.FC<CursorScrubCanvasProps> = ({
  frameCount = 240,
  axis = "horizontal",
  reverse = false,
  smoothing = 0.35,
  objectFit = "cover",
  backgroundColor = "#201D1E",
  className = "",
  ariaLabel = "Animação cinematográfica de frames controlada pelo cursor",
  enableSubpixelBlending = true
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [scrubPercent, setScrubPercent] = useState(0);

  const frameCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingSet = useRef<Set<number>>(new Set());

  const targetFrameFloatRef = useRef<number>(1);
  const currentFrameFloatRef = useRef<number>(1);
  const lastDrawnFrameFloatRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);

  // Helper to resolve frame URL based on index (1-based, 4-digit padded WebP)
  const getFrameUrl = useCallback((index: number) => {
    const pad = String(index).padStart(4, '0');
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanBase = baseUrl.replace(/\/$/, '');
    return `${cleanBase}/hero-frames/frame-${pad}.webp`;
  }, []);

  // Load and decode a single frame image asynchronously into memory cache
  const loadFrame = useCallback((index: number) => {
    if (index < 1 || index > frameCount) return;
    if (frameCache.current.has(index) || loadingSet.current.has(index)) return;

    loadingSet.current.add(index);
    const img = new Image();
    img.src = getFrameUrl(index);

    const onDecodeDone = () => {
      frameCache.current.set(index, img);
      loadingSet.current.delete(index);
      setIsReady(true);
    };

    if ('decode' in img) {
      img
        .decode()
        .then(onDecodeDone)
        .catch(() => {
          // Fallback to onload if decode fails
          img.onload = onDecodeDone;
        });
    } else {
      img.onload = onDecodeDone;
    }

    img.onerror = () => {
      loadingSet.current.delete(index);
    };
  }, [frameCount, getFrameUrl]);

  // Phase 1: Mount initialization & milestone preloading
  useEffect(() => {
    // Immediately load key milestones across full animation range
    const milestones = [
      1,
      Math.floor(frameCount * 0.25),
      Math.floor(frameCount * 0.5),
      Math.floor(frameCount * 0.75),
      frameCount
    ];
    milestones.forEach(loadFrame);

    // Also load first 20 frames for instant startup
    for (let i = 1; i <= Math.min(20, frameCount); i++) {
      loadFrame(i);
    }
  }, [frameCount, loadFrame]);

  // Phase 2: Background preloader prioritizing frames near current target
  const triggerPriorityPreload = useCallback((centerFrame: number) => {
    const radius = 25;
    for (let offset = 0; offset <= radius; offset++) {
      const prev = centerFrame - offset;
      const next = centerFrame + offset;
      if (prev >= 1 && prev <= frameCount) loadFrame(prev);
      if (next >= 1 && next <= frameCount) loadFrame(next);
    }
  }, [frameCount, loadFrame]);

  // Get nearest available cached frame to guarantee NO black frames or freezing
  const getNearestLoadedFrame = useCallback((targetIndex: number): HTMLImageElement | null => {
    if (frameCache.current.has(targetIndex)) {
      return frameCache.current.get(targetIndex)!;
    }

    // Search outwards for nearest loaded frame
    for (let delta = 1; delta < frameCount; delta++) {
      const lower = targetIndex - delta;
      if (lower >= 1 && frameCache.current.has(lower)) {
        return frameCache.current.get(lower)!;
      }
      const upper = targetIndex + delta;
      if (upper <= frameCount && frameCache.current.has(upper)) {
        return frameCache.current.get(upper)!;
      }
    }

    return null;
  }, [frameCount]);

  // Render subpixel continuous frame blending onto Canvas with Retina DPR and object-fit cover
  const drawSubpixelFrame = useCallback((frameFloat: number) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    const cssW = rect.width;
    const cssH = rect.height;
    if (cssW === 0 || cssH === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pixelW = Math.floor(cssW * dpr);
    const pixelH = Math.floor(cssH * dpr);

    if (canvas.width !== pixelW || canvas.height !== pixelH) {
      canvas.width = pixelW;
      canvas.height = pixelH;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const baseFrame = Math.floor(frameFloat);
    const nextFrame = Math.min(frameCount, baseFrame + 1);
    const fraction = frameFloat - baseFrame;

    const imgA = getNearestLoadedFrame(baseFrame);
    const imgB = getNearestLoadedFrame(nextFrame);

    if (!imgA) return;

    // Calculate object-fit cover positioning
    const imgRatio = imgA.width / imgA.height;
    const containerRatio = cssW / cssH;

    let drawW = cssW;
    let drawH = cssH;
    let offsetX = 0;
    let offsetY = 0;

    if (objectFit === "cover") {
      if (containerRatio > imgRatio) {
        drawH = cssW / imgRatio;
        offsetY = (cssH - drawH) / 2;
      } else {
        drawW = cssH * imgRatio;
        offsetX = (cssW - drawW) / 2;
      }
    }

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, cssW, cssH);

    // Draw base frame
    ctx.globalAlpha = 1.0;
    ctx.drawImage(imgA, offsetX, offsetY, drawW, drawH);

    // Subpixel crossfade blending with next frame for silky 60fps continuity
    if (enableSubpixelBlending && imgB && imgB !== imgA && fraction > 0.05) {
      ctx.globalAlpha = fraction;
      ctx.drawImage(imgB, offsetX, offsetY, drawW, drawH);
      ctx.globalAlpha = 1.0;
    }

    lastDrawnFrameFloatRef.current = frameFloat;
  }, [backgroundColor, enableSubpixelBlending, getNearestLoadedFrame, objectFit, frameCount]);

  // Handle pointer / mouse movement without React state re-renders
  const handlePointerMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      } else {
        return;
      }

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      let norm = 0;

      if (axis === "horizontal") {
        norm = (clientX - rect.left) / rect.width;
      } else {
        norm = (clientY - rect.top) / rect.height;
      }

      let clamped = Math.max(0, Math.min(1, norm));
      if (reverse) {
        clamped = 1 - clamped;
      }

      const targetFrame = clamped * (frameCount - 1) + 1;
      targetFrameFloatRef.current = targetFrame;
    },
    [axis, frameCount, reverse]
  );

  // Attach window/container pointer move event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: Event) =>
      handlePointerMove(e as MouseEvent | TouchEvent);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, [handlePointerMove]);

  // Smooth requestAnimationFrame animation loop
  useEffect(() => {
    const loop = () => {
      const target = targetFrameFloatRef.current;
      const current = currentFrameFloatRef.current;

      // Interpolate current frame float towards target
      const diff = target - current;
      currentFrameFloatRef.current += diff * smoothing;

      const currentVal = Math.max(1, Math.min(frameCount, currentFrameFloatRef.current));
      const roundedFrame = Math.round(currentVal);

      // Trigger priority preloading around current animation frame
      triggerPriorityPreload(roundedFrame);

      // Redraw canvas with subpixel blending
      if (Math.abs(currentVal - (lastDrawnFrameFloatRef.current || 0)) > 0.01 || !isReady) {
        drawSubpixelFrame(currentVal);
      }

      const pct = Math.round(((currentVal - 1) / (frameCount - 1)) * 100);
      setScrubPercent(pct);

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [drawSubpixelFrame, frameCount, isReady, smoothing, triggerPriorityPreload]);

  // Handle window resize cleanly
  useEffect(() => {
    const handleResize = () => {
      drawSubpixelFrame(currentFrameFloatRef.current);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [drawSubpixelFrame]);

  return (
    <div
      ref={containerRef}
      className={`cursor-scrub-canvas-root ${className}`}
      aria-label={ariaLabel}
      role="region"
    >
      {/* 2D Canvas Surface */}
      <canvas ref={canvasRef} className="scrub-canvas-element" />

      {/* Discrete Loading Indicator */}
      {!isReady && (
        <div className="canvas-loading-badge" aria-live="polite">
          <span className="badge-pulse-dot" />
          <span className="badge-text">CARREGANDO FRAMES...</span>
        </div>
      )}

      {/* Discrete Cursor Scrub Percentage Badge */}
      <div className="canvas-scrub-tag">
        <span className="scrub-dot" />
        <span className="scrub-label">FRAME SCRUB {scrubPercent}%</span>
      </div>
    </div>
  );
};

export default CursorScrubCanvas;
