import Link from "next/link";
import { WHATSAPP_BOOKING_HREF } from "@/data/instagramProof";

export default function WorkWithMeCTA() {
  return (
    <section
      id="work-with-me"
      className="relative py-20 md:py-28"
      data-chapter="Book"
      style={{
        background:
          "linear-gradient(160deg, #2B2B2B 0%, #3D3424 55%, #2B2B2B 100%)",
      }}
    >
      <div className="container-custom text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B8963E]">
          Bookings
        </p>
        <h2 className="mt-4 font-serif text-4xl text-[#FAF6EC] md:text-6xl">
          Work With Me
        </h2>
        <div className="mx-auto my-8 h-px max-w-xs bg-gradient-to-r from-transparent via-[#B8963E] to-transparent" />
        <p className="mx-auto mb-10 max-w-xl text-base text-[#FAF6EC]/90 md:text-lg">
          Available for fashion, editorial, commercial, and brand campaigns.
          Let&apos;s build the next look together.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#886D20] px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#FAF6EC] transition hover:-translate-y-0.5 hover:bg-[#745C1C]"
          >
            Work With Me
          </Link>
          <a
            href={WHATSAPP_BOOKING_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[#FAF6EC]/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#FAF6EC] transition hover:bg-white/10"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
