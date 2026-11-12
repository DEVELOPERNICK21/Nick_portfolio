import type { PortfolioPhoto } from "@/data/media";
import { photoAlt } from "@/config/site";
import { DUO_PHOTOS } from "@/data/duoPhotos";

export type PortfolioCategoryId = "all" | "formal" | "ethnic" | "casual" | "onset";

export type PortfolioCategory = {
  id: PortfolioCategoryId;
  label: string;
  images: PortfolioPhoto[];
};

/** Non-CastYou lifestyle / editorial frames */
const formalImages: PortfolioPhoto[] = [
  { src: "/nikhil-kubde-extra-05.jpg", alt: photoAlt("lifestyle portrait on a lakeside swing"), category: "Lifestyle", height: "tall" },
  { src: "/nikhil-kubde-extra-02.jpg", alt: photoAlt("editorial outdoor portrait"), category: "Lifestyle", height: "medium" },
  { src: "/nikhil-kubde-extra-08.jpg", alt: photoAlt("campaign lifestyle frame"), category: "Lifestyle", height: "medium" },
];

const ethnicImages: PortfolioPhoto[] = [
  { src: "/main/hero-kurta.jpg", alt: photoAlt("ethnic kurta portrait with sunglasses"), category: "Ethnic", height: "tall" },
  { src: "/work/kurta-look-1.jpg", alt: photoAlt("black sequin kurta with gold embroidered dupatta and sunglasses"), category: "Ethnic", height: "tall" },
  { src: "/work/kurta-look-2.jpg", alt: photoAlt("festive kurta and dupatta look, adjusting the sleeve"), category: "Ethnic", height: "tall" },
  { src: "/work/kurta-look-3.jpg", alt: photoAlt("kurta and dupatta full-length look in a lantern-lit corridor"), category: "Ethnic", height: "tall" },
];

const casualImages: PortfolioPhoto[] = [
  { src: "/nikhil-kubde-extra-01.jpg", alt: photoAlt("mountain overlook lifestyle frame"), category: "Casual", height: "tall" },
  { src: "/nikhil-kubde-extra-03.jpg", alt: photoAlt("casual outdoor portrait"), category: "Casual", height: "tall" },
  { src: "/nikhil-kubde-extra-04.jpg", alt: photoAlt("travel lifestyle portrait"), category: "Casual", height: "medium" },
  { src: "/nikhil-kubde-extra-06.jpg", alt: photoAlt("casual day look"), category: "Casual", height: "tall" },
  { src: "/nikhil-kubde-extra-15.jpg", alt: photoAlt("black and white architectural lifestyle frame"), category: "Casual", height: "tall" },
  { ...DUO_PHOTOS[0], category: "Casual" },
  { ...DUO_PHOTOS[1], category: "Casual" },
  { ...DUO_PHOTOS[2], category: "Casual" },
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
    label: "Lifestyle",
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
