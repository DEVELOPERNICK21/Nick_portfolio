export type CaseStudy = {
  brandName: string;
  tagline: string;
  description: string;
  imageUrl: string;
  category: string;
};

export const caseStudies: CaseStudy[] = [
  {
    brandName: "WeWork",
    tagline: "Commercial Campaign — Space & Lifestyle Brand",
    description:
      "Featured in a commercial campaign showcasing modern workspace culture and lifestyle branding for a global co-working brand.",
    imageUrl: "/main/main-1.jpg",
    category: "Commercial",
  },
  {
    brandName: "Laundryto",
    tagline: "Product Campaign — Premium Laundry Brand",
    description:
      "Product-focused campaign highlighting premium laundry services with clean, aspirational lifestyle imagery.",
    imageUrl: "/main/main-2.jpg",
    category: "Product",
  },
  {
    brandName: "Blue Budha Store",
    tagline: "Editorial Campaign — Fashion Retail",
    description:
      "Editorial fashion campaign for a contemporary retail brand, emphasizing style, attitude, and brand storytelling.",
    imageUrl: "/main/main-3.jpg",
    category: "Editorial",
  },
];
