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
    "Emerging model portfolio of Nikhil Kubde showcasing fashion, editorial, and commercial work. Building portfolio and available for bookings through CastYou agency.",
  keywords: [
    "Nikhil Kubde",
    "model",
    "fashion model",
    "editorial model",
    "commercial model",
    "portfolio",
    "fashion",
    "modeling",
    "CastYou",
    "Indian model",
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
      "Emerging model portfolio of Nikhil Kubde showcasing fashion, editorial, and commercial work. Building portfolio and available for bookings.",
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
      "Emerging model portfolio of Nikhil Kubde showcasing fashion, editorial, and commercial work. Building portfolio and available for bookings.",
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
