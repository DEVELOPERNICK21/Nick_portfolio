"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  FaBehance,
  FaEnvelope,
  FaInstagram,
  FaPinterestP,
  FaRegPaperPlane,
  FaStar,
} from "react-icons/fa";
import { FiArrowUpRight, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Instagram Followers", value: 82000, suffix: "+" },
  { label: "Professional Shoots", value: 170, suffix: "+" },
  { label: "Brands Worked With", value: 42, suffix: "+" },
];

const galleryItems = [
  { title: "Fashion Editorial", image: "/portfolio-3.jpg", tag: "Fashion" },
  { title: "Fitness Campaign", image: "/portfolio-8.jpg", tag: "Fitness" },
  { title: "Lifestyle Portraits", image: "/gallery-5.jpg", tag: "Lifestyle" },
  { title: "Street Luxury", image: "/portfolio-11.jpg", tag: "Fashion" },
  { title: "Athletic Series", image: "/gallery-2.jpg", tag: "Fitness" },
  { title: "Urban Story", image: "/portfolio-6.jpg", tag: "Lifestyle" },
  { title: "Monochrome Story", image: "/portfolio-9.jpg", tag: "Fashion" },
  { title: "Peak Performance", image: "/portfolio-12.jpg", tag: "Fitness" },
  { title: "Clean Lifestyle", image: "/gallery-4.jpg", tag: "Lifestyle" },
];

const linkCards = [
  { label: "Behance", href: "https://www.behance.net/kkubde", icon: <FaBehance /> },
  {
    label: "Personal Website",
    href: "https://nick-portfolio-nine.vercel.app/",
    icon: <FiArrowUpRight />,
  },
  {
    label: "Pinterest",
    href: "https://in.pinterest.com/nickkubde/",
    icon: <FaPinterestP />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nikhil__kubde/",
    icon: <FaInstagram />,
  },
  { label: "Email", href: "mailto:nikhilkubde21@gmail.com", icon: <FaEnvelope /> },
];

const testimonials = [
  {
    quote:
      "Nikhil blends editorial confidence with clean brand storytelling. Every shot felt premium.",
    author: "Creative Director, FWD Studio",
  },
  {
    quote:
      "Highly disciplined on set, fast with direction, and camera-ready in every frame.",
    author: "Campaign Producer, Urban Fit",
  },
  {
    quote:
      "A rare model who understands both aesthetics and digital-first campaign goals.",
    author: "Brand Lead, Luxe Street",
  },
];

const experiencePillars = [
  {
    title: "Clear Brand Positioning",
    text: "Fashion, lifestyle and fitness identity is crystal clear within the first 5 seconds.",
    icon: <FiCheckCircle />,
  },
  {
    title: "Scroll Storytelling",
    text: "Each section unlocks intentionally as users scroll, driving attention and action.",
    icon: <HiOutlineSparkles />,
  },
  {
    title: "Performance + Premium",
    text: "Elegant motion with responsive behavior and optimized media loading.",
    icon: <FiTrendingUp />,
  },
];

function CountUpNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1500;
        const start = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className='text-4xl md:text-5xl font-bold text-amber-300'>
      {value.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function PremiumExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<
    "All" | "Fashion" | "Fitness" | "Lifestyle"
  >("All");
  const year = useMemo(() => new Date().getFullYear(), []);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const { scrollY, scrollYProgress } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 180]);
  const heroScale = useTransform(scrollY, [0, 700], [1, 1.08]);
  const storyY = useTransform(scrollY, [200, 1400], [70, -70]);
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.tag === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 14}px, ${e.clientY - 14}px)`;
    };

    const interactive = document.querySelectorAll("[data-magnetic='true']");
    const onEnter = () => cursor.classList.add("is-hovering");
    const onLeave = () => cursor.classList.remove("is-hovering");

    interactive.forEach((node) => {
      node.addEventListener("mouseenter", onEnter);
      node.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      interactive.forEach((node) => {
        node.removeEventListener("mouseenter", onEnter);
        node.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const idx = Number((visible.target as HTMLElement).dataset.sectionIndex);
          if (!Number.isNaN(idx)) setActiveSection(idx);
        }
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const registerSection = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el;
  };

  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index];
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={containerRef} className='bg-[#090503] text-zinc-100 overflow-x-hidden'>
      <motion.div className='premium-progress' style={{ scaleX: smoothProgress }} />
      <div ref={cursorRef} className='premium-cursor hidden md:block' />
      <div className='section-nav hidden lg:flex'>
        {["Hero", "Pillars", "Gallery", "Story", "Stats", "Book"].map(
          (label, index) => (
            <button
              key={label}
              type='button'
              onClick={() => scrollToSection(index)}
              className={`section-dot ${activeSection === index ? "section-dot-active" : ""}`}
              aria-label={`Go to ${label}`}
            >
              <span>{label}</span>
            </button>
          )
        )}
      </div>

      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className='fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none'
        >
          <div className='loader-nk'>NK</div>
        </motion.div>
      )}

      <section
        ref={registerSection(0)}
        data-section-index={0}
        className='relative min-h-screen flex items-center pt-24'
      >
        <motion.video
          style={{ y: heroY, scale: heroScale }}
          autoPlay
          muted
          loop
          playsInline
          className='absolute inset-0 h-full w-full object-cover'
          poster='/hero-image.jpg'
        >
          <source src='/intro-video.mp4' type='video/mp4' />
        </motion.video>
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#090503]' />

        <div className='container-custom relative z-10'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className='inline-flex rounded-full border border-amber-300/35 bg-amber-400/10 px-4 py-2 text-xs tracking-[0.28em] text-amber-200 uppercase'
          >
            India-based · Fashion · Lifestyle · Fitness
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className='mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight'
          >
            Nikhil Kubde
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='mt-5 max-w-2xl text-lg text-zinc-200/90'
          >
            Professional model from India crafting premium visual narratives for
            fashion editorials, lifestyle brands, and high-performance campaigns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.7 }}
            className='mt-7 inline-flex items-center gap-2 rounded-full border border-amber-200/35 bg-black/30 px-4 py-2 text-sm text-amber-100'
          >
            <FaStar className='text-amber-300' /> Available for bookings &
            campaigns
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
          >
            {linkCards.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                data-magnetic='true'
                className='premium-link-card'
              >
                <span className='text-xl text-amber-300'>{item.icon}</span>
                <span className='font-medium'>{item.label}</span>
                <FiArrowUpRight className='ml-auto text-lg text-amber-200/85' />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        ref={registerSection(1)}
        data-section-index={1}
        className='container-custom py-20 md:py-24'
      >
        <div className='grid gap-6 md:grid-cols-3'>
          {experiencePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className='rounded-2xl border border-amber-100/20 bg-black/35 p-6 backdrop-blur-md'
            >
              <div className='text-2xl text-amber-300'>{pillar.icon}</div>
              <h3 className='mt-4 text-xl font-semibold'>{pillar.title}</h3>
              <p className='mt-3 text-zinc-300 text-sm leading-relaxed'>
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        ref={registerSection(2)}
        data-section-index={2}
        className='container-custom py-20 md:py-28'
      >
        <div className='flex items-end justify-between mb-8'>
          <div>
            <p className='text-xs uppercase tracking-[0.24em] text-amber-300/70'>
              Portfolio Stream
            </p>
            <h2 className='text-3xl md:text-4xl font-semibold mt-3'>
              Horizontal Scroll Gallery
            </h2>
          </div>
        </div>
        <div className='mb-7 flex flex-wrap gap-3'>
          {(["All", "Fashion", "Fitness", "Lifestyle"] as const).map((category) => (
            <button
              key={category}
              type='button'
              data-magnetic='true'
              onClick={() => setActiveCategory(category)}
              className={`category-chip ${
                activeCategory === category ? "category-chip-active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory premium-scroll'>
          <AnimatePresence mode='wait'>
            {filteredGallery.map((item, idx) => (
              <motion.article
                key={`${item.title}-${activeCategory}`}
                initial={{ opacity: 0, y: 22, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className='premium-gallery-card snap-start'
                data-magnetic='true'
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={540}
                  height={420}
                  className='h-72 w-full object-cover'
                />
                <div className='p-5'>
                  <p className='text-xs tracking-[0.2em] uppercase text-amber-300/80'>
                    {item.tag}
                  </p>
                  <h3 className='mt-2 text-xl'>{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section
        ref={registerSection(3)}
        data-section-index={3}
        className='container-custom py-6 md:py-16'
      >
        <motion.div
          style={{ y: storyY }}
          className='rounded-3xl border border-amber-100/20 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-300/10 p-7 md:p-10'
        >
          <div className='grid md:grid-cols-2 gap-6 items-center'>
            <div>
              <p className='text-xs uppercase tracking-[0.24em] text-amber-300/70'>
                Scroll-Based Experience
              </p>
              <h2 className='text-2xl md:text-3xl font-semibold mt-3 leading-snug'>
                Every scroll reveals narrative, credibility and conversion points.
              </h2>
            </div>
            <p className='text-zinc-300 leading-relaxed'>
              Designed for agencies and brands: quick profile understanding, rich
              portfolio sampling, social trust, and a direct booking path with low
              friction.
            </p>
          </div>
        </motion.div>
      </section>

      <section
        ref={registerSection(4)}
        data-section-index={4}
        className='container-custom py-12 md:py-20'
      >
        <div className='grid gap-6 md:grid-cols-3'>
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='rounded-2xl border border-amber-200/20 bg-zinc-950/70 p-8 backdrop-blur-md'
            >
              <CountUpNumber end={item.value} suffix={item.suffix} />
              <p className='mt-2 text-zinc-300'>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='container-custom py-4 md:py-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className='rounded-2xl border border-amber-100/20 bg-black/35 p-8 md:p-10 min-h-[160px]'
        >
          <p className='text-xs uppercase tracking-[0.24em] text-amber-300/70'>
            Testimonials
          </p>
          <AnimatePresence mode='wait'>
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className='mt-4'
            >
              <p className='text-lg md:text-xl leading-relaxed'>
                “{testimonials[testimonialIndex].quote}”
              </p>
              <p className='mt-4 text-amber-200/85 text-sm'>
                {testimonials[testimonialIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      <section className='py-16 border-y border-amber-100/10 bg-black/35 overflow-hidden'>
        <div className='marquee-track'>
          {[
            "Nike",
            "Puma",
            "Levis",
            "Myntra",
            "H&M",
            "Zara",
            "Nykaa Men",
            "Ajio",
            "Adidas",
            "Lifestyle",
          ].map(
            (brand, idx) => (
              <span key={`${brand}-${idx}`} className='marquee-item'>
                {brand}
              </span>
            )
          )}
        </div>
      </section>

      <section
        ref={registerSection(5)}
        data-section-index={5}
        className='container-custom py-20 md:py-28'
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className='rounded-3xl border border-amber-200/20 bg-white/5 p-8 md:p-12 backdrop-blur-xl'
        >
          <div className='grid gap-10 lg:grid-cols-2'>
            <div>
              <p className='text-xs uppercase tracking-[0.25em] text-amber-300/70'>
                Book Nikhil
              </p>
              <h2 className='text-3xl md:text-4xl font-semibold mt-3'>
                Contact / Booking
              </h2>
              <p className='mt-4 text-zinc-300 max-w-md'>
                Let us discuss your next editorial, campaign or collaboration.
                Premium visuals, reliable timelines, and world-class execution.
              </p>
            </div>

            <form className='grid gap-4'>
              <input className='premium-input' type='text' placeholder='Your Name' />
              <input className='premium-input' type='email' placeholder='Email Address' />
              <input className='premium-input' type='text' placeholder='Brand / Agency' />
              <textarea
                className='premium-input min-h-[140px] resize-y'
                placeholder='Project details'
              />
              <button type='button' className='premium-send-btn' data-magnetic='true'>
                Send Booking Request <FaRegPaperPlane />
              </button>
            </form>
          </div>
          <div className='mt-8 grid gap-3 sm:grid-cols-3'>
            {["Share your brief", "Receive custom concept", "Shoot gets executed"].map(
              (step, idx) => (
                <div
                  key={step}
                  className='rounded-xl border border-amber-100/20 bg-black/25 p-4 text-sm text-zinc-300'
                >
                  <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-300/20 text-amber-200 mr-2'>
                    {idx + 1}
                  </span>
                  {step}
                </div>
              )
            )}
          </div>
        </motion.div>
      </section>

      <footer className='pb-12 text-center text-xs uppercase tracking-[0.18em] text-zinc-400'>
        © {year} Nikhil Kubde — Crafted for premium storytelling
      </footer>

      <style jsx global>{`
        @keyframes nkPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.85;
          }
        }

        @keyframes marqueeLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .loader-nk {
          font-size: clamp(3rem, 10vw, 6rem);
          letter-spacing: 0.22em;
          font-weight: 700;
          color: #fcd34d;
          animation: nkPulse 1.2s ease-in-out infinite;
        }

        .premium-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          border: 1px solid rgba(251, 191, 36, 0.7);
          background: rgba(251, 191, 36, 0.18);
          z-index: 80;
          pointer-events: none;
          transition: width 0.25s ease, height 0.25s ease, background 0.25s ease;
          backdrop-filter: blur(3px);
        }

        .premium-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #f59e0b, #fde68a);
          transform-origin: 0%;
          z-index: 90;
        }

        .section-nav {
          position: fixed;
          right: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 88;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          align-items: flex-end;
        }

        .section-dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          border: 1px solid rgba(253, 230, 138, 0.35);
          background: rgba(0, 0, 0, 0.45);
          transition: all 0.25s ease;
          position: relative;
        }

        .section-dot span {
          position: absolute;
          right: 1.1rem;
          top: 50%;
          transform: translateY(-50%);
          white-space: nowrap;
          font-size: 0.7rem;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: rgba(244, 244, 245, 0.7);
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }

        .section-dot:hover span,
        .section-dot-active span {
          opacity: 1;
        }

        .section-dot-active {
          width: 14px;
          height: 14px;
          background: #fbbf24;
          border-color: rgba(252, 211, 77, 0.95);
          box-shadow: 0 0 18px rgba(251, 191, 36, 0.45);
        }

        .premium-cursor.is-hovering {
          width: 46px;
          height: 46px;
          background: rgba(251, 191, 36, 0.3);
        }

        .premium-link-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(253, 230, 138, 0.25);
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          padding: 1rem;
          transition: all 0.3s ease;
        }

        .premium-link-card:hover {
          transform: translateY(-4px);
          border-color: rgba(252, 211, 77, 0.6);
          background: rgba(0, 0, 0, 0.55);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.25);
        }

        .premium-gallery-card {
          min-width: 270px;
          max-width: 270px;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(253, 230, 138, 0.2);
          background: rgba(9, 9, 11, 0.55);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .premium-gallery-card:hover {
          transform: translateY(-6px);
          border-color: rgba(252, 211, 77, 0.5);
        }

        .category-chip {
          border-radius: 999px;
          border: 1px solid rgba(253, 230, 138, 0.25);
          background: rgba(0, 0, 0, 0.22);
          padding: 0.45rem 0.95rem;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #f4f4f5;
          transition: all 0.25s ease;
        }

        .category-chip:hover {
          border-color: rgba(252, 211, 77, 0.55);
          color: #fde68a;
        }

        .category-chip-active {
          background: rgba(251, 191, 36, 0.2);
          border-color: rgba(252, 211, 77, 0.7);
          color: #fde68a;
        }

        .premium-input {
          border-radius: 0.75rem;
          border: 1px solid rgba(253, 230, 138, 0.25);
          background: rgba(0, 0, 0, 0.25);
          color: #f4f4f5;
          padding: 0.8rem 1rem;
          outline: none;
          transition: all 0.25s ease;
        }

        .premium-input::placeholder {
          color: #a1a1aa;
        }

        .premium-input:focus {
          border-color: rgba(252, 211, 77, 0.7);
          background: rgba(0, 0, 0, 0.4);
        }

        .premium-send-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 0.75rem;
          background: #fbbf24;
          color: #09090b;
          font-weight: 700;
          padding: 0.85rem 1rem;
          transition: all 0.25s ease;
        }

        .premium-send-btn:hover {
          filter: brightness(1.08);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.4);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          min-width: 200%;
          animation: marqueeLoop 22s linear infinite;
          gap: 2.5rem;
          padding: 0 2rem;
        }

        .marquee-item {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          color: rgba(253, 230, 138, 0.8);
          white-space: nowrap;
        }

        .premium-scroll::-webkit-scrollbar {
          height: 8px;
        }

        .premium-scroll::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.4);
          border-radius: 999px;
        }
      `}</style>
    </div>
  );
}
