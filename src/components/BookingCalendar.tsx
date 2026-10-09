export default function BookingCalendar() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();

  // No placeholder: an unfinished "coming soon" box costs trust. Shows once a Calendly URL is set.
  if (!calendlyUrl) return null;

  return (
    <section className='premium-section pb-0' data-chapter='Calendar'>
      <div className='max-w-6xl mx-auto'>
        <div className='premium-surface p-8 md:p-10 bg-white/5 border border-white/10'>
          <p className='premium-kicker'>Schedule</p>
          <h2 className='premium-heading mt-4 mb-6'>Book a Call</h2>

          <div className='relative w-full rounded-xl overflow-hidden border border-amber-500/20 bg-black/40'>
            <iframe
              src={calendlyUrl}
              title='Booking calendar'
              className='w-full min-h-[630px] border-0'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
