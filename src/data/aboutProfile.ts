import { PROFILE_FACTS } from "@/data/booking";

export type AboutStat = { label: string; value: string };

export type DigitalShot = {
  src: string;
  label: string;
  alt: string;
  /** sheet = full composite card · full = head-to-toe · closeup = head → chest */
  frame: "sheet" | "full" | "closeup";
};

export const ABOUT_STATS: AboutStat[] = [
  { label: "Skills", value: process.env.NEXT_PUBLIC_SKILLS || "Fashion, Editorial, Commercial, Lifestyle" },
  { label: "Languages", value: process.env.NEXT_PUBLIC_AVAIL_LANGUAGES || PROFILE_FACTS.languages },
  { label: "Height", value: process.env.NEXT_PUBLIC_MEAS_HEIGHT || PROFILE_FACTS.height },
  { label: "Weight", value: process.env.NEXT_PUBLIC_MEAS_WEIGHT || "70 kg / 154 lbs" },
  { label: "Skin Tone", value: process.env.NEXT_PUBLIC_MEAS_SKIN || "Medium" },
  { label: "Hair Colour", value: process.env.NEXT_PUBLIC_MEAS_HAIR || "Black" },
  { label: "Eye Colour", value: process.env.NEXT_PUBLIC_MEAS_EYES || "Brown" },
  { label: "Tattoos", value: process.env.NEXT_PUBLIC_TATTOOS || "None" },
  { label: "Location", value: process.env.NEXT_PUBLIC_AVAIL_CITY || PROFILE_FACTS.city },
  { label: "Age", value: process.env.NEXT_PUBLIC_AGE || "26" },
];

/** Official Montelo composite card — shown first on the home Digitals block */
export const DIGITAL_COMP_SHEET: DigitalShot = {
  src: "/polaroid/comp-sheet.jpg",
  label: "Comp card",
  alt: "Nikhil Kubde digital composite card — six casting poses with measurements",
  frame: "sheet",
};

/**
 * Agency-standard digitals:
 * Comp sheet first, then individual casting angles
 */
export const DIGITAL_SHEET: DigitalShot[] = [
  DIGITAL_COMP_SHEET,
  { src: "/polaroid/03.jpg", label: "Front", alt: "Full-body front digital", frame: "full" },
  { src: "/polaroid/02.jpg", label: "Back", alt: "Full-body back digital", frame: "full" },
  { src: "/polaroid/07.jpg", label: "Side", alt: "Full-body side digital", frame: "full" },
  { src: "/polaroid/05.jpg", label: "3/4", alt: "Full-body three-quarter digital", frame: "full" },
  { src: "/polaroid/01.jpg", label: "Front", alt: "Close-up front — head to chest", frame: "closeup" },
  { src: "/polaroid/06.jpg", label: "Profile", alt: "Close-up profile — head to chest", frame: "closeup" },
  { src: "/polaroid/04.jpg", label: "3/4", alt: "Close-up three-quarter — head to chest", frame: "closeup" },
  { src: "/polaroid/08.jpg", label: "Back", alt: "Close-up back — head to chest", frame: "closeup" },
];

/** Individual casting shots only (excludes the composite card) */
export const DIGITAL_SINGLES: DigitalShot[] = DIGITAL_SHEET.filter(
  (shot) => shot.frame !== "sheet"
);

/** @deprecated use DIGITAL_SHEET */
export type AboutPolaroid = {
  src: string;
  alt: string;
  rotate: string;
  group: "closeup" | "full";
};

export const ABOUT_POLAROIDS: AboutPolaroid[] = DIGITAL_SINGLES.map((shot) => ({
  src: shot.src,
  alt: shot.label,
  rotate: "",
  group: shot.frame === "full" ? ("full" as const) : ("closeup" as const),
}));
