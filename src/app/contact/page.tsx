import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
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

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto' data-chapter='ContactForm'>
          {/* Contact Information */}
          <ScrollReveal direction='left' delay={100}>
            <div className='premium-surface p-8'>
              <h2 className='text-2xl font-serif mb-6 text-gray-900'>
                Lets Work Together
              </h2>
              <p className='text-gray-700 mb-8 leading-relaxed'>
                Im always excited to collaborate on new projects. Whether youre
                a photographer, brand, or agency, Id love to hear about your
                vision and how we can create something amazing together.
              </p>

              <div className='space-y-6 mb-10'>
                <div>
                  <h3 className='font-semibold mb-2 flex items-center gap-2 text-gray-700'>
                    <FaEnvelope className='text-gray-700' />
                    Email
                  </h3>
                  <a
                    href='mailto:nikhilkubde21@gmail.com'
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    nikhilkubde21@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className='font-semibold mb-2 text-gray-700'>
                    Based In
                  </h3>
                  <p className='text-gray-600'>India</p>
                  <p className='text-sm text-gray-500'>
                    Available for travel worldwide
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold mb-2 text-gray-700'>
                    Agency Representation
                  </h3>
                  <p className='text-gray-600'>CastYou Agency</p>
                  <a
                    href='https://castyou.in/nikhil-kubde/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-gray-900 hover:text-gray-700 transition-colors'
                  >
                    View Profile on CastYou →
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className='font-semibold mb-4 text-gray-700'>Follow Me</h3>
                <div className='flex gap-4'>
                  <a
                    href='https://www.instagram.com/nikhil__kubde/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-gray-100 border border-gray-300 text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
                    aria-label='Instagram'
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction='right' delay={200}>
            <div className='premium-surface p-8'>
              <h2 className='text-2xl font-serif mb-6 text-gray-900'>
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
