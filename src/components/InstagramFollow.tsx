"use client";

import { FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { isDemo, site } from "@/config/site";

export default function InstagramFollow() {
  if (isDemo) {
    return (
      <section className='py-20 bg-transparent'>
        <div className='container-custom'>
          <div className='max-w-2xl mx-auto'>
            <div className='premium-surface p-8 text-center bg-white/5 border border-white/10'>
              <p className='premium-body mb-6'>
                Your Instagram feed link and handle appear here on the live site.
              </p>
              <Link href='/contact' className='premium-button inline-flex items-center gap-2'>
                Request your portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='py-20 bg-transparent'>
      <div className='container-custom'>
        <div className='max-w-2xl mx-auto'>
          <div className='premium-surface p-8 text-center bg-white/5 border border-white/10'>
            <p className='premium-body mb-6'>
              Follow me on Instagram for daily updates and behind-the-scenes
              content
            </p>
            <a
              href={site.instagram.href}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105'
            >
              <FaInstagram className='text-xl' />
              Follow {site.instagram.handle}
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
