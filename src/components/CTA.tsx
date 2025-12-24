import Link from "next/link";

export default function CTA() {
  return (
    <section className='py-20 md:py-32 bg-dark'>
      <div className='container-custom text-center'>
        <h2 className='text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-white tracking-tight'>
          LET&apos;S CREATE
        </h2>
        <h3 className='text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-white tracking-tight'>
          SOMETHING AMAZING
        </h3>
        <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-10'></div>
        <p className='text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto font-light leading-relaxed'>
          Available for bookings and collaborations. Let&apos;s bring your
          creative vision to life.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/contact'
            className='px-8 py-4 bg-white text-dark font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block'
          >
            Get In Touch
          </Link>
          <Link
            href='/portfolio'
            className='px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-dark transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block'
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
