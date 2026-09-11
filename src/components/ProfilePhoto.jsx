import React, { useState } from 'react';
import { CursorScrubVideo } from './CursorScrubVideo.jsx';
import headVideoSrc from '../assets/gbanimado.mp4';
import './ProfilePhoto.css';

export const ProfilePhoto = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setTransform({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      className="profile-photo-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="EXPLORE"
    >
      <div
        className="profile-photo-wrapper"
        style={{
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
        }}
      >
        <CursorScrubVideo
          videoFile={headVideoSrc}
          axis="horizontal"
          trackingArea="window"
          smoothing={0.18}
          objectFit="cover"
          borderRadius={12}
        />

        <div className="profile-photo-frame-border" />
        <div className="profile-photo-badge">
          <span>CURSOR SCRUB INTERACTIVE</span>
        </div>
      </div>
    </div>
  );
};

