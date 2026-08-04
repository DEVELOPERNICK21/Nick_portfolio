"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_IMAGE, MAIN_PHOTOS, BRAND_COLLABORATIONS } from "@/data/media";
import { site } from "@/config/site";
import { useCinematicScroll } from "@/hooks/useCinematicScroll";

const serif = { fontFamily: "var(--font-instrument), Georgia, serif" };

const chapters = [
  {
    num: "01",
    kicker: "Chapter I",
    title: "Editorial",
    body: "Campaign-ready presence for high-fashion editorials and magazine features.",
    image: MAIN_PHOTOS[0].src,
  },
  {
    num: "02",
    kicker: "Chapter II",
    title: "Commercial",
    body: "Versatile on-camera energy for brands, products, and lifestyle campaigns.",
    image: MAIN_PHOTOS[1].src,
  },
  {
    num: "03",
    kicker: "Chapter III",
    title: "Lifestyle",
    body: "Authentic moments beyond the studio — everyday style with cinematic tone.",
    image: MAIN_PHOTOS[2].src,
  },
  {
    num: "04",
    kicker: "Chapter IV",
    title: "Fashion",
    body: "Sharp silhouettes, attitude, and editorial confidence in every frame.",
    image: MAIN_PHOTOS[3].src,
  },
];

const sections = [
  "Intro",
  "Story",
  ...chapters.map((c) => c.title),
  "Reel",
  "Archive",
  "Finale",
];

function SplitWords({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className='cine-word inline-block overflow-hidden align-top mr-[0.28em]'>
          <span className='cine-word-inner inline-block'>{word}</span>
        </span>
      ))}
    </span>
  );
}

