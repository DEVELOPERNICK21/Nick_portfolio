import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portfolio | Nikhil Kubde - Professional Model",
  description:
    "Browse Nikhil Kubde's complete modeling portfolio featuring fashion, editorial, commercial, runway, and beauty work. Professional photography showcasing diverse modeling expertise.",
  keywords: [
    "Nikhil Kubde portfolio",
    "fashion model portfolio",
    "editorial photography",
    "commercial modeling",
    "runway model",
    "beauty photography",
  ],
  openGraph: {
    title: "Portfolio - Nikhil Kubde | Professional Model",
    description:
      "Explore Nikhil Kubde's diverse modeling portfolio across fashion, editorial, commercial, runway, and beauty categories.",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <div className='min-h-screen bg-dark'>
      <div className='container-custom'>
        {/* Clean Hero Section - Reference Style */}
        <ScrollReveal direction='fade'>
          <div className='pt-20 md:pt-32 pb-16 md:pb-24'>
            <div className='text-center mb-20'>
              <h1 className='text-6xl md:text-8xl lg:text-9xl font-serif mb-6 text-white tracking-tight leading-none'>
                PORTFOLIO
              </h1>
              <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8'></div>
              <p className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed'>
                A curated selection of professional work across fashion,
                editorial, commercial, runway, and beauty photography
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <ScrollReveal direction='up' delay={100}>
          <PortfolioGrid />
        </ScrollReveal>

        {/* Clean Contact Section */}
        <ScrollReveal direction='fade' delay={200}>
          <div className='mt-32 md:mt-40 mb-20'>
            <div className='text-center py-16 border-t border-white/10'>
              <h2 className='text-4xl md:text-5xl font-serif mb-6 text-white'>
                TOUCH BASE
              </h2>
              <p className='text-gray-400 mb-10 text-lg font-light'>
                I&apos;D LOVE TO HEAR FROM YOU
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/contact'
                  className='px-8 py-4 bg-white text-dark font-semibold hover:bg-gray-200 transition-colors duration-300 inline-block'
                >
                  Get In Touch
                </a>
                <a
                  href='https://castyou.in/nikhil-kubde/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-dark transition-all duration-300 inline-block'
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
