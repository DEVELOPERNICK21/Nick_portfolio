"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import ScrollReveal from "@/components/ScrollReveal";
import { DUO_PHOTOS } from "@/data/duoPhotos";

export default function DuoGallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section id="duo" className="ed-section pt-0" data-chapter="Duo">
      <div className="container-custom">
        <p className="ed-kicker">Range</p>
        <h2 className="ed-heading mt-3">Duo & chemistry</h2>
        <p className="ed-body mt-4 max-w-2xl">
          Campaign-ready frames with another talent — how I work in pairs for
          commercial, lifestyle, and menswear looks.
        </p>
        <div className="ed-divider my-8 max-w-md" />

        <ScrollReveal direction="fade" variant="mask">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {DUO_PHOTOS.map((img, index) => (
              <button
                key={img.src}
                type="button"
                aria-label={`View ${img.alt}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-black/5"
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ImageLightbox
          images={DUO_PHOTOS}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setLightboxIndex((i) => (i + 1) % Math.max(DUO_PHOTOS.length, 1))
          }
          onPrevious={() =>
            setLightboxIndex(
              (i) =>
                (i - 1 + DUO_PHOTOS.length) % Math.max(DUO_PHOTOS.length, 1)
            )
          }
          onGoTo={setLightboxIndex}
        />
      </div>
    </section>
  );
}
