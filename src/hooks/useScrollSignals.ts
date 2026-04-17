"use client";

import { useEffect, useRef, useState } from "react";

export type ScrollVelocity = "still" | "slow" | "medium" | "fast";

export interface ScrollSignals {
  progress: number;
  direction: "up" | "down";
  velocity: ScrollVelocity;
  y: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function useScrollSignals(): ScrollSignals {
  const [signals, setSignals] = useState<ScrollSignals>({
    progress: 0,
    direction: "down",
    velocity: "still",
    y: 0,
  });
  const lastYRef = useRef(0);
  const lastTsRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const compute = (ts: number) => {
      const y = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = clamp(y / maxScroll, 0, 1);
      const dy = y - lastYRef.current;
      const dt = Math.max(ts - lastTsRef.current, 1);
      const speed = Math.abs(dy / dt); // px/ms

      let velocity: ScrollVelocity = "still";
      if (speed > 0.05) velocity = "slow";
      if (speed > 0.35) velocity = "medium";
      if (speed > 0.7) velocity = "fast";

      setSignals({
        progress,
        direction: dy >= 0 ? "down" : "up",
        velocity,
        y,
      });

      lastYRef.current = y;
      lastTsRef.current = ts;
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(compute);
    };

    lastYRef.current = window.scrollY;
    lastTsRef.current = performance.now();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return signals;
}

export function useElementScrollProgress(targetId: string): number {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const update = () => {
      const el = document.getElementById(targetId);
      if (!el) {
        setProgress(0);
        rafRef.current = null;
        return;
      }

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = rect.height + viewportHeight;
      const seen = clamp(viewportHeight - rect.top, 0, total);
      setProgress(clamp(seen / total, 0, 1));
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [targetId]);

  return progress;
}
