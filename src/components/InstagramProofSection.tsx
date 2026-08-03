"use client";

import Image from "next/image";
import { INSTAGRAM_PROOF_CARDS, type ProofCard } from "@/data/instagramProof";
import ScrollReveal from "@/components/ScrollReveal";

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

  return (
    <ScrollReveal direction="up" delay={delay} className="h-full">
      <article
        className={`ed-surface flex h-full flex-col overflow-hidden md:flex-row ${
          featured ? "border-editorial-accent/40" : ""
        }`}
      >
        <div className="flex flex-1 flex-col justify-center p-8 md:max-w-[42%] md:p-10 lg:p-12">
          <span className="ed-kicker">
            {featured ? "Featured brand" : "Proof"}
          </span>
          <h3 className="mt-4 font-serif text-3xl text-editorial-ink md:text-4xl">
            {card.brand}
          </h3>
          <p className="mt-3 text-xl font-medium leading-snug text-editorial-ink md:text-2xl">
            {card.headline}
          </p>
          <ul className="mt-6 space-y-2">
            {card.metrics.map((m) => (
              <li
                key={m}
                className="text-base text-editorial-muted before:mr-2 before:text-editorial-accent before:content-['•'] md:text-lg"
              >
                {m}
              </li>
            ))}
          </ul>
          {card.note ? (
            <p className="mt-6 text-xs uppercase tracking-wider text-editorial-accent">
              {card.note}
            </p>
          ) : null}
        </div>

        <div
          className={`grid min-h-[320px] flex-1 gap-3 bg-black/[0.03] p-4 sm:min-h-[380px] md:min-h-[420px] md:p-5 ${
            imageCount >= 3
              ? "grid-cols-2 sm:grid-cols-4"
              : imageCount === 2
                ? "grid-cols-2"
                : "grid-cols-1"
          }`}
        >
          {card.images.slice(0, imageCount).map((img) => (
            <div
              key={img.src + img.alt}
              className="relative min-h-[280px] overflow-hidden rounded-xl bg-editorial-bg sm:min-h-[340px] md:min-h-full"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={
                  featured
                    ? "object-cover object-center"
                    : "object-contain object-top"
                }
                sizes={
                  featured
                    ? "(max-width: 768px) 50vw, 25vw"
                    : "(max-width: 768px) 100vw, 55vw"
                }
              />
            </div>
          ))}
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function InstagramProofSection() {
  const featured = INSTAGRAM_PROOF_CARDS.filter((c) => c.featured);
  const rest = INSTAGRAM_PROOF_CARDS.filter((c) => !c.featured);

  return (
    <section id="instagram-proof" className="ed-section" data-chapter="Proof">
      <div className="container-custom">
        <p className="ed-kicker">Instagram Presence</p>
        <h2 className="ed-heading mt-3">Content performance</h2>
        <p className="ed-body mt-4 max-w-2xl">
          Reach and brand results — not just a photo dump. Partner-posted reels
          note the publishing account so the numbers stay transparent.
        </p>
        <div className="ed-divider my-8 max-w-md" />

        <div className="flex flex-col gap-8">
          {featured.map((card) => (
            <ProofCardLarge key={card.id} card={card} featured delay={80} />
          ))}
          {rest.map((card, index) => (
            <ProofCardLarge
              key={card.id}
              card={card}
              delay={120 + index * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
