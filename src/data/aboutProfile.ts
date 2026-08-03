export type AboutStat = { label: string; value: string };

export type AboutPolaroid = {
  src: string;
  alt: string;
  rotate: string;
  group: "closeup" | "full";
};

export const ABOUT_STATS: AboutStat[] = [
  { label: "Skills", value: process.env.NEXT_PUBLIC_SKILLS || "Fashion, Editorial, Commercial, Lifestyle" },
  { label: "Languages", value: process.env.NEXT_PUBLIC_AVAIL_LANGUAGES || "English, Hindi" },
  { label: "Height", value: process.env.NEXT_PUBLIC_MEAS_HEIGHT || `5'10" / 175 cm` },
  { label: "Weight", value: process.env.NEXT_PUBLIC_MEAS_WEIGHT || "70 kg / 154 lbs" },
  { label: "Skin Tone", value: process.env.NEXT_PUBLIC_MEAS_SKIN || "Medium" },
  { label: "Hair Colour", value: process.env.NEXT_PUBLIC_MEAS_HAIR || "Black" },
  { label: "Eye Colour", value: process.env.NEXT_PUBLIC_MEAS_EYES || "Brown" },
  { label: "Tattoos", value: process.env.NEXT_PUBLIC_TATTOOS || "None" },
  { label: "Location", value: process.env.NEXT_PUBLIC_AVAIL_CITY || "Pune, India" },
  { label: "Age", value: process.env.NEXT_PUBLIC_AGE || "[Add Age]" },
];

/**
 * Unretouched digitals — close-ups + full-body for front / 3/4 / profile
 * (classic multi-angle comp-card set)
 */
export const ABOUT_POLAROIDS: AboutPolaroid[] = [
  { src: "/polaroid/01.jpg", alt: "Front close-up", rotate: "-rotate-2", group: "closeup" },
  { src: "/polaroid/04.jpg", alt: "Three-quarter close-up", rotate: "rotate-2", group: "closeup" },
  { src: "/polaroid/06.jpg", alt: "Profile close-up", rotate: "-rotate-1", group: "closeup" },
  { src: "/polaroid/03.jpg", alt: "Front full", rotate: "rotate-2", group: "full" },
  { src: "/polaroid/05.jpg", alt: "Three-quarter full", rotate: "-rotate-2", group: "full" },
  { src: "/polaroid/07.jpg", alt: "Profile full", rotate: "rotate-1", group: "full" },
];
