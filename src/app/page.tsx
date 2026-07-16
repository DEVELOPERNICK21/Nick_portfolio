import dynamic from "next/dynamic";
import ParallaxHero from "@/components/ParallaxHero";
import HomeGallery from "@/components/HomeGallery";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";
import { MAIN_PHOTOS } from "@/data/media";
import { createHomeJsonLd } from "@/config/jsonLd";

const sectionFallback = (
  <div className='premium-section container-custom' aria-hidden>
    <div className='h-40 animate-pulse rounded-2xl bg-white/5' />
  </div>
);

// Below-fold sections: client-only to shrink initial JS and defer heavy galleries
const FloatingImageGallery = dynamic(
  () => import("@/components/FloatingImageGallery"),
  { ssr: false, loading: () => sectionFallback }
);

const ParallaxImageSection = dynamic(
  () => import("@/components/ParallaxImageSection"),
  { ssr: false, loading: () => sectionFallback }
);

const LifestyleGallery = dynamic(
  () => import("@/components/LifestyleGallery"),
  { ssr: false, loading: () => sectionFallback }
);

const Stats = dynamic(() => import("@/components/Stats"), {
  ssr: false,
  loading: () => sectionFallback,
});

const CTA = dynamic(() => import("@/components/CTA"), {
  ssr: false,
  loading: () => sectionFallback,
});

const InstagramFollow = dynamic(() => import("@/components/InstagramFollow"), {
  ssr: false,
  loading: () => sectionFallback,
});

const TechAdvantage = dynamic(() => import("@/components/TechAdvantage"), {
  ssr: false,
  loading: () => sectionFallback,
});

const VideoReelSection = dynamic(
  () => import("@/components/VideoReelSection"),
  { ssr: false, loading: () => sectionFallback }
);

const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection"),
  { ssr: false, loading: () => sectionFallback }
);

const CinematicStorySection = dynamic(
  () => import("@/components/CinematicStorySection"),
  { ssr: false, loading: () => sectionFallback }
);

const ModelPortfolioDownload = dynamic(
  () => import("@/components/ModelPortfolioDownload"),
  { ssr: false, loading: () => sectionFallback }
);

export default function Home() {
  const featuredImages = MAIN_PHOTOS.map((photo) => photo.src);

  return (
    <div className='premium-shell'>
      {/* JSON-LD Structured Data for SEO - Multiple Schema Types */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createHomeJsonLd()),
        }}
      />

      <ScrollProgress />

      <ParallaxHero />

      <section
        className='premium-section container-custom'
        id='gallery-section'
        data-chapter='Gallery'
      >
        <span className='scroll-chapter-label'>Curated Work</span>
        <ScrollReveal direction='up' delay={100} variant='mask'>
          <HomeGallery />
        </ScrollReveal>
      </section>

      <section className='premium-section' data-chapter='Story'>
        <div className='container-custom'>
          <ScrollReveal direction='fade' variant='stagger'>
            <div className='premium-surface p-8 md:p-12'>
              <p className='premium-kicker'>Visual Storytelling</p>
              <h2 className='premium-heading mt-4'>A cinematic profile built for agencies</h2>
              <p className='premium-body mt-4 max-w-3xl'>
                Scroll to discover campaign-ready visuals, technical credibility,
                and fast booking pathways designed for high-intent brand teams.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CinematicStorySection />

      <section className='premium-section' data-chapter='Interactive'>
        <div className='container-custom'>
          <span className='scroll-chapter-label'>Interactive Stream</span>
          <FloatingImageGallery />
        </div>
      </section>

      <section className='premium-section' data-chapter='Featured'>
        <div className='container-custom'>
          <span className='scroll-chapter-label'>Featured Motion</span>
          <ParallaxImageSection
            images={featuredImages}
            title='FEATURED'
            subtitle='Immersive scroll experience with parallax effects'
          />
        </div>
      </section>

      <section className='premium-section' data-chapter='Lifestyle'>
        <div className='container-custom'>
          <LifestyleGallery />
        </div>
      </section>

      <VideoReelSection />

      <section className='premium-section container-custom' data-chapter='Stats'>
        <ScrollReveal direction='fade' delay={200} variant='scale-lift'>
          <Stats />
        </ScrollReveal>
      </section>

      <TestimonialsSection />

      <section className='premium-section container-custom' data-chapter='Advantage'>
        <TechAdvantage />
      </section>

      <section className='premium-section container-custom' data-chapter='Social'>
        <ScrollReveal direction='fade' delay={250} variant='mask'>
          <InstagramFollow />
        </ScrollReveal>
      </section>

      <ModelPortfolioDownload />

      <section className='premium-section container-custom pt-6' data-chapter='Book'>
        <ScrollReveal direction='fade' delay={300} variant='scale-lift'>
          <CTA />
        </ScrollReveal>
      </section>

    </div>
  );
}
