"use client";

import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { site } from "@/config/site";

export default function FloatingSocialBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='fixed right-4 md:right-6 bottom-4 md:bottom-6 z-50 flex flex-col items-end gap-3'>
      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='w-12 h-12 md:w-14 md:h-14 bg-zinc-950/90 text-zinc-100 rounded-full shadow-lg flex items-center justify-center hover:bg-zinc-900 transition-all duration-300 transform hover:scale-110 active:scale-95 group border-2 border-zinc-700 backdrop-blur-sm'
        aria-label='Toggle social links'
      >
        <div className='relative w-5 h-5 md:w-6 md:h-6'>
          <span
            className={`absolute top-1/2 left-1/2 w-3 md:w-4 h-0.5 bg-zinc-100 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isExpanded ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute top-1/2 left-1/2 w-3 md:w-4 h-0.5 bg-zinc-100 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isExpanded ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute top-1/2 left-1/2 w-3 md:w-4 h-0.5 bg-zinc-100 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
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
          href={site.instagram.href}
          {...(site.instagram.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className='w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 transform hover:shadow-xl group'
          aria-label='Instagram'
          onClick={() => setIsExpanded(false)}
        >
          <FaInstagram size={18} className='md:w-5 md:h-5 group-hover:scale-110 transition-transform' />
        </a>

        {/* Email */}
        <a
          href={`mailto:${site.email}`}
          className='w-12 h-12 md:w-14 md:h-14 bg-zinc-950 text-zinc-100 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 transform hover:shadow-xl group border-2 border-zinc-700'
          aria-label='Email'
          onClick={() => setIsExpanded(false)}
        >
          <FaEnvelope size={18} className='md:w-5 md:h-5 group-hover:scale-110 transition-transform' />
        </a>
      </div>
    </div>
  );
}

