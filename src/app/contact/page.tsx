import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nikhil Kubde for bookings, collaborations, or inquiries. Available worldwide for modeling projects.",
  openGraph: {
    title: "Contact - Nikhil Kubde",
    description:
      "Get in touch with Nikhil Kubde for bookings, collaborations, or inquiries.",
  },
};

export default function ContactPage() {
  return (
    <div className='py-20 bg-dark min-h-screen'>
      <div className='container-custom'>
        {/* Header */}
        <ScrollReveal direction='fade'>
          <div className='text-center mb-16'>
            <h1 className='section-title'>Get In Touch</h1>
            <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
              Available for bookings, collaborations, and creative projects
              worldwide
            </p>
          </div>
        </ScrollReveal>

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Information */}
          <ScrollReveal direction='left' delay={100}>
            <div>
              <h2 className='text-2xl font-serif mb-6 glow-text'>
                Lets Work Together
              </h2>
              <p className='text-gray-300 mb-8 leading-relaxed'>
                Im always excited to collaborate on new projects. Whether youre
                a photographer, brand, or agency, Id love to hear about your
                vision and how we can create something amazing together.
              </p>

              <div className='space-y-6 mb-10'>
                <div>
                  <h3 className='font-semibold mb-2 flex items-center gap-2 text-lightGray'>
                    <FaEnvelope className='text-accent' />
                    Email
                  </h3>
                  <a
                    href='mailto:nikhilkubde21@gmail.com'
                    className='text-gray-400 hover:text-accent transition-colors'
                  >
                    nikhilkubde21@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className='font-semibold mb-2 text-lightGray'>
                    Based In
                  </h3>
                  <p className='text-gray-400'>India</p>
                  <p className='text-sm text-gray-500'>
                    Available for travel worldwide
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold mb-2 text-lightGray'>
                    Agency Representation
                  </h3>
                  <p className='text-gray-400'>CastYou Agency</p>
                  <a
                    href='https://castyou.in/nikhil-kubde/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-accent hover:text-accentGold transition-colors'
                  >
                    View Profile on CastYou →
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className='font-semibold mb-4 text-lightGray'>Follow Me</h3>
                <div className='flex gap-4'>
                  <a
                    href='https://instagram.com/yourhandle'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-secondary border border-accent/30 text-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-dark hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300'
                    aria-label='Instagram'
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href='https://twitter.com/yourhandle'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-secondary border border-accent/30 text-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-dark hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300'
                    aria-label='Twitter'
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href='https://linkedin.com/in/yourprofile'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-secondary border border-accent/30 text-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-dark hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300'
                    aria-label='LinkedIn'
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction='right' delay={200}>
            <div className='card-dark p-8'>
              <h2 className='text-2xl font-serif mb-6 glow-text'>
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
