"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 h-1 z-[60] bg-secondary/20'>
      <div
        className='h-full bg-gradient-to-r from-white to-accentGold transition-all duration-150 shadow-[0_0_10px_rgba(255,255,255,0.3)]'
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
