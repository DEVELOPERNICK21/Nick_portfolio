"use client";

import { useEffect, useRef, useState } from "react";
import OptimizedImage from "./OptimizedImage";
import ImageLightbox from "./ImageLightbox";

interface FloatingImage {
  src: string;
  alt: string;
  x: number;
  y: number;
  size: "small" | "medium" | "large";
  delay: number;
  parallaxSpeed: number;
}

export default function FloatingImageGallery() {
  const [images, setImages] = useState<FloatingImage[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // Generate random floating images from available gallery
  useEffect(() => {
    const galleryImages = [
      "/gallery-1.jpg",
      "/gallery-2.jpg",
      "/gallery-3.jpg",
      "/portfolio-1.jpg",
      "/portfolio-2.jpg",
      "/portfolio-3.jpg",
      "/nikhil-kubde-extra-01.jpg",
      "/nikhil-kubde-extra-02.jpg",
      "/nikhil-kubde-extra-03.jpg",
      "/nikhil-kubde-extra-04.jpg",
    ];

    const floatingImages: FloatingImage[] = galleryImages.slice(0, 6).map((src, index) => ({
      src,
      alt: `Floating gallery image ${index + 1} - Nikhil Kubde`,
      x: 10 + index * 15 + Math.random() * 10,
      y: 20 + (index % 3) * 30,
      size: (["small", "medium", "large"] as const)[index % 3],
      delay: index * 150,
      parallaxSpeed: 0.2 + (index % 3) * 0.15,
    }));

    setImages(floatingImages);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    setWindowHeight(window.innerHeight);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "w-32 h-48 md:w-40 md:h-56";
      case "large":
        return "w-48 h-72 md:w-64 md:h-96";
      default:
        return "w-40 h-60 md:w-52 md:h-80";
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section
        ref={containerRef}
        className='relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50'
      >
        {/* Background Gradient */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/30 to-transparent' />

        <div className='container-custom relative z-10'>
          {/* Section Title */}
          <div className='text-center mb-20'>
            <h2 className='text-5xl md:text-7xl font-serif mb-4 text-gray-900 tracking-tight'>
              MOMENTS
            </h2>
            <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6'></div>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto font-light'>
              Scroll to explore interactive gallery
            </p>
          </div>

          {/* Floating Images Grid */}
          <div className='relative min-h-[800px] md:min-h-[1000px]'>
            {images.map((image, index) => {
              const sectionTop = containerRef.current?.offsetTop || 0;
              const innerHeight = windowHeight || (typeof window !== 'undefined' ? window.innerHeight : 800);
              const scrollProgress = Math.max(0, (scrollY - sectionTop + innerHeight * 0.5) / innerHeight);
              const parallaxY = scrollProgress * 200 * image.parallaxSpeed;
              const floatOffset = Math.sin((scrollY * 0.01) + image.delay) * 15;
              const rotation = Math.sin((scrollY * 0.008) + image.delay) * 3;

              return (
                <div
                  key={index}
                  className='absolute group cursor-pointer parallax-element'
                  style={{
                    left: `${image.x}%`,
                    top: `${image.y}%`,
                    transform: `translateY(${parallaxY + floatOffset}px) rotate(${rotation}deg)`,
                    transition: "transform 0.1s ease-out",
                    willChange: "transform",
                  }}
                  onClick={() => openLightbox(index)}
                >
                  <div
                    className={`${getSizeClasses(
                      image.size
                    )} relative overflow-hidden rounded-lg shadow-2xl border border-gray-200 hover:border-gray-400 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:z-50`}
                  >
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className='object-cover transition-transform duration-700 group-hover:scale-110'
                      priority={index < 2}
                    />

                    {/* Hover Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                      <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                        <span className='text-white text-xs font-semibold uppercase tracking-wider'>
                          View
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {images.length > 0 && (
        <ImageLightbox
          images={images.map((img) => ({ src: img.src, alt: img.alt }))}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setLightboxIndex((prev) => (prev + 1) % images.length)
          }
          onPrevious={() =>
            setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
          }
          onGoTo={(index) => setLightboxIndex(index)}
        />
      )}
    </>
  );
}

