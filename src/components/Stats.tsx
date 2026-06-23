"use client";

export default function Stats() {
  const stats = [
    {
      number: process.env.NEXT_PUBLIC_STAT_SHOOTS || "20+",
      label: "Shoots Completed",
    },
    {
      number: process.env.NEXT_PUBLIC_STAT_BRANDS || "3",
      label: "Brands Worked With",
    },
    {
      number: process.env.NEXT_PUBLIC_STAT_YEARS_MODELING || "3+",
      label: "Years Modeling",
    },
    {
      number: process.env.NEXT_PUBLIC_STAT_YEARS_TECH || "5+",
      label: "Years Tech Experience",
    },
  ];

  return (
    <section className='py-20 bg-white/5 border-y border-white/10'>
      <div className='container-custom'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className='text-center group'
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className='text-5xl md:text-6xl lg:text-7xl font-serif text-amber-300 mb-3 group-hover:text-amber-200 transition-colors duration-300'>
                {stat.number}
              </div>
              <div className='text-zinc-400 text-sm md:text-base font-medium uppercase tracking-wider'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
