import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Nikhil Kubde's complete modeling portfolio featuring fashion, editorial, and commercial work.",
  openGraph: {
    title: "Portfolio - Nikhil Kubde",
    description:
      "Browse Nikhil Kubde's complete modeling portfolio featuring fashion, editorial, and commercial work.",
  },
};

export default function PortfolioPage() {
  return (
    <div className='py-20 bg-dark min-h-screen'>
      <div className='container-custom'>
        <ScrollReveal direction="fade">
          <div className='text-center mb-16'>
            <h1 className='section-title'>Portfolio</h1>
            <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
              A collection of my work across fashion, editorial, and commercial
              projects
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <PortfolioGrid />
        </ScrollReveal>
      </div>
    </div>
  );
}
