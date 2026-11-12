"use client";

import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt, FaInstagram, FaPlay } from "react-icons/fa";
import CountUpText from "@/components/CountUpText";
import ScrollReveal from "@/components/ScrollReveal";
import { isDemo } from "@/config/site";
import { FEATURED_FILM as film } from "@/data/featuredWork";
import { IMAGE_BLUR_DATA_URL } from "@/lib/imagePlaceholders";

/**
 * Headline work: the Ram India Group short film.
 * The reel is a photo until tapped, then Instagram's player loads inside the page,
 * so the page ships no third-party script (or video) to people who never press play.
 */
export default function FeaturedFilm() {
  const [playing, setPlaying] = useState(false);

  if (isDemo) return null;

  return (
    <section id="featured-film" className="ed-section" data-chapter="New work">
      <div className="container-custom">
        <ScrollReveal direction="up" delay={40}>
          <p className="ed-kicker">{film.kicker}</p>
          <h2 className="ed-heading mt-3">{film.title}</h2>
          <div className="ed-divider my-8 max-w-md" />
        </ScrollReveal>

        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:gap-12">
          <ScrollReveal direction="up" delay={80}>
            <div>
              <p className="font-serif text-5xl leading-none text-editorial-ink sm:text-6xl md:text-7xl">
                <CountUpText text={film.stat} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-editorial-accent sm:text-sm">
                {film.statNote}
              </p>
              <p className="ed-body mt-5 max-w-xl">{film.description}</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {!playing ? (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="ed-button ed-tap"
                  >
                    <FaPlay aria-hidden size={12} />
                    Watch the film
                  </button>
                ) : null}
                <a
                  href={film.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-button-secondary ed-tap"
                >
                  <FaInstagram aria-hidden />
                  Open on Instagram
                  <FaExternalLinkAlt aria-hidden size={11} />
                </a>
              </div>
              <p className="mt-3 text-xs text-editorial-muted">
                Published by {film.handle}
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
                {film.bts.map((photo) => (
                  <li
                    key={photo.src}
                    className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black/5"
                  >
                    <div className="scroll-parallax absolute inset-0">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 45vw, 22vw"
                        quality={80}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={IMAGE_BLUR_DATA_URL}
                        className="object-cover object-[center_30%]"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-editorial-accent">
                Behind the scenes
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={140}>
            <div className="mx-auto w-full max-w-[540px] [container-type:inline-size]">
              {playing ? (
                <div className="overflow-hidden rounded-2xl border border-editorial-ink/10 bg-white shadow-premium">
                  <iframe
                    src={film.embedUrl}
                    title="Ram India Group short film on Instagram"
                    className="block w-full border-0"
                    style={{ height: "calc(100cqw * 0.5625 + 215px)", minHeight: 400 }}
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play the Ram India Group short film here"
                  className="group relative block aspect-video w-full overflow-hidden rounded-2xl shadow-premium"
                >
                  <Image
                    src={film.poster.src}
                    alt={film.poster.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 540px"
                    quality={80}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                    className="ed-img-zoom object-cover object-[center_58%]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-editorial-ink shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                    <FaPlay aria-hidden className="ml-1" />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-4 text-left text-white">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
                      Short film · 1:52
                    </span>
                    <span className="mt-1 block font-serif text-lg">
                      {film.brand}
                    </span>
                  </span>
                </button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
