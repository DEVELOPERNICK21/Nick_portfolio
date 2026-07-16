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

const productionProfile: SiteProfile = {
  mode: "production",
  name: "Nikhil Kubde",
  nameUpper: "NIKHIL KUBDE",
  firstName: "Nikhil",
  tagline: "Fashion • Editorial • Commercial",
  heroKicker: "Professional Model",
  heroSubtitle: "Model & Mobile App Developer • 5+ Years Tech Experience",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://nick-portfolio-nine.vercel.app",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "nikhilkubde21@gmail.com",
  agency: {
    name: "CastYou Agency",
    url: "https://castyou.in/nikhil-kubde/",
    profileLabel: "CastYou Profile",
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/nikhil__kubde/",
    handle: "@nikhil__kubde",
  },
  portfolioPdf: {
    path: "/downloads/nikhil-kubde-portfolio.pdf",
    filename: "Nikhil-Kubde-Portfolio.pdf",
  },
  brands: ["Wework", "Laundryto", "Blue Budha Store"],
  aboutIntro:
    "Passionate about fashion, storytelling, and bringing creative visions to life with a disciplined, campaign-ready process.",
  aboutParagraphs: [
    "I'm a fresh face in the modeling industry, driven by a passion for fashion and creative expression. With over 5 years of experience as a professional mobile app developer, I bring a unique combination of technical expertise and creative vision to every project. This background gives me a distinct advantage in understanding digital content, social media strategy, and the technical aspects of modern brand campaigns.",
    "My technical background enhances my modeling career in unique ways - I understand the digital landscape, content creation workflows, and how to effectively communicate with tech-savvy brands. This makes me particularly valuable for tech companies, digital-first brands, and campaigns that require both on-camera presence and technical understanding. I'm eager to work across various modeling genres - from fashion editorial to commercial campaigns - bringing both authenticity and professionalism to every project.",
    "When I'm not on set, I balance my time between fitness, studying fashion trends, practicing poses, and continuing to develop both my modeling craft and technical skills. I'm passionate about building meaningful relationships in the industry and am always open to new opportunities and collaborations that allow me to showcase this unique combination of skills.",
  ],
  showTechAdvantage: true,
  seo: {
    title: "Nikhil Kubde - Professional Model Portfolio",
    titleTemplate: "%s | Nikhil Kubde",
    description:
      "Professional model available for agency bookings. Nikhil Kubde - Fashion, editorial, and commercial model with 5+ years tech experience. Represented by CastYou agency. Available for brand campaigns, photo shoots, video production, and commercial modeling projects.",
    keywords: [
      "Nikhil Kubde",
      "model for hire",
      "professional model",
      "fashion model",
      "editorial model",
      "commercial model",
      "modeling agency",
      "model portfolio",
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
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://modelportfolio-demo.vercel.app",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "nikhilkubde21@gmail.com",
  agency: {
    name: "Elite Talent Agency",
    url: "/contact",
    profileLabel: "Agency Profile",
  },
  instagram: {
    label: "Instagram",
    href: "/contact",
    handle: "@your.handle",
  },
  portfolioPdf: {
    path: "/downloads/nikhil-kubde-portfolio.pdf",
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
