import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ModelPortfolioDownload from "@/components/ModelPortfolioDownload";
import MeasurementsCard from "@/components/MeasurementsCard";
import AvailabilitySection from "@/components/AvailabilitySection";
import { ABOUT_IMAGE } from "@/data/media";

export const metadata: Metadata = {
  title: "About - Professional Model Profile | Nikhil Kubde",
  description:
    "Professional model Nikhil Kubde - Available for agency bookings. 5+ years tech experience combined with modeling expertise. Specializes in fashion, editorial, and commercial modeling. Represented by CastYou agency. Perfect for digital-first brands and tech companies.",
  keywords: [
    "Nikhil Kubde model",
    "professional model profile",
    "model for hire",
    "fashion model portfolio",
    "commercial model available",
    "editorial model",
    "tech-savvy model",
    "modeling agency talent",
    "CastYou model",
    "available model bookings",
  ],
  openGraph: {
    title: "About - Professional Model Profile | Nikhil Kubde",
    description:
      "Professional model available for agency bookings. 5+ years tech experience. Fashion, editorial, and commercial modeling. Represented by CastYou agency.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Professional Model Profile | Nikhil Kubde",
    description:
      "Professional model available for agency bookings. 5+ years tech experience. Fashion, editorial, and commercial modeling.",
  },
};

