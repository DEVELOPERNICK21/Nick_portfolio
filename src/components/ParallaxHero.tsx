"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToGallery = () => {
    if (typeof window === 'undefined') return;
    
    const gallery = document.querySelector("#gallery-section");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image with Parallax and Mouse Movement */}
      <div
        className='absolute inset-0 z-0'
        style={{
          transform: `translateY(${scrollY * 0.5}px) translate(${
            mousePosition.x
          }px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <Image
          src='/hero-image.jpg'
          alt='Nikhil Kubde - Professional modeling photo'
          fill
          className='object-cover scale-110'
          priority
          quality={90}
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/40' />
      </div>

      {/* Animated Gradient Overlay */}
      <div className='absolute inset-0 z-[1] bg-gradient-to-t from-dark via-transparent to-transparent opacity-50' />

      {/* Content with fade effect */}
      <div
        className='relative z-10 text-center text-white px-4 max-w-6xl mx-auto'
        style={{
          opacity: Math.max(0, 1 - scrollY / 600),
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className='mb-6'>
          <span className='text-xs uppercase tracking-widest text-accent/80 font-semibold px-4 py-2 border border-accent/30 bg-accent/10 backdrop-blur-sm inline-block'>
            Professional Model
          </span>
        </div>

        <h1 className='text-6xl md:text-8xl lg:text-9xl font-serif mb-6 text-white tracking-tight leading-none drop-shadow-2xl'>
          NIKHIL KUBDE
        </h1>

        <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8'></div>

        <p className='text-xl md:text-2xl lg:text-3xl mb-6 font-light tracking-wide text-gray-200'>
          Fashion • Editorial • Commercial
        </p>

        <p className='text-sm md:text-base text-gray-400 mb-10 tracking-wider uppercase'>
          Represented by{" "}
          <a
            href='https://castyou.in/nikhil-kubde/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-accent hover:text-accentGold transition-colors underline underline-offset-4'
          >
            CastYou Agency
          </a>
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link
            href='/portfolio'
            className='group relative px-8 py-4 bg-white text-dark font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden'
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
          opacity: Math.max(0, 1 - scrollY / 400),
        }}
      >
        <div className='flex flex-col items-center gap-2 animate-bounce'>
          <span className='text-xs text-white/80 uppercase tracking-widest group-hover:text-accent transition-colors'>
            Scroll
          </span>
          <div className='w-6 h-10 border-2 border-white/80 rounded-full flex justify-center p-2 group-hover:border-accent transition-colors'>
            <FaChevronDown className='w-3 h-3 text-white/80 group-hover:text-accent animate-pulse' />
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
