"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import { FaCode, FaMobileAlt, FaLightbulb, FaRocket } from "react-icons/fa";

export default function TechAdvantage() {
  const advantages = [
    {
      icon: FaCode,
      title: "Tech-Savvy",
      description:
        "Deep understanding of digital content, social media algorithms, and online presence optimization",
    },
    {
      icon: FaMobileAlt,
      title: "Digital Native",
      description:
        "Perfect fit for tech companies, mobile apps, and digital-first brand campaigns",
    },
    {
      icon: FaLightbulb,
      title: "Problem Solver",
      description:
        "Analytical mindset and attention to detail from 5+ years of software development",
    },
    {
      icon: FaRocket,
      title: "Professional",
      description:
        "Proven track record of delivering high-quality work under deadlines and tight schedules",
    },
  ];

  return (
    <section
      className='py-20 bg-transparent'
      aria-label='Technical Expertise and Modeling Services'
    >
      <div className='container-custom'>
        <ScrollReveal direction='fade' delay={100} variant='scale-lift'>
          <div className='text-center mb-16 premium-surface p-8 md:p-12'>
            <div className='inline-block mb-6'>
              <span className='text-xs uppercase tracking-widest text-gray-500 font-semibold px-4 py-2 border border-gray-300 bg-white'>
                Unique Advantage
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-gray-900'>
              Technical Expertise Meets Creative Vision
            </h2>
            <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6'></div>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed'>
              With over <strong className='text-gray-900'>5 years of experience as a professional mobile app developer</strong>, I bring a unique combination of technical expertise and creative vision to every modeling project. This background sets me apart and makes me particularly valuable for modern brand campaigns.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction='up' delay={200} variant='stagger'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className='bg-white rounded-2xl p-6 border border-stone-300 hover:border-stone-500 hover:shadow-premium-soft transition-all duration-300 group'
                >
                  <div className='w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors'>
                    <Icon className='text-white text-xl' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {advantage.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal direction='fade' delay={300} variant='scale-lift'>
          <div className='bg-white rounded-2xl p-8 md:p-10 border border-stone-300 shadow-premium-soft'>
            <div className='max-w-4xl mx-auto'>
              <h3 className='text-2xl md:text-3xl font-serif text-gray-900 mb-6 text-center'>
                Why This Matters for Agencies & Brands
              </h3>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <span className='text-white text-xs font-bold'>✓</span>
                    </div>
                    <p className='text-gray-700'>
                      Understands digital marketing and content strategy
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <span className='text-white text-xs font-bold'>✓</span>
                    </div>
                    <p className='text-gray-700'>
                      Can collaborate on tech-related campaigns with deeper
                      insight
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <span className='text-white text-xs font-bold'>✓</span>
                    </div>
                    <p className='text-gray-700'>
                      Professional work ethic and reliability from tech industry
                    </p>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <span className='text-white text-xs font-bold'>✓</span>
                    </div>
                    <p className='text-gray-700'>
                      Unique positioning for tech and innovation-focused brands
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <span className='text-white text-xs font-bold'>✓</span>
                    </div>
                    <p className='text-gray-700'>
                      Can contribute to content creation beyond just modeling
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <span className='text-white text-xs font-bold'>✓</span>
                    </div>
                    <p className='text-gray-700'>
                      Tech-savvy approach to social media and online presence
                    </p>
                  </div>
                </div>
              </div>
              <div className='text-center mt-8'>
                <Link
                  href='/about'
                  className='inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-colors shadow-lg'
                >
                  Learn More About My Background
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

