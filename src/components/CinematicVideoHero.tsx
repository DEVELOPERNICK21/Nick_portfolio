"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Globe,
  Mail,
} from "lucide-react";
import { useSeamlessVideoFade } from "@/hooks/useSeamlessVideoFade";
import { HERO_IMAGE, PORTFOLIO_PDF, PORTFOLIO_PDF_FILENAME } from "@/data/media";
import { isDemo, site } from "@/config/site";

const HERO_VIDEO_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL ||
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

const instrumentSerif = { fontFamily: "var(--font-instrument), Georgia, serif" };

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function CinematicVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(motion.matches);
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  useSeamlessVideoFade(videoRef, !reduceMotion);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion) {
      video.style.opacity = "1";
    }
    void video.play().catch(() => {});
  }, [reduceMotion]);

  const scrollToGallery = () => {
    document.querySelector("#gallery-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value.trim();
    if (email) {
      router.push(`/contact?email=${encodeURIComponent(email)}`);
    } else {
      router.push("/contact");
    }
  };

  return (
    <section
      id='home-hero'
      className='relative min-h-screen bg-black overflow-hidden flex flex-col'
    >
      {/* Background video */}
      <div className='absolute inset-0 z-0'>
        <video
          ref={videoRef}
          className='absolute inset-0 w-full h-full object-cover translate-y-[17%]'
          src={HERO_VIDEO_URL}
          poster={HERO_IMAGE}
          autoPlay
          muted
          playsInline
          loop={reduceMotion}
          preload='metadata'
          aria-hidden='true'
        />
        <div className='absolute inset-0 bg-black/35' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70' />
      </div>

      {/* Navigation */}
      <nav className='relative z-20 pl-6 pr-6 py-6'>
        <div className='liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto'>
          <div className='flex items-center gap-8'>
            <Link
              href='/'
              className='flex items-center gap-2 text-white font-semibold text-lg'
            >
              <Globe size={24} aria-hidden='true' />
              <span>{site.name}</span>
            </Link>
            <div className='hidden md:flex items-center gap-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-white/80 hover:text-white transition-colors text-sm font-medium'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <a
              href={PORTFOLIO_PDF}
              download={PORTFOLIO_PDF_FILENAME}
              className='text-white text-sm font-medium hover:text-white/80 transition-colors hidden sm:inline'
            >
              Comp Card
            </a>
            <Link
              href='/contact'
              className='liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors'
            >
              Book
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className='relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]'>
        <h1
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight max-w-5xl'
          style={instrumentSerif}
        >
          Built for the lens
        </h1>

        <div className='max-w-xl w-full space-y-4'>
          <form
            onSubmit={handleEmailSubmit}
            className='liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3'
          >
            <input
              ref={emailRef}
              type='email'
              name='email'
              placeholder='Enter your email'
              className='flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-base min-w-0'
              aria-label='Email for booking inquiry'
            />
            <button
              type='submit'
              className='bg-white rounded-full p-3 text-black flex-shrink-0 hover:bg-white/90 transition-colors'
              aria-label='Submit email'
            >
              <ArrowRight size={20} />
            </button>
          </form>

          <p className='text-white text-sm leading-relaxed px-4'>
            {isDemo
              ? "Demo layout — your bio, agency, and comp card replace this on delivery."
              : `Available for fashion, editorial, lifestyle, and commercial campaigns. ${site.representationText} — book a shoot or download the comp card below.`}
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-3 pt-2'>
            <button
              type='button'
              onClick={scrollToGallery}
              className='liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors'
            >
              View portfolio
            </button>
            <a
              href={site.agency.url}
              {...(site.agency.url.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className='liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors'
            >
              {site.agency.profileLabel || site.agency.name}
            </a>
          </div>
        </div>
      </div>

      {/* Social footer */}
      <div className='relative z-10 flex justify-center gap-4 pb-12'>
        <a
          href={site.instagram.href}
          {...(site.instagram.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className='liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all'
          aria-label='Instagram'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
            <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
          </svg>
        </a>
        <a
          href={site.agency.url}
          {...(site.agency.url.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className='liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all'
          aria-label={`${site.agency.name} profile`}
        >
          <Globe size={20} />
        </a>
        <a
          href={`mailto:${site.email}`}
          className='liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all'
          aria-label='Email'
        >
          <Mail size={20} />
        </a>
      </div>
    </section>
  );
}
