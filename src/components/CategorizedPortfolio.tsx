"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import {
  PORTFOLIO_CATEGORIES,
  type PortfolioCategoryId,
} from "@/data/portfolioCategories";
import ScrollReveal from "@/components/ScrollReveal";

export default function CategorizedPortfolio() {
  const [active, setActive] = useState<PortfolioCategoryId>("formal");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const category = useMemo(
    () => PORTFOLIO_CATEGORIES.find((c) => c.id === active) ?? PORTFOLIO_CATEGORIES[0],
    [active]
  );

  const images = category.images;

  return (
    <section id="portfolio" className="ed-section" data-chapter="Portfolio">
      <div className="container-custom">
        <p className="ed-kicker">Portfolio</p>
        <h2 className="ed-heading mt-3">Selected work</h2>
        <p className="ed-body mt-4 max-w-2xl">
          Browse by look — Formal, Ethnic, or Casual.
        </p>
        <div className="ed-divider my-8 max-w-md" />

        <div
          className="mb-8 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Portfolio categories"
        >
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
                className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                  selected
                    ? "bg-editorial-accent text-white"
                    : "border border-editorial-ink/20 text-editorial-ink hover:border-editorial-accent"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {images.length === 0 ? (
          <p className="ed-body">[Add {category.label} shots]</p>
        ) : (
          <ScrollReveal direction="fade" variant="mask">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {images.map((img, index) => (
                <button
                  key={img.src}
                  type="button"
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
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </button>
              ))}
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
