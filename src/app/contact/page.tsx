import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import BookingCalendar from "@/components/BookingCalendar";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";
import {
  PORTFOLIO_PDF,
  PORTFOLIO_PDF_FILENAME,
  PRICING_PDF,
  PRICING_PDF_FILENAME,
} from "@/data/media";
import { createPageMetadata } from "@/config/metadata";
import { isDemo, site } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: isDemo
    ? "Contact — Get Your Model Portfolio"
    : `Contact - Book ${site.name} for Modeling Projects`,
  description: isDemo
    ? "Request pricing and turnaround for a premium model portfolio site like this demo — gallery, comp card, testimonials, and contact flow included."
    : `Contact ${site.name} for modeling bookings, agency inquiries, brand collaborations, photo shoots, and commercial projects. Represented by ${site.agency.name}.`,
  keywords: isDemo
    ? ["model portfolio pricing", "model website contact", "portfolio demo inquiry"]
    : [`book ${site.name}`, "model booking contact", site.agency.name],
});

export default function ContactPage() {
  const agencyLinkProps = site.agency.url.startsWith("http")
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <div className='premium-shell min-h-screen'>
      <div className='container-custom'>
        <ScrollReveal direction='fade' variant='scale-lift'>
          <div className='text-center premium-section pb-8' data-chapter='Header'>
            <div className='premium-surface p-8 md:p-12'>
              <p className='premium-kicker'>{isDemo ? "Portfolio packages" : "Bookings"}</p>
              <h1 className='premium-heading mt-4'>
                {isDemo ? "Get Your Portfolio" : "Get In Touch"}
              </h1>
              <p className='premium-body max-w-2xl mx-auto mt-4'>
                {isDemo
                  ? "Send a message for pricing, packages, and 5–7 day turnaround. This demo becomes your name, photos, and agency details."
                  : "Available for bookings, collaborations, and creative projects worldwide"}
              </p>
              {isDemo ? (
                <div className='mt-8 flex flex-wrap justify-center gap-3'>
                  <a
                    href='/pricing'
                    className='premium-button inline-flex'
                  >
                    View packages & pricing
                  </a>
                  <a
                    href={PRICING_PDF}
                    download={PRICING_PDF_FILENAME}
                    className='premium-button-secondary inline-flex'
                  >
                    Download pricing PDF
                  </a>
                </div>
              ) : (
                <a
                  href={PORTFOLIO_PDF}
                  download={PORTFOLIO_PDF_FILENAME}
                  className='premium-button mt-8 inline-flex'
                >
                  Download Portfolio PDF (Singles & Polaroids)
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>

        {!isDemo ? <BookingCalendar /> : null}

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto premium-section' data-chapter='ContactForm'>
          <ScrollReveal direction='left' delay={100}>
            <div className='premium-surface p-8 bg-white/5 border border-white/10'>
              <h2 className='text-2xl font-serif mb-6 text-zinc-100'>
                {isDemo ? "How it works" : "Let's Work Together"}
              </h2>
              <p className='text-zinc-400 mb-8 leading-relaxed'>
                {isDemo
                  ? "Share your Instagram, package tier, and timeline. I swap in your photos, bio, measurements, and agency links — same premium layout you see here."
                  : "I'm always excited to collaborate on new projects. Whether you're a photographer, brand, or agency, I'd love to hear about your vision and how we can create something amazing together."}
              </p>

              <div className='space-y-6 mb-10'>
                <div>
                  <h3 className='font-semibold mb-2 flex items-center gap-2 text-zinc-300'>
                    <FaEnvelope className='text-amber-400' />
                    Email
                  </h3>
                  <a
                    href={`mailto:${site.email}`}
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    {site.email}
                  </a>
                </div>

                {!isDemo ? (
                  <>
                    <div>
                      <h3 className='font-semibold mb-2 text-zinc-300'>Based In</h3>
                      <p className='text-zinc-400'>India</p>
                      <p className='text-sm text-zinc-500'>
                        Available for travel worldwide
                      </p>
                    </div>

                    <div>
                      <h3 className='font-semibold mb-2 text-zinc-300'>
                        Agency Representation
                      </h3>
                      <p className='text-zinc-400'>{site.agency.name}</p>
                      <a
                        href={site.agency.url}
                        {...agencyLinkProps}
                        className='text-sm text-amber-400 hover:text-amber-300 transition-colors'
                      >
                        View Profile on {site.agency.name} →
                      </a>
                    </div>
                  </>
                ) : null}
              </div>

              {!isDemo ? (
                <div>
                  <h3 className='font-semibold mb-4 text-zinc-300'>Follow Me</h3>
                  <div className='flex gap-4'>
                    <a
                      href={site.instagram.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-12 h-12 bg-white/5 border border-white/10 text-amber-400 rounded-full flex items-center justify-center hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300'
                      aria-label='Instagram'
                    >
                      <FaInstagram size={20} />
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </ScrollReveal>

          <ScrollReveal direction='right' delay={200}>
            <div className='premium-surface p-8 bg-white/5 border border-white/10'>
              <h2 className='text-2xl font-serif mb-6 text-zinc-100'>
                Send a Message
              </h2>
              <Suspense fallback={<div className='text-zinc-400'>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
