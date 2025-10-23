import Image from "next/image";
import Link from "next/link";
import ParallaxHero from "@/components/ParallaxHero";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
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
      <ParallaxHero />

      <ScrollReveal direction='fade'>
        <Stats />
      </ScrollReveal>

      <ScrollReveal direction='up' delay={100}>
        <Gallery />
      </ScrollReveal>

      <ScrollReveal direction='fade' delay={200}>
        <CTA />
      </ScrollReveal>
    </>
  );
}
