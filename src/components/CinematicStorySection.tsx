"use client";

import Link from "next/link";
import { useElementScrollProgress } from "@/hooks/useScrollSignals";

const storyBlocks = [
  {
    step: "01",
    title: "Editorial Presence",
    text: "A clean, confident visual identity designed for high-end fashion storytelling.",
  },
  {
    step: "02",
    title: "Campaign Reliability",
    text: "Professional execution, direction-friendly performance, and production discipline.",
  },
  {
    step: "03",
    title: "Digital-First Value",
    text: "Unique tech fluency for modern brands that need both aesthetics and strategy.",
  },
];

export default function CinematicStorySection() {
  const progress = useElementScrollProgress("cinematic-story");

  return (
    <section id='cinematic-story' data-chapter='Storyline' className='premium-section'>
      <div className='container-custom'>
        <div className='premium-surface overflow-hidden'>
          <div className='grid lg:grid-cols-[1.1fr_1fr]'>
            <div className='p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10'>
              <p className='premium-kicker'>Scroll Narrative</p>
              <h2 className='premium-heading mt-4'>
                An interactive story that feels cinematic and conversion-focused.
              </h2>
              <p className='premium-body mt-5 max-w-xl'>
                As users scroll, each chapter reveals positioning, trust, and booking
                intent. The motion language stays refined and deliberate.
              </p>
              <div className='mt-8'>
                <Link href='/contact' className='premium-button'>
                  Book Campaign Inquiry
                </Link>
              </div>
              <div className='mt-10 h-1.5 w-full rounded-full bg-white/10 overflow-hidden'>
                <div
                  className='h-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300 transition-[width] duration-200'
                  style={{ width: `${Math.max(6, progress * 100)}%` }}
                />
              </div>
            </div>

            <div className='relative p-8 md:p-12'>
              <div className='sticky top-24 space-y-4'>
                {storyBlocks.map((block, index) => {
                  const blockThreshold = (index + 1) / storyBlocks.length;
                  const isActive = progress >= blockThreshold - 0.2;
                  return (
                    <article
                      key={block.step}
                      className={`rounded-2xl border p-6 transition-all duration-500 ${
                        isActive
                          ? "border-amber-500/40 bg-zinc-900/80 text-zinc-100 shadow-premium"
                          : "border-white/10 bg-white/5 text-zinc-400"
                      }`}
                    >
                      <p className='text-[11px] uppercase tracking-[0.25em] opacity-70'>
                        Chapter {block.step}
                      </p>
                      <h3 className='mt-3 text-2xl font-serif'>{block.title}</h3>
                      <p className='mt-3 leading-relaxed opacity-85'>{block.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
