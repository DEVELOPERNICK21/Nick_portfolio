"use client";

import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

type AutoPlayVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

/**
 * Shows the poster instantly and downloads nothing until the clip is mostly on screen.
 * It then plays muted and pauses when scrolled away. Visitors with Data Saver, a slow
 * connection or "reduce motion" turned on only get the poster and the play button.
 */
export default function AutoPlayVideo({
  src,
  poster,
  label,
  className = "",
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const connection = (navigator as Navigator & { connection?: NetworkInformation })
      .connection;
    const slowOrSaving =
      Boolean(connection?.saveData) ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (slowOrSaving || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className={`relative h-full w-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        aria-label={label}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        controls
        preload="none"
        onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
      />
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/75"
      >
        {muted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
      </button>
    </div>
  );
}
