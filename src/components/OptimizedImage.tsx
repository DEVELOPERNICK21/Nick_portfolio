"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
}

// Simple blur data URL for placeholder
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function OptimizedImage({
  src,
  alt,
  fill = true,
  className = "",
  sizes,
  priority = false,
  onLoad,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [imageSrc, setImageSrc] = useState(src);
  
  // Adaptive quality for Next.js image optimizer
  const imageQuality = priority ? 75 : 60;

  // Reset error state when src changes
  useEffect(() => {
    setImageSrc(src);
    setHasError(false);
    setIsLoading(true);
    setRetryCount(0);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    // Retry once quickly (reduced delay for faster loading)
    if (retryCount < 1) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setImageSrc(`${src}?retry=${retryCount + 1}&t=${Date.now()}`);
        setIsLoading(true);
        setHasError(false);
      }, 300); // Reduced from 1000ms to 300ms
    } else {
      setIsLoading(false);
      setHasError(true);
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.error(`Failed to load image after ${retryCount + 1} attempts: ${src}`);
      }
    }
  };

  return (
    <div className='relative w-full h-full'>
      {/* Minimal Loading Placeholder - Lightweight */}
      {isLoading && !hasError && (
        <div className='absolute inset-0 bg-secondary animate-pulse flex items-center justify-center'>
          <div className='w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin' />
        </div>
      )}

      {/* Error Fallback - Only show after all retries failed */}
      {hasError && retryCount >= 1 && (
        <div className='absolute inset-0 bg-secondary/50 flex items-center justify-center'>
          <div className='text-gray-400 text-xs text-center p-2'>
            <p className='opacity-50'>Loading...</p>
          </div>
        </div>
      )}

      {/* Optimized Image with Next.js built-in optimization */}
      {!hasError && (
        <Image
          src={imageSrc}
          alt={alt}
          fill={fill}
          className={`${className} transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"}
          priority={priority}
          quality={imageQuality}
          onLoad={handleLoad}
          onError={handleError}
          placeholder='blur'
          blurDataURL={blurDataURL}
          loading={priority ? undefined : "lazy"}
          unoptimized={false}
        />
      )}
    </div>
  );
}
