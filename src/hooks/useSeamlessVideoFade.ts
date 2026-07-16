"use client";

import { useCallback, useEffect, useRef } from "react";

const FADE_DURATION_MS = 500;
const FADE_OUT_BEFORE_END_S = 0.55;
const LOOP_RESET_DELAY_MS = 100;

function cancelFade(rafRef: React.MutableRefObject<number | null>) {
  if (rafRef.current !== null) {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }
}

function fadeTo(
  element: HTMLElement,
  targetOpacity: number,
  durationMs: number,
  rafRef: React.MutableRefObject<number | null>,
  onComplete?: () => void
) {
  cancelFade(rafRef);

  const startOpacity =
    element.style.opacity === "" ? 1 : parseFloat(element.style.opacity);
  const startTime = performance.now();

  const tick = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / durationMs, 1);
    const opacity = startOpacity + (targetOpacity - startOpacity) * progress;
    element.style.opacity = String(opacity);

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      rafRef.current = null;
      onComplete?.();
    }
  };

  rafRef.current = requestAnimationFrame(tick);
}

export function useSeamlessVideoFade(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  enabled: boolean
) {
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);
  const hasFadedInRef = useRef(false);

  const fade = useCallback(
    (
      targetOpacity: number,
      durationMs: number,
      onComplete?: () => void
    ) => {
      const video = videoRef.current;
      if (!video) return;
      fadeTo(video, targetOpacity, durationMs, rafRef, onComplete);
    },
    [videoRef]
  );

  useEffect(() => {
    if (!enabled) return;

    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = "0";

    const handleCanPlay = () => {
      if (!hasFadedInRef.current) {
        hasFadedInRef.current = true;
        fade(1, FADE_DURATION_MS);
      }
    };

    const handleTimeUpdate = () => {
      if (
        !fadingOutRef.current &&
        video.duration > 0 &&
        video.duration - video.currentTime <= FADE_OUT_BEFORE_END_S
      ) {
        fadingOutRef.current = true;
        fade(0, FADE_DURATION_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        fadingOutRef.current = false;
        void video.play();
        fade(1, FADE_DURATION_MS);
      }, LOOP_RESET_DELAY_MS);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      cancelFade(rafRef);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [enabled, fade, videoRef]);

  useEffect(() => {
    return () => cancelFade(rafRef);
  }, []);
}
