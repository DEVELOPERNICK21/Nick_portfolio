"use client";

import { FaInstagram, FaExternalLinkAlt } from "react-icons/fa";

export default function InstagramFollow() {
  return (
    <section className='py-20 bg-white'>
      <div className='container-custom'>
        <div className='max-w-2xl mx-auto'>
          <div className='bg-white rounded-2xl shadow-lg p-8 text-center'>
            <p className='text-gray-600 mb-6 text-lg'>
              Follow me on Instagram for daily updates and behind-the-scenes content
            </p>
            <a
              href='https://www.instagram.com/nikhil__kubde/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105'
            >
              <FaInstagram className='text-xl' />
              Follow @nikhil__kubde
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

