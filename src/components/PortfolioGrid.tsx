"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import ImageLightbox from "./ImageLightbox";
import { MAIN_PHOTOS } from "@/data/media";

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
    "Commercial",
    "Lifestyle",
    "Fashion",
    "Campaign",
  ];

  const portfolioItems: PortfolioItem[] = MAIN_PHOTOS.map((photo) => ({
    ...photo,
    description: `${photo.category} campaign photography — Nikhil Kubde`,
  }));

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
        <div className='sticky top-20 z-20 mb-10 rounded-2xl border border-zinc-700/80 bg-zinc-950/80 px-4 py-4 backdrop-blur'>
          <div className='flex flex-wrap justify-center gap-2 md:gap-3'>
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
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "text-white bg-neutral-900 shadow-premium-soft"
                  : "text-gray-600 hover:text-gray-900 border border-transparent hover:border-stone-300"
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
        </div>

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
              <p className='text-gray-600 text-lg mb-4'>
                No images found in this category
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className='px-6 py-2 border border-gray-300 text-gray-900 hover:bg-gray-100 transition-colors'
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
                <div className='relative overflow-hidden bg-zinc-900 transition-all duration-500 hover:-translate-y-1 border border-zinc-700 rounded-2xl hover:shadow-premium-soft'>
                  {/* Loading Placeholder */}
                  {!loadedImages.has(index) && (
                    <div className='absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center z-10'>
                      <div className='w-12 h-12 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin' />
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
            <div className='text-center mt-16 py-8 border-t border-gray-200'>
              <p className='text-gray-600 mb-2'>
                Showing {filteredItems.length} of {portfolioItems.length} images
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className='text-gray-700 hover:text-gray-900 transition-colors text-sm underline underline-offset-4'
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
