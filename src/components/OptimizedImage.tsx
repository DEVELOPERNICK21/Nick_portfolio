"use client";

import Image from "next/image";
import { useState } from "react";

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

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    console.error(`Failed to load image: ${src}`);
  };

  return (
    <div className='relative w-full h-full'>
      {/* Minimal Loading Placeholder - Lightweight */}
      {isLoading && !hasError && (
        <div className='absolute inset-0 bg-secondary animate-pulse flex items-center justify-center'>
          <div className='w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin' />
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className='absolute inset-0 bg-secondary flex items-center justify-center'>
          <div className='text-gray-500 text-sm text-center p-4'>
            <p>Image unavailable</p>
          </div>
        </div>
      )}

      {/* Optimized Image with Next.js built-in optimization */}
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          className={`${className} transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          priority={priority}
          quality={85}
          onLoad={handleLoad}
          onError={handleError}
          placeholder='blur'
          blurDataURL={blurDataURL}
          loading={priority ? undefined : "lazy"}
        />
      )}
    </div>
  );
}
