"use client";

import Link from "next/link";
import { FaDownload, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import { PORTFOLIO_PDF, PORTFOLIO_PDF_FILENAME } from "@/data/media";

interface ModelPortfolioDownloadProps {
  id?: string;
  compact?: boolean;
  variant?: "default" | "editorial";
}

export default function ModelPortfolioDownload({
  id = "comp-card",
  compact = false,
  variant = "default",
}: ModelPortfolioDownloadProps) {
  const isEditorial = variant === "editorial";

  return (
    <section id={id} className={isEditorial ? "ed-section" : "premium-section pt-8"}>
      <div className='container-custom'>
        <div
          className={`${isEditorial ? "ed-surface" : "premium-surface"} overflow-hidden p-6 md:p-10`}
        >
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6'>
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
              <Link
                href={PORTFOLIO_PDF}
                target='_blank'
                rel='noopener noreferrer'
                className={
                  isEditorial ? "ed-button-secondary" : "premium-button-secondary"
                }
              >
                <FaExternalLinkAlt />
                Open Full Screen
              </Link>
            </div>
          </div>

          <div
            className={`relative w-full overflow-hidden rounded-2xl border border-zinc-700 bg-black ${
              compact ? "h-[min(70vh,720px)]" : "h-[min(85vh,920px)]"
            }`}
          >
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-zinc-900 to-black px-6 text-center'>
              <FaFilePdf className='text-4xl text-amber-400/80' aria-hidden />
              <p className='max-w-md text-sm text-zinc-400'>
                Open the full comp card in a new tab for fullscreen viewing or download it directly.
              </p>
              <a
                href={PORTFOLIO_PDF}
                target='_blank'
                rel='noopener noreferrer'
                className={isEditorial ? "ed-button" : "premium-button"}
              >
                Open PDF in New Tab
              </a>
            </div>
          </div>
          <p className='mt-4 text-center text-sm text-zinc-500'>
            If the viewer does not load, use Download PDF or Open Full Screen above.
          </p>
        </div>
      </div>
    </section>
  );
}
