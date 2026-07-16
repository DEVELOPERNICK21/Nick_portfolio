import Link from "next/link";

export default function CTA() {
  return (
    <section className='py-20 md:py-32 bg-transparent'>
      <div className='container-custom text-center'>
        <div className='premium-surface p-8 md:p-14 bg-white/5 border border-white/10'>
          <p className='premium-kicker'>Bookings</p>
          <h2 className='premium-heading text-5xl md:text-6xl lg:text-7xl mb-6 mt-4 tracking-tight'>
            LET&apos;S CREATE
          </h2>
          <h3 className='premium-heading text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight'>
            SOMETHING AMAZING
          </h3>
          <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-10'></div>
          <p className='premium-body mb-12 max-w-2xl mx-auto font-light'>
            Available for agency bookings, brand collaborations, and modeling
            projects. Specializing in fashion, editorial, commercial, and
            digital brand campaigns. Let&apos;s bring your creative vision to
            life.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact' className='premium-button justify-center'>
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
