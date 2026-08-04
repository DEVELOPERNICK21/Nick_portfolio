import { photoAlt } from "@/config/site";
import type { PortfolioPhoto } from "@/data/media";

/**
 * Duo / chemistry shots — curated distinct frames (similar angles removed).
 */
export const DUO_PHOTOS: PortfolioPhoto[] = [
  {
    src: "/duo/05.jpg",
    alt: photoAlt("duo editorial full-length"),
    category: "Duo",
    height: "tall",
  },
  {
    src: "/duo/04.jpg",
    alt: photoAlt("duo lifestyle portrait"),
    category: "Duo",
    height: "medium",
  },
  {
    src: "/duo/08.jpg",
    alt: photoAlt("duo fashion pose"),
    category: "Duo",
    height: "medium",
  },
  {
    src: "/duo/11.jpg",
    alt: photoAlt("duo campaign frame"),
    category: "Duo",
    height: "medium",
  },
  {
    src: "/duo/14.jpg",
    alt: photoAlt("duo chemistry shot"),
    category: "Duo",
    height: "medium",
  },
];
