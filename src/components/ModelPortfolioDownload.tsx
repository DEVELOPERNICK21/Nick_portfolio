"use client";

import Image from "next/image";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";
import { PORTFOLIO_PDF, PORTFOLIO_PDF_FILENAME } from "@/data/media";
import { IMAGE_BLUR_DATA_URL } from "@/lib/imagePlaceholders";

interface ModelPortfolioDownloadProps {
  id?: string;
  compact?: boolean;
  variant?: "default" | "editorial";
}

/**
 * Small page previews of the comp card PDF (cover, comp card, a runway page).
 * Regenerate these three images when the PDF changes:
 *   pdftoppm -r 80 -f <page> -l <page> -jpeg -jpegopt quality=78 <pdf> <out>
 */
const PREVIEWS = [
  { src: "/downloads/comp-preview-1.jpg", alt: "Comp card cover — Nikhil Kubde", rotate: "-rotate-[5deg]", lift: "translate-y-3" },
  { src: "/downloads/comp-preview-2.jpg", alt: "Composite card with measurements and six casting poses", rotate: "", lift: "scale-105 z-10" },
  { src: "/downloads/comp-preview-3.jpg", alt: "Selected work — Smart Bazaar runway", rotate: "rotate-[5deg]", lift: "translate-y-3" },
] as const;

export default function ModelPortfolioDownload({
  id = "comp-card",
  variant = "default",
}: ModelPortfolioDownloadProps) {
  const isEditorial = variant === "editorial";

  // Plain <a> on purpose: a Next <Link> would prefetch the whole PDF in the background.
  const openProps = {
    href: PORTFOLIO_PDF,
    target: "_blank",
    rel: "noopener noreferrer",
  } as const;

  return (
    <section id={id} className={isEditorial ? "ed-section" : "premium-section pt-8"}>
      <div className='container-custom'>
        <div
          className={`${isEditorial ? "ed-surface" : "premium-surface"} overflow-hidden p-6 md:p-10`}
        >
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8'>
            <div>
              <p className={isEditorial ? "ed-kicker" : "premium-kicker"}>
                Agency Comp Card
              </p>
              <h2
                className={`${isEditorial ? "ed-heading" : "premium-heading"} mt-3 text-3xl md:text-4xl`}
              >
                Portfolio PDF — Singles & Polaroids
              </h2>
              <p
                className={`${isEditorial ? "ed-body" : "premium-body"} mt-3 max-w-2xl`}
              >
                View or download the official comp card with measurements, singles,
                and polaroids — ready for casting and brand bookings.
              </p>
            </div>
            <div className='flex flex-wrap gap-3'>
              <a
                href={PORTFOLIO_PDF}
                download={PORTFOLIO_PDF_FILENAME}
                className={isEditorial ? "ed-button" : "premium-button"}
              >
                <FaDownload />
                Download PDF
              </a>
              <a
                {...openProps}
                className={
                  isEditorial ? "ed-button-secondary" : "premium-button-secondary"
                }
              >
                <FaExternalLinkAlt />
                Open Full Screen
              </a>
            </div>
          </div>

          <ScrollReveal direction='fade' variant='fan'>
            <div className='flex items-center justify-center -space-x-6 py-4 sm:-space-x-8'>
              {PREVIEWS.map((page) => (
                <div key={page.src} className='w-[34%] max-w-[240px]'>
                  <a
                    {...openProps}
                    aria-label='Open the full comp card PDF'
                    className={`relative block aspect-[1/1.414] overflow-hidden rounded-md bg-white shadow-premium ring-1 ring-black/10 transition-transform duration-500 ease-premium hover:-translate-y-2 ${page.rotate} ${page.lift}`}
                  >
                    <Image
                      src={page.src}
                      alt={page.alt}
                      fill
                      sizes='(max-width: 640px) 34vw, 240px'
                      quality={75}
                      loading='lazy'
                      placeholder='blur'
                      blurDataURL={IMAGE_BLUR_DATA_URL}
                      className='object-cover'
                    />
                  </a>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <p className='mt-4 text-center text-sm text-zinc-500'>
            Tap a page to open the full PDF.
          </p>
        </div>
      </div>
    </section>
  );
}
