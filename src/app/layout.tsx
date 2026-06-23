import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import SiteChrome from "@/components/SiteChrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || "";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "";
const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://nick-portfolio-nine.vercel.app"),
  title: {
    default: "Nikhil Kubde - Professional Model Portfolio",
    template: "%s | Nikhil Kubde",
  },
  description:
    "Professional model available for agency bookings. Nikhil Kubde - Fashion, editorial, and commercial model with 5+ years tech experience. Represented by CastYou agency. Available for brand campaigns, photo shoots, video production, and commercial modeling projects. Tech-savvy model perfect for digital-first brands.",
  keywords: [
    "Nikhil Kubde",
    "model for hire",
    "professional model",
    "fashion model",
    "editorial model",
    "commercial model",
    "modeling agency",
    "model portfolio",
    "available model",
    "model bookings",
    "fashion model portfolio",
    "commercial modeling",
    "editorial modeling",
    "brand ambassador",
    "model casting",
    "photo shoot model",
    "video production model",
    "tech model",
    "digital brand model",
    "CastYou agency",
    "Indian model",
    "model representation",
    "modeling services",
  ],
  authors: [{ name: "Nikhil Kubde" }],
  creator: "Nikhil Kubde",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nick-portfolio-nine.vercel.app",
    siteName: "Nikhil Kubde - Model Portfolio",
    title: "Nikhil Kubde - Professional Model Portfolio",
    description:
      "Professional model available for agency bookings. Fashion, editorial, and commercial modeling with unique tech expertise. Perfect for digital-first brands and modern campaigns. Represented by CastYou agency.",
    images: [
      {
        url: "/main/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Nikhil Kubde - Model Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Kubde - Professional Model Portfolio",
    description:
      "Professional model available for agency bookings. Fashion, editorial, and commercial modeling with unique tech expertise. Perfect for digital-first brands and modern campaigns. Represented by CastYou agency.",
    images: ["/main/hero.jpg"],
    ...(twitterHandle ? { creator: twitterHandle } : {}),
  },
  robots: {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${playfair.variable} dark`}>
      <body className={`${inter.className} bg-[#0a0a0b]`}>
        <ThemeProvider>
          <main className='min-h-screen bg-[#0a0a0b]'>{children}</main>
          <SiteChrome />
        </ThemeProvider>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
