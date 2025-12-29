"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-40 bg-white/98 dark:bg-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-accent/20 shadow-sm dark:shadow-none transition-all duration-300'>
      <div className='container-custom'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Link href='/' className='text-2xl font-serif font-bold glow-text'>
            Nikhil Kubde
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-gray-700 dark:text-lightGray hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium relative group'
              >
                {link.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-accentGold dark:from-white dark:to-accentGold transition-all duration-300 group-hover:w-full'></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-2xl text-gray-700 dark:text-lightGray transition-colors'
            aria-label='Toggle menu'
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden py-4 border-t border-gray-200 dark:border-accent/20 bg-white/95 dark:bg-secondary/95 transition-colors'>
            <div className='flex flex-col space-y-4'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-gray-700 dark:text-lightGray hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium py-2'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
