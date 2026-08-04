"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import {
  useElementScrollProgress,
  useScrollSignals,
} from "@/hooks/useScrollSignals";
import { HERO_IMAGE } from "@/data/media";
import { site } from "@/config/site";
import {
  IMAGE_BLUR_DATA_URL,
  IMAGE_QUALITY_HERO,
} from "@/lib/imagePlaceholders";

/**
 * Mobile: full-bleed cinematic hero.
 * Desktop: full-viewport editorial split — copy | portrait, edge to edge.
 */
export default function ParallaxHero() {
  const { y, velocity } = useScrollSignals();
  const heroProgress = useElementScrollProgress("home-hero");
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setShouldReduceMotion(motion.matches);
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  const scrollToAbout = () => {
    if (typeof window === "undefined") return;
    const about = document.querySelector("#about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const safeY = shouldReduceMotion ? 0 : y;
  const bgParallax = safeY * 0.22;
  const headingScale = shouldReduceMotion ? 1 : 1 - heroProgress * 0.08;
  const headingOpacity = shouldReduceMotion
    ? 1
    : Math.max(0.15, 1 - heroProgress * 1.2);
  const velocityClass =
    velocity === "fast"
      ? "shadow-2xl"
      : velocity === "medium"
        ? "shadow-xl"
        : "shadow-lg";

  const positioning =
    site.heroSubtitle ||
    site.aboutIntro.split(/(?<=\.)\s/)[0] ||
    site.tagline;

  return (
    <section
      id="home-hero"
      className="relative w-full overflow-hidden md:grid md:h-[100svh] md:min-h-[640px] md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:bg-[#FAF6EC]"
    >
      {/* ——— Mobile full-bleed ——— */}
      <div className="relative flex h-[100svh] items-end justify-center md:hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: shouldReduceMotion
              ? undefined
              : `translateY(${bgParallax}px)`,
            transition: "transform 120ms linear",
          }}
        >
          <Image
            src={HERO_IMAGE}
            alt={`${site.name} - Professional modeling photo`}
            fill
            className={`object-cover object-[center_18%] ${
              shouldReduceMotion ? "" : "ed-ken-slow"
            }`}
            priority
            fetchPriority="high"
            quality={IMAGE_QUALITY_HERO}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={IMAGE_BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/85" />
        </div>

        <div
          className="ed-hero-enter relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 text-center text-white"
          style={{
            opacity: headingOpacity,
            transform: `translateY(${safeY * 0.12}px) scale(${headingScale})`,
          }}
        >
          <div>
            <span className="inline-block rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-white/90 liquid-glass">
              {site.heroKicker}
            </span>
          </div>

          <h1 className="mt-5 font-display text-5xl leading-none tracking-tight text-white drop-shadow-2xl text-balance">
            {site.nameUpper}
          </h1>

          <div className="mx-auto mt-5 h-0.5 w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />

          <p className="mt-5 text-base font-light tracking-wide text-gray-200">
            {site.tagline}
          </p>

          <p className="mt-3 text-xs uppercase tracking-wider text-gray-400">
            Represented by{" "}
            <a
              href={site.agency.url}
              {...(site.agency.url.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-white underline underline-offset-4 transition-colors hover:text-accentGold"
            >
              {site.agency.name}
            </a>
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3">
            <Link
              href="/portfolio"
              className={`ed-tap group relative w-full max-w-xs overflow-hidden bg-white px-8 py-3.5 text-sm font-bold text-dark transition-all duration-300 hover:bg-gray-100 ${velocityClass}`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Portfolio
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
            <Link
              href="/contact"
              className="ed-tap w-full max-w-xs rounded-full px-8 py-3.5 text-sm font-semibold text-white liquid-glass transition-all duration-300 hover:bg-white/5"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 cursor-pointer group"
          onClick={scrollToAbout}
          style={{ opacity: Math.max(0, 1 - y / 400) }}
        >
          <div className="flex animate-bounce flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/80 transition-colors group-hover:text-white">
              Scroll
            </span>
            <div className="flex h-9 w-5 justify-center rounded-full border-2 border-white/80 p-1.5 transition-colors group-hover:border-accent">
              <FaChevronDown className="h-2.5 w-2.5 animate-pulse text-white/80 group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* ——— Desktop editorial split — full viewport width ——— */}
      <div className="relative z-10 hidden h-full flex-col justify-center px-10 py-24 lg:px-16 xl:px-24 md:flex">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#886D20]">
          {site.heroKicker}
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-[#2B2B2B] lg:text-6xl xl:text-7xl text-balance">
          {site.name}
        </h1>
        <div className="my-7 h-px max-w-[8rem] bg-gradient-to-r from-[#886D20] to-transparent" />
        <p className="text-lg font-medium tracking-wide text-[#2B2B2B] lg:text-xl">
          {site.tagline}
        </p>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[#5C5C5C]">
          {positioning}
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#5C5C5C]">
          Represented by{" "}
          <a
            href={site.agency.url}
            {...(site.agency.url.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="font-semibold text-[#2B2B2B] underline underline-offset-4 transition-colors hover:text-[#886D20]"
          >
            {site.agency.name}
          </a>
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/portfolio"
            className={`inline-flex items-center gap-2 bg-[#886D20] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#FAF6EC] transition hover:-translate-y-0.5 hover:bg-[#745C1C] ${velocityClass}`}
          >
            View Portfolio
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-[#2B2B2B]/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#2B2B2B] transition hover:border-[#886D20] hover:text-[#886D20]"
          >
            Get In Touch
          </Link>
        </div>

        <button
          type="button"
          onClick={scrollToAbout}
          className="mt-14 flex w-fit items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#5C5C5C] transition hover:text-[#886D20]"
        >
          Scroll
          <FaChevronDown className="h-3 w-3 animate-bounce" />
        </button>
      </div>

      <div className="relative hidden h-full min-h-[100svh] md:block">
        <div
          className="absolute inset-0"
          style={{
            transform: shouldReduceMotion
              ? undefined
              : `translateY(${safeY * 0.08}px)`,
            transition: "transform 120ms linear",
          }}
        >
          <Image
            src={HERO_IMAGE}
            alt={`${site.name} - Professional modeling photo`}
            fill
            className="object-cover object-top"
            priority
            fetchPriority="high"
            quality={IMAGE_QUALITY_HERO}
            sizes="55vw"
            placeholder="blur"
            blurDataURL={IMAGE_BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EC]/35 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
