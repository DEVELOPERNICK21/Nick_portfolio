export type AgencyInfo = {
  name: string;
  url: string;
  profileLabel?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
};

export type SiteProfile = {
  mode: "production" | "demo";
  name: string;
  nameUpper: string;
  firstName: string;
  tagline: string;
  heroKicker: string;
  heroSubtitle?: string;
  siteUrl: string;
  email: string;
  agency: AgencyInfo;
  representationText: string;
  instagram: SocialLink;
  portfolioPdf: {
    path: string;
    filename: string;
  };
  brands: readonly string[];
  aboutIntro: string;
  aboutParagraphs: string[];
  showTechAdvantage: boolean;
  seo: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
  };
  builtBy?: {
    name: string;
    url: string;
  };
};

function resolveSiteUrl(defaultUrl: string): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.startsWith("http") ? explicit : `https://${explicit}`;
  }

  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return vercelUrl.startsWith("http") ? vercelUrl : `https://${vercelUrl}`;
  }

  return defaultUrl;
}

const productionProfile: SiteProfile = {
  mode: "production",
  name: "Nikhil Kubde",
  nameUpper: "NIKHIL KUBDE",
  firstName: "Nikhil",
  tagline: "Fashion • Editorial • Commercial",
  heroKicker: "Professional Model",
  heroSubtitle: "Fitness & lifestyle-focused • Strong on-camera presence",
  siteUrl: resolveSiteUrl("https://nikhilkubde-model-portfolio.vercel.app"),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "nikhilkubde21@gmail.com",
  agency: {
    name: "CastYou Agency",
    url: "https://castyou.in/nikhil-kubde/",
    profileLabel: "CastYou Profile",
  },
  representationText: "Currently managed by Montelo Agency · Listed on CastYou",
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/nikhil__kubde/",
    handle: "@nikhil__kubde",
  },
  portfolioPdf: {
    path: "/downloads/nikhil_kubde_portfolio_final.pdf",
    filename: "Nikhil-Kubde-Portfolio.pdf",
  },
  brands: ["WeWork", "LaundryTO", "Blue Buddha Store"],
  aboutIntro:
    "Fitness- and lifestyle-focused model with clean editorial range, strong on-camera energy, and a calm, professional presence on set.",
  aboutParagraphs: [
    "I work across fashion, lifestyle, and commercial shoots with a polished look, reliable set etiquette, and a focus on creating clean, brand-ready frames. I am currently managed by Montelo Agency and also listed on CastYou for agency discovery.",
    "With over 5 years of professional mobile app development experience, I understand digital-first campaigns, content workflows, and how brands evaluate presentation, consistency, and audience fit. That makes me especially useful for modern campaigns that need both visual presence and professionalism.",
    "I am most comfortable in fitness, lifestyle, and editorial-driven work, and I bring steady energy on camera, direction-friendly collaboration, and a disciplined approach to every booking.",
  ],
  showTechAdvantage: true,
  seo: {
    title: "Nikhil Kubde - Professional Model Portfolio",
    titleTemplate: "%s | Nikhil Kubde",
    description:
      "Nikhil Kubde is a fashion, lifestyle, editorial, and commercial model based in India. Currently managed by Montelo Agency and listed on CastYou, available for brand campaigns, photo shoots, BTS reels, and video production.",
    keywords: [
      "Nikhil Kubde",
      "model for hire",
      "professional model",
      "fashion model",
      "editorial model",
      "commercial model",
      "lifestyle model",
      "fitness model",
      "modeling agency",
      "model portfolio",
      "Montelo Agency",
      "CastYou agency",
      "Indian model",
    ],
  },
};

const demoProfile: SiteProfile = {
  mode: "demo",
  name: "Arjun Mehta",
  nameUpper: "ARJUN MEHTA",
  firstName: "Arjun",
  tagline: "Fashion • Editorial • Commercial",
  heroKicker: "Professional Model",
  heroSubtitle: "Campaign-ready presence for brands and agencies",
  siteUrl: resolveSiteUrl("https://modelportfolio-demo.vercel.app"),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "nikhilkubde21@gmail.com",
  agency: {
    name: "Elite Talent Agency",
    url: "/contact",
    profileLabel: "Agency Profile",
  },
  representationText: "Represented by Elite Talent Agency",
  instagram: {
    label: "Instagram",
    href: "/contact",
    handle: "@your.handle",
  },
  portfolioPdf: {
    path: "/downloads/nikhil_kubde_portfolio_final.pdf",
    filename: "Model-Portfolio-Sample.pdf",
  },
  brands: ["Lifestyle Brand", "Fashion Label", "Wellness Co."],
  aboutIntro:
    "A campaign-ready portfolio built to help agencies and brands evaluate look, range, and professionalism in seconds.",
  aboutParagraphs: [
    "Arjun is a working fashion and commercial model based in India, represented for bookings across editorial, lifestyle, and brand campaigns. This demo site shows how your story, gallery, comp card, and contact flow can look when tailored to your photos and measurements.",
    "Every section here — scroll narrative, parallax gallery, testimonials, and downloadable comp card — is part of the same system used for real working models. Swap the name, images, and copy; keep the premium layout and booking flow.",
    "Use this page as a reference for what prospects see when you send your demo link. Your final site uses your agency details, socials, and archive — not placeholder labels.",
  ],
  showTechAdvantage: false,
  builtBy: {
    name: "Nikhil Kubde",
    url: "https://nick-portfolio-nine.vercel.app",
  },
  seo: {
    title: "Model Portfolio Demo — Premium Site Template",
    titleTemplate: "%s | Model Portfolio Demo",
    description:
      "Demo modeling portfolio with cinematic scroll, parallax gallery, comp card viewer, testimonials, and contact flow. See how your brand could look with the same premium system.",
    keywords: [
      "model portfolio demo",
      "modeling website template",
      "fashion model portfolio",
      "editorial model site",
      "Indian model portfolio",
      "comp card website",
    ],
  },
};

export const isDemo = process.env.NEXT_PUBLIC_SITE_MODE === "demo";

export const site: SiteProfile = isDemo ? demoProfile : productionProfile;

export function photoAlt(label: string): string {
  return `${site.name} — ${label}`;
}
