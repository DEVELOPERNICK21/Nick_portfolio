import Link from "next/link";
import { FaInstagram, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#08080a] border-t border-zinc-800 text-zinc-300 py-16'>
      <div className='container-custom'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* About */}
          <div>
            <h3 className='text-xl font-serif mb-4 text-zinc-100'>Nikhil Kubde</h3>
            <p className='text-zinc-400 text-sm leading-relaxed mb-3'>
              Professional model available for fashion, editorial, and
              commercial projects worldwide.
            </p>
            <a
              href='https://castyou.in/nikhil-kubde/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-amber-200 hover:text-amber-100 transition-colors text-sm'
            >
              View Agency Profile →
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-serif mb-4 text-zinc-100'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-zinc-400 hover:text-zinc-100 transition-colors text-sm'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/portfolio'
                  className='text-zinc-400 hover:text-zinc-100 transition-colors text-sm'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-zinc-400 hover:text-zinc-100 transition-colors text-sm'
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href='https://castyou.in/nikhil-kubde/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-zinc-400 hover:text-zinc-100 transition-colors text-sm'
                >
                  CastYou Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className='text-xl font-serif mb-4 text-zinc-100'>Connect</h3>
            <div className='flex gap-4'>
              <a
                href='https://www.instagram.com/nikhil__kubde/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors'
                aria-label='Instagram'
              >
                <FaInstagram size={18} className='text-zinc-200' />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500'>
          <p className='flex items-center justify-center gap-2'>
            © {currentYear} Nikhil Kubde. Made with{" "}
            <FaHeart className='text-red-500' /> for the craft
          </p>
        </div>
      </div>
    </footer>
  );
}
