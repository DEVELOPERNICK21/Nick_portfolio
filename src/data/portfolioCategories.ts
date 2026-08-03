import type { PortfolioPhoto } from "@/data/media";
import { photoAlt } from "@/config/site";

export type PortfolioCategoryId = "formal" | "ethnic" | "casual";

export type PortfolioCategory = {
  id: PortfolioCategoryId;
  label: string;
  images: PortfolioPhoto[];
};

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "formal",
    label: "Formal",
    images: [
      { src: "/main/main-1.jpg", alt: photoAlt("formal editorial"), category: "Formal", height: "tall" },
      { src: "/main/main-4.jpg", alt: photoAlt("formal portrait"), category: "Formal", height: "tall" },
      { src: "/portfolio-1.jpg", alt: photoAlt("formal look"), category: "Formal", height: "medium" },
      { src: "/portfolio-2.jpg", alt: photoAlt("formal campaign"), category: "Formal", height: "medium" },
      { src: "/nikhil-kubde-extra-01.jpg", alt: photoAlt("formal archive"), category: "Formal", height: "short" },
      { src: "/nikhil-kubde-extra-02.jpg", alt: photoAlt("formal archive 2"), category: "Formal", height: "medium" },
    ],
  },
  {
    id: "ethnic",
    label: "Ethnic",
    images: [
      { src: "/main/main-5.jpg", alt: photoAlt("ethnic wear"), category: "Ethnic", height: "medium" },
      { src: "/gallery-3.jpg", alt: photoAlt("ethnic editorial"), category: "Ethnic", height: "tall" },
      { src: "/gallery-4.jpg", alt: photoAlt("ethnic portrait"), category: "Ethnic", height: "medium" },
      { src: "/nikhil-kubde-extra-05.jpg", alt: photoAlt("ethnic archive"), category: "Ethnic", height: "tall" },
      { src: "/nikhil-kubde-extra-06.jpg", alt: photoAlt("ethnic archive 2"), category: "Ethnic", height: "medium" },
      { src: "/nikhil-kubde-extra-15.jpg", alt: photoAlt("ethnic archive 3"), category: "Ethnic", height: "short" },
    ],
  },
  {
    id: "casual",
    label: "Casual",
    images: [
      { src: "/main/main-2.jpg", alt: photoAlt("casual commercial"), category: "Casual", height: "medium" },
      { src: "/main/main-3.jpg", alt: photoAlt("casual lifestyle"), category: "Casual", height: "short" },
      { src: "/gallery-1.jpg", alt: photoAlt("casual look"), category: "Casual", height: "medium" },
      { src: "/gallery-2.jpg", alt: photoAlt("casual outdoor"), category: "Casual", height: "tall" },
      { src: "/nikhil-kubde-extra-03.jpg", alt: photoAlt("casual archive"), category: "Casual", height: "medium" },
      { src: "/nikhil-kubde-extra-04.jpg", alt: photoAlt("casual archive 2"), category: "Casual", height: "tall" },
    ],
  },
];
