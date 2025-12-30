"use client";

import { useState, useEffect, useRef } from "react";
import ImageLightbox from "./ImageLightbox";
import OptimizedImage from "./OptimizedImage";

interface LifestyleItem {
  src: string;
  alt: string;
  category: string;
  height?: "short" | "medium" | "tall";
}

export default function LifestyleGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(6); // Start with fewer items for faster initial load
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const lifestyleItems: LifestyleItem[] = [
    {
      src: "/nikhil-kubde-extra-01.jpg",
      alt: "Lifestyle photography - Nikhil Kubde",
      category: "Lifestyle",
      height: "tall",
    },
    {
      src: "/nikhil-kubde-extra-02.jpg",
      alt: "Casual lifestyle shoot - Nikhil Kubde",
      category: "Lifestyle",
      height: "medium",
    },
    {
      src: "/nikhil-kubde-extra-03.jpg",
      alt: "Lifestyle editorial - Nikhil Kubde",
      category: "Lifestyle",
      height: "short",
    },
    {
      src: "/nikhil-kubde-extra-04.jpg",
      alt: "Everyday lifestyle photography - Nikhil Kubde",
      category: "Lifestyle",
      height: "tall",
    },
    {
      src: "/nikhil-kubde-extra-05.jpg",
      alt: "Lifestyle fashion - Nikhil Kubde",
      category: "Lifestyle",
      height: "medium",
    },
    {
      src: "/nikhil-kubde-extra-06.jpg",
      alt: "Lifestyle portrait - Nikhil Kubde",
      category: "Lifestyle",
      height: "short",
    },
    {
      src: "/nikhil-kubde-extra-07.jpg",
      alt: "Lifestyle editorial shoot - Nikhil Kubde",
      category: "Lifestyle",
      height: "tall",
    },
    {
      src: "/nikhil-kubde-extra-08.jpg",
      alt: "Casual lifestyle photography - Nikhil Kubde",
      category: "Lifestyle",
      height: "medium",
    },
    {
      src: "/nikhil-kubde-extra-09.jpg",
      alt: "Lifestyle brand photography - Nikhil Kubde",
      category: "Lifestyle",
      height: "short",
    },
    {
      src: "/nikhil-kubde-extra-10.jpg",
      alt: "Lifestyle fashion editorial - Nikhil Kubde",
      category: "Lifestyle",
      height: "tall",
    },
    {
      src: "/nikhil-kubde-extra-11.jpg",
      alt: "Everyday lifestyle shoot - Nikhil Kubde",
      category: "Lifestyle",
      height: "medium",
    },
    {
      src: "/nikhil-kubde-extra-15.jpg",
      alt: "Lifestyle brand shoot - Nikhil Kubde",
      category: "Lifestyle",
      height: "short",
    },
    {
      src: "/nikhil-kubde-extra-16.jpg",
      alt: "Portrait photography - Nikhil Kubde",
      category: "Lifestyle",
      height: "medium",
    },
    {
      src: "/nikhil-kubde-extra-17.jpg",
      alt: "Golden hour portrait - Nikhil Kubde",
      category: "Lifestyle",
      height: "tall",
    },
    {
      src: "/nikhil-kubde-extra-18.jpg",
      alt: "Landscape lifestyle photography - Nikhil Kubde",
      category: "Lifestyle",
      height: "tall",
    },
    {
      src: "/nikhil-kubde-extra-19.jpg",
      alt: "Adventure lifestyle photography - Nikhil Kubde",
      category: "Lifestyle",
      height: "medium",
    },
    {
      src: "/nikhil-kubde-extra-20.jpg",
      alt: "Lifestyle portrait - Nikhil Kubde",
      category: "Lifestyle",
      height: "short",
    },
  ];

  const displayedItems = lifestyleItems.slice(0, visibleItems);

  // Intersection Observer for smooth scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setIsInitialLoad(false);
            // Unobserve after first trigger for better performance
            if (entry.target) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.05, // Trigger earlier for smoother appearance
        rootMargin: "50px", // Reduced from 100px for more accurate triggering
      }
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
    setLightboxIndex(
      (prev) => (prev - 1 + displayedItems.length) % displayedItems.length
    );
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

  const loadMore = () => {
    // Smoothly load more items
    setVisibleItems((prev) => {
      const next = Math.min(prev + 6, lifestyleItems.length);
      // Scroll to maintain position after loading
      setTimeout(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const scrollY = window.scrollY;
          if (rect.top < window.innerHeight * 0.5) {
            window.scrollTo({
              top: scrollY + rect.top - window.innerHeight * 0.3,
              behavior: "smooth",
            });
          }
        }
      }, 100);
      return next;
    });
  };

  return (
    <>
      <section
        ref={sectionRef}
        className='bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 md:py-32 relative overflow-hidden'
      >
        {/* Subtle Background Elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-20 right-20 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl' />
          <div className='absolute bottom-20 left-20 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl' />
        </div>

        <div className='container-custom relative z-10'>
          {/* Section Header */}
          <div
            className={`text-center mb-16 md:mb-20 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className='inline-block mb-6'>
              <span className='text-xs uppercase tracking-widest text-gray-700 font-semibold px-4 py-2 border border-gray-300 bg-white backdrop-blur-sm shadow-sm'>
                Lifestyle
              </span>
            </div>
            <h2 className='text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-gray-900 tracking-tight'>
              LIFESTYLE
            </h2>
            <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6'></div>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light'>
              Capturing moments beyond the studio - everyday style and authentic
              moments
            </p>
          </div>

          {/* Masonry Grid - Optimized Loading */}
          <div
            className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              columnGap: "1.5rem",
              willChange: isInitialLoad ? "opacity" : "auto",
              minHeight: isInitialLoad ? "600px" : "auto",
            }}
          >
            {displayedItems.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className='break-inside-avoid mb-6 group relative cursor-pointer'
                onClick={() => openLightbox(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease-out ${
                    index * 0.05
                  }s, transform 0.6s ease-out ${index * 0.05}s`,
                  willChange: isVisible ? "auto" : "opacity, transform",
                }}
              >
                <div
                  className='relative overflow-hidden bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-200'
                  style={{ willChange: "transform" }}
                >
                  {/* Optimized Image - Only first 3 with priority */}
                  <div
                    className={`relative w-full aspect-[3/4] ${getHeightClass(
                      item.height
                    )}`}
                  >
                    <OptimizedImage
                      src={item.src}
                      alt={item.alt}
                      className={`object-cover transition-all duration-300 ${
                        hoveredIndex === index
                          ? "scale-105 brightness-110"
                          : "scale-100 brightness-100"
                      }`}
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
                      priority={index < 3}
                      onLoad={() => handleImageLoad(index)}
                    />

                    {/* Minimal Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    {/* Hover Content */}
                    <div
                      className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-300 ${
                        hoveredIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <div className='flex justify-start'>
                        <span className='px-4 py-2 bg-white/95 backdrop-blur-md text-gray-900 text-xs font-bold uppercase tracking-wider shadow-lg'>
                          {item.category}
                        </span>
                      </div>
                      <div className='space-y-2'>
                        <div
                          className='h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-300 delay-100'
                          style={{
                            width: hoveredIndex === index ? "100%" : "0%",
                          }}
                        ></div>
                        <p className='text-white text-sm font-medium uppercase tracking-wider'>
                          Click to View
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < lifestyleItems.length && (
            <div
              className={`text-center mt-12 transition-all duration-500 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={loadMore}
                className='group relative px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'
              >
                <span className='relative z-10 flex items-center gap-2'>
                  Load More ({lifestyleItems.length - visibleItems} remaining)
                  <span className='transform group-hover:translate-x-1 transition-transform'>
                    →
                  </span>
                </span>
              </button>
            </div>
          )}
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
