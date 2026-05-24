"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useElementScrollProgress, useScrollSignals } from "@/hooks/useScrollSignals";
import { HERO_IMAGE } from "@/data/media";

export default function ParallaxHero() {
  const { y, velocity } = useScrollSignals();
  const heroProgress = useElementScrollProgress("home-hero");
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setShouldReduceMotion(motion.matches);
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  const scrollToGallery = () => {
    if (typeof window === "undefined") return;
    const gallery = document.querySelector("#gallery-section");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const safeY = shouldReduceMotion ? 0 : y;
  const bgParallax = safeY * 0.22;
  const overlayParallax = safeY * 0.12;
  const headingScale = shouldReduceMotion ? 1 : 1 - heroProgress * 0.08;
  const headingOpacity = shouldReduceMotion ? 1 : Math.max(0.15, 1 - heroProgress * 1.2);
  const velocityClass =
    velocity === "fast" ? "shadow-2xl" : velocity === "medium" ? "shadow-xl" : "shadow-lg";

  return (
    <section
      id='home-hero'
      className='relative h-screen flex items-center justify-center overflow-hidden'
    >
      <div
        className='absolute inset-0 z-0'
        style={{
          transform: `translateY(${bgParallax}px) scale(${1.08 + heroProgress * 0.1})`,
          transition: "transform 120ms linear",
        }}
      >
        <Image
          src={HERO_IMAGE}
          alt='Nikhil Kubde - Professional modeling photo'
          fill
          className='object-cover md:object-top object-center scale-110'
          priority
          quality={90}
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/15' />
      </div>

      <div
        className='absolute inset-0 z-[1] bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70'
        style={{ transform: `translateY(${overlayParallax}px)` }}
      />

      <div
        className='relative z-10 text-center text-white px-4 max-w-6xl mx-auto'
        style={{
          opacity: headingOpacity,
          transform: `translateY(${safeY * 0.18}px) scale(${headingScale})`,
        }}
      >
        <div className='mb-6'>
          <span className='text-xs uppercase tracking-widest text-white/90 font-semibold px-4 py-2 border border-white/30 bg-white/10 backdrop-blur-sm inline-block'>
            Professional Model
          </span>
        </div>

        <h1 className='text-6xl md:text-8xl lg:text-9xl font-serif mb-6 text-white tracking-tight leading-none drop-shadow-2xl text-balance'>
          NIKHIL KUBDE
        </h1>

        <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8'></div>

        <p className='text-xl md:text-2xl lg:text-3xl mb-6 font-light tracking-wide text-gray-200'>
          Fashion • Editorial • Commercial
        </p>
        <p className='text-sm md:text-base text-gray-300 mb-4 tracking-wide'>
          Model & Mobile App Developer • 5+ Years Tech Experience
        </p>

        <p className='text-sm md:text-base text-gray-400 mb-10 tracking-wider uppercase'>
          Represented by{" "}
          <a
            href='https://castyou.in/nikhil-kubde/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-accentGold transition-colors underline underline-offset-4'
          >
            CastYou Agency
          </a>
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link
            href='/portfolio'
            className={`group relative px-8 py-4 bg-white text-dark font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden ${velocityClass}`}
          >
            <span className='relative z-10 flex items-center gap-2'>
              View Portfolio
              <span className='transform group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </span>
          </Link>
          <Link
            href='/contact'
            className='px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-dark transition-all duration-300 transform hover:scale-105 active:scale-95'
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer group'
        onClick={scrollToGallery}
        style={{
          opacity: Math.max(0, 1 - y / 400),
        }}
      >
        <div className='flex flex-col items-center gap-2 animate-bounce'>
          <span className='text-xs text-white/80 uppercase tracking-widest group-hover:text-white transition-colors'>
            Scroll
          </span>
          <div className='w-6 h-10 border-2 border-white/80 rounded-full flex justify-center p-2 group-hover:border-accent transition-colors'>
            <FaChevronDown className='w-3 h-3 text-white/80 group-hover:text-white animate-pulse' />
          </div>
        </div>
      </div>

      {/* Floating Particles - Subtle */}
      <div className='absolute inset-0 z-[1] pointer-events-none'>
        <div className='particle particle-1'></div>
        <div className='particle particle-2'></div>
        <div className='particle particle-3'></div>
      </div>
    </section>
  );
}
