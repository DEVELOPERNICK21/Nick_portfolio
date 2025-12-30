import Link from "next/link";
import { FaInstagram, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-50 border-t border-gray-200 text-gray-700 py-16'>
      <div className='container-custom'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* About */}
          <div>
            <h3 className='text-xl font-serif mb-4 text-gray-900'>Nikhil Kubde</h3>
            <p className='text-gray-600 text-sm leading-relaxed mb-3'>
              Professional model available for fashion, editorial, and
              commercial projects worldwide.
            </p>
            <a
              href='https://castyou.in/nikhil-kubde/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors text-sm'
            >
              View Agency Profile →
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-serif mb-4 text-gray-900'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-600 hover:text-gray-900 transition-colors text-sm'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/portfolio'
                  className='text-gray-600 hover:text-gray-900 transition-colors text-sm'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-600 hover:text-gray-900 transition-colors text-sm'
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href='https://castyou.in/nikhil-kubde/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-gray-900 transition-colors text-sm'
                >
                  CastYou Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className='text-xl font-serif mb-4 text-gray-900'>Connect</h3>
            <div className='flex gap-4'>
              <a
                href='https://www.instagram.com/nikhil___kubde/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors'
                aria-label='Instagram'
              >
                <FaInstagram size={18} className='text-gray-700' />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-gray-200 pt-8 text-center text-sm text-gray-500'>
          <p className='flex items-center justify-center gap-2'>
            © {currentYear} Nikhil Kubde. Made with{" "}
            <FaHeart className='text-red-500' /> for the craft
          </p>
        </div>
      </div>
    </footer>
  );
}
