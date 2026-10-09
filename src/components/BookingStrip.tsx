import { FaDownload, FaWhatsapp } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";
import { isDemo } from "@/config/site";
import { BOOKING, PROFILE_FACTS, whatsappHref } from "@/data/booking";
import { PORTFOLIO_PDF, PORTFOLIO_PDF_FILENAME } from "@/data/media";

/** First thing a casting director needs after the hero: who, where, how tall, available when, how to book. */
export default function BookingStrip() {
  if (isDemo) return null;

  const facts = [
    { label: "Based in", value: PROFILE_FACTS.city, live: false },
    { label: "Height", value: PROFILE_FACTS.height, live: false },
    { label: BOOKING.status, value: BOOKING.window, live: true },
    { label: "Reply time", value: `Within ${BOOKING.replyWithin}`, live: false },
  ];

  return (
    <section
      id="book-strip"
      className="ed-section !py-6 md:!py-10"
      data-chapter="Availability"
    >
      <div className="container-custom">
        <ScrollReveal direction="up" delay={40}>
          <div className="ed-surface flex flex-col gap-6 p-5 md:flex-row md:items-center md:justify-between md:p-7">
            <dl className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="min-w-0">
                  <dt className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-editorial-accent sm:text-[11px]">
                    {fact.live ? (
                      <span className="relative flex h-2 w-2" aria-hidden>
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                    ) : null}
                    {fact.label}
                  </dt>
                  <dd className="mt-1 break-words text-sm font-medium text-editorial-ink sm:text-base">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-shrink-0">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-button ed-tap"
              >
                <FaWhatsapp aria-hidden />
                Book on WhatsApp
              </a>
              <a
                href={PORTFOLIO_PDF}
                download={PORTFOLIO_PDF_FILENAME}
                className="ed-button-secondary ed-tap"
              >
                <FaDownload aria-hidden />
                Comp card
              </a>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-editorial-muted md:text-left">
            {BOOKING.ratesNote} · {BOOKING.ratesHelp}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
