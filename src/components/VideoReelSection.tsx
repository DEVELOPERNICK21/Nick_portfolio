"use client";

import { useEffect, useRef, useState } from "react";

const BTS_VIDEOS = [
  {
    src: "/cinematic/bts-portrait.mp4",
    title: "Portrait BTS",
    note: "Vertical behind-the-scenes clip for mobile-first viewing",
    frameClass: "aspect-[9/16]",
  },
  {
    src: "/cinematic/bts-landscape.mp4",
    title: "Landscape BTS",
    note: "Wider on-set movement and camera presence",
    frameClass: "aspect-video",
  },
];

export default function VideoReelSection() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
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
  }, []);

  return (
    <section
      ref={sectionRef}
      id='showreel'
      className='ed-section'
      data-chapter='Showreel'
    >
      <div className='container-custom'>
        <p className='ed-kicker'>On Camera</p>
        <h2 className='ed-heading mt-3'>BTS reel</h2>
        <p className='ed-body mt-4 max-w-2xl'>
          Two quick motion cuts so agencies and brands can see presence,
          movement, and energy beyond still frames.
        </p>
        <div className='ed-divider my-8 max-w-md' />

        <div className='grid gap-4 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-start'>
          {BTS_VIDEOS.map((video) => (
            <article
              key={video.src}
              className='ed-surface overflow-hidden border border-editorial-ink/10 bg-white'
            >
              <div className={`relative bg-black ${video.frameClass}`}>
                {shouldLoad ? (
                  <video
                    src={video.src}
                    className='absolute inset-0 h-full w-full object-cover'
                    controls
                    playsInline
                    preload='metadata'
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className='absolute inset-0 flex items-center justify-center text-sm text-white/60'>
                    Loading reel…
                  </div>
                )}
              </div>
              <div className='p-4 md:p-5'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.22em] text-editorial-accent'>
                  {video.title}
                </p>
                <p className='mt-2 text-sm leading-relaxed text-editorial-muted md:text-base'>
                  {video.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
