import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Nikhil Kubde's modeling journey as an emerging model and what he brings to every project.",
  openGraph: {
    title: "About - Nikhil Kubde",
    description:
      "Learn more about Nikhil Kubde's modeling journey as an emerging model and what he brings to every project.",
  },
};

export default function AboutPage() {
  return (
    <div className='py-20 bg-white min-h-screen'>
      <div className='container-custom'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='section-title'>About Me</h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Passionate about fashion, storytelling, and bringing creative
            visions to life
          </p>
        </div>

        {/* Main Content */}
        <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
          <ScrollReveal direction='left'>
            <div className='relative h-[600px] rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-500 hover:shadow-xl bg-gray-100'>
              <Image
                src='/about-image.jpg'
                alt='Nikhil Kubde - Professional modeling photo'
                fill
                className='object-contain object-center hover:scale-105 transition-transform duration-700'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction='right' delay={200}>
            <div className='space-y-6'>
              <h2 className='text-3xl font-serif mb-4 text-gray-900'>
                My Journey
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                I&apos;m a fresh face in the modeling industry, driven by a
                passion for fashion and creative expression. I&apos;m excited to
                be starting my journey and building my portfolio through my
                representation with CastYou Agency. Every project is an
                opportunity to learn, grow, and showcase my potential.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                As a new model, I bring fresh energy, enthusiasm, and a
                willingness to learn to every shoot. I&apos;m eager to work
                across various modeling genres - from fashion editorial to
                commercial campaigns. I believe in bringing authenticity and
                professionalism to every project, understanding that modeling is
                about more than just the pose - it&apos;s about telling a story
                and connecting with the audience.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                When I&apos;m not on set, I dedicate time to fitness, studying
                fashion trends, practicing poses, and continuously developing my
                craft. I&apos;m passionate about building meaningful
                relationships in the industry and am always open to new
                opportunities and collaborations.
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
                    poster='/about-image.jpg'
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
                <p className='text-lg text-gray-700'>5&apos;9&quot; / 175 cm</p>
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

        {/* Experience */}
        <ScrollReveal direction='up' delay={150}>
          <div className='mb-20'>
            <h2 className='text-3xl font-serif mb-8 text-center text-gray-900'>
              Experience Highlights
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
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
              <div className='border-l-4 border-gray-400 pl-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                  Video Content
                </h3>
                <p className='text-gray-600'>
                  Gaining experience in video production, learning from each
                  project and continuously improving my on-screen presence and
                  versatility
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
                "Video Production",
                "On-Camera Presence",
                "Portfolio Building",
                "Photography",
                "Content Creation",
                "Social Media",
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
    </div>
  );
}
