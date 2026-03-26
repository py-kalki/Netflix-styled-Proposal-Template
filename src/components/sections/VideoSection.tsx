"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VIDEO_SECTION } from "@/data/content";
import { fadeInUp, fadeIn } from "@/lib/animations";
import { useInView } from "@/hooks";
import { Maximize, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoSectionProps {
  onInViewChange?: (inView: boolean) => void;
}

export default function VideoSection({ onInViewChange }: VideoSectionProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasUnmutedOnce, setHasUnmutedOnce] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);

  // Use IntersectionObserver to determine when video is visible
  const { ref: sectionRef, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  // Handle Auto-Play logic
  useEffect(() => {
    if (!videoRef.current) return;
    
    if (inView) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked; handled gracefully
      });
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }

    // Notify parent about visibility for music ducking
    onInViewChange?.(inView);
  }, [inView, onInViewChange]);

  // Update Progress State
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setProgress((current / total) * 100 || 0);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  // User Interaction Handlers
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleSmartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    // First ever interaction: unmute without pausing
    if (!hasUnmutedOnce) {
      videoRef.current.muted = false;
      setMuted(false);
      setHasUnmutedOnce(true);
      return;
    }

    // Subsequent clicks toggle play/pause
    togglePlay(e);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    
    videoRef.current.muted = !muted;
    setMuted(!muted);
    setHasUnmutedOnce(true);
  };

  // Custom Progress Bar Scrubbing
  const handleProgressScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !progressContainerRef.current) return;

    const rect = progressContainerRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    
    videoRef.current.currentTime = percent * videoRef.current.duration;
    setProgress(percent * 100);
  };

  // Fullscreen Logic
  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Format MM:SS for timestamps
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section id="video" className="relative bg-black py-0" ref={sectionRef as React.RefObject<HTMLElement>}>
      {/* ── Ambient Red Glow ─────────────────────────────────────── */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-video rounded-full bg-netflix-red/40 blur-[120px] transition-opacity duration-1000"
        style={{ opacity: playing ? 0.6 : 0 }}
      />

      {/* ── Header ───────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-2xl px-8 pb-8 pt-20 md:px-16">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-netflix-red"
        >
          {VIDEO_SECTION.badge}
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-4xl tracking-wide text-white md:text-6xl"
        >
          {VIDEO_SECTION.title.toUpperCase()}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-2 text-sm text-white/60"
        >
          {VIDEO_SECTION.subtitle}
        </motion.p>
      </div>

      {/* ── Cinematic Video Player ───────────────────────────────── */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-0 md:px-8 pb-20">
        <div
          ref={containerRef}
          className="group relative aspect-video w-full cursor-pointer bg-black overflow-hidden ring-1 ring-white/10 md:rounded-lg md:shadow-2xl"
          onClick={handleSmartClick}
        >
          <video
            ref={videoRef}
            src={VIDEO_SECTION.videoUrl}
            poster={VIDEO_SECTION.posterImage}
            className="h-full w-full object-cover"
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-playsinline="true"
            muted={muted}
            loop
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />

          {/* Top Gradient (for readability if controls are active) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* Bottom Gradient Overlay for Controls */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Unmute Prompt (only shows if playing but hasn't been unmuted) */}
          {!hasUnmutedOnce && playing && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 font-display text-xs tracking-wider text-white backdrop-blur-md"
            >
              TAP TO UNMUTE
            </motion.div>
          )}

          {/* ── Custom Control Bar ── */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end px-4 pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:px-6 md:pb-6">
            
            {/* Scrubber Area */}
            <div 
              ref={progressContainerRef}
              className="group/scrub relative mb-4 h-1 w-full cursor-pointer md:h-1.5"
              onClick={handleProgressScrub}
              onMouseDown={(e) => {
                // Allows dragging but we'll keep it simple for now
                const moveHandler = (moveEv: MouseEvent) => {
                  if (!videoRef.current || !progressContainerRef.current) return;
                  const rect = progressContainerRef.current.getBoundingClientRect();
                  const percent = Math.max(0, Math.min(1, (moveEv.clientX - rect.left) / rect.width));
                  videoRef.current.currentTime = percent * videoRef.current.duration;
                };
                const upHandler = () => {
                  window.removeEventListener('mousemove', moveHandler);
                  window.removeEventListener('mouseup', upHandler);
                };
                window.addEventListener('mousemove', moveHandler);
                window.addEventListener('mouseup', upHandler);
              }}
            >
              {/* Background Track */}
              <div className="absolute inset-x-0 top-1/2 h-full -translate-y-1/2 scale-y-100 bg-white/30 transition-transform duration-200 group-hover/scrub:scale-y-150" />
              
              {/* Loaded Buffer (Visual only - simulated here) */}
              <div className="absolute left-0 top-1/2 h-full -translate-y-1/2 scale-y-100 bg-white/50 transition-transform duration-200 group-hover/scrub:scale-y-150" style={{ width: `${Math.min(100, progress + 5)}%` }} />
              
              {/* Progress Fill */}
              <div className="absolute left-0 top-1/2 h-full -translate-y-1/2 scale-y-100 bg-netflix-red transition-transform duration-200 group-hover/scrub:scale-y-150" style={{ width: `${progress}%` }} />
              
              {/* Scrubber Playhead Custom Dot */}
              <div className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-netflix-red shadow-[0_0_10px_rgba(229,9,20,0.8)] transition-transform duration-200 group-hover/scrub:scale-100 md:h-4 md:w-4" style={{ left: `${progress}%` }} />
            </div>

            {/* Buttons Row */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4 md:gap-6">
                <button
                  onClick={togglePlay}
                  className="transition-transform hover:scale-110 active:scale-95"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" size={24} />}
                </button>
                
                <button
                  onClick={toggleMute}
                  className="transition-transform hover:scale-110 active:scale-95"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
                
                <span className="font-display text-xs tracking-wider text-white/90 hidden md:block">
                  {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleFullscreen}
                  className="transition-transform hover:scale-110 active:scale-95 hidden md:block" // Fullscreen often problematic on mobile inline players
                  aria-label="Fullscreen"
                >
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
