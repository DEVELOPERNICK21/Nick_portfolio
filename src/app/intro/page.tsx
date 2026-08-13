import Link from "next/link";
import { ABOUT_IMAGE, INTRO_VIDEO } from "@/data/media";
import { createPageMetadata } from "@/config/metadata";
import { site } from "@/config/site";
import ShareIntroLink from "@/components/ShareIntroLink";

export const metadata = createPageMetadata({
  title: `Intro Video — Get to Know ${site.name}`,
  description: `${site.name}'s introduction video — on-camera presence, personality, and professional demeanor for agency and brand bookings.`,
  path: "/intro",
  keywords: [
    `${site.name} intro video`,
    "model introduction video",
    "model showreel",
    "on camera presence",
  ],
});

export default function IntroPage() {
  return (
    <div className="premium-shell min-h-screen pt-24">
      <div className="container-custom premium-section pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="premium-kicker">Video Introduction</p>
          <h1 className="premium-heading mt-4">Get to know me</h1>
          <p className="premium-body mx-auto mt-4 max-w-2xl">
            A short introduction for agencies and brands — personality, on-camera
            presence, and how I show up on set.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-black">
            <video
              src={INTRO_VIDEO}
              className="h-auto max-h-[80vh] w-full"
              controls
              playsInline
              preload="metadata"
              poster={ABOUT_IMAGE}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <ShareIntroLink />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/about" className="premium-button-secondary inline-flex">
              Full about page
            </Link>
            <Link href="/contact" className="premium-button inline-flex">
              Book a shoot
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
