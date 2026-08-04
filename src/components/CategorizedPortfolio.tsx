"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import {
  PORTFOLIO_CATEGORIES,
  type PortfolioCategoryId,
} from "@/data/portfolioCategories";
import ScrollReveal from "@/components/ScrollReveal";
import {
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY_THUMB,
} from "@/lib/imagePlaceholders";

export default function CategorizedPortfolio() {
  const [active, setActive] = useState<PortfolioCategoryId>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const category = useMemo(
    () =>
      PORTFOLIO_CATEGORIES.find((c) => c.id === active) ??
      PORTFOLIO_CATEGORIES[0],
    [active]
  );

  const images = category.images;

  return (
    <section id="portfolio" className="ed-section" data-chapter="Portfolio">
      <div className="container-custom">
        <ScrollReveal direction="up" delay={40}>
          <p className="ed-kicker">Portfolio</p>
          <h2 className="ed-heading mt-3">Selected work</h2>
          <p className="ed-body mt-4 max-w-2xl">
            Browse by look — All, Formal, Ethnic, or Casual.
          </p>
          <div className="ed-divider my-8 max-w-md" />
        </ScrollReveal>

        <div
          className="sticky top-16 z-20 -mx-4 mb-6 border-b border-black/5 bg-[#FAF6EC]/95 px-4 py-3 backdrop-blur-md md:static md:mx-0 md:mb-8 md:border-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none"
          role="tablist"
          aria-label="Portfolio categories"
        >
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-2">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const selected = cat.id === active;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setActive(cat.id);
                    setLightboxOpen(false);
                    setLightboxIndex(0);
                  }}
                  className={`ed-tap shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                    selected
                      ? "bg-editorial-accent text-white shadow-premium-soft"
                      : "border border-editorial-ink/20 text-editorial-ink active:border-editorial-accent"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {images.length === 0 ? (
          <p className="ed-body">[Add {category.label} shots]</p>
        ) : (
          <ScrollReveal key={active} direction="fade" variant="stagger">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 md:gap-4">
              {images.map((img, index) => {
                const featured = index === 0;
                return (
                  <button
                    key={img.src}
                    type="button"
                    aria-label={`View ${img.alt}`}
                    className={`ed-tap group relative overflow-hidden rounded-xl bg-black/5 ${
                      featured
                        ? "col-span-2 aspect-[4/5] md:col-span-1 md:aspect-[3/4]"
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
                      className="ed-img-zoom object-cover object-[center_18%]"
                      sizes={
                        featured
                          ? "(max-width: 768px) 100vw, 33vw"
                          : "(max-width: 768px) 50vw, 33vw"
                      }
                      quality={IMAGE_QUALITY_THUMB}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={IMAGE_BLUR_DATA_URL}
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent opacity-70 md:opacity-0 md:transition-opacity md:group-hover:opacity-100" />
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        )}

        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setLightboxIndex((i) => (i + 1) % Math.max(images.length, 1))
          }
          onPrevious={() =>
            setLightboxIndex(
              (i) => (i - 1 + images.length) % Math.max(images.length, 1)
            )
          }
          onGoTo={setLightboxIndex}
        />
      </div>
    </section>
  );
}
