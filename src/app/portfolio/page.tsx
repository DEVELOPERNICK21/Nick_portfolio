import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import ScrollReveal from "@/components/ScrollReveal";
import ModelPortfolioDownload from "@/components/ModelPortfolioDownload";
import Link from "next/link";
import { PORTFOLIO_PDF, PORTFOLIO_PDF_FILENAME } from "@/data/media";

export const metadata: Metadata = {
  title: "Portfolio | Nikhil Kubde - Professional Model",
  description:
    "Professional modeling portfolio showcasing fashion, editorial, commercial, runway, and beauty work. Available for agency bookings and brand campaigns. High-quality photography demonstrating versatility and professional modeling expertise.",
  keywords: [
    "Nikhil Kubde portfolio",
    "model portfolio gallery",
    "fashion model portfolio",
    "editorial photography",
    "commercial modeling portfolio",
    "model work samples",
    "modeling agency portfolio",
    "professional model gallery",
    "fashion photography",
    "model comp card",
  ],
  openGraph: {
    title: "Portfolio - Model Gallery | Nikhil Kubde",
    description:
      "Professional modeling portfolio - Fashion, editorial, commercial, runway, and beauty work. Available for agency bookings and brand campaigns.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Model Gallery | Nikhil Kubde",
    description:
      "Professional modeling portfolio showcasing diverse work across fashion, editorial, commercial, and beauty categories.",
  },
};

export default function PortfolioPage() {
  return (
    <div className='min-h-screen premium-shell'>
      <div className='container-custom'>
        <ScrollReveal direction='fade' variant='scale-lift'>
          <div className='premium-section pt-24 md:pt-32 pb-10' data-chapter='Intro'>
            <div className='text-center premium-surface p-8 md:p-12 mb-20'>
              <p className='premium-kicker'>Work Archive</p>
              <h1 className='text-6xl md:text-8xl lg:text-9xl font-serif mb-6 mt-4 text-zinc-100 tracking-tight leading-none'>
                PORTFOLIO
              </h1>
              <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8'></div>
              <p className='premium-body max-w-3xl mx-auto'>
                Five featured campaign images. Download the full comp card PDF
                with singles and polaroids for agency review.
              </p>
              <div className='mt-8 flex flex-wrap justify-center gap-3'>
                <a href={PORTFOLIO_PDF} download={PORTFOLIO_PDF_FILENAME} className='premium-button'>
                  Download Comp Card PDF
                </a>
                <Link href='/library' className='premium-button-secondary'>
                  Photo Library
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <span className='scroll-chapter-label'>Image Sequence</span>
        <ScrollReveal direction='up' delay={100} variant='mask'>
          <div data-chapter='Gallery'>
            <PortfolioGrid />
          </div>
        </ScrollReveal>

        <ModelPortfolioDownload />

        {/* Clean Contact Section */}
        <ScrollReveal direction='fade' delay={200} variant='scale-lift'>
          <div className='mt-32 md:mt-40 mb-20' data-chapter='Contact'>
            <div className='text-center py-16 border-t border-gray-300 premium-surface'>
              <h2 className='text-4xl md:text-5xl font-serif mb-6 text-gray-900'>
                TOUCH BASE
              </h2>
              <p className='text-gray-600 mb-10 text-lg font-light'>
                I&apos;D LOVE TO HEAR FROM YOU
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/contact'
                  className='px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-300 inline-block shadow-lg hover:shadow-xl'
                >
                  Get In Touch
                </a>
                <a
                  href='https://castyou.in/nikhil-kubde/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 inline-block shadow-lg hover:shadow-xl'
                >
                  View Agency Profile
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
