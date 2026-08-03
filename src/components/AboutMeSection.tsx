"use client";

import Image from "next/image";
import { ABOUT_POLAROIDS, ABOUT_STATS } from "@/data/aboutProfile";
import ScrollReveal from "@/components/ScrollReveal";

function PolaroidRow({
  title,
  shots,
}: {
  title: string;
  shots: typeof ABOUT_POLAROIDS;
}) {
  return (
    <div>
      <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-editorial-accent">
        {title}
      </p>
      <div className="flex flex-wrap items-end justify-center gap-3 sm:gap-5 md:gap-6">
        {shots.map((shot, i) => (
          <figure
            key={shot.src}
            className={`relative w-[28%] min-w-[100px] max-w-[200px] shrink-0 bg-white p-2 pb-7 shadow-[0_12px_30px_rgba(43,43,43,0.15)] sm:max-w-[220px] ${shot.rotate} ${
              i === 1 ? "z-10 -translate-y-2 sm:-translate-y-4" : ""
            }`}
          >
            <div className="relative aspect-[2/3] overflow-hidden bg-editorial-bg">
              <Image
                src={shot.src}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 28vw, 220px"
              />
            </div>
            <figcaption className="mt-2 text-center text-[10px] uppercase tracking-widest text-editorial-muted">
              {shot.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function AboutMeSection() {
  const closeups = ABOUT_POLAROIDS.filter((p) => p.group === "closeup");
  const fullBody = ABOUT_POLAROIDS.filter((p) => p.group === "full");

  return (
    <section id="about" className="ed-section" data-chapter="About">
      <div className="container-custom">
        <p className="ed-kicker">About Me</p>
        <h2 className="ed-heading mt-3">The model card</h2>
        <p className="ed-body mt-4 max-w-2xl">
          Unretouched digitals — close-ups and full-body from front, three-quarter,
          and profile. The multi-angle set agencies expect on a comp card.
        </p>
        <div className="ed-divider my-8 max-w-md" />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:items-start">
          <ScrollReveal direction="up" delay={80}>
            <dl className="ed-surface grid grid-cols-2 gap-4 p-6 md:p-8">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className="border-b border-black/5 pb-3">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-editorial-accent">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-base font-medium text-editorial-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={160}>
            <div className="flex flex-col gap-10 py-2">
              <PolaroidRow title="Close-ups" shots={closeups} />
              <PolaroidRow title="Full body" shots={fullBody} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
