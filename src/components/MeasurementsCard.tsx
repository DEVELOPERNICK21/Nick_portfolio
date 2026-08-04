const measurements = [
  { label: "Height", value: process.env.NEXT_PUBLIC_MEAS_HEIGHT || `5'10" / 180 cm` },
  { label: "Weight", value: process.env.NEXT_PUBLIC_MEAS_WEIGHT || "70 kg / 154 lbs" },
  { label: "Chest", value: process.env.NEXT_PUBLIC_MEAS_CHEST || '38"' },
  { label: "Waist", value: process.env.NEXT_PUBLIC_MEAS_WAIST || '31"' },
  { label: "Hips", value: process.env.NEXT_PUBLIC_MEAS_HIPS || '36"' },
  { label: "Shoe Size", value: process.env.NEXT_PUBLIC_MEAS_SHOE || "UK 9" },
  { label: "Hair Colour", value: process.env.NEXT_PUBLIC_MEAS_HAIR || "Black" },
  { label: "Eye Colour", value: process.env.NEXT_PUBLIC_MEAS_EYES || "Brown" },
  { label: "Skin Tone", value: process.env.NEXT_PUBLIC_MEAS_SKIN || "Medium" },
];

export default function MeasurementsCard() {
  return (
    <section className='premium-section pt-0' data-chapter='Measurements'>
      <div className='premium-surface p-8 md:p-10 border border-amber-500/20 bg-white/5'>
        <p className='premium-kicker'>Comp Card</p>
        <h2 className='premium-heading mt-4 mb-8'>Measurements</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
          {measurements.map((item) => (
            <div
              key={item.label}
              className='rounded-xl border border-white/10 bg-white/5 p-4 hover:border-amber-500/30 transition-colors'
            >
              <dt className='text-xs uppercase tracking-widest text-amber-400/80 mb-1'>
                {item.label}
              </dt>
              <dd className='text-lg font-medium text-zinc-100'>{item.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
