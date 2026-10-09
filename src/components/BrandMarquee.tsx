import { isDemo } from "@/config/site";
import { BRAND_COLLABORATIONS } from "@/data/media";

/** Slow, pure-CSS ticker of brands worked with. Hidden in the sales demo. */
export default function BrandMarquee() {
  if (isDemo || BRAND_COLLABORATIONS.length === 0) return null;

  // Each group must be wider than the screen so the loop has no visible seam.
  const group = [...BRAND_COLLABORATIONS, ...BRAND_COLLABORATIONS, ...BRAND_COLLABORATIONS];

  return (
    <section
      aria-label="Brands worked with"
      className="ed-marquee border-y border-editorial-ink/10 py-5"
    >
      <p className="sr-only">
        Brands worked with: {BRAND_COLLABORATIONS.join(", ")}
      </p>
      <div className="ed-marquee-track" aria-hidden>
        {[0, 1].map((copy) => (
          <ul key={copy} className="ed-marquee-group">
            {group.map((brand, index) => (
              <li
                key={`${brand}-${index}`}
                className="flex items-center gap-12 whitespace-nowrap font-serif text-sm uppercase tracking-[0.28em] text-editorial-muted md:text-base"
              >
                {brand}
                <span className="h-1 w-1 rounded-full bg-editorial-accent" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
