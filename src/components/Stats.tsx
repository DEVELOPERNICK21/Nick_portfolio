"use client";

export default function Stats() {
  const stats = [
    { number: "1+", label: "Year Experience" },
    { number: "5+", label: "Video Projects" },
    { number: "1", label: "Music Video" },
    { number: "Building", label: "Portfolio" },
  ];

  return (
    <section className='py-20 bg-gray-50 border-y border-gray-200'>
      <div className='container-custom'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='text-center group'
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className='text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300'>
                {stat.number}
              </div>
              <div className='text-gray-600 text-sm md:text-base font-medium uppercase tracking-wider'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
