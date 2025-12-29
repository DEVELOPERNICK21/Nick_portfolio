"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ImageLightbox from "./ImageLightbox";

interface PortfolioItem {
  src: string;
  alt: string;
  category: string;
  description: string;
  height?: "short" | "medium" | "tall";
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Editorial",
    "Fashion",
    "Commercial",
    "Runway",
    "Beauty",
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      src: "/portfolio-1.jpg",
      alt: "Editorial fashion shoot - Nikhil Kubde",
      category: "Editorial",
      description: "Professional editorial photography showcasing modern fashion",
      height: "tall",
    },
    {
      src: "/portfolio-2.jpg",
      alt: "High fashion campaign - Nikhil Kubde",
      category: "Fashion",
      description: "Luxury brand campaign featuring contemporary style",
      height: "medium",
    },
    {
      src: "/portfolio-3.jpg",
      alt: "Commercial advertisement - Nikhil Kubde",
      category: "Commercial",
      description: "Professional commercial photography for brand marketing",
      height: "short",
    },
    {
      src: "/portfolio-4.jpg",
      alt: "Fashion week runway - Nikhil Kubde",
      category: "Runway",
      description: "Striking runway presentation at international fashion week",
      height: "tall",
    },
    {
      src: "/portfolio-5.jpg",
      alt: "Beauty close-up - Nikhil Kubde",
      category: "Beauty",
      description: "Artistic beauty portrait highlighting natural features",
      height: "medium",
    },
    {
      src: "/portfolio-6.jpg",
      alt: "Magazine editorial - Nikhil Kubde",
      category: "Editorial",
      description: "Featured editorial spread in leading fashion magazine",
      height: "short",
    },
    {
      src: "/portfolio-7.jpg",
      alt: "Brand campaign - Nikhil Kubde",
      category: "Fashion",
      description: "High-end fashion campaign with creative direction",
      height: "tall",
    },
    {
      src: "/portfolio-8.jpg",
      alt: "Product photography - Nikhil Kubde",
      category: "Commercial",
      description: "Professional product endorsement photography",
      height: "medium",
    },
    {
      src: "/portfolio-9.jpg",
      alt: "Designer runway - Nikhil Kubde",
      category: "Runway",
      description: "Exclusive designer showcase on international runway",
      height: "short",
    },
    {
      src: "/portfolio-10.jpg",
      alt: "Beauty portrait - Nikhil Kubde",
      category: "Beauty",
      description: "Elegant beauty photography with artistic lighting",
      height: "tall",
    },
    {
      src: "/portfolio-11.jpg",
      alt: "Fashion editorial - Nikhil Kubde",
      category: "Editorial",
      description: "Sophisticated fashion editorial with storytelling",
      height: "medium",
    },
    {
      src: "/portfolio-12.jpg",
      alt: "Luxury brand - Nikhil Kubde",
      category: "Fashion",
      description: "Premium luxury brand campaign photography",
      height: "tall",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const lightboxItems = filteredItems;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxItems.length);
  };

  const handlePrevious = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length
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

  const categoryCounts = categories.reduce((acc, category) => {
    if (category === "All") {
      acc[category] = portfolioItems.length;
    } else {
      acc[category] = portfolioItems.filter(
        (item) => item.category === category
      ).length;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      <div className='w-full'>
        {/* Clean Filter Buttons - Minimal Style */}
        <div className='flex flex-wrap justify-center gap-2 md:gap-3 mb-16 pb-8 border-b border-gray-200 dark:border-white/10 transition-colors'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                gridRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`px-6 py-2 text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-400 dark:hover:border-gray-600"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className='ml-2 text-xs opacity-60'>
                  ({categoryCounts[category]})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Clean Pinterest-Style Masonry Grid */}
        <div
          ref={gridRef}
          className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6'
          style={{
            minHeight: filteredItems.length === 0 ? "200px" : "auto",
            columnGap: "1.5rem",
          }}
        >
          {filteredItems.length === 0 ? (
            <div className='col-span-full text-center py-20'>
              <p className='text-gray-600 dark:text-gray-400 text-lg mb-4 transition-colors'>
                No images found in this category
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className='px-6 py-2 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors'
              >
                View All Images
              </button>
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className='break-inside-avoid mb-6 group relative cursor-pointer'
                onClick={() => openLightbox(index)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
                }}
              >
                {/* Clean Card */}
                <div className='relative overflow-hidden bg-gray-100 dark:bg-secondary/30 transition-all duration-500 hover:opacity-90 border border-gray-200 dark:border-transparent rounded-lg'>
                  {/* Loading Placeholder */}
                  {!loadedImages.has(index) && (
                    <div className='absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-secondary dark:to-dark flex items-center justify-center z-10 transition-colors'>
                      <div className='w-12 h-12 border-2 border-gray-400 dark:border-white/20 border-t-gray-600 dark:border-t-white/60 rounded-full animate-spin transition-colors' />
                    </div>
                  )}

                  {/* Image Container */}
                  <div className={`relative w-full aspect-[3/4] ${getHeightClass(item.height)}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-105'
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
                      onLoad={() => handleImageLoad(index)}
                      loading={index < 6 ? "eager" : "lazy"}
                    />

                    {/* Subtle Overlay - Only on Hover */}
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-end'>
                      {/* Minimal Category Badge */}
                      <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                        <span className='px-3 py-1 bg-white/90 text-dark text-xs font-medium uppercase tracking-wider'>
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Clean Empty State */}
        {filteredItems.length > 0 &&
          filteredItems.length < portfolioItems.length && (
            <div className='text-center mt-16 py-8 border-t border-gray-200 dark:border-white/10 transition-colors'>
              <p className='text-gray-600 dark:text-gray-400 mb-2 transition-colors'>
                Showing {filteredItems.length} of {portfolioItems.length} images
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className='text-gray-700 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-sm underline underline-offset-4'
              >
                View All Images
              </button>
            </div>
          )}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={lightboxItems}
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
