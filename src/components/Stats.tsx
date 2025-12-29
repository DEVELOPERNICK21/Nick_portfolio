"use client";

export default function Stats() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Brand Collaborations" },
    { number: "20+", label: "Fashion Shows" },
  ];

  return (
    <section className='py-20 bg-gray-50 dark:bg-dark border-y border-gray-200 dark:border-white/10 transition-colors duration-300'>
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
              <div className='text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 dark:text-white mb-3 group-hover:text-accentGold transition-colors duration-300'>
                {stat.number}
              </div>
              <div className='text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider transition-colors'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
