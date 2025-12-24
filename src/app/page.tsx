import ParallaxHero from "@/components/ParallaxHero";
import HomeGallery from "@/components/HomeGallery";
import FloatingImageGallery from "@/components/FloatingImageGallery";
import ParallaxImageSection from "@/components/ParallaxImageSection";
import LifestyleGallery from "@/components/LifestyleGallery";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";

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
              "https://instagram.com/yourhandle",
              "https://twitter.com/yourhandle",
              "https://linkedin.com/in/yourprofile",
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
