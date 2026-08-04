"use client";

import Image from "next/image";
import { INSTAGRAM_PROOF_CARDS, type ProofCard } from "@/data/instagramProof";
import ScrollReveal from "@/components/ScrollReveal";
import {
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY_CARD,
} from "@/lib/imagePlaceholders";

function ProofCardLarge({
  card,
  featured = false,
  delay = 80,
}: {
  card: ProofCard;
  featured?: boolean;
  delay?: number;
}) {
  const imageCount = Math.min(card.images.length, featured ? 4 : 2);
  const isMultiGrid = imageCount >= 3;
  const imageLinkProps = card.href
    ? {
        href: card.href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : null;

  return (
    <ScrollReveal direction="up" delay={delay} className="h-full">
      <article
        className={`ed-surface flex h-full flex-col overflow-hidden md:flex-row ${
          featured ? "border-editorial-accent/40" : ""
        }`}
      >
        <div
          className={`flex flex-col justify-center p-5 sm:p-8 md:p-10 lg:p-12 ${
            isMultiGrid
              ? "md:max-w-[38%] md:flex-none"
              : "md:flex-1 md:max-w-[48%]"
          }`}
        >
          <span className="ed-kicker">
            {featured ? "Featured brand" : "Proof"}
          </span>
          <h3 className="mt-3 font-serif text-2xl text-editorial-ink sm:mt-4 sm:text-3xl md:text-4xl">
            {card.brand}
          </h3>
          <p className="mt-2 text-lg font-medium leading-snug text-editorial-ink sm:mt-3 sm:text-xl md:text-2xl">
            {card.headline}
          </p>
          <ul className="mt-4 space-y-2 sm:mt-6">
            {card.metrics.map((m) => (
              <li
                key={m}
                className="text-sm text-editorial-muted before:mr-2 before:text-editorial-accent before:content-['•'] sm:text-base md:text-lg"
              >
                {m}
              </li>
            ))}
          </ul>
          {card.note ? (
            <p className="mt-4 text-[10px] uppercase tracking-wider text-editorial-accent sm:mt-6 sm:text-xs">
              {card.note}
            </p>
          ) : null}
        </div>

        {/* Mobile images — full width */}
        <div className="md:hidden">
          {imageCount === 1 ? (
            <div className="relative aspect-[9/16] max-h-[70vh] w-full bg-black/[0.04] p-3">
              {imageLinkProps ? (
                <a
                  {...imageLinkProps}
                  aria-label={`Open ${card.brand} reel`}
                  className="relative block h-full w-full overflow-hidden rounded-xl bg-editorial-bg"
                >
                  <Image
                    src={card.images[0].src}
                    alt={card.images[0].alt}
                    fill
                    className="object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                    sizes="100vw"
                    quality={IMAGE_QUALITY_CARD}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                  />
                </a>
              ) : (
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-editorial-bg">
                  <Image
                    src={card.images[0].src}
                    alt={card.images[0].alt}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                    quality={IMAGE_QUALITY_CARD}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 bg-black/[0.04] p-3">
              {card.images.slice(0, imageCount).map((img) => (
                <div
                  key={img.src + img.alt}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl bg-editorial-bg"
                >
                  {imageLinkProps ? (
                    <a
                      {...imageLinkProps}
                      aria-label={`Open ${card.brand} reel`}
                      className="relative block h-full w-full"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover object-[center_22%] transition-transform duration-300 hover:scale-[1.02]"
                        sizes="50vw"
                        quality={IMAGE_QUALITY_CARD}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={IMAGE_BLUR_DATA_URL}
                      />
                    </a>
                  ) : (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-[center_22%]"
                      sizes="50vw"
                      quality={IMAGE_QUALITY_CARD}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={IMAGE_BLUR_DATA_URL}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop — WeWork 4-up stays dense; 1–2 shots use filled frames (no empty gutters) */}
        {isMultiGrid ? (
          <div className="hidden min-h-[420px] flex-1 grid-cols-2 gap-3 bg-black/[0.03] p-5 md:grid lg:grid-cols-4">
            {card.images.slice(0, imageCount).map((img) => (
              <div
                key={img.src + img.alt}
                className="relative min-h-[340px] overflow-hidden rounded-xl bg-editorial-bg md:min-h-full"
              >
                {imageLinkProps ? (
                  <a
                    {...imageLinkProps}
                    aria-label={`Open ${card.brand} reel`}
                    className="relative block h-full w-full"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      quality={IMAGE_QUALITY_CARD}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={IMAGE_BLUR_DATA_URL}
                    />
                  </a>
                ) : (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    quality={IMAGE_QUALITY_CARD}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                  />
                )}
              </div>
            ))}
          </div>
        ) : imageCount === 2 ? (
          <div className="hidden flex-1 grid-cols-2 gap-3 bg-black/[0.03] p-4 md:grid lg:p-5">
            {card.images.slice(0, 2).map((img) => (
              <div
                key={img.src + img.alt}
                className="relative aspect-[3/4] overflow-hidden rounded-xl bg-editorial-bg"
              >
                {imageLinkProps ? (
                  <a
                    {...imageLinkProps}
                    aria-label={`Open ${card.brand} reel`}
                    className="relative block h-full w-full"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 30vw, 22vw"
                      quality={IMAGE_QUALITY_CARD}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={IMAGE_BLUR_DATA_URL}
                    />
                  </a>
                ) : (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 30vw, 22vw"
                    quality={IMAGE_QUALITY_CARD}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="hidden flex-1 items-stretch justify-end bg-black/[0.03] p-5 md:flex lg:p-6">
            <div className="relative ml-auto aspect-[9/16] h-full max-h-[560px] w-full max-w-[280px] overflow-hidden rounded-xl bg-editorial-bg shadow-premium-soft lg:max-w-[320px]">
              {imageLinkProps ? (
                <a
                  {...imageLinkProps}
                  aria-label={`Open ${card.brand} reel`}
                  className="relative block h-full w-full"
                >
                  <Image
                    src={card.images[0].src}
                    alt={card.images[0].alt}
                    fill
                    className="object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                    sizes="320px"
                    quality={IMAGE_QUALITY_CARD}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                  />
                </a>
              ) : (
                <Image
                  src={card.images[0].src}
                  alt={card.images[0].alt}
                  fill
                  className="object-cover object-top"
                  sizes="320px"
                  quality={IMAGE_QUALITY_CARD}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR_DATA_URL}
                />
              )}
            </div>
          </div>
        )}
      </article>
    </ScrollReveal>
  );
}

export default function InstagramProofSection() {
  return (
    <section id="instagram-proof" className="ed-section" data-chapter="Proof">
      <div className="container-custom">
        <ScrollReveal direction="up" delay={40}>
          <p className="ed-kicker">Instagram Presence</p>
          <h2 className="ed-heading mt-3">Content performance</h2>
          <p className="ed-body mt-4 max-w-2xl">
            Reach and brand results — not just a photo dump. Partner-posted reels
            note the publishing account so the numbers stay transparent.
          </p>
          <div className="ed-divider my-8 max-w-md" />
        </ScrollReveal>

        <div className="flex flex-col gap-6 sm:gap-8">
          {INSTAGRAM_PROOF_CARDS.map((card, index) => (
            <ProofCardLarge
              key={card.id}
              card={card}
              featured={Boolean(card.featured)}
              delay={80 + index * 60}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
