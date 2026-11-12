import { photoAlt } from "@/config/site";

/**
 * Newest headline work, shown at the top of the home page.
 * Facts here come from the comp card PDF (v8) and the public Instagram reel:
 * a Diwali short film published by @ramindiagroup.
 * `stat` is the figure from the comp card PDF. Instagram's public embed shows only likes, not plays, so keep
 * a screenshot of the insights (or Ram India Group's report) as proof, and say where the number comes from.
 */
export const FEATURED_FILM = {
  brand: "Ram India Group",
  kicker: "New work · Diwali 2026",
  title: "Short film for Ram India Group",
  stat: "750K+ views",
  statNote: "in 5 days",
  description:
    "An on-camera role in a Diwali short film for Ram India Group, published on their Instagram. Watch it here, or see how I work on set in the behind-the-scenes shots.",
  handle: "@ramindiagroup",
  reelUrl: "https://www.instagram.com/reel/DfYxEK0N8ds/",
  embedUrl: "https://www.instagram.com/reel/DfYxEK0N8ds/embed/",
  poster: {
    src: "/work/ram-india-bts-1.jpg",
    alt: photoAlt("on set of the Ram India Group Diwali short film, lighting sparklers with a young co-star"),
  },
  bts: [
    {
      src: "/work/ram-india-bts-2.jpg",
      alt: photoAlt("behind the scenes of the Ram India Group short film with co-stars and camera crew"),
    },
    {
      src: "/work/ram-india-bts-3.jpg",
      alt: photoAlt("on set of the Ram India Group Diwali short film, sharing a laugh with co-stars"),
    },
  ],
} as const;
