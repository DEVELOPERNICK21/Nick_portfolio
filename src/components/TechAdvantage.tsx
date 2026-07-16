"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import { FaCode, FaMobileAlt, FaLightbulb, FaRocket } from "react-icons/fa";
import { site } from "@/config/site";

export default function TechAdvantage() {
  if (!site.showTechAdvantage) return null;
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
          <div className='text-center mb-16 premium-surface p-8 md:p-12 bg-white/5 border border-white/10'>
            <span className='premium-kicker inline-block mb-6'>Unique Advantage</span>
            <h2 className='premium-heading mb-6'>
              Technical Expertise Meets Creative Vision
            </h2>
            <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-6'></div>
            <p className='premium-body max-w-3xl mx-auto font-light'>
              With over{" "}
              <strong className='text-zinc-100'>
                5 years of experience as a professional mobile app developer
              </strong>
              , I bring a unique combination of technical expertise and creative
              vision to every modeling project. This background sets me apart
              and makes me particularly valuable for modern brand campaigns.
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
                  className='rounded-2xl p-6 border border-white/10 bg-white/5 hover:border-amber-500/30 transition-all duration-300 group'
                >
                  <div className='w-12 h-12 bg-amber-500/20 border border-amber-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors'>
                    <Icon className='text-amber-400 text-xl' />
                  </div>
                  <h3 className='text-xl font-semibold text-zinc-100 mb-2'>
                    {advantage.title}
                  </h3>
                  <p className='text-zinc-400 text-sm leading-relaxed'>
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal direction='fade' delay={300} variant='scale-lift'>
          <div className='premium-surface p-8 md:p-10 bg-white/5 border border-white/10'>
            <div className='max-w-4xl mx-auto'>
              <h3 className='text-2xl md:text-3xl font-serif text-zinc-100 mb-6 text-center'>
                Why This Matters for Agencies & Brands
              </h3>
              <div className='grid md:grid-cols-2 gap-6'>
                {[
                  "Understands digital marketing and content strategy",
                  "Can collaborate on tech-related campaigns with deeper insight",
                  "Professional work ethic and reliability from tech industry",
                  "Unique positioning for tech and innovation-focused brands",
                  "Can contribute to content creation beyond just modeling",
                  "Tech-savvy approach to social media and online presence",
                ].map((text) => (
                  <div key={text} className='flex items-start gap-3'>
                    <div className='w-6 h-6 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <span className='text-amber-400 text-xs font-bold'>✓</span>
                    </div>
                    <p className='text-zinc-400'>{text}</p>
                  </div>
                ))}
              </div>
              <div className='text-center mt-8'>
                <Link href='/about' className='premium-button inline-flex'>
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
