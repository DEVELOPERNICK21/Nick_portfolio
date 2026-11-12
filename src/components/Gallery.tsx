"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MAIN_PHOTOS } from "@/data/media";

export default function Gallery() {
  const images = MAIN_PHOTOS.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    category: photo.category,
  }));

  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selected frames across ethnic, lifestyle, and campaign looks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.src}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="relative aspect-[3/4] overflow-hidden reveal opacity-0 translate-y-8 transition-all duration-700"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm uppercase tracking-wider">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-primary">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
