"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY_HERO,
  IMAGE_QUALITY_THUMB,
} from "@/lib/imagePlaceholders";

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
}

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

  const imageQuality = priority ? IMAGE_QUALITY_HERO : IMAGE_QUALITY_THUMB;

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
    if (retryCount < 1) {
      setTimeout(() => {
        setRetryCount((prev) => prev + 1);
        setImageSrc(`${src}?retry=${retryCount + 1}&t=${Date.now()}`);
        setIsLoading(true);
        setHasError(false);
      }, 300);
    } else {
      setIsLoading(false);
      setHasError(true);
      if (process.env.NODE_ENV === "development") {
        console.error(
          `Failed to load image after ${retryCount + 1} attempts: ${src}`
        );
      }
    }
  };

  return (
    <div className="relative h-full w-full">
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-secondary">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white/60" />
        </div>
      )}

      {hasError && retryCount >= 1 && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
          <div className="p-2 text-center text-xs text-gray-400">
            <p className="opacity-50">Loading...</p>
          </div>
        </div>
      )}

      {!hasError && (
        <Image
          src={imageSrc}
          alt={alt}
          fill={fill}
          className={`${className} transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          sizes={
            sizes ||
            "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          }
          priority={priority}
          quality={imageQuality}
          onLoad={handleLoad}
          onError={handleError}
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
          loading={priority ? undefined : "lazy"}
        />
      )}
    </div>
  );
}
