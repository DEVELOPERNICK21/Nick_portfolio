import { photoAlt, site } from "@/config/site";

export type PortfolioPhoto = {
  src: string;
  alt: string;
  category: string;
  height?: "short" | "medium" | "tall";
};

export const HERO_IMAGE = "/main/hero-leather.jpg";
export const ABOUT_IMAGE = "/main/about.jpg";

/** Intro / “Get to know me” video — shareable at /intro */
export const INTRO_VIDEO = "/intro-video.mp4";
export const INTRO_POSTER = "/intro-poster.jpg";

export const PORTFOLIO_PDF = site.portfolioPdf.path;
export const PORTFOLIO_PDF_FILENAME = site.portfolioPdf.filename;

/** Sales pricing one-pager — shareable from demo site */
export const PRICING_PDF = "/downloads/model-portfolio-pricing.pdf";
export const PRICING_PDF_FILENAME = "Model-Portfolio-Pricing.pdf";

export const BRAND_COLLABORATIONS: readonly string[] = site.brands;

/** Primary photos — used across featured sections and portfolio highlights */
export const MAIN_PHOTOS: PortfolioPhoto[] = [
  {
    src: "/main/hero-leather.jpg",
    alt: photoAlt("leather jacket editorial portrait"),
    category: "Editorial",
    height: "tall",
  },
  {
    src: "/main/hero-kurta.jpg",
    alt: photoAlt("ethnic kurta portrait with sunglasses"),
    category: "Ethnic",
    height: "tall",
  },
  {
    src: "/work/kurta-look-1.jpg",
    alt: photoAlt("black sequin kurta with gold embroidered dupatta"),
    category: "Ethnic",
    height: "tall",
  },
  {
    src: "/nikhil-kubde-extra-05.jpg",
    alt: photoAlt("lifestyle portrait on a lakeside swing"),
    category: "Lifestyle",
    height: "tall",
  },
  {
    src: "/nikhil-kubde-extra-01.jpg",
    alt: photoAlt("mountain overlook lifestyle frame"),
    category: "Casual",
    height: "tall",
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
    alt: photoAlt(`archive photo ${index + 1}`),
    category: "Archive",
    height: (["tall", "medium", "short"] as const)[index % 3],
  })
);
