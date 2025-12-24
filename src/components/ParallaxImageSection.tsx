"use client";

import { useEffect, useRef, useState } from "react";
import OptimizedImage from "./OptimizedImage";

interface ParallaxImageSectionProps {
  images: string[];
  title?: string;
  subtitle?: string;
}

export default function ParallaxImageSection({
  images,
  title = "FEATURED",
  subtitle,
}: ParallaxImageSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getParallaxOffset = (index: number) => {
    const speed = 0.3 + index * 0.1;
    const sectionTop = sectionRef.current?.offsetTop || 0;
    const scrollProgress = (scrollY - sectionTop + window.innerHeight) / window.innerHeight;
    return scrollProgress * 100 * speed;
  };

  return (
    <section
      ref={sectionRef}
      className='relative py-32 md:py-48 overflow-hidden bg-dark'
    >
      <div className='container-custom'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <h2 className='text-5xl md:text-7xl font-serif mb-4 text-white tracking-tight'>
            {title}
          </h2>
          <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6'></div>
          {subtitle && (
            <p className='text-lg text-gray-400 max-w-2xl mx-auto font-light'>
              {subtitle}
            </p>
          )}
        </div>

        {/* Parallax Image Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {images.slice(0, 6).map((src, index) => {
            const offset = getParallaxOffset(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className='relative aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer border border-white/10 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,212,255,0.25)]'
                style={{
                  transform: `translateY(${isEven ? offset : -offset * 0.7}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <OptimizedImage
                  src={src}
                  alt={`Featured image ${index + 1} - Nikhil Kubde`}
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                  priority={index < 2}
                />

                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6'>
                  <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                    <span className='text-accent text-lg font-semibold block mb-2'>
                      View Details
                    </span>
                    <div className='h-0.5 w-0 group-hover:w-24 bg-gradient-to-r from-accent to-accentGold transition-all duration-500'></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

