"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ImageLightbox from "./ImageLightbox";
import OptimizedImage from "./OptimizedImage";
import { useElementScrollProgress } from "@/hooks/useScrollSignals";
import { MAIN_PHOTOS } from "@/data/media";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  height?: "short" | "medium" | "tall";
}

export default function HomeGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [visibleItems, setVisibleItems] = useState(12);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionProgress = useElementScrollProgress("gallery-section");

  const galleryItems: GalleryItem[] = MAIN_PHOTOS;

  const displayedItems = galleryItems.slice(0, visibleItems);

  // Intersection Observer for smooth scroll animations
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % displayedItems.length);
  };

  const handlePrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + displayedItems.length) % displayedItems.length);
  };

  const handleGoTo = (index: number) => {
    setLightboxIndex(index);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const getHeightClass = (height?: string) => {
    switch (height) {
      case "short":
        return "md:aspect-[4/5]";
      case "tall":
        return "md:aspect-[3/5]";
      case "medium":
      default:
        return "md:aspect-[3/4]";
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        id='gallery-section'
        className='bg-transparent py-12 md:py-20'
      >
        <div className='container-custom'>
          {/* Section Header */}
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className='text-5xl md:text-7xl font-serif mb-4 text-zinc-100 tracking-tight text-balance'>
              PORTFOLIO
            </h2>
            <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6'></div>
            <p className='text-lg text-zinc-400 max-w-2xl mx-auto font-light'>
              Explore a selection of my latest work
            </p>
          </div>

          <div className='mb-10 h-1.5 w-full rounded-full bg-white/10 overflow-hidden'>
            <div
              className='h-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300 transition-[width] duration-200'
              style={{ width: `${Math.max(sectionProgress * 100, 8)}%` }}
            />
          </div>

          {/* Masonry Grid - Optimized */}
          <div
            className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ columnGap: "1.5rem" }}
          >
            {displayedItems.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className='break-inside-avoid mb-6 group relative cursor-pointer'
                onClick={() => openLightbox(index)}
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.8s ease-out ${index * 0.08}s both`
                    : "none",
                }}
              >
                <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 transition-all duration-500 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-premium-soft'>
                  {/* Optimized Image - Only first 4 with priority */}
                  <div className={`relative w-full aspect-[3/4] ${getHeightClass(item.height)}`}>
                    <OptimizedImage
                      src={item.src}
                      alt={item.alt}
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
                      priority={false}
                      onLoad={() => handleImageLoad(index)}
                    />

                    {/* Minimal Hover Overlay */}
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 flex items-end'>
                      <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='px-3 py-1 rounded-full bg-white/90 text-dark text-xs font-medium uppercase tracking-wider'>
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Portfolio Link */}
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href='/portfolio'
            className='inline-block text-zinc-400 hover:text-zinc-100 transition-colors text-sm uppercase tracking-wider underline underline-offset-4'
            >
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={displayedItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onGoTo={handleGoTo}
      />
    </>
  );
}
