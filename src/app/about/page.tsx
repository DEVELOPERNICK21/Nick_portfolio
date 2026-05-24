import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ModelPortfolioDownload from "@/components/ModelPortfolioDownload";
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

        {/* Main Content */}
        <div className='grid md:grid-cols-2 gap-12 items-center mb-20' data-chapter='Journey'>
          <ScrollReveal direction='left'>
            <div className='relative h-[600px] rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-500 hover:shadow-xl bg-gray-100'>
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
            <div className='space-y-6 premium-surface p-8'>
              <h2 className='text-3xl font-serif mb-4 text-gray-900'>
                My Journey
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                I&apos;m a fresh face in the modeling industry, driven by a
                passion for fashion and creative expression. With over 5 years
                of experience as a professional mobile app developer, I bring a
                unique combination of technical expertise and creative vision to
                every project. This background gives me a distinct advantage in
                understanding digital content, social media strategy, and the
                technical aspects of modern brand campaigns.
              </p>
              <p className='text-gray-700 leading-relaxed'>
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
              <p className='text-gray-700 leading-relaxed'>
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
                className='inline-block mt-4 text-gray-900 hover:text-gray-700 transition-colors font-medium'
              >
                View Full CastYou Profile →
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction='up' delay={150} variant='stagger'>
          <section className='premium-section pt-0' data-chapter='Timeline'>
            <span className='scroll-chapter-label'>Timeline</span>
            <div className='grid md:grid-cols-3 gap-4 mt-6'>
              {[
                "2019-2023: Professional mobile app development across product teams",
                "2024: Transitioned into visual-first personal brand building",
                "Now: Fashion, editorial, and commercial modeling for digital-first campaigns",
              ].map((item) => (
                <div key={item} className='premium-surface p-6'>
                  <p className='premium-body'>{item}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Introduction Video Section - World Class Design */}
        <ScrollReveal direction='fade' delay={300}>
          <div className='mb-20'>
            <div className='text-center mb-16'>
              <div className='inline-block mb-6'>
                <span className='text-xs uppercase tracking-widest text-gray-500 font-semibold px-4 py-2 border border-gray-300 bg-white'>
                  Video Introduction
                </span>
              </div>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-gray-900'>
                GET TO KNOW ME
              </h2>
              <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6'></div>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto font-light'>
                Watch my introduction to see my personality, on-camera presence,
                and professional demeanor
              </p>
            </div>

            {/* Premium Video Container with Better Layout */}
            <div className='max-w-6xl mx-auto'>
              <div className='relative group'>
                {/* Background Accent */}
                <div className='absolute -inset-4 bg-gradient-to-br from-gray-50 to-white rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500'></div>

                {/* Video Wrapper */}
                <div className='relative rounded-2xl overflow-hidden shadow-2xl bg-black transform transition-all duration-500 group-hover:shadow-3xl'>
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

                {/* Video Description Card */}
                <div className='mt-10 bg-gray-50 rounded-xl p-8 border border-gray-200'>
                  <div className='text-center max-w-3xl mx-auto'>
                    <p className='text-gray-700 text-base leading-relaxed mb-4'>
                      This introduction video provides agencies and brands with
                      valuable insight into my personality, communication
                      skills, and professional demeanor - essential qualities
                      for successful modeling collaborations.
                    </p>
                    <div className='flex flex-wrap justify-center gap-4 mt-6'>
                      <span className='px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700'>
                        On-Camera Presence
                      </span>
                      <span className='px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700'>
                        Professional Communication
                      </span>
                      <span className='px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700'>
                        Personality Showcase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats & Measurements */}
        <ScrollReveal direction='fade' delay={100}>
          <div className='card-dark p-10 mb-20'>
            <h2 className='text-3xl font-serif mb-8 text-center text-gray-900'>
              Professional Details
            </h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='text-center'>
                <h3 className='font-semibold text-gray-900 mb-2'>Height</h3>
                <p className='text-lg text-gray-700'>
                  5&apos;10&quot; / 175 cm
                </p>
              </div>
              <div className='text-center'>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Chest-Waist-Hips
                </h3>
                <p className='text-lg text-gray-700'>38-30-36</p>
              </div>
              <div className='text-center'>
                <h3 className='font-semibold text-gray-900 mb-2'>Shirt Size</h3>
                <p className='text-lg text-gray-700'>M / 38</p>
              </div>
              <div className='text-center'>
                <h3 className='font-semibold text-gray-900 mb-2'>Shoe Size</h3>
                <p className='text-lg text-gray-700'>US 9 / EU 42</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Unique Strength - Tech Background */}
        <ScrollReveal direction='fade' delay={100}>
          <div className='mb-20'>
            <div className='bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 md:p-12 border border-gray-200 shadow-lg'>
              <div className='text-center mb-8'>
                <div className='inline-block mb-4'>
                  <span className='text-xs uppercase tracking-widest text-gray-500 font-semibold px-4 py-2 border border-gray-300 bg-white'>
                    Unique Advantage
                  </span>
                </div>
                <h2 className='text-3xl md:text-4xl font-serif mb-4 text-gray-900'>
                  Technical Expertise Meets Creative Vision
                </h2>
                <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6'></div>
              </div>

              <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center'>
                      <span className='text-white text-xl font-bold'>5+</span>
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold text-gray-900'>
                        Years as Mobile App Developer
                      </h3>
                      <p className='text-sm text-gray-600'>
                        Professional software development experience
                      </p>
                    </div>
                  </div>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    My background as a professional mobile app developer with
                    over 5 years of experience brings a unique advantage to my
                    modeling career. This technical expertise sets me apart and
                    makes me particularly valuable for modern brand campaigns.
                  </p>
                  <div className='space-y-3'>
                    <div className='flex items-start gap-3'>
                      <div className='w-2 h-2 bg-gray-900 rounded-full mt-2'></div>
                      <p className='text-gray-700'>
                        <strong>Tech-Savvy:</strong> Deep understanding of
                        digital content, social media algorithms, and online
                        presence optimization
                      </p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <div className='w-2 h-2 bg-gray-900 rounded-full mt-2'></div>
                      <p className='text-gray-700'>
                        <strong>Problem-Solving:</strong> Analytical mindset and
                        attention to detail from years of software development
                      </p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <div className='w-2 h-2 bg-gray-900 rounded-full mt-2'></div>
                      <p className='text-gray-700'>
                        <strong>Professionalism:</strong> Proven track record of
                        delivering high-quality work under deadlines
                      </p>
                    </div>
                    <div className='flex items-start gap-3'>
                      <div className='w-2 h-2 bg-gray-900 rounded-full mt-2'></div>
                      <p className='text-gray-700'>
                        <strong>Brand Fit:</strong> Perfect for tech companies,
                        digital-first brands, and innovative campaigns
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-white rounded-xl p-6 border border-gray-200'>
                  <h4 className='text-lg font-semibold text-gray-900 mb-4'>
                    Why This Matters for Agencies & Brands:
                  </h4>
                  <ul className='space-y-3 text-gray-700'>
                    <li className='flex items-start gap-2'>
                      <span className='text-gray-900 font-semibold'>✓</span>
                      <span>
                        Understands digital marketing and content strategy
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-gray-900 font-semibold'>✓</span>
                      <span>
                        Can collaborate on tech-related campaigns with deeper
                        insight
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-gray-900 font-semibold'>✓</span>
                      <span>
                        Professional work ethic and reliability from tech
                        industry
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-gray-900 font-semibold'>✓</span>
                      <span>
                        Unique positioning for tech and innovation-focused
                        brands
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='text-gray-900 font-semibold'>✓</span>
                      <span>
                        Can contribute to content creation beyond just modeling
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Experience */}
        <ScrollReveal direction='up' delay={150}>
          <div className='mb-20'>
            <h2 className='text-3xl font-serif mb-8 text-center text-gray-900'>
              Experience Highlights
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='border-l-4 border-gray-400 pl-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                  Professional Developer
                </h3>
                <p className='text-gray-600'>
                  5+ years of experience as a mobile app developer, bringing
                  technical expertise, problem-solving skills, and professional
                  work ethic to every modeling project
                </p>
              </div>
              <div className='border-l-4 border-gray-400 pl-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                  Music Video
                </h3>
                <p className='text-gray-600'>
                  Featured in a music video production, gaining valuable
                  on-screen experience and understanding of video production
                  workflows
                </p>
              </div>
              <div className='border-l-4 border-gray-400 pl-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                  YouTube Projects
                </h3>
                <p className='text-gray-600'>
                  Worked on multiple YouTube video projects, developing skills
                  in video content creation and on-camera presence
                </p>
              </div>
              <div className='border-l-4 border-gray-400 pl-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                  Portfolio Building
                </h3>
                <p className='text-gray-600'>
                  Actively building my portfolio through test shoots, TFP
                  collaborations, and professional photography sessions
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal direction='fade' delay={200}>
          <div>
            <h2 className='text-3xl font-serif mb-8 text-center text-gray-900'>
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
                  className='px-6 py-3 bg-gray-100 border border-gray-300 text-gray-800 rounded-full text-sm font-medium hover:border-gray-500 hover:shadow-lg transition-all duration-300'
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
