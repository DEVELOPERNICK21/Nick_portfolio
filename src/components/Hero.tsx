import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE } from "@/data/media";
import { site } from "@/config/site";

export default function Hero() {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={HERO_IMAGE}
          alt='Professional modeling photo'
          fill
          className='object-cover'
          priority
          quality={90}
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark' />
      </div>

      {/* Content */}
      <div className='relative z-10 text-center text-white px-4'>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-serif mb-6 animate-fade-in text-white drop-shadow-2xl'>
          {site.name}
        </h1>
        <p className='text-xl md:text-2xl lg:text-3xl mb-4 font-light tracking-wide'>
          Professional Model • {site.tagline.replace(/ • /g, " • ")}
        </p>
        <a
          href={site.agency.url}
          {...(site.agency.url.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className='inline-block text-white hover:text-accentGold transition-colors mb-8'
        >
          <span className='text-sm uppercase tracking-wider'>
            Represented by {site.agency.name}
          </span>
        </a>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link href='/portfolio' className='btn-primary'>
            View Portfolio
          </Link>
          <Link
            href='/contact'
            className='btn-secondary bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary'
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10'>
        <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white rounded-full mt-2 animate-bounce' />
        </div>
      </div>
    </section>
  );
}
