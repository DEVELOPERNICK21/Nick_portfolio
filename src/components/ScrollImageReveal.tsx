"use client";

import { useEffect, useRef, useState } from "react";
import OptimizedImage from "./OptimizedImage";

interface ScrollImageRevealProps {
  src: string;
  alt: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down" | "zoom";
  className?: string;
  parallaxSpeed?: number;
}

export default function ScrollImageReveal({
  src,
  alt,
  delay = 0,
  direction = "up",
  className = "",
  parallaxSpeed = 0.5,
}: ScrollImageRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTransform = () => {
    const baseTransform = isVisible ? 0 : getInitialOffset();
    const parallaxOffset = ref.current
      ? (window.scrollY - (ref.current.offsetTop - window.innerHeight)) *
        parallaxSpeed
      : 0;

    switch (direction) {
      case "left":
        return `translateX(${baseTransform - parallaxOffset}px)`;
      case "right":
        return `translateX(${-baseTransform + parallaxOffset}px)`;
      case "up":
        return `translateY(${baseTransform - parallaxOffset}px)`;
      case "down":
        return `translateY(${-baseTransform + parallaxOffset}px)`;
      case "zoom":
        const scale = isVisible ? 1 : 0.8;
        return `scale(${scale}) translateY(${baseTransform}px)`;
      default:
        return `translateY(${baseTransform}px)`;
    }
  };

  const getInitialOffset = () => {
    switch (direction) {
      case "left":
        return 100;
      case "right":
        return -100;
      case "up":
        return 60;
      case "down":
        return -60;
      case "zoom":
        return 0;
      default:
        return 60;
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      <OptimizedImage src={src} alt={alt} priority={false} />
    </div>
  );
}

