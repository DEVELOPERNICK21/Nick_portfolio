import Link from "next/link";

export default function CTA() {
  return (
    <section className='py-20 md:py-32 bg-white'>
      <div className='container-custom text-center'>
        <h2 className='text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-gray-900 tracking-tight'>
          LET&apos;S CREATE
        </h2>
        <h3 className='text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-gray-900 tracking-tight'>
          SOMETHING AMAZING
        </h3>
        <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-10'></div>
        <p className='text-lg md:text-xl mb-12 text-gray-600 max-w-2xl mx-auto font-light leading-relaxed'>
          Available for bookings and collaborations. Let&apos;s bring your
          creative vision to life.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/contact'
            className='px-8 py-4 bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block shadow-lg hover:shadow-xl'
          >
            Get In Touch
          </Link>
          <Link
            href='/portfolio'
            className='px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block shadow-lg hover:shadow-xl'
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
