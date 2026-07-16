"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  variant?: "default" | "mask" | "scale-lift" | "stagger";
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  variant = "default",
  className = "",
  triggerOnce = true,
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      currentRef.classList.add("reveal-visible");
      return;
    }

    const timers = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = window.setTimeout(() => {
              entry.target.classList.add("reveal-visible");
            }, delay);
            timers.add(timer);
            if (triggerOnce) observer.unobserve(entry.target);
          } else if (!triggerOnce) {
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [delay, rootMargin, threshold, triggerOnce]);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return "reveal-up";
      case "down":
        return "reveal-down";
      case "left":
        return "reveal-left";
      case "right":
        return "reveal-right";
      case "fade":
        return "reveal-fade";
      default:
        return "reveal-up";
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${getDirectionClass()} ${className}`}
    >
      {children}
    </div>
  );
}
