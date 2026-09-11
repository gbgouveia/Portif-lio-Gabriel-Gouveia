import React, { useEffect, useRef, useState } from 'react';
import './CursorScrubVideo.css';

/**
 * CursorScrubVideo Component
 * Controls video playhead timeline via horizontal cursor position.
 * 
 * Specs:
 * - video muted, playsInline, preload="auto"
 * - no autoplay, no normal loop playback
 * - starts at frame 0
 * - horizontal mouse position normalizes between 0 and 1
 * - lerp smoothing (default 0.22)
 * - requestAnimationFrame render loop with seek threshold (default 0.008)
 * - wait for video readyState before scrubbing
 * - cleanup listeners and RAF on unmount
 */
export const CursorScrubVideo = ({
  src = '/videos/hero-scrub.mp4',
  smoothing = 0.22,
  threshold = 0.008,
  className = ''
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [progressState, setProgressState] = useState(0);

  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const lastSeekTime = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const handlePointerMove = (e) => {
      let clientX = e.clientX;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
      }
      if (typeof clientX !== 'number') return;

      const norm = Math.max(0, Math.min(1, clientX / window.innerWidth));
      targetProgress.current = norm;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // RequestAnimationFrame smooth loop
    const updatePlayhead = () => {
      const diff = targetProgress.current - currentProgress.current;
      currentProgress.current += diff * smoothing;

      const video = videoRef.current;
      if (video && video.duration && !isNaN(video.duration)) {
        const duration = video.duration;
        const targetTime = currentProgress.current * duration;

        // Apply seek threshold to prevent seek storms
        const timeDiff = Math.abs(targetTime - lastSeekTime.current);
        if (timeDiff >= threshold * duration || Math.abs(diff) > 0.001) {
          try {
            video.currentTime = targetTime;
            lastSeekTime.current = targetTime;
          } catch (err) {
            // Ignore potential seek interruptions
          }
        }
      }

      setProgressState(currentProgress.current);
      rafId.current = requestAnimationFrame(updatePlayhead);
    };

    rafId.current = requestAnimationFrame(updatePlayhead);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [smoothing, threshold]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsReady(true);
      setHasError(false);
    }
  };

  const handleError = () => {
    setHasError(true);
    setIsReady(false);
  };

  const percentFormatted = Math.round(progressState * 100);

  return (
    <div className={`cursor-scrub-video-container ${className}`} ref={containerRef}>
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleLoadedMetadata}
        onError={handleError}
        className={`scrub-video-element ${isReady && !hasError ? 'is-visible' : 'is-hidden'}`}
      />

      {/* Discrete Editorial Video Frame Placeholder if file not found */}
      {(!isReady || hasError) && (
        <div className="scrub-video-placeholder">
          <div className="placeholder-backdrop-grid" />
          
          <div className="placeholder-content">
            <div className="placeholder-badge">
              <span className="badge-pulse" />
              <span>CURSOR SCRUB ACTIVE</span>
            </div>

            <div className="placeholder-title">
              <span className="label-dim">FILE EXPECTED AT</span>
              <code className="path-code">/public/videos/hero-scrub.mp4</code>
            </div>

            {/* Interactive Timeline Bar */}
            <div className="placeholder-timeline">
              <div
                className="timeline-fill"
                style={{ width: `${percentFormatted}%` }}
              />
              <div
                className="timeline-handle"
                style={{ left: `${percentFormatted}%` }}
              />
            </div>

            <div className="placeholder-scrub-info">
              <span className="scrub-hint">← MOVA O CURSOR PARA CONTROLAR O FRAME →</span>
              <span className="scrub-percent">{percentFormatted}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Frame Bar Overlay when Video is Active */}
      {isReady && !hasError && (
        <div className="scrub-active-indicator">
          <div className="scrub-live-bar" style={{ width: `${percentFormatted}%` }} />
          <span className="scrub-live-tag">SCRUB: {percentFormatted}%</span>
        </div>
      )}
    </div>
  );
};

export default CursorScrubVideo;
