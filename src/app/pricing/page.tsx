import { redirect } from "next/navigation";
import Link from "next/link";
import { FaDownload, FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/config/metadata";
import { isDemo, site } from "@/config/site";
import { PRICING_PDF, PRICING_PDF_FILENAME } from "@/data/media";

export const metadata = createPageMetadata({
  title: "Packages & Pricing — Model Portfolio Sites",
  description:
    "Starter ₹3,999 · Professional ₹7,999 · Premium ₹14,999. Premium model portfolio websites with gallery, comp card, and contact flow. 5–7 day delivery.",
  keywords: [
    "model portfolio pricing",
    "model website packages",
    "fashion model portfolio cost",
  ],
});

export default function PricingPage() {
  if (!isDemo) {
    redirect("/");
  }

  return (
    <div className='premium-shell min-h-screen pt-24'>
      <div className='container-custom'>
        <ScrollReveal direction='fade' variant='scale-lift'>
          <div className='premium-section pb-6'>
            <div className='premium-surface p-8 md:p-12 text-center'>
              <p className='premium-kicker'>Packages</p>
              <h1 className='premium-heading mt-4'>Pricing</h1>
              <p className='premium-body mt-4 max-w-2xl mx-auto'>
                Same system as this demo — your name, photos, and agency details
                swapped in. Delivery in 5–7 days after content handover.
              </p>
              <div className='mt-8 flex flex-wrap justify-center gap-3'>
                <a
                  href={PRICING_PDF}
                  download={PRICING_PDF_FILENAME}
                  className='premium-button inline-flex items-center gap-2'
                >
                  <FaDownload />
                  Download PDF
                </a>
                <a
                  href={PRICING_PDF}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='premium-button-secondary inline-flex items-center gap-2'
                >
                  <FaExternalLinkAlt />
                  Open Full Screen
                </a>
                <Link
                  href='/contact'
                  className='premium-button-secondary inline-flex items-center gap-2'
                >
                  Get yours →
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <section className='premium-section pt-0 pb-10'>
          <div className='premium-surface overflow-hidden p-4 md:p-6'>
            <div className='relative w-full overflow-hidden rounded-2xl border border-zinc-700 bg-black h-[min(90vh,960px)]'>
              <iframe
                title='Model portfolio packages and pricing PDF'
                src={`${PRICING_PDF}#view=FitH`}
                className='absolute inset-0 h-full w-full'
              />
            </div>
            <p className='mt-4 text-center text-sm text-zinc-500'>
              If the viewer does not load, use Download PDF or Open Full Screen
              above.
            </p>
          </div>
        </section>

        <div className='premium-section pt-0 pb-16 text-center'>
          <p className='premium-body mb-6'>
            Ready to book? Message {site.builtBy?.name ?? "us"} with your
            Instagram handle and preferred package.
          </p>
          <div className='flex flex-wrap justify-center gap-3'>
            <Link href='/contact' className='premium-button'>
              Contact / Book
            </Link>
            {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? (
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
                    "Hi! I saw the demo portfolio and want pricing."
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='premium-button-secondary inline-flex items-center gap-2'
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
