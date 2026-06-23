export default function AvailabilitySection() {
  const city = process.env.NEXT_PUBLIC_AVAIL_CITY || "Mumbai";
  const travel =
    process.env.NEXT_PUBLIC_AVAIL_TRAVEL ||
    "Pan-India, available for international";
  const languages =
    process.env.NEXT_PUBLIC_AVAIL_LANGUAGES || "Hindi, English, Marathi";

  const items = [
    { label: "Base City", value: city },
    { label: "Travel", value: travel },
    { label: "Languages", value: languages },
  ];

  return (
    <section className='premium-section pt-0' data-chapter='Availability'>
      <div className='premium-surface p-8 md:p-10 bg-white/5 border border-white/10'>
        <p className='premium-kicker'>Booking Info</p>
        <h2 className='premium-heading mt-4 mb-6'>Available For</h2>
        <div className='flex flex-wrap gap-3'>
          {items.map((item) => (
            <div
              key={item.label}
              className='inline-flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 px-5 py-3 rounded-full border border-amber-500/30 bg-amber-500/10'
            >
              <span className='text-xs uppercase tracking-widest text-amber-400 font-semibold'>
                {item.label}
              </span>
              <span className='text-zinc-100 text-sm sm:text-base'>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