export default function GtaCinematicLanding() {
  const [heroFirstName, ...heroLastParts] = site.nameUpper.split(" ");
  const heroLastName = heroLastParts.join(" ");
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroBgBackRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroMaskRef = useRef<HTMLDivElement>(null);
  const heroPlayRef = useRef<HTMLButtonElement>(null);
  const bridgeRef = useRef<HTMLElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoCopyRef = useRef<HTMLDivElement>(null);
  const videoProgressRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const outroRef = useRef<HTMLElement>(null);
  const outroBgRef = useRef<HTMLDivElement>(null);

  useCinematicScroll(rootRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduceMotion) return;

      let removeMouseParallax: (() => void) | undefined;

      // Global scroll progress
      if (progressRef.current && rootRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3,
            },
          }
        );
      }

      // Section index tracker
      gsap.utils.toArray<HTMLElement>("[data-cine-section]").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(i),
          onEnterBack: () => setActiveSection(i),
        });
      });

      // —— HERO: pin, mask reveal, parallax layers, play button ——
      if (heroRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=180%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        tl.fromTo(heroBgRef.current, { scale: 1.35, y: 0 }, { scale: 1.05, y: -40, ease: "none" }, 0)
          .fromTo(heroBgBackRef.current, { scale: 1.5, y: 0 }, { scale: 1.2, y: 60, ease: "none" }, 0)
          .fromTo(heroMaskRef.current, { opacity: 0.2 }, { opacity: 0.85, ease: "none" }, 0)
          .fromTo(
            heroContentRef.current,
            { y: 0, opacity: 1, filter: "blur(0px)" },
            { y: -160, opacity: 0, filter: "blur(8px)", ease: "none" },
            0
          )
          .fromTo(
            heroPlayRef.current,
            { scale: 1, opacity: 1 },
            { scale: 0.6, opacity: 0, ease: "none" },
            0.1
          );

        // Word reveal on load
        gsap.from(".cine-hero-word-inner", {
          yPercent: 120,
          opacity: 0,
          duration: 1.2,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.3,
        });

        // Mouse parallax
        const onMove = (e: MouseEvent) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 28;
          const y = (e.clientY / window.innerHeight - 0.5) * 18;
          gsap.to(heroBgRef.current, { x, y, duration: 0.8, ease: "power2.out" });
        };
        window.addEventListener("mousemove", onMove);
        removeMouseParallax = () => window.removeEventListener("mousemove", onMove);
      }

      // —— BRIDGE: cinematic title wipe ——
      if (bridgeRef.current) {
        const bridgeTitle = bridgeRef.current.querySelector(".cine-bridge-title");
        const bridgeLine = bridgeRef.current.querySelector(".cine-bridge-line");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: bridgeRef.current,
              start: "top top",
              end: "+=100%",
              pin: true,
              scrub: 1,
            },
          })
          .fromTo(
            bridgeTitle,
            { xPercent: -30, opacity: 0, scale: 1.2 },
            { xPercent: 0, opacity: 1, scale: 1, ease: "none" },
            0
          )
          .fromTo(bridgeLine, { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0.2)
          .fromTo(
            bridgeTitle,
            { xPercent: 0, opacity: 1 },
            { xPercent: 30, opacity: 0, ease: "none" },
            0.55
          );
      }

      // —— CHAPTERS: dual parallax, watermark, split lines ——
      gsap.utils.toArray<HTMLElement>(".cine-chapter").forEach((chapter) => {
        const bgFront = chapter.querySelector(".cine-chapter-bg-front");
        const bgBack = chapter.querySelector(".cine-chapter-bg-back");
        const watermark = chapter.querySelector(".cine-chapter-num");
        const words = chapter.querySelectorAll(".cine-word-inner");
        const img = chapter.querySelector(".cine-chapter-img");
        const frame = chapter.querySelector(".cine-chapter-frame");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: chapter,
            start: "top top",
            end: "+=130%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        tl.fromTo(bgFront, { scale: 1.25, y: -30 }, { scale: 1, y: 0, ease: "none" }, 0)
          .fromTo(bgBack, { scale: 1.4, y: 40 }, { scale: 1.1, y: -20, ease: "none" }, 0)
          .fromTo(watermark, { xPercent: 20, opacity: 0.05 }, { xPercent: -10, opacity: 0.18, ease: "none" }, 0)
          .fromTo(words, { yPercent: 110 }, { yPercent: 0, stagger: 0.04, ease: "none" }, 0.12)
          .fromTo(img, { x: 120, scale: 1.15, rotate: 3 }, { x: 0, scale: 1, rotate: 0, ease: "none" }, 0.18)
          .fromTo(frame, { opacity: 0 }, { opacity: 1, ease: "none" }, 0.25)
          .fromTo(img, { filter: "blur(0px)" }, { filter: "blur(6px)", ease: "none" }, 0.75)
          .fromTo(chapter.querySelector(".cine-chapter-copy"), { opacity: 1 }, { opacity: 0, y: -40, ease: "none" }, 0.8);
      });

      // —— HORIZONTAL GALLERY: vertical scroll drives horizontal ——
      const track = horizontalTrackRef.current;
      const hSection = horizontalRef.current;
      if (track && hSection) {
        const getScroll = () => track.scrollWidth - window.innerWidth + 80;

        gsap.to(track, {
          x: () => -getScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: hSection,
            start: "top top",
            end: () => `+=${getScroll()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        gsap.utils.toArray<HTMLElement>(".cine-h-card").forEach((card, i) => {
          gsap.fromTo(
            card,
            { scale: 0.85, rotate: i % 2 === 0 ? -2 : 2 },
            {
              scale: 1,
              rotate: 0,
              ease: "none",
              scrollTrigger: {
                trigger: hSection,
                start: "top top",
                end: () => `+=${getScroll()}`,
                scrub: 1,
              },
            }
          );
        });
      }

      // —— VIDEO: scrub + overlay + progress bar ——
      const video = videoRef.current;
      const videoSection = videoSectionRef.current;
      if (video && videoSection) {
        ScrollTrigger.create({
          trigger: videoSection,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (video.readyState >= 2 && video.duration) {
              video.currentTime = self.progress * video.duration;
            }
            if (videoProgressRef.current) {
              videoProgressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: videoSection,
              start: "top top",
              end: "+=250%",
              scrub: 1,
            },
          })
          .fromTo(
            videoCopyRef.current,
            { y: 80, opacity: 0, filter: "blur(10px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", ease: "none" },
            0.05
          )
          .fromTo(
            videoCopyRef.current,
            { opacity: 1, scale: 1 },
            { opacity: 0, scale: 0.95, ease: "none" },
            0.75
          );
      }

      // —— OUTRO ——
      if (outroRef.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: outroRef.current,
              start: "top top",
              end: "+=120%",
              pin: true,
              scrub: 1,
            },
          })
          .fromTo(outroBgRef.current, { scale: 1.3 }, { scale: 1, ease: "none" }, 0)
          .fromTo(
            ".cine-outro-line",
            { yPercent: 100 },
            { yPercent: 0, stagger: 0.08, ease: "none" },
            0.1
          )
          .fromTo(
            ".cine-outro-cta",
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, ease: "none" },
            0.45
          );
      }

      // Brand marquee
      gsap.to(".cine-marquee-inner", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      return () => {
        removeMouseParallax?.();
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={rootRef} className='cinematic-landing bg-black text-white relative'>
      {/* Film grain */}
      <div className='cine-grain pointer-events-none fixed inset-0 z-[60] opacity-[0.07]' aria-hidden='true' />

      {/* Scroll progress */}
      <div className='fixed top-0 left-0 right-0 z-[70] h-[2px] bg-white/10 origin-left'>
        <div
          ref={progressRef}
          className='h-full w-full bg-gradient-to-r from-amber-400 to-amber-200 origin-left scale-x-0'
        />
      </div>

      {/* Section rail */}
      <div className='fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[65] hidden md:flex flex-col gap-3'>
        {sections.map((label, i) => (
          <div
            key={label}
            className={`flex items-center gap-2 transition-all duration-500 ${
              activeSection === i ? "opacity-100" : "opacity-30"
            }`}
          >
            <span
              className={`h-px transition-all duration-500 ${
                activeSection === i ? "w-8 bg-amber-400" : "w-3 bg-white/50"
              }`}
            />
            <span className='text-[9px] uppercase tracking-[0.3em] text-white/80'>
              {label}
            </span>
          </div>
        ))}
      </div>

      <header className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 mix-blend-difference'>
        <Link href='/' className='text-xs uppercase tracking-[0.35em] text-white/90 hover:text-white'>
          Exit
        </Link>
        <span className='text-sm md:text-base tracking-tight text-white' style={serif}>
          {site.name}
        </span>
        <Link href='/contact' className='text-xs uppercase tracking-[0.35em] text-white/90 hover:text-white'>
          Book
        </Link>
      </header>

      {/* HERO */}
      <section
        ref={heroRef}
        data-cine-section
        className='relative h-screen w-full overflow-hidden'
        aria-label='Hero'
      >
        <div ref={heroBgBackRef} className='absolute inset-[-10%] will-change-transform'>
          <Image src={HERO_IMAGE} alt='' fill className='object-cover object-top blur-sm scale-110' sizes='100vw' priority />
        </div>
        <div ref={heroBgRef} className='absolute inset-0 will-change-transform'>
          <Image
            src={HERO_IMAGE}
            alt={`${site.name} — professional model`}
            fill
            className='object-cover object-top'
            priority
            sizes='100vw'
          />
        </div>
        <div ref={heroMaskRef} className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/90' />
        <div className='cine-vignette absolute inset-0 pointer-events-none' />

        <div ref={heroContentRef} className='relative z-10 flex h-full flex-col items-center justify-center px-6 text-center'>
          <p className='mb-4 text-[11px] uppercase tracking-[0.45em] text-amber-300/90'>{site.heroKicker}</p>
          <h1 className='text-[clamp(3.2rem,13vw,10rem)] leading-[0.88] tracking-tight' style={serif}>
            <span className='cine-hero-word block overflow-hidden'>
              <span className='cine-hero-word-inner inline-block'>{heroFirstName}</span>
            </span>
            {heroLastName ? (
              <span className='cine-hero-word block overflow-hidden'>
                <span className='cine-hero-word-inner inline-block'>{heroLastName}</span>
              </span>
            ) : null}
          </h1>
          <p className='mt-8 max-w-lg text-sm md:text-base text-white/70 leading-relaxed'>
            {site.tagline.replace(/ • /g, " · ")}
            <br />
            {site.representationText}
          </p>
        </div>

        <button
          ref={heroPlayRef}
          type='button'
          onClick={scrollToVideo}
          className='absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 liquid-glass rounded-full p-5 md:p-6 text-white hover:scale-105 transition-transform group'
          aria-label='Scroll to introduction video'
        >
          <span className='absolute inset-0 rounded-full border border-white/30 animate-ping opacity-30' />
          <svg width='28' height='28' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
            <path d='M8 5v14l11-7z' />
          </svg>
        </button>

        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2'>
          <span className='text-[10px] uppercase tracking-[0.5em] text-white/40'>Scroll</span>
          <span className='w-px h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse' />
        </div>
      </section>

      {/* BRIDGE */}
      <section
        ref={bridgeRef}
        data-cine-section
        className='relative h-screen w-full bg-black flex items-center justify-center overflow-hidden'
      >
        <h2
          className='cine-bridge-title text-[clamp(2.5rem,10vw,7rem)] whitespace-nowrap px-6'
          style={serif}
        >
          The Story Unfolds
        </h2>
        <div className='cine-bridge-line absolute bottom-1/3 left-1/2 -translate-x-1/2 w-48 h-px bg-amber-400/60 origin-center' />
      </section>

      {/* CHAPTERS */}
      {chapters.map((chapter) => (
        <section
          key={chapter.title}
          data-cine-section
          className='cine-chapter relative h-screen w-full overflow-hidden'
        >
          <div className='cine-chapter-bg-back absolute inset-[-15%] will-change-transform'>
            <Image src={chapter.image} alt='' fill className='object-cover blur-md opacity-60' sizes='100vw' />
          </div>
          <div className='cine-chapter-bg-front absolute inset-0 will-change-transform'>
            <Image src={chapter.image} alt='' fill className='object-cover' sizes='100vw' />
            <div className='absolute inset-0 bg-black/50' />
          </div>

          <span
            className='cine-chapter-num absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-bold text-white/[0.07] pointer-events-none select-none will-change-transform'
            style={serif}
          >
            {chapter.num}
          </span>

          <div className='relative z-10 grid h-full grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-16 max-w-7xl mx-auto'>
            <div className='cine-chapter-copy will-change-transform'>
              <p className='text-[11px] uppercase tracking-[0.4em] text-amber-300/80 mb-4'>{chapter.kicker}</p>
              <h2 className='text-5xl md:text-7xl lg:text-8xl leading-none overflow-hidden' style={serif}>
                <SplitWords text={chapter.title} />
              </h2>
              <p className='mt-6 max-w-md text-white/75 text-base md:text-lg leading-relaxed'>
                <SplitWords text={chapter.body} />
              </p>
            </div>
            <div className='cine-chapter-frame liquid-glass rounded-2xl p-1 opacity-0'>
              <div className='cine-chapter-img relative h-[48vh] md:h-[68vh] rounded-xl overflow-hidden will-change-transform'>
                <Image src={chapter.image} alt={chapter.title} fill className='object-cover' sizes='50vw' />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* HORIZONTAL GALLERY */}
      <section ref={horizontalRef} data-cine-section className='relative h-screen overflow-hidden bg-black'>
        <div className='absolute top-8 left-6 md:left-16 z-10'>
          <p className='text-[11px] uppercase tracking-[0.4em] text-amber-300/80 mb-2'>Archive</p>
          <h2 className='text-3xl md:text-5xl' style={serif}>
            Campaign Selects
          </h2>
          <p className='text-white/40 text-xs mt-2 uppercase tracking-widest'>Scroll to navigate →</p>
        </div>
        <div className='absolute inset-0 flex items-center pt-20'>
          <div ref={horizontalTrackRef} className='flex gap-6 md:gap-10 px-6 md:px-16 will-change-transform'>
            {MAIN_PHOTOS.map((photo, i) => (
              <div
                key={photo.src}
                className='cine-h-card relative flex-shrink-0 w-[78vw] md:w-[42vw] h-[58vh] md:h-[65vh] rounded-2xl overflow-hidden border border-white/10 will-change-transform'
              >
                <Image src={photo.src} alt={photo.alt} fill className='object-cover' sizes='45vw' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent' />
                <div className='absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end'>
                  <div>
                    <span className='text-[10px] uppercase tracking-[0.35em] text-amber-300/80'>
                      0{i + 1}
                    </span>
                    <p className='text-xl md:text-2xl mt-1' style={serif}>
                      {photo.category}
                    </p>
                  </div>
                  <span className='liquid-glass rounded-full px-4 py-2 text-[10px] uppercase tracking-widest'>
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section
        ref={videoSectionRef}
        data-cine-section
        className='relative h-screen w-full overflow-hidden bg-black'
        aria-label='Introduction video'
      >
        <video
          ref={videoRef}
          src='/cinematic/bts-landscape.mp4'
          muted
          playsInline
          preload='metadata'
          poster={HERO_IMAGE}
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-black/35' />
        <div className='cine-vignette absolute inset-0 pointer-events-none' />

        <div ref={videoCopyRef} className='relative z-10 flex h-full flex-col justify-between p-8 md:p-16 will-change-transform'>
          <div />
          <div>
            <p className='text-[11px] uppercase tracking-[0.4em] text-amber-300/80 mb-3'>On Camera</p>
            <h2 className='text-4xl md:text-7xl leading-none' style={serif}>
              Meet {site.firstName}
            </h2>
            <p className='mt-4 text-white/70 text-sm md:text-base max-w-md'>
              Scrub the reel with your scroll — presence, personality, and professional demeanor.
            </p>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10'>
          <div
            ref={videoProgressRef}
            className='h-full w-full bg-amber-400 origin-left scale-x-0 will-change-transform'
          />
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className='py-16 border-y border-white/10 overflow-hidden bg-black'>
        <div className='cine-marquee-inner flex whitespace-nowrap w-max'>
          {[...BRAND_COLLABORATIONS, ...BRAND_COLLABORATIONS, ...BRAND_COLLABORATIONS].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className='mx-8 md:mx-16 text-2xl md:text-4xl text-white/25 uppercase tracking-[0.2em]'
              style={serif}
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* OUTRO */}
      <section
        ref={outroRef}
        data-cine-section
        className='relative h-screen w-full overflow-hidden flex items-center justify-center'
      >
        <div ref={outroBgRef} className='absolute inset-[-15%] will-change-transform'>
          <Image src={MAIN_PHOTOS[4].src} alt={site.name} fill className='object-cover' sizes='100vw' />
          <div className='absolute inset-0 bg-black/70' />
        </div>
        <div className='cine-vignette absolute inset-0 pointer-events-none' />

        <div className='relative z-10 text-center px-6'>
          <p className='text-[11px] uppercase tracking-[0.45em] text-amber-300/90 mb-6 overflow-hidden'>
            <span className='cine-outro-line inline-block'>Available for bookings</span>
          </p>
          <h2 className='text-5xl md:text-8xl lg:text-[7rem] leading-[0.9]' style={serif}>
            <span className='block overflow-hidden'>
              <span className='cine-outro-line inline-block'>Let&apos;s</span>
            </span>
            <span className='block overflow-hidden'>
              <span className='cine-outro-line inline-block'>Create</span>
            </span>
          </h2>
          <p className='mt-6 text-white/70 max-w-md mx-auto overflow-hidden'>
            <span className='cine-outro-line inline-block'>
              Worldwide fashion, editorial, and commercial campaigns.
            </span>
          </p>
          <div className='cine-outro-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='liquid-glass rounded-full px-10 py-4 text-sm font-medium uppercase tracking-widest hover:bg-white/5 transition-colors'
            >
              Book a shoot
            </Link>
            <Link
              href='/portfolio'
              className='rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-widest text-black hover:bg-white/90 transition-colors'
            >
              Full portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