export default function AboutPage() {
  return (
    <div className='premium-shell min-h-screen'>
      <div className='container-custom'>
        <section className='premium-section pb-10' data-chapter='Overview'>
          <div className='text-center premium-surface p-8 md:p-12'>
            <p className='premium-kicker'>Profile</p>
            <h1 className='premium-heading mt-4'>About Me</h1>
            <p className='premium-body mt-4 max-w-3xl mx-auto'>
              Passionate about fashion, storytelling, and bringing creative
              visions to life with a disciplined, campaign-ready process.
            </p>
          </div>
        </section>

        <div className='grid md:grid-cols-2 gap-12 items-center mb-12' data-chapter='Journey'>
          <ScrollReveal direction='left'>
            <div className='relative h-[600px] rounded-lg overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500 bg-white/5'>
              <Image
                src={ABOUT_IMAGE}
                alt='Nikhil Kubde - Professional modeling photo'
                fill
                className='object-contain object-center hover:scale-105 transition-transform duration-700'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction='right' delay={200}>
            <div className='space-y-6 premium-surface p-8 bg-white/5 border border-white/10'>
              <h2 className='text-3xl font-serif mb-4 text-zinc-100'>
                My Journey
              </h2>
              <p className='text-zinc-400 leading-relaxed'>
                I&apos;m a fresh face in the modeling industry, driven by a
                passion for fashion and creative expression. With over 5 years
                of experience as a professional mobile app developer, I bring a
                unique combination of technical expertise and creative vision to
                every project. This background gives me a distinct advantage in
                understanding digital content, social media strategy, and the
                technical aspects of modern brand campaigns.
              </p>
              <p className='text-zinc-400 leading-relaxed'>
                My technical background enhances my modeling career in unique
                ways - I understand the digital landscape, content creation
                workflows, and how to effectively communicate with tech-savvy
                brands. This makes me particularly valuable for tech companies,
                digital-first brands, and campaigns that require both on-camera
                presence and technical understanding. I&apos;m eager to work
                across various modeling genres - from fashion editorial to
                commercial campaigns - bringing both authenticity and
                professionalism to every project.
              </p>
              <p className='text-zinc-400 leading-relaxed'>
                When I&apos;m not on set, I balance my time between fitness,
                studying fashion trends, practicing poses, and continuing to
                develop both my modeling craft and technical skills. I&apos;m
                passionate about building meaningful relationships in the
                industry and am always open to new opportunities and
                collaborations that allow me to showcase this unique combination
                of skills.
              </p>
              <a
                href='https://castyou.in/nikhil-kubde/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block mt-4 text-amber-400 hover:text-amber-300 transition-colors font-medium'
              >
                View Full CastYou Profile →
              </a>
            </div>
          </ScrollReveal>
        </div>

        <MeasurementsCard />
        <AvailabilitySection />

        <ScrollReveal direction='up' delay={150} variant='stagger'>
          <section className='premium-section pt-0' data-chapter='Timeline'>
            <span className='scroll-chapter-label'>Timeline</span>
            <div className='grid md:grid-cols-3 gap-4 mt-6'>
              {[
                "2019-2023: Professional mobile app development across product teams",
                "2024: Transitioned into visual-first personal brand building",
                "Now: Fashion, editorial, and commercial modeling for digital-first campaigns",
              ].map((item) => (
                <div key={item} className='premium-surface p-6 bg-white/5 border border-white/10'>
                  <p className='premium-body'>{item}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal direction='fade' delay={300}>
          <div className='mb-20 premium-section pt-0' data-chapter='Video'>
            <div className='text-center mb-16'>
              <span className='premium-kicker'>Video Introduction</span>
              <h2 className='premium-heading mt-4 mb-6'>GET TO KNOW ME</h2>
              <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-6'></div>
              <p className='premium-body max-w-2xl mx-auto'>
                Watch my introduction to see my personality, on-camera presence,
                and professional demeanor
              </p>
            </div>

            <div className='max-w-6xl mx-auto'>
              <div className='relative group'>
                <div className='relative rounded-2xl overflow-hidden border border-amber-500/20 bg-black'>
                  <video
                    src='/intro-video.mp4'
                    className='w-full h-auto max-h-[80vh]'
                    controls
                    playsInline
                    preload='metadata'
                    poster={ABOUT_IMAGE}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className='mt-10 premium-surface p-8 bg-white/5 border border-white/10'>
                  <div className='text-center max-w-3xl mx-auto'>
                    <p className='text-zinc-400 text-base leading-relaxed mb-4'>
                      This introduction video provides agencies and brands with
                      valuable insight into my personality, communication
                      skills, and professional demeanor - essential qualities
                      for successful modeling collaborations.
                    </p>
                    <div className='flex flex-wrap justify-center gap-4 mt-6'>
                      {[
                        "On-Camera Presence",
                        "Professional Communication",
                        "Personality Showcase",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className='px-4 py-2 bg-white/5 border border-amber-500/30 rounded-full text-sm text-zinc-300'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction='fade' delay={100}>
          <div className='mb-20 premium-section pt-0' data-chapter='Advantage'>
            <div className='premium-surface p-10 md:p-12 bg-white/5 border border-white/10'>
              <div className='text-center mb-8'>
                <span className='premium-kicker'>Unique Advantage</span>
                <h2 className='premium-heading mt-4 mb-6'>
                  Technical Expertise Meets Creative Vision
                </h2>
                <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto'></div>
              </div>

              <div className='grid md:grid-cols-2 gap-8 items-start'>
                <div>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-12 h-12 bg-amber-500/20 border border-amber-500/30 rounded-lg flex items-center justify-center'>
                      <span className='text-amber-400 text-xl font-bold'>5+</span>
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold text-zinc-100'>
                        Years as Mobile App Developer
                      </h3>
                      <p className='text-sm text-zinc-500'>
                        Professional software development experience
                      </p>
                    </div>
                  </div>
                  <p className='text-zinc-400 leading-relaxed mb-4'>
                    My background as a professional mobile app developer with
                    over 5 years of experience brings a unique advantage to my
                    modeling career. This technical expertise sets me apart and
                    makes me particularly valuable for modern brand campaigns.
                  </p>
                  <div className='space-y-3'>
                    {[
                      { bold: "Tech-Savvy:", text: "Deep understanding of digital content, social media algorithms, and online presence optimization" },
                      { bold: "Problem-Solving:", text: "Analytical mindset and attention to detail from years of software development" },
                      { bold: "Professionalism:", text: "Proven track record of delivering high-quality work under deadlines" },
                      { bold: "Brand Fit:", text: "Perfect for tech companies, digital-first brands, and innovative campaigns" },
                    ].map((item) => (
                      <div key={item.bold} className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0'></div>
                        <p className='text-zinc-400'>
                          <strong className='text-zinc-200'>{item.bold}</strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='rounded-xl p-6 border border-white/10 bg-white/5'>
                  <h4 className='text-lg font-semibold text-zinc-100 mb-4'>
                    Why This Matters for Agencies & Brands:
                  </h4>
                  <ul className='space-y-3 text-zinc-400'>
                    {[
                      "Understands digital marketing and content strategy",
                      "Can collaborate on tech-related campaigns with deeper insight",
                      "Professional work ethic and reliability from tech industry",
                      "Unique positioning for tech and innovation-focused brands",
                      "Can contribute to content creation beyond just modeling",
                    ].map((item) => (
                      <li key={item} className='flex items-start gap-2'>
                        <span className='text-amber-400 font-semibold'>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction='up' delay={150}>
          <div className='mb-20 premium-section pt-0' data-chapter='Experience'>
            <h2 className='premium-heading mb-8 text-center'>
              Experience Highlights
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              {[
                {
                  title: "Professional Developer",
                  text: "5+ years of experience as a mobile app developer, bringing technical expertise, problem-solving skills, and professional work ethic to every modeling project",
                },
                {
                  title: "Music Video",
                  text: "Featured in a music video production, gaining valuable on-screen experience and understanding of video production workflows",
                },
                {
                  title: "YouTube Projects",
                  text: "Worked on multiple YouTube video projects, developing skills in video content creation and on-camera presence",
                },
                {
                  title: "Portfolio Building",
                  text: "Actively building my portfolio through test shoots, TFP collaborations, and professional photography sessions",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className='border-l-4 border-amber-500/50 pl-6 premium-surface p-6 bg-white/5'
                >
                  <h3 className='text-xl font-semibold mb-2 text-zinc-100'>
                    {item.title}
                  </h3>
                  <p className='text-zinc-400'>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction='fade' delay={200}>
          <div className='premium-section pt-0 pb-10' data-chapter='Skills'>
            <h2 className='premium-heading mb-8 text-center'>
              Skills & Specialties
            </h2>
            <div className='flex flex-wrap justify-center gap-4'>
              {[
                "Mobile App Development",
                "Technical Expertise",
                "Digital Content Strategy",
                "Video Production",
                "On-Camera Presence",
                "Content Creation",
                "Social Media",
                "Problem Solving",
                "Fitness Modeling",
                "Editorial Modeling",
              ].map((skill) => (
                <span
                  key={skill}
                  className='px-6 py-3 bg-white/5 border border-amber-500/20 text-zinc-300 rounded-full text-sm font-medium hover:border-amber-500/50 transition-all duration-300'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ModelPortfolioDownload />
    </div>
  );
}
