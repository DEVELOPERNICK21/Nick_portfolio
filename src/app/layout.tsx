import type { Metadata } from "next";
import { Inter, Playfair_Display, Instrument_Serif } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import SiteChrome from "@/components/SiteChrome";
import DemoBanner from "@/components/DemoBanner";
import { createRootMetadata } from "@/config/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: false,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
  preload: true,
});

const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = createRootMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${playfair.variable} ${instrumentSerif.variable} dark`}
    >
      <body className={`${inter.className} bg-[#0a0a0b]`}>
        <ThemeProvider>
          <DemoBanner />
          <main className='min-h-screen w-full bg-[#0a0a0b]'>{children}</main>
          <SiteChrome />
        </ThemeProvider>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
