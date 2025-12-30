import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import FloatingSocialBar from "@/components/FloatingSocialBar";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://yourportfolio.com"),
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
    url: "https://yourportfolio.com",
    siteName: "Nikhil Kubde - Model Portfolio",
    title: "Nikhil Kubde - Professional Model Portfolio",
    description:
      "Professional model available for agency bookings. Fashion, editorial, and commercial modeling with unique tech expertise. Perfect for digital-first brands and modern campaigns. Represented by CastYou agency.",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
    creator: "@yourhandle",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${playfair.variable} light`} suppressHydrationWarning>
      <body className={`${inter.className} bg-white`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force white theme only - runs before React hydration
                try {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  localStorage.setItem('theme', 'light');
                } catch(e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <Navbar />
          <main className='min-h-screen bg-white'>{children}</main>
          <Footer />
          <FloatingSocialBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
