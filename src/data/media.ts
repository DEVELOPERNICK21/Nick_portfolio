export type PortfolioPhoto = {
  src: string;
  alt: string;
  category: string;
  height?: "short" | "medium" | "tall";
};

export const HERO_IMAGE = "/main/hero.jpg";
export const ABOUT_IMAGE = "/main/about.jpg";

export const PORTFOLIO_PDF = "/downloads/nikhil-kubde-portfolio.pdf";
export const PORTFOLIO_PDF_FILENAME = "Nikhil-Kubde-Portfolio.pdf";

export const BRAND_COLLABORATIONS = [
  "Wework",
  "Laundryto",
  "Blue Budha Store",
] as const;

/** Primary 5 photos — used across hero, featured sections, and portfolio highlights */
export const MAIN_PHOTOS: PortfolioPhoto[] = [
  {
    src: "/main/main-1.jpg",
    alt: "Nikhil Kubde — editorial portrait, Montelo campaign",
    category: "Editorial",
    height: "tall",
  },
  {
    src: "/main/main-2.jpg",
    alt: "Nikhil Kubde — commercial fashion portrait",
    category: "Commercial",
    height: "medium",
  },
  {
    src: "/main/main-3.jpg",
    alt: "Nikhil Kubde — lifestyle brand photography",
    category: "Lifestyle",
    height: "short",
  },
  {
    src: "/main/main-4.jpg",
    alt: "Nikhil Kubde — fashion editorial close-up",
    category: "Fashion",
    height: "tall",
  },
  {
    src: "/main/main-5.jpg",
    alt: "Nikhil Kubde — campaign portrait photography",
    category: "Campaign",
    height: "medium",
  },
];

/** Extended archive — comp card PDF (singles + polaroids) */
export const LIBRARY_PDF = PORTFOLIO_PDF;

const libraryFilenames = [
  "nikhil-kubde-extra-01.jpg",
  "nikhil-kubde-extra-02.jpg",
  "nikhil-kubde-extra-03.jpg",
  "nikhil-kubde-extra-04.jpg",
  "nikhil-kubde-extra-05.jpg",
  "nikhil-kubde-extra-06.jpg",
  "nikhil-kubde-extra-07.jpg",
  "nikhil-kubde-extra-08.jpg",
  "nikhil-kubde-extra-09.jpg",
  "nikhil-kubde-extra-10.jpg",
  "nikhil-kubde-extra-11.jpg",
  "nikhil-kubde-extra-15.jpg",
  "nikhil-kubde-extra-16.jpg",
  "nikhil-kubde-extra-17.jpg",
  "nikhil-kubde-extra-18.jpg",
  "nikhil-kubde-extra-19.jpg",
  "nikhil-kubde-extra-20.jpg",
] as const;

export const LIBRARY_PHOTOS: PortfolioPhoto[] = libraryFilenames.map(
  (file, index) => ({
    src: `/${file}`,
    alt: `Nikhil Kubde — archive photo ${index + 1}`,
    category: "Archive",
    height: (["tall", "medium", "short"] as const)[index % 3],
  })
);
