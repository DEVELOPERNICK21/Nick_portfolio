import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
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
    <div className='py-20 bg-white dark:bg-dark min-h-screen transition-colors duration-300'>
      <div className='container-custom'>
        {/* Header */}
        <ScrollReveal direction='fade'>
          <div className='text-center mb-16'>
            <h1 className='section-title'>Get In Touch</h1>
            <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors'>
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
              <p className='text-gray-700 dark:text-gray-300 mb-8 leading-relaxed transition-colors'>
                Im always excited to collaborate on new projects. Whether youre
                a photographer, brand, or agency, Id love to hear about your
                vision and how we can create something amazing together.
              </p>

              <div className='space-y-6 mb-10'>
                <div>
                  <h3 className='font-semibold mb-2 flex items-center gap-2 text-gray-700 dark:text-lightGray transition-colors'>
                    <FaEnvelope className='text-white' />
                    Email
                  </h3>
                  <a
                    href='mailto:nikhilkubde21@gmail.com'
                    className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
                  >
                    nikhilkubde21@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className='font-semibold mb-2 text-gray-700 dark:text-lightGray transition-colors'>
                    Based In
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 transition-colors'>India</p>
                  <p className='text-sm text-gray-500 dark:text-gray-500 transition-colors'>
                    Available for travel worldwide
                  </p>
                </div>

                <div>
                  <h3 className='font-semibold mb-2 text-gray-700 dark:text-lightGray transition-colors'>
                    Agency Representation
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 transition-colors'>CastYou Agency</p>
                  <a
                    href='https://castyou.in/nikhil-kubde/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-gray-900 dark:text-white hover:text-accentGold transition-colors'
                  >
                    View Profile on CastYou →
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className='font-semibold mb-4 text-gray-700 dark:text-lightGray transition-colors'>Follow Me</h3>
                <div className='flex gap-4'>
                  <a
                    href='https://www.instagram.com/nikhil___kubde/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-gray-100 dark:bg-secondary border border-gray-300 dark:border-white/30 text-gray-900 dark:text-white rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white hover:text-dark hover:shadow-lg transition-all duration-300'
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
