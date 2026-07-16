"use client";

import { useEffect, useRef, useState } from "react";

function toEmbedUrl(url: string): string {
  const trimmed = url.trim();

  const watchMatch = trimmed.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  if (trimmed.includes("/embed/")) {
    return trimmed;
  }

  return trimmed;
}

export default function VideoReelSection() {
  const reelUrl = process.env.NEXT_PUBLIC_REEL_URL?.trim();
  const [shouldLoad, setShouldLoad] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!reelUrl || !sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [reelUrl]);

  if (!reelUrl) return null;

  const embedUrl = toEmbedUrl(reelUrl);

  return (
    <section
      ref={sectionRef}
      className='premium-section container-custom'
      data-chapter='Showreel'
    >
      <span className='scroll-chapter-label'>Showreel</span>
      <div className='premium-surface p-6 md:p-10 border border-amber-500/20 bg-white/5 mt-4'>
        <p className='premium-kicker'>On Camera</p>
        <h2 className='premium-heading mt-4 mb-8'>SHOWREEL</h2>
        <div className='relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black'>
          {shouldLoad ? (
            <iframe
              src={embedUrl}
              title='Model showreel'
              className='absolute inset-0 h-full w-full'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            />
          ) : (
            <div className='absolute inset-0 flex items-center justify-center text-sm text-zinc-500'>
              Loading showreel…
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
