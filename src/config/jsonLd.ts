import { site } from "@/config/site";
import { HERO_IMAGE } from "@/data/media";

export function createHomeJsonLd() {
  const base = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: site.name,
      jobTitle: site.showTechAdvantage
        ? ["Professional Model", "Mobile App Developer"]
        : ["Professional Model"],
      url: site.siteUrl,
      image: `${site.siteUrl}${HERO_IMAGE}`,
      description: site.seo.description,
      sameAs: [
        ...(site.agency.url.startsWith("http") ? [site.agency.url] : []),
        ...(site.instagram.href.startsWith("http") ? [site.instagram.href] : []),
      ],
      ...(site.agency.url.startsWith("http")
        ? {
            worksFor: {
              "@type": "Organization",
              name: site.agency.name,
              url: site.agency.url,
            },
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${site.name} - Professional Modeling Services`,
      description:
        "Professional modeling services for fashion, editorial, commercial, and digital brand campaigns.",
      provider: {
        "@type": "Person",
        name: site.name,
      },
      serviceType: [
        "Fashion Modeling",
        "Editorial Modeling",
        "Commercial Modeling",
        "Brand Ambassador",
        "Photo Shoot Modeling",
      ],
      areaServed: "Worldwide",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${site.siteUrl}/contact`,
        serviceType: "Modeling Bookings",
      },
    },
  ];

  if (site.mode === "demo") {
    return base;
  }

  return [
    ...base,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `Is ${site.name} available for modeling bookings?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes, ${site.name} is available for modeling bookings through ${site.agency.name}. Specializes in fashion, editorial, and commercial modeling projects.`,
          },
        },
        {
          "@type": "Question",
          name: `What types of modeling projects does ${site.name} work on?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${site.name} works on fashion modeling, editorial shoots, commercial campaigns, video production, and brand ambassador roles.`,
          },
        },
      ],
    },
  ];
}
