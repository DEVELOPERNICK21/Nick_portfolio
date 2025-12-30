import dynamic from "next/dynamic";
import ParallaxHero from "@/components/ParallaxHero";
import HomeGallery from "@/components/HomeGallery";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";

// Lazy load heavy components that aren't immediately visible
// Using simpler loading states to avoid build issues
const FloatingImageGallery = dynamic(
  () => import("@/components/FloatingImageGallery"),
  {
    ssr: true,
  }
);

const ParallaxImageSection = dynamic(
  () => import("@/components/ParallaxImageSection"),
  {
    ssr: true,
  }
);

const LifestyleGallery = dynamic(
  () => import("@/components/LifestyleGallery"),
  {
    ssr: true,
  }
);

const Stats = dynamic(() => import("@/components/Stats"), {
  ssr: true,
});

const CTA = dynamic(() => import("@/components/CTA"), {
  ssr: true,
});

const InstagramFollow = dynamic(() => import("@/components/InstagramFollow"), {
  ssr: true,
});

const TechAdvantage = dynamic(() => import("@/components/TechAdvantage"), {
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
      {/* JSON-LD Structured Data for SEO - Multiple Schema Types */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nikhil Kubde",
              jobTitle: ["Professional Model", "Mobile App Developer"],
              url: "https://yourportfolio.com",
              image: "https://yourportfolio.com/profile.jpg",
              description:
                "Professional model available for agency bookings. Fashion, editorial, and commercial modeling with 5+ years tech experience. Represented by CastYou agency.",
              sameAs: [
                "https://castyou.in/nikhil-kubde/",
                "https://www.instagram.com/nikhil___kubde/",
              ],
              knowsAbout: [
                "Fashion Modeling",
                "Editorial Modeling",
                "Commercial Modeling",
                "Mobile App Development",
                "Digital Content Strategy",
                "Video Production",
              ],
              worksFor: {
                "@type": "Organization",
                name: "CastYou Agency",
                url: "https://castyou.in/nikhil-kubde/",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Nikhil Kubde - Professional Modeling Services",
              description:
                "Professional modeling services for fashion, editorial, commercial, and digital brand campaigns. Available for photo shoots, video production, brand ambassador roles, and commercial modeling projects.",
              provider: {
                "@type": "Person",
                name: "Nikhil Kubde",
              },
              serviceType: [
                "Fashion Modeling",
                "Editorial Modeling",
                "Commercial Modeling",
                "Brand Ambassador",
                "Photo Shoot Modeling",
                "Video Production Modeling",
              ],
              areaServed: "Worldwide",
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: "https://yourportfolio.com/contact",
                serviceType: "Modeling Bookings",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Nikhil Kubde available for modeling bookings?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Nikhil Kubde is available for modeling bookings through CastYou agency. He specializes in fashion, editorial, and commercial modeling projects.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of modeling projects does Nikhil Kubde work on?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nikhil Kubde works on fashion modeling, editorial shoots, commercial campaigns, video production, brand ambassador roles, and digital-first brand campaigns. His unique tech background makes him ideal for tech companies and digital brands.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can agencies book Nikhil Kubde for a project?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Agencies can book Nikhil Kubde through CastYou agency or by contacting directly through the portfolio website contact page. He is represented by CastYou and available for worldwide bookings.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What makes Nikhil Kubde unique as a model?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nikhil Kubde brings a unique combination of professional modeling skills and 5+ years of mobile app development experience. This tech background makes him particularly valuable for digital-first brands, tech companies, and modern brand campaigns that require both on-camera presence and technical understanding.",
                  },
                },
              ],
            },
          ]),
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

      {/* Tech Advantage Section */}
      <TechAdvantage />

      {/* Instagram Follow Section */}
      <ScrollReveal direction='fade' delay={250}>
        <InstagramFollow />
      </ScrollReveal>

      {/* Call to Action */}
      <ScrollReveal direction='fade' delay={300}>
        <CTA />
      </ScrollReveal>
    </>
  );
}
