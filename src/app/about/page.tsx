import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Nikhil Kubde's modeling journey, experience, and what he brings to every project.",
  openGraph: {
    title: "About - Nikhil Kubde",
    description:
      "Learn more about Nikhil Kubde's modeling journey, experience, and what he brings to every project.",
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
            <div className='relative h-[600px] rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-500 hover:shadow-xl'>
              <Image
                src='/about-image.jpg'
                alt='Nikhil Kubde - Professional modeling photo'
                fill
                className='object-cover hover:scale-105 transition-transform duration-700'
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
                I began my modeling career driven by a passion for fashion and
                creative expression. Over the years, Ive had the privilege of
                working with renowned brands, talented photographers, and
                visionary creative directors through my representation with
                CastYou Agency.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                My versatility allows me to excel in various modeling genres -
                from high fashion editorial to commercial campaigns. I believe
                in bringing authenticity and professionalism to every project,
                understanding that modeling is not just about the pose, but
                about telling a story.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                When Im not on set, I dedicate time to fitness, studying fashion
                trends, and continuously developing my craft. Im passionate
                about sustainability in fashion and love collaborating with
                brands that share these values.
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
                  Fashion Weeks
                </h3>
                <p className='text-gray-600'>
                  Walked for multiple designers at New York, Paris, and Milan
                  Fashion Weeks
                </p>
              </div>
              <div className='border-l-4 border-gray-400 pl-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                  Editorial Features
                </h3>
                <p className='text-gray-600'>
                  Featured in various fashion editorials and publications,
                  bringing unique style and presence to every shoot
                </p>
              </div>
              <div className='border-l-4 border-gray-400 pl-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                  Brand Campaigns
                </h3>
                <p className='text-gray-600'>
                  Collaborated with leading fashion and lifestyle brands on
                  commercial and digital campaigns
                </p>
              </div>
              <div className='border-l-4 border-gray-400 pl-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900'>
                  Commercial Work
                </h3>
                <p className='text-gray-600'>
                  Extensive experience in commercial shoots, digital content
                  creation, and brand promotions
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
                "Editorial Modeling",
                "Fashion Shows",
                "Commercial Campaigns",
                "Fitness Modeling",
                "Product Photography",
                "Video/TVC",
                "Social Media Content",
                "Brand Ambassador",
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
