function toEmbedUrl(url: string): string {
  const trimmed = url.trim();

  // YouTube watch URL → embed
  const watchMatch = trimmed.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  // Already an embed URL or other supported format
  if (trimmed.includes("/embed/")) {
    return trimmed;
  }

  return trimmed;
}

export default function VideoReelSection() {
  const reelUrl = process.env.NEXT_PUBLIC_REEL_URL?.trim();

  if (!reelUrl) return null;

  const embedUrl = toEmbedUrl(reelUrl);

  return (
    <section className='premium-section container-custom' data-chapter='Showreel'>
      <span className='scroll-chapter-label'>Showreel</span>
      <div className='premium-surface p-6 md:p-10 border border-amber-500/20 bg-white/5 mt-4'>
        <p className='premium-kicker'>On Camera</p>
        <h2 className='premium-heading mt-4 mb-8'>SHOWREEL</h2>
        <div className='relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black'>
          <iframe
            src={embedUrl}
            title='Model showreel'
            className='absolute inset-0 w-full h-full'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
