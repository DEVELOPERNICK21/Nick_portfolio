import dynamic from "next/dynamic";
import ParallaxHero from "@/components/ParallaxHero";
import ScrollProgress from "@/components/ScrollProgress";
import WorkWithMeCTA from "@/components/WorkWithMeCTA";
import { createHomeJsonLd } from "@/config/jsonLd";

const sectionFallback = (
  <div className="ed-section container-custom" aria-hidden>
    <div className="h-40 animate-pulse rounded-2xl bg-black/5" />
  </div>
);

/** Below-fold: code-split + SSR so HTML/SEO stay intact; images still lazy-load */
const AboutMeSection = dynamic(() => import("@/components/AboutMeSection"), {
  loading: () => sectionFallback,
});

const InstagramProofSection = dynamic(
  () => import("@/components/InstagramProofSection"),
  { loading: () => sectionFallback }
);

const DuoGallerySection = dynamic(() => import("@/components/DuoGallerySection"), {
  loading: () => sectionFallback,
});

const CategorizedPortfolio = dynamic(
  () => import("@/components/CategorizedPortfolio"),
  { loading: () => sectionFallback }
);

const ModelPortfolioDownload = dynamic(
  () => import("@/components/ModelPortfolioDownload"),
  { loading: () => sectionFallback }
);

export default function Home() {
  return (
    <div className="home-editorial w-full min-w-0 overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createHomeJsonLd()),
        }}
      />

      <ScrollProgress />
      <ParallaxHero />
      <AboutMeSection />
      <InstagramProofSection />
      <DuoGallerySection />
      <CategorizedPortfolio />
      <ModelPortfolioDownload variant="editorial" />
      <WorkWithMeCTA />
    </div>
  );
}
