import type { Metadata } from "next";
import { site } from "@/config/site";

const heroImage = "/main/hero.jpg";

export function createPageMetadata({
  title,
  description,
  keywords = [],
}: {
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : site.seo.keywords,
    alternates: {
      canonical: site.siteUrl,
    },
    openGraph: {
      title,
      description,
      url: site.siteUrl,
      images: [heroImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [heroImage],
    },
  };
}

export function createRootMetadata(): Metadata {
  const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || "";
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "";

  return {
    metadataBase: new URL(site.siteUrl),
    title: {
      default: site.seo.title,
      template: site.seo.titleTemplate,
    },
    description: site.seo.description,
    keywords: site.seo.keywords,
    authors: [{ name: site.name }],
    creator: site.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: site.siteUrl,
      siteName: site.seo.title,
      title: site.seo.title,
      description: site.seo.description,
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 630,
          alt: `${site.name} - Model Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.title,
      description: site.seo.description,
      images: [heroImage],
      ...(twitterHandle ? { creator: twitterHandle } : {}),
    },
    robots: site.mode === "demo" ? { index: false, follow: false } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  };
}
