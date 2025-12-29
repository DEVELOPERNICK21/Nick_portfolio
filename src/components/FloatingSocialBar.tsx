"use client";

import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function FloatingSocialBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3'>
      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='w-14 h-14 bg-white text-dark rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 active:scale-95 group'
        aria-label='Toggle social links'
      >
        <div className='relative w-6 h-6'>
          <span
            className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-dark transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isExpanded ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-dark transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isExpanded ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-dark transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isExpanded ? "-rotate-45 translate-y-0" : "translate-y-1.5"
            }`}
          />
        </div>
      </button>

      {/* Social Links */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isExpanded
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Instagram */}
        <a
          href='https://www.instagram.com/nikhil___kubde/'
          target='_blank'
          rel='noopener noreferrer'
          className='w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 transform hover:shadow-xl group'
          aria-label='Instagram'
          onClick={() => setIsExpanded(false)}
        >
          <FaInstagram size={20} className='group-hover:scale-110 transition-transform' />
        </a>

        {/* Email */}
        <a
          href='mailto:nikhilkubde21@gmail.com'
          className='w-14 h-14 bg-white text-dark rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 transform hover:shadow-xl group border-2 border-gray-200'
          aria-label='Email'
          onClick={() => setIsExpanded(false)}
        >
          <FaEnvelope size={20} className='group-hover:scale-110 transition-transform' />
        </a>
      </div>
    </div>
  );
}

