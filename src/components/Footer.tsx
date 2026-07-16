import Link from "next/link";
import { FaInstagram, FaHeart } from "react-icons/fa";
import { isDemo, site } from "@/config/site";
import { PORTFOLIO_PDF, PORTFOLIO_PDF_FILENAME } from "@/data/media";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const agencyLinkProps = site.agency.url.startsWith("http")
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <footer className='bg-[#08080a] border-t border-zinc-800 text-zinc-300 py-16'>
      <div className='container-custom'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='text-xl font-serif mb-4 text-zinc-100'>{site.name}</h3>
            <p className='text-zinc-400 text-sm leading-relaxed mb-3'>
              {isDemo
                ? "Sample portfolio layout for fashion, editorial, and commercial bookings."
                : "Professional model available for fashion, editorial, and commercial projects worldwide."}
            </p>
            <a
              href={site.agency.url}
              {...agencyLinkProps}
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
                  href='/library'
                  className='text-zinc-400 hover:text-zinc-100 transition-colors text-sm'
                >
                  Photo Library
                </Link>
              </li>
              <li>
                <a
                  href={PORTFOLIO_PDF}
                  download={PORTFOLIO_PDF_FILENAME}
                  className='text-zinc-400 hover:text-zinc-100 transition-colors text-sm'
                >
                  Download Comp Card PDF
                </a>
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
                  href={site.agency.url}
                  {...agencyLinkProps}
                  className='text-zinc-400 hover:text-zinc-100 transition-colors text-sm'
                >
                  {site.agency.profileLabel || site.agency.name}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className='text-xl font-serif mb-4 text-zinc-100'>Connect</h3>
            <div className='flex gap-4'>
              <a
                href={site.instagram.href}
                {...(site.instagram.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
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
          <p className='flex items-center justify-center gap-2 flex-wrap'>
            © {currentYear} {site.name}.{" "}
            {isDemo && site.builtBy ? (
              <>
                Demo by{" "}
                <a
                  href={site.builtBy.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-amber-300 hover:text-amber-200'
                >
                  {site.builtBy.name}
                </a>
              </>
            ) : (
              <>
                Made with <FaHeart className='text-red-500' /> for the craft
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
