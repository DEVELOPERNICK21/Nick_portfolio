export type CaseStudy = {
  brandName: string;
  tagline: string;
  description: string;
  imageUrl: string;
  category: string;
  /** CSS object-position for tall photos cropped into the wide card */
  imagePosition?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    brandName: "Ram India Group",
    tagline: "Short Film — Diwali 2026",
    description:
      "On-camera role in a Diwali short film for Ram India Group, published on their Instagram and reaching 750K+ views in 5 days.",
    imageUrl: "/work/ram-india-bts-2.jpg",
    category: "Film",
    imagePosition: "center 32%",
  },
  {
    brandName: "WeWork",
    tagline: "Commercial Campaign — Space & Lifestyle Brand",
    description:
      "Featured in a commercial campaign showcasing modern workspace culture and lifestyle branding for a global co-working brand.",
    imageUrl: "/main/main-1.jpg",
    category: "Commercial",
  },
  {
    brandName: "LaundryTO",
    tagline: "Product Campaign — Premium Laundry Brand",
    description:
      "Product-focused campaign highlighting premium laundry services with clean, aspirational lifestyle imagery.",
    imageUrl: "/main/main-2.jpg",
    category: "Product",
  },
  {
    brandName: "Blue Buddha Store",
    tagline: "Editorial Campaign — Fashion Retail",
    description:
      "Editorial fashion campaign for a contemporary retail brand, emphasizing style, attitude, and brand storytelling.",
    imageUrl: "/main/main-3.jpg",
    category: "Editorial",
  },
];
