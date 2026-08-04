"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ABOUT_STATS,
  DIGITAL_SHEET,
  type DigitalShot,
} from "@/data/aboutProfile";
import { site } from "@/config/site";
import ScrollReveal from "@/components/ScrollReveal";
import ImageLightbox from "@/components/ImageLightbox";
import {
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY_THUMB,
} from "@/lib/imagePlaceholders";

const PREVIEW_COUNT = 4; // mobile: first row (full-body set)

function DigitalThumb({
  shot,
  onOpen,
  sizes,
}: {
  shot: DigitalShot;
  onOpen: () => void;
  sizes: string;
}) {
  const isCloseup = shot.frame === "closeup";

  return (
    <button
      type="button"
      onClick={onOpen}
      className="ed-tap group text-left"
    >
      <div
        className={`relative overflow-hidden bg-[#e8e8ea] ${
          isCloseup ? "aspect-[4/5]" : "aspect-[2/3]"
        }`}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          className={
            isCloseup
              ? // Zoom + anchor top → crop legs/waist, keep head → chest
                "object-cover object-[center_12%] scale-[1.75] origin-top transition-transform duration-500 group-hover:scale-[1.8] group-active:scale-[1.78]"
              : "object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] group-active:scale-[1.02]"
          }
          sizes={sizes}
          quality={IMAGE_QUALITY_THUMB}
          loading="lazy"
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
        />
      </div>
      <p className="mt-1.5 text-center font-serif text-xs text-editorial-ink md:mt-2 md:text-sm lg:text-base">
        {shot.label}
      </p>
    </button>
  );
}

export default function AboutMeSection() {
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const mobileShots = expanded
    ? DIGITAL_SHEET
    : DIGITAL_SHEET.slice(0, PREVIEW_COUNT);
  const hiddenCount = DIGITAL_SHEET.length - PREVIEW_COUNT;

  const lightboxImages = DIGITAL_SHEET.map((s) => ({
    src: s.src,
    alt: s.alt,
    category: s.label,
  }));

  const openShot = (shot: DigitalShot) => {
    const index = DIGITAL_SHEET.findIndex((s) => s.src === shot.src);
    setLightboxIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  return (
    <section
      id="about"
      className="ed-section overflow-x-clip"
      data-chapter="About"
    >
      <div className="container-custom min-w-0">
        <ScrollReveal direction="up" delay={40}>
          <p className="ed-kicker">About Me</p>
          <h2 className="ed-heading mt-3">The model card</h2>
          <p className="ed-body mt-4 max-w-2xl">
            Agency-standard digitals — natural light, plain background, no
            filters. Front, back, side, and closer angles for casting.
          </p>
          <div className="ed-divider my-8 max-w-md" />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80} variant="stagger">
          <dl className="ed-surface mb-12 grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 md:mb-14 md:grid-cols-5 md:gap-5 md:p-8">
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 border-b border-black/5 pb-3 md:border-b-0 md:pb-0"
              >
                <dt className="text-[10px] uppercase tracking-[0.2em] text-editorial-accent sm:text-[11px]">
                  {stat.label}
                </dt>
                <dd className="mt-1 break-words text-sm font-medium text-editorial-ink sm:text-base">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={140}>
          {/* Digitals sheet — Posh / casting style */}
          <div className="overflow-hidden rounded-sm border border-editorial-ink/10 bg-white px-3 py-6 shadow-premium-soft sm:px-5 sm:py-8 md:px-8 md:py-10">
            <div className="mb-6 text-center md:mb-8">
              <h3 className="font-serif text-2xl text-editorial-ink md:text-3xl lg:text-4xl">
                Digitals
              </h3>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-editorial-accent md:text-[11px]">
                Casting standard
              </p>
              <p className="mt-2 text-xs text-editorial-muted md:text-sm">
                Natural light · Plain background · No filters. No distractions.
              </p>
            </div>

            {/* Mobile: 2-col so shots stay readable; expand for full sheet */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:hidden">
              {mobileShots.map((shot) => (
                <DigitalThumb
                  key={shot.src + shot.label + shot.frame}
                  shot={shot}
                  onOpen={() => openShot(shot)}
                  sizes="45vw"
                />
              ))}
            </div>

            {hiddenCount > 0 ? (
              <div className="mt-5 flex justify-center md:hidden">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="ed-tap border border-editorial-ink/15 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-editorial-ink transition-colors active:bg-editorial-bg"
                  aria-expanded={expanded}
                >
                  {expanded
                    ? "Show less"
                    : `Show more digitals (${hiddenCount})`}
                </button>
              </div>
            ) : null}

            {/* Desktop / tablet: full 4×2 casting sheet */}
            <div className="hidden gap-x-3 gap-y-5 md:grid md:grid-cols-4 lg:gap-x-4 lg:gap-y-6">
              {DIGITAL_SHEET.map((shot) => (
                <DigitalThumb
                  key={shot.src + shot.label + shot.frame}
                  shot={shot}
                  onOpen={() => openShot(shot)}
                  sizes="(min-width: 768px) 22vw, 25vw"
                />
              ))}
            </div>

            <p className="mt-6 text-center text-[10px] uppercase tracking-[0.35em] text-editorial-muted md:mt-8">
              {site.name} · Digitals
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((i) => (i + 1) % DIGITAL_SHEET.length)
        }
        onPrevious={() =>
          setLightboxIndex(
            (i) => (i - 1 + DIGITAL_SHEET.length) % DIGITAL_SHEET.length
          )
        }
        onGoTo={setLightboxIndex}
      />
    </section>
  );
}
