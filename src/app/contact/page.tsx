import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import BookingCalendar from "@/components/BookingCalendar";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";
import { PORTFOLIO_PDF, PORTFOLIO_PDF_FILENAME } from "@/data/media";

export const metadata: Metadata = {
  title: "Contact - Book Nikhil Kubde for Modeling Projects",
  description:
    "Contact Nikhil Kubde for modeling bookings, agency inquiries, brand collaborations, photo shoots, and commercial projects. Available worldwide. Represented by CastYou agency. Perfect for fashion, editorial, commercial, and digital brand campaigns.",
  keywords: [
    "book Nikhil Kubde",
    "model booking contact",
    "modeling agency contact",
    "hire model",
    "model casting contact",
    "commercial model booking",
    "fashion model hire",
    "model representation inquiry",
    "CastYou agency contact",
    "modeling services inquiry",
  ],
  openGraph: {
    title: "Contact - Book Nikhil Kubde for Modeling Projects",
    description:
      "Contact for modeling bookings, agency inquiries, brand collaborations, and commercial projects. Available worldwide. Represented by CastYou agency.",
  },
  twitter: {
    card: "summary",
    title: "Contact - Book Nikhil Kubde for Modeling Projects",
    description:
      "Contact for modeling bookings and agency inquiries. Available worldwide for fashion, editorial, and commercial projects.",
  },
};

export default function ContactPage() {
  return (
    <div className='premium-shell min-h-screen'>
      <div className='container-custom'>
        <ScrollReveal direction='fade' variant='scale-lift'>
          <div className='text-center premium-section pb-8' data-chapter='Header'>
            <div className='premium-surface p-8 md:p-12'>
              <p className='premium-kicker'>Bookings</p>
              <h1 className='premium-heading mt-4'>Get In Touch</h1>
              <p className='premium-body max-w-2xl mx-auto mt-4'>
                Available for bookings, collaborations, and creative projects
                worldwide
              </p>
              <a
                href={PORTFOLIO_PDF}
                download={PORTFOLIO_PDF_FILENAME}
                className='premium-button mt-8 inline-flex'
              >
                Download Portfolio PDF (Singles & Polaroids)
              </a>
            </div>
          </div>
        </ScrollReveal>

        <BookingCalendar />

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto premium-section' data-chapter='ContactForm'>
          <ScrollReveal direction='left' delay={100}>
            <div className='premium-surface p-8 bg-white/5 border border-white/10'>
              <h2 className='text-2xl font-serif mb-6 text-zinc-100'>
                Let&apos;s Work Together
              </h2>
              <p className='text-zinc-400 mb-8 leading-relaxed'>
                I&apos;m always excited to collaborate on new projects. Whether
                you&apos;re a photographer, brand, or agency, I&apos;d love to
                hear about your vision and how we can create something amazing
                together.
              </p>

              <div className='space-y-6 mb-10'>
                <div>
                  <h3 className='font-semibold mb-2 flex items-center gap-2 text-zinc-300'>
                    <FaEnvelope className='text-amber-400' />
                    Email
                  </h3>
                  <a
                    href='mailto:nikhilkubde21@gmail.com'
                    className='text-zinc-400 hover:text-amber-400 transition-colors'
                  >
                    nikhilkubde21@gmail.com
                  </a>
                </div>

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
                  <p className='text-zinc-400'>CastYou Agency</p>
                  <a
                    href='https://castyou.in/nikhil-kubde/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-amber-400 hover:text-amber-300 transition-colors'
                  >
                    View Profile on CastYou →
                  </a>
                </div>
              </div>

              <div>
                <h3 className='font-semibold mb-4 text-zinc-300'>Follow Me</h3>
                <div className='flex gap-4'>
                  <a
                    href='https://www.instagram.com/nikhil__kubde/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-white/5 border border-white/10 text-amber-400 rounded-full flex items-center justify-center hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300'
                    aria-label='Instagram'
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
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
