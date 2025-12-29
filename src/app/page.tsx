import dynamic from "next/dynamic";
import ParallaxHero from "@/components/ParallaxHero";
import HomeGallery from "@/components/HomeGallery";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";

// Lazy load heavy components that aren't immediately visible
// Using simpler loading states to avoid build issues
const FloatingImageGallery = dynamic(() => import("@/components/FloatingImageGallery"), {
  ssr: true,
});

const ParallaxImageSection = dynamic(() => import("@/components/ParallaxImageSection"), {
  ssr: true,
});

const LifestyleGallery = dynamic(() => import("@/components/LifestyleGallery"), {
  ssr: true,
});

const Stats = dynamic(() => import("@/components/Stats"), {
  ssr: true,
});

const CTA = dynamic(() => import("@/components/CTA"), {
  ssr: true,
});

export default function Home() {
  // Featured images for parallax section
  const featuredImages = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/portfolio-1.jpg",
    "/portfolio-2.jpg",
    "/portfolio-3.jpg",
  ];

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nikhil Kubde",
            jobTitle: "Professional Model",
            url: "https://yourportfolio.com",
            image: "https://yourportfolio.com/profile.jpg",
            description:
              "Professional fashion and editorial model available for bookings through CastYou agency",
            sameAs: [
              "https://castyou.in/nikhil-kubde/",
              "https://www.instagram.com/nikhil___kubde/",
            ],
            knowsAbout: [
              "Fashion Modeling",
              "Editorial Modeling",
              "Commercial Modeling",
              "Runway",
            ],
          }),
        }}
      />

      <ScrollProgress />

      {/* Hero Section - Full Screen */}
      <ParallaxHero />

      {/* Portfolio Gallery Section */}
      <ScrollReveal direction='up' delay={100}>
        <HomeGallery />
      </ScrollReveal>

      {/* Floating Interactive Gallery - New Creative Section */}
      <FloatingImageGallery />

      {/* Parallax Featured Section - Scroll Interactive */}
      <ParallaxImageSection
        images={featuredImages}
        title='FEATURED'
        subtitle='Immersive scroll experience with parallax effects'
      />

      {/* Lifestyle Gallery Section */}
      <LifestyleGallery />

      {/* Stats Section */}
      <ScrollReveal direction='fade' delay={200}>
        <Stats />
      </ScrollReveal>

      {/* Call to Action */}
      <ScrollReveal direction='fade' delay={300}>
        <CTA />
      </ScrollReveal>
    </>
  );
}
