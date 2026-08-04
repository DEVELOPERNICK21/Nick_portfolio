"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import ScrollReveal from "@/components/ScrollReveal";
import { DUO_PHOTOS } from "@/data/duoPhotos";
import {
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY_THUMB,
} from "@/lib/imagePlaceholders";

export default function DuoGallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section id="duo" className="ed-section" data-chapter="Duo">
      <div className="container-custom">
        <ScrollReveal direction="up" delay={40}>
          <p className="ed-kicker">Range</p>
          <h2 className="ed-heading mt-3">Duo & chemistry</h2>
          <p className="ed-body mt-4 max-w-2xl">
            Campaign-ready frames with another talent — how I work in pairs for
            commercial, lifestyle, and menswear looks.
          </p>
          <div className="ed-divider my-8 max-w-md" />
        </ScrollReveal>

        <ScrollReveal direction="fade" variant="stagger">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4 md:gap-4">
            {DUO_PHOTOS.map((img, index) => {
              const featured = index === 0;
              return (
                <button
                  key={img.src}
                  type="button"
                  aria-label={`View ${img.alt}`}
                  className={`ed-tap group relative overflow-hidden rounded-xl bg-black/5 ${
                    featured
                      ? "col-span-2 aspect-[4/5] md:col-span-2 md:aspect-[3/4]"
                      : "aspect-[3/4]"
                  }`}
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="ed-img-zoom object-cover object-[center_20%]"
                    sizes={
                      featured
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 50vw, 25vw"
                    }
                    quality={IMAGE_QUALITY_THUMB}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-active:opacity-100 md:group-hover:opacity-100" />
                </button>
              );
            })}
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
