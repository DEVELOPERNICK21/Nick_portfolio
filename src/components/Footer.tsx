import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-secondary border-t border-accent/20 text-lightGray py-12'>
      <div className='container-custom'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* About */}
          <div>
            <h3 className='text-xl font-serif mb-4 glow-text'>Nikhil Kubde</h3>
            <p className='text-gray-400 text-sm leading-relaxed mb-3'>
              Professional model available for fashion, editorial, and
              commercial projects worldwide.
            </p>
            <a
              href='https://castyou.in/nikhil-kubde/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-white hover:text-accentGold transition-colors text-sm'
            >
              View Agency Profile →
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-serif mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors text-sm'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/portfolio'
                  className='text-gray-400 hover:text-white transition-colors text-sm'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-400 hover:text-white transition-colors text-sm'
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href='https://castyou.in/nikhil-kubde/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors text-sm'
                >
                  CastYou Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className='text-xl font-serif mb-4'>Connect</h3>
            <div className='flex gap-4'>
              <a
                href='https://instagram.com/yourhandle'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-colors'
                aria-label='Instagram'
              >
                <FaInstagram size={18} />
              </a>
              <a
                href='https://twitter.com/yourhandle'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-colors'
                aria-label='Twitter'
              >
                <FaTwitter size={18} />
              </a>
              <a
                href='https://linkedin.com/in/yourprofile'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-dark transition-colors'
                aria-label='LinkedIn'
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-accent/10 pt-8 text-center text-sm text-gray-400'>
          <p className='flex items-center justify-center gap-2'>
            © {currentYear} Nikhil Kubde. Made with{" "}
            <FaHeart className='text-white' /> for the craft
          </p>
        </div>
      </div>
    </footer>
  );
}
