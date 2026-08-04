import type { PortfolioPhoto } from "@/data/media";
import { photoAlt } from "@/config/site";
import { DUO_PHOTOS } from "@/data/duoPhotos";

export type PortfolioCategoryId = "all" | "formal" | "ethnic" | "casual";

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

const allImages: PortfolioPhoto[] = [
  ...formalImages,
  ...ethnicImages,
  ...casualImages,
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
];
