"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ImageLightbox from "./ImageLightbox";
import OptimizedImage from "./OptimizedImage";

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

  const galleryItems: GalleryItem[] = [
    // Original gallery images
    { src: "/gallery-1.jpg", alt: "Fashion editorial shoot - Nikhil Kubde", category: "Editorial", height: "tall" },
    { src: "/gallery-2.jpg", alt: "Commercial campaign - Nikhil Kubde", category: "Commercial", height: "medium" },
    { src: "/gallery-3.jpg", alt: "Runway fashion show - Nikhil Kubde", category: "Runway", height: "short" },
    { src: "/gallery-4.jpg", alt: "Beauty photography - Nikhil Kubde", category: "Beauty", height: "tall" },
    { src: "/gallery-5.jpg", alt: "Fashion campaign - Nikhil Kubde", category: "Fashion", height: "medium" },
    { src: "/gallery-6.jpg", alt: "Editorial feature - Nikhil Kubde", category: "Editorial", height: "short" },
    // Portfolio images
    { src: "/portfolio-1.jpg", alt: "Editorial fashion shoot - Nikhil Kubde", category: "Editorial", height: "tall" },
    { src: "/portfolio-2.jpg", alt: "High fashion campaign - Nikhil Kubde", category: "Fashion", height: "medium" },
    { src: "/portfolio-3.jpg", alt: "Commercial advertisement - Nikhil Kubde", category: "Commercial", height: "short" },
    { src: "/portfolio-4.jpg", alt: "Fashion week runway - Nikhil Kubde", category: "Runway", height: "tall" },
    { src: "/portfolio-5.jpg", alt: "Beauty close-up - Nikhil Kubde", category: "Beauty", height: "medium" },
    { src: "/portfolio-6.jpg", alt: "Magazine editorial - Nikhil Kubde", category: "Editorial", height: "short" },
  ];

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
        className='bg-dark py-12 md:py-20'
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
            <h2 className='text-5xl md:text-7xl font-serif mb-4 text-white tracking-tight'>
              PORTFOLIO
            </h2>
            <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6'></div>
            <p className='text-lg text-gray-400 max-w-2xl mx-auto font-light'>
              Explore a selection of my latest work
            </p>
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
                <div className='relative overflow-hidden transition-all duration-300 hover:opacity-90'>
                  {/* Optimized Image - Only first 4 with priority */}
                  <div className={`relative w-full aspect-[3/4] ${getHeightClass(item.height)}`}>
                    <OptimizedImage
                      src={item.src}
                      alt={item.alt}
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
                      priority={index < 4}
                      onLoad={() => handleImageLoad(index)}
                    />

                    {/* Minimal Hover Overlay */}
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end'>
                      <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='px-3 py-1 bg-white/90 text-dark text-xs font-medium uppercase tracking-wider'>
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
              className='inline-block text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider underline underline-offset-4'
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
