import Link from "next/link";
import { isDemo, site } from "@/config/site";

export default function DemoBanner() {
  if (!isDemo || !site.builtBy) return null;

  return (
    <div className='sticky top-0 z-[60] border-b border-amber-500/30 bg-zinc-950/95 backdrop-blur-md'>
      <div className='container-custom flex flex-col sm:flex-row items-center justify-between gap-3 py-3 text-sm'>
        <p className='text-zinc-300 text-center sm:text-left'>
          <span className='text-amber-400 font-semibold'>Demo portfolio</span>
          {" — "}sample layout with placeholder name & photos. Yours would use
          your images, bio, and agency details.
        </p>
        <div className='flex shrink-0 items-center gap-2'>
          <Link
            href='/pricing'
            className='rounded-full border border-amber-500/50 px-4 py-1.5 text-amber-300 hover:bg-amber-500/10 transition-colors'
          >
            Pricing
          </Link>
          <Link
            href='/contact'
            className='rounded-full bg-amber-500/15 border border-amber-500/50 px-4 py-1.5 text-amber-300 hover:bg-amber-500/25 transition-colors'
          >
            Get yours →
          </Link>
        </div>
      </div>
    </div>
  );
}
