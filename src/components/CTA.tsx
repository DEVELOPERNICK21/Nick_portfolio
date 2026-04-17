import Link from "next/link";

export default function CTA() {
  return (
    <section className='py-20 md:py-32 bg-transparent'>
      <div className='container-custom text-center'>
        <div className='premium-surface p-8 md:p-14'>
        <p className='premium-kicker'>Bookings</p>
        <h2 className='text-5xl md:text-6xl lg:text-7xl font-serif mb-6 mt-4 text-gray-900 tracking-tight'>
          LET&apos;S CREATE
        </h2>
        <h3 className='text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-gray-900 tracking-tight'>
          SOMETHING AMAZING
        </h3>
        <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-10'></div>
        <p className='text-lg md:text-xl mb-12 text-gray-600 max-w-2xl mx-auto font-light leading-relaxed'>
          Available for agency bookings, brand collaborations, and modeling projects. 
          Specializing in fashion, editorial, commercial, and digital brand campaigns. 
          Let&apos;s bring your creative vision to life.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/contact'
            className='premium-button justify-center'
          >
            Get In Touch
          </Link>
          <Link
            href='/portfolio'
            className='premium-button-secondary justify-center'
          >
            View Portfolio
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
