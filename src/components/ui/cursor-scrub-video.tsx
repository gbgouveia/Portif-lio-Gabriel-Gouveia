import React, { useEffect, useRef, useState, useCallback } from 'react';
import './cursor-scrub-video.css';

/**
 * Technical note: For frame-accurate scrubbing, encode video with keyframes on every frame:
 * ffmpeg -i in.mp4 -c:v libx264 -preset slow -crf 18 -g 1 -keyint_min 1 -x264-params "scenecut=0" -profile:v high -pix_fmt yuv420p -movflags +faststart -an out.mp4
 */

export interface CursorScrubVideoProps {
  videoFile?: string;
  axis?: "horizontal" | "vertical";
  reverse?: boolean;
  trackingArea?: "component" | "window";
  smoothing?: number;
  objectFit?: "cover" | "contain" | "fill";
  showPoster?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const CursorScrubVideo: React.FC<CursorScrubVideoProps> = ({
  videoFile = "/videos/hero-reel.mp4",
  axis = "horizontal",
  reverse = false,
  trackingArea = "component",
  smoothing = 0.28,
  objectFit = "cover",
  showPoster = true,
  className = "",
  ariaLabel = "Vídeo fullscreen com controle de linha do tempo interativo pelo cursor"
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrubPercent, setScrubPercent] = useState(0);

  const targetTimeRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  // Preload and initialize video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsLoading(true);
    setIsReady(false);
    setHasError(false);

    video.load();
  }, [videoFile]);

  // Handle video ready state on canplaythrough or loadedmetadata
  const handleCanPlayThrough = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    setIsReady(true);
    setIsLoading(false);
    setHasError(false);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    setIsReady(false);
  }, []);

  // Update target time continuously on pointer move without React state updates
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

      let progress = 0;

      if (trackingArea === "window") {
        if (axis === "horizontal") {
          progress = clientX / window.innerWidth;
        } else {
          progress = clientY / window.innerHeight;
        }
      } else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (axis === "horizontal") {
          progress = (clientX - rect.left) / rect.width;
        } else {
          progress = (clientY - rect.top) / rect.height;
        }
      }

      let clamped = Math.max(0, Math.min(1, progress));
      if (reverse) {
        clamped = 1 - clamped;
      }

      const video = videoRef.current;
      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        targetTimeRef.current = clamped * video.duration;
      }
    },
    [axis, reverse, trackingArea]
  );

  // Set up listeners for mouse/touch movement
  useEffect(() => {
    const targetElement =
      trackingArea === "window" ? window : containerRef.current;
    if (!targetElement) return;

    const onMove = (e: Event) =>
      handlePointerMove(e as MouseEvent | TouchEvent);

    targetElement.addEventListener("mousemove", onMove as EventListener, {
      passive: true,
    });
    targetElement.addEventListener("touchmove", onMove as EventListener, {
      passive: true,
    });

    return () => {
      targetElement.removeEventListener("mousemove", onMove as EventListener);
      targetElement.removeEventListener("touchmove", onMove as EventListener);
    };
  }, [handlePointerMove, trackingArea]);

  // Direct requestAnimationFrame continuous interpolation loop without seek blocking
  useEffect(() => {
    const updatePlayhead = () => {
      const video = videoRef.current;

      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        const target = targetTimeRef.current;
        const current = video.currentTime;
        const duration = video.duration;

        // Smooth lerp interpolation towards targetTime
        const next = current + (target - current) * smoothing;

        // Apply currentTime directly whenever delta > 0.003s for instant responsive scrub
        if (Math.abs(next - current) > 0.003) {
          try {
            video.currentTime = next;
          } catch (err) {
            // Ignore temporary seek interruptions
          }
        }

        const pct = Math.round((current / duration) * 100);
        setScrubPercent(pct);
      }

      rafIdRef.current = requestAnimationFrame(updatePlayhead);
    };

    rafIdRef.current = requestAnimationFrame(updatePlayhead);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [smoothing]);

  return (
    <div
      ref={containerRef}
      className={`fullscreen-scrub-video-root ${className}`}
      aria-label={ariaLabel}
      role="region"
    >
      {/* Fullscreen Video Element */}
      <video
        ref={videoRef}
        src={videoFile}
        muted
        playsInline
        preload="auto"
        disableRemotePlayback
        onCanPlayThrough={handleCanPlayThrough}
        onLoadedMetadata={handleLoadedMetadata}
        onError={handleError}
        className={`fullscreen-scrub-media ${isReady && !hasError ? 'is-ready' : 'is-loading'}`}
        style={{ objectFit }}
      />

      {/* Discrete Loading Indicator */}
      {isLoading && showPoster && (
        <div className="fullscreen-loading-badge" aria-live="polite">
          <span className="badge-pulse-dot" />
          <span className="badge-text">CARREGANDO FRAMES...</span>
        </div>
      )}

      {/* Editorial Fallback Placeholder if Video fails to load */}
      {hasError && (
        <div className="fullscreen-fallback">
          <div className="fallback-grid-overlay" />
          <div className="fallback-inner">
            <span className="fallback-tag">[ VÍDEO FULLSCREEN REQUERIDO ]</span>
            <code className="fallback-code">{videoFile}</code>
            <p className="fallback-hint">ADICIONAR VÍDEO EM /public/videos/hero-reel.mp4</p>
          </div>
        </div>
      )}

      {/* Discrete Hover Scrub Indicator */}
      <div className="fullscreen-scrub-tag">
        <span className="scrub-dot" />
        <span className="scrub-label">SCRUB {scrubPercent}%</span>
      </div>
    </div>
  );
};

export default CursorScrubVideo;
