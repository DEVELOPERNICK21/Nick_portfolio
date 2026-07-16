import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { site, isDemo } from "@/config/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/library", label: "Library" },
    { href: "/premium", label: "Premium" },
    { href: "/cinematic", label: "Cinematic" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed left-0 right-0 z-40 bg-black/70 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ${isDemo ? "top-[52px]" : "top-0"}`}>
      <div className='container-custom'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Link href='/' className='text-2xl font-serif font-bold text-zinc-100 hover:text-amber-200 transition-colors'>
            {site.name}
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-zinc-300 hover:text-zinc-100 transition-colors duration-200 font-medium relative group'
              >
                {link.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full'></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-2xl text-zinc-300 hover:text-zinc-100 transition-colors'
            aria-label='Toggle menu'
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden py-4 border-t border-zinc-800 bg-zinc-950/95'>
            <div className='flex flex-col space-y-4'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-zinc-300 hover:text-zinc-100 transition-colors duration-200 font-medium py-2'
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
