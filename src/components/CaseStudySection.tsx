import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudySection() {
  if (caseStudies.length === 0) return null;

  return (
    <section className='premium-section pt-0' data-chapter='CaseStudies'>
      <span className='scroll-chapter-label'>Brand Work</span>
      <div className='premium-surface p-8 md:p-10 bg-white/5 border border-white/10 mt-4 mb-20'>
        <p className='premium-kicker'>Campaigns</p>
        <h2 className='premium-heading mt-4 mb-10'>Brand Case Studies</h2>

        <div className='grid md:grid-cols-3 gap-6'>
          {caseStudies.map((study) => (
            <article
              key={study.brandName}
              className='rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-amber-500/30 transition-colors group'
            >
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={study.imageUrl}
                  alt={`${study.brandName} campaign`}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
              </div>
              <div className='p-6'>
                <span className='inline-block text-xs uppercase tracking-widest text-amber-400 border border-amber-500/30 bg-amber-500/10 px-3 py-1 rounded-full mb-3'>
                  {study.category}
                </span>
                <h3 className='text-xl font-serif text-zinc-100 mb-1'>
                  {study.brandName}
                </h3>
                <p className='text-sm text-amber-300/80 mb-3'>{study.tagline}</p>
                <p className='text-zinc-400 text-sm leading-relaxed line-clamp-2'>
                  {study.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
