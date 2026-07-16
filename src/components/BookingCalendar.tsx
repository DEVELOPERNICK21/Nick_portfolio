export default function BookingCalendar() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();

  return (
    <section className='premium-section pb-0' data-chapter='Calendar'>
      <div className='max-w-6xl mx-auto'>
        <div className='premium-surface p-8 md:p-10 bg-white/5 border border-white/10'>
          <p className='premium-kicker'>Schedule</p>
          <h2 className='premium-heading mt-4 mb-6'>Book a Call</h2>

          {calendlyUrl ? (
            <div className='relative w-full rounded-xl overflow-hidden border border-amber-500/20 bg-black/40'>
              <iframe
                src={calendlyUrl}
                title='Booking calendar'
                className='w-full min-h-[630px] border-0'
              />
            </div>
          ) : (
            <div className='rounded-xl border border-dashed border-amber-500/30 bg-amber-500/5 p-10 text-center'>
              <p className='text-zinc-300 text-lg'>
                Booking calendar coming soon — contact via form below
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
