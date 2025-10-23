export default function Stats() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Brand Collaborations" },
    { number: "20+", label: "Fashion Shows" },
  ];

  return (
    <section className='py-20 bg-secondary border-y border-accent/10'>
      <div className='container-custom'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <div key={index} className='text-center group'>
              <div className='text-4xl md:text-5xl font-serif bg-gradient-to-r from-accent to-accentGold bg-clip-text text-transparent mb-2 group-hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all duration-300'>
                {stat.number}
              </div>
              <div className='text-gray-400 font-medium'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
