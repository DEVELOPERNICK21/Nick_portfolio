import {
  WHATSAPP_BOOKING_MESSAGE,
  WHATSAPP_BOOKING_NUMBER,
} from "@/data/instagramProof";

/**
 * Single source of truth for the facts brands compare across the site, the
 * comp card PDF and the agency profile. Change a value here, not in each file.
 */
export const PROFILE_FACTS = {
  height: `5'9" / 175 cm`,
  city: "Pune, India",
  travel: "Available across India",
  languages: "English, Hindi",
} as const;

/**
 * Booking status shown on the home page and the contact page.
 *
 * KEEP THIS TRUE. Update `window` at the start of every month and change
 * `status` to "Fully booked" for any period you cannot take work.
 * Real availability is what makes the urgency believable.
 */
export const BOOKING = {
  status: "Booking now",
  window: "Nov – Dec 2026",
  replyWithin: "24 hours",
  ratesNote: "Rates on request",
  ratesHelp:
    "Send the shoot type, date, city and where the content will be used, and I'll reply with a quote.",
} as const;

/** Montelo Agency is the alternative route; direct booking stays the default. */
export const AGENCY_ROUTE = {
  name: "Montelo Agency",
  href: "https://www.instagram.com/themontelo",
} as const;

export const WHATSAPP_NUMBER = WHATSAPP_BOOKING_NUMBER;

export function whatsappHref(message: string = WHATSAPP_BOOKING_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_BOOKING_NUMBER}?text=${encodeURIComponent(message)}`;
}
