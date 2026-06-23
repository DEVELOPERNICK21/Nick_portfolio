import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className='premium-section container-custom' data-chapter='Testimonials'>
      <span className='scroll-chapter-label'>Testimonials</span>
      <div className='premium-surface p-8 md:p-10 bg-white/5 border border-white/10 mt-4'>
        <p className='premium-kicker'>What People Say</p>
        <h2 className='premium-heading mt-4 mb-10'>Testimonials</h2>

        <div className='flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory'>
          {testimonials.map((item) => (
            <blockquote
              key={`${item.name}-${item.company}`}
              className='min-w-[85vw] md:min-w-0 snap-start flex-shrink-0 rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 hover:border-amber-500/30 transition-colors'
            >
              <span
                className='text-4xl text-amber-400 leading-none font-serif'
                aria-hidden='true'
              >
                &ldquo;
              </span>
              <p className='text-zinc-300 leading-relaxed mt-2 mb-6'>
                {item.quote}
              </p>
              <footer className='border-t border-white/10 pt-4'>
                <cite className='not-italic'>
                  <span className='block text-zinc-100 font-semibold'>
                    {item.name}
                  </span>
                  <span className='block text-sm text-amber-400/80 mt-1'>
                    {item.role} · {item.company}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
