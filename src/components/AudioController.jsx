import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../i18n';
import './AudioController.css';

export const AudioController = () => {
  const { t } = useI18n();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  const initAudio = () => {
    if (audioCtxRef.current) return;
    
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      // Master gain node
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Ambient chord drone synthesis (Cinematic ambient resonance)
      const frequencies = [110, 164.81, 220, 329.63]; // A2, E3, A3, E4 chord
      frequencies.forEach(freq => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        oscGain.gain.setValueAtTime(0.02, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        
        osc.start();
      });
    } catch (e) {
      console.warn('Web Audio API not supported in this environment');
    }
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      initAudio();
    }

    if (audioCtxRef.current) {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      
      if (isPlaying) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.2);
        setIsPlaying(false);
      } else {
        gainNodeRef.current.gain.setTargetAtTime(0.08, audioCtxRef.current.currentTime, 0.2);
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      className={`audio-controller-btn ${isPlaying ? 'is-playing' : ''}`}
      onClick={toggleSound}
      data-cursor="HOVER"
      aria-label="Toggle ambient soundtrack"
    >
      <span className="audio-icon">{isPlaying ? '🔊' : '🔇'}</span>
      <span className="audio-label">
        {isPlaying ? (t?.audio?.soundOn || 'AUDIO ON') : (t?.audio?.soundOff || 'AUDIO OFF')}
      </span>
    </button>
  );
};
