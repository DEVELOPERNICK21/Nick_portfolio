"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import ScrollReveal from "@/components/ScrollReveal";
import { MAIN_PHOTOS, type PortfolioPhoto } from "@/data/media";
import { DUO_PHOTOS } from "@/data/duoPhotos";
import {
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY_THUMB,
} from "@/lib/imagePlaceholders";

const PREVIEW_COUNT = 3;

type LookbookShot = PortfolioPhoto & { kind: "solo" | "duo" };

function LookThumb({
  img,
  featured,
  onOpen,
}: {
  img: LookbookShot;
  featured?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`View ${img.alt}`}
      className={`ed-tap group relative overflow-hidden rounded-xl bg-black/5 ${
        featured
          ? "col-span-2 aspect-[4/5] md:col-span-2 md:aspect-[3/4]"
          : "aspect-[3/4]"
      }`}
      onClick={onOpen}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="ed-img-zoom object-cover object-[center_18%]"
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
      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent px-3 pb-3 pt-10">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
          {img.kind === "solo" ? "Solo" : "Duo"}
        </span>
      </span>
    </button>
  );
}

function ShotGrid({
  shots,
  onOpen,
  featuredFirst = false,
}: {
  shots: LookbookShot[];
  onOpen: (index: number) => void;
  featuredFirst?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4 md:gap-4">
      {shots.map((img, index) => (
        <LookThumb
          key={`${img.kind}-${img.src}`}
          img={img}
          featured={featuredFirst && index === 0}
          onOpen={() => onOpen(index)}
        />
      ))}
    </div>
  );
}

export default function DuoGallerySection() {
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const soloShots: LookbookShot[] = useMemo(
    () => MAIN_PHOTOS.map((p) => ({ ...p, kind: "solo" as const })),
    []
  );

  const duoShots: LookbookShot[] = useMemo(
    () => DUO_PHOTOS.map((p) => ({ ...p, kind: "duo" as const })),
    []
  );

  /** Agencies first see: 2 solo + 1 duo, then unlock everything */
  const previewShots = useMemo(
    () => [...soloShots.slice(0, 2), ...duoShots.slice(0, 1)],
    [soloShots, duoShots]
  );

  const allShots = useMemo(
    () => [...soloShots, ...duoShots],
    [soloShots, duoShots]
  );

  const lightboxImages = expanded ? allShots : previewShots;
  const hiddenCount = allShots.length - PREVIEW_COUNT;

  const openAt = (indexInVisible: number, pool: LookbookShot[]) => {
    const src = pool[indexInVisible]?.src;
    const globalIndex = lightboxImages.findIndex((s) => s.src === src);
    setLightboxIndex(globalIndex >= 0 ? globalIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="lookbook" className="ed-section" data-chapter="Lookbook">
      <div className="container-custom">
        <ScrollReveal direction="up" delay={40}>
          <p className="ed-kicker">Lookbook</p>
          <h2 className="ed-heading mt-3">Solo & duo</h2>
          <p className="ed-body mt-4 max-w-2xl">
            How I look alone — and with another talent. Built for agencies and
            brands casting singles or pair chemistry.
          </p>
          <div className="ed-divider my-8 max-w-md" />
        </ScrollReveal>

        {!expanded ? (
          <ScrollReveal direction="fade" variant="stagger">
            <ShotGrid
              shots={previewShots}
              featuredFirst
              onOpen={(i) => openAt(i, previewShots)}
            />
            {hiddenCount > 0 ? (
              <div className="mt-8 flex flex-col items-center gap-3 text-center">
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="ed-tap ed-button"
                  aria-expanded={false}
                >
                  Show all looks ({allShots.length})
                </button>
                <p className="text-xs uppercase tracking-[0.18em] text-editorial-muted">
                  {soloShots.length} solo · {duoShots.length} duo
                </p>
              </div>
            ) : null}
          </ScrollReveal>
        ) : (
          <div className="space-y-12 md:space-y-16">
            <ScrollReveal direction="fade" variant="stagger">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="ed-kicker">Solo</p>
                  <h3 className="mt-2 font-serif text-2xl text-editorial-ink md:text-3xl">
                    Single looks
                  </h3>
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-editorial-muted">
                  {soloShots.length} frames
                </p>
              </div>
              <ShotGrid
                shots={soloShots}
                featuredFirst
                onOpen={(i) => openAt(i, soloShots)}
              />
            </ScrollReveal>

            <ScrollReveal direction="fade" variant="stagger">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="ed-kicker">Duo</p>
                  <h3 className="mt-2 font-serif text-2xl text-editorial-ink md:text-3xl">
                    Chemistry shots
                  </h3>
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-editorial-muted">
                  {duoShots.length} frames
                </p>
              </div>
              <ShotGrid
                shots={duoShots}
                featuredFirst
                onOpen={(i) => openAt(i, duoShots)}
              />
            </ScrollReveal>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setExpanded(false);
                  setLightboxOpen(false);
                }}
                className="ed-tap border border-editorial-ink/15 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-editorial-ink transition-colors active:bg-editorial-bg"
                aria-expanded={true}
              >
                Show less
              </button>
            </div>
          </div>
        )}

        <ImageLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setLightboxIndex(
              (i) => (i + 1) % Math.max(lightboxImages.length, 1)
            )
          }
          onPrevious={() =>
            setLightboxIndex(
              (i) =>
                (i - 1 + lightboxImages.length) %
                Math.max(lightboxImages.length, 1)
            )
          }
          onGoTo={setLightboxIndex}
        />
      </div>
    </section>
  );
}
