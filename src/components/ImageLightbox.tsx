"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageLightboxProps {
  images: Array<{ src: string; alt: string; category?: string }>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onGoTo?: (index: number) => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  onGoTo,
}: ImageLightboxProps) {
  const currentImage = images[currentIndex];
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen || typeof window === 'undefined') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in'
      onClick={onClose}
    >
      {/* Close Button - Clean Style */}
      <button
        onClick={onClose}
        className='absolute top-6 right-6 z-60 p-3 hover:bg-white/10 transition-colors duration-300 group'
        aria-label='Close lightbox'
      >
        <FaTimes className='w-5 h-5 text-white group-hover:text-gray-300 transition-colors' />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className='absolute left-6 top-1/2 -translate-y-1/2 z-60 p-4 hover:bg-white/10 transition-colors duration-300 group'
          aria-label='Previous image'
        >
          <FaChevronLeft className='w-6 h-6 text-white group-hover:text-gray-300 transition-colors' />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className='absolute right-6 top-1/2 -translate-y-1/2 z-60 p-4 hover:bg-white/10 transition-colors duration-300 group'
          aria-label='Next image'
        >
          <FaChevronRight className='w-6 h-6 text-white group-hover:text-gray-300 transition-colors' />
        </button>
      )}

      {/* Image Container - Clean */}
      <div
        className='relative max-w-7xl max-h-[95vh] w-full h-full mx-6 flex items-center justify-center'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='relative w-full h-full flex flex-col items-center justify-center'>
          {/* Loading State */}
          {!imageLoaded && (
            <div className='absolute inset-0 flex items-center justify-center z-10'>
              <div className='w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin' />
            </div>
          )}

          {/* Main Image */}
          <div className='relative w-full h-full max-w-6xl max-h-[85vh]'>
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className='object-contain transition-opacity duration-500'
              priority
              sizes='90vw'
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Clean Image Info */}
          {images.length > 1 && (
            <div className='mt-8 text-center'>
              <p className='text-white text-sm tracking-wider uppercase'>
                {currentImage.category && `${currentImage.category} • `}
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Clean Navigation Dots */}
      {images.length > 1 && images.length <= 12 && (
        <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 z-60'>
          <div className='flex gap-2'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onGoTo) {
                    onGoTo(index);
                  }
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/40 hover:bg-white/60 w-1"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
