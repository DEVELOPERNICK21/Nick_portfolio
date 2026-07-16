import ModelPortfolioDownload from "@/components/ModelPortfolioDownload";
import LibraryGallery from "@/components/LibraryGallery";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { createPageMetadata } from "@/config/metadata";
import { site } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Photo Library & Comp Card",
  description: `Extended photo library and downloadable portfolio PDF with singles and polaroids for ${site.name}.`,
});

export default function LibraryPage() {
  return (
    <div className='premium-shell min-h-screen pt-24'>
      <div className='container-custom premium-section pb-6'>
        <ScrollReveal direction='fade' variant='scale-lift'>
          <div className='premium-surface p-8 md:p-12 text-center md:text-left'>
            <p className='premium-kicker'>Archive</p>
            <h1 className='premium-heading mt-4'>Photo Library</h1>
            <p className='premium-body mt-4 max-w-3xl'>
              The five featured campaign images are on the home and portfolio
              pages. Below: extended archive photos plus the full comp card PDF
              with singles and polaroids.
            </p>
            <Link href='/portfolio' className='premium-button-secondary mt-8 inline-flex'>
              View Featured Portfolio
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <LibraryGallery />

      <ModelPortfolioDownload id='library-comp-card' />
    </div>
  );
}
