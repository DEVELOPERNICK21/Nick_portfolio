import type { PortfolioPhoto } from "@/data/media";
import { photoAlt } from "@/config/site";
import { DUO_PHOTOS } from "@/data/duoPhotos";

export type PortfolioCategoryId = "all" | "formal" | "ethnic" | "casual" | "onset";

export type PortfolioCategory = {
  id: PortfolioCategoryId;
  label: string;
  images: PortfolioPhoto[];
};

const formalImages: PortfolioPhoto[] = [
  { src: "/portfolio-1.jpg", alt: photoAlt("formal studio portrait"), category: "Formal", height: "medium" },
  { src: "/portfolio-2.jpg", alt: photoAlt("formal black look"), category: "Formal", height: "medium" },
];

const ethnicImages: PortfolioPhoto[] = [
  { src: "/portfolio-3.jpg", alt: photoAlt("ethnic black kurta full length"), category: "Ethnic", height: "tall" },
  { src: "/portfolio-4.jpg", alt: photoAlt("ethnic black kurta greeting pose"), category: "Ethnic", height: "tall" },
  { src: "/portfolio-5.jpg", alt: photoAlt("ethnic black kurta side pose"), category: "Ethnic", height: "tall" },
  { src: "/portfolio-6.jpg", alt: photoAlt("ethnic black kurta seated portrait"), category: "Ethnic", height: "tall" },
  { src: "/portfolio-7.jpg", alt: photoAlt("ethnic black kurta close portrait"), category: "Ethnic", height: "medium" },
  { src: "/work/kurta-look-1.jpg", alt: photoAlt("black sequin kurta with gold embroidered dupatta and sunglasses"), category: "Ethnic", height: "tall" },
  { src: "/work/kurta-look-2.jpg", alt: photoAlt("festive kurta and dupatta look, adjusting the sleeve"), category: "Ethnic", height: "tall" },
  { src: "/work/kurta-look-3.jpg", alt: photoAlt("kurta and dupatta full-length look in a lantern-lit corridor"), category: "Ethnic", height: "tall" },
];

const casualImages: PortfolioPhoto[] = [
  { src: "/portfolio-9.jpg", alt: photoAlt("casual striped shirt standing"), category: "Casual", height: "tall" },
  { src: "/portfolio-10.jpg", alt: photoAlt("casual striped shirt relaxed pose"), category: "Casual", height: "tall" },
  { src: "/portfolio-11.jpg", alt: photoAlt("casual striped shirt seated portrait"), category: "Casual", height: "tall" },
  { src: "/portfolio-12.jpg", alt: photoAlt("casual chair pose"), category: "Casual", height: "tall" },
  { src: "/main/main-1.jpg", alt: photoAlt("casual leather jacket portrait"), category: "Casual", height: "tall" },
  { src: "/main/main-2.jpg", alt: photoAlt("casual smiling portrait"), category: "Casual", height: "medium" },
  { src: "/main/main-3.jpg", alt: photoAlt("casual close portrait"), category: "Casual", height: "short" },
  { src: "/main/main-4.jpg", alt: photoAlt("casual formal crossover portrait"), category: "Casual", height: "medium" },
  { src: "/main/main-5.jpg", alt: photoAlt("casual mint shirt seated"), category: "Casual", height: "tall" },
  { ...DUO_PHOTOS[0], category: "Casual" },
  { ...DUO_PHOTOS[1], category: "Casual" },
];

/** Behind the scenes of the Ram India Group Diwali short film */
const onSetImages: PortfolioPhoto[] = [
  { src: "/work/ram-india-bts-1.jpg", alt: photoAlt("on set of the Ram India Group short film, lighting sparklers"), category: "On set", height: "tall" },
  { src: "/work/ram-india-bts-2.jpg", alt: photoAlt("behind the scenes of the Ram India Group short film"), category: "On set", height: "tall" },
  { src: "/work/ram-india-bts-3.jpg", alt: photoAlt("on set of the Ram India Group short film with co-stars"), category: "On set", height: "tall" },
];

const allImages: PortfolioPhoto[] = [
  ...formalImages,
  ...ethnicImages,
  ...casualImages,
  ...onSetImages,
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "all",
    label: "All",
    images: allImages,
  },
  {
    id: "formal",
    label: "Formal",
    images: formalImages,
  },
  {
    id: "ethnic",
    label: "Ethnic",
    images: ethnicImages,
  },
  {
    id: "casual",
    label: "Casual",
    images: casualImages,
  },
  {
    id: "onset",
    label: "On set",
    images: onSetImages,
  },
];
