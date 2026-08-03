export type ProofImage = { src: string; alt: string };

export type ProofCard = {
  id: string;
  brand: string;
  featured?: boolean;
  headline: string;
  metrics: string[];
  note?: string;
  images: ProofImage[];
};

export const INSTAGRAM_PROOF_CARDS: ProofCard[] = [
  {
    id: "reach",
    brand: "Instagram Reach",
    headline: "33.8K views in the last 30 days",
    metrics: ["33.8K views / 30 days", "Growing commercial & lifestyle presence"],
    note: "Headline metric shown in Insights; screenshot includes profile chrome for account context",
    images: [
      { src: "/proof/reach-profile.png", alt: "Instagram reach screenshot — 33.8K views" },
    ],
  },
  {
    id: "wework",
    brand: "WeWork",
    featured: true,
    headline: "Commercial lifestyle shoot for a global brand",
    metrics: ["On-set talent", "BTS + final campaign frames"],
    note: "Flagship brand collaboration — corporate lifestyle & workspace campaign",
    images: [
      { src: "/proof/wework-08.png", alt: "WeWork final lifestyle frame" },
      { src: "/proof/wework-05.png", alt: "WeWork on-set production" },
      { src: "/proof/wework-06.png", alt: "WeWork BTS lighting setup" },
      { src: "/proof/wework-01.png", alt: "WeWork conference room BTS" },
    ],
  },
  {
    id: "laundryto",
    brand: "LaundryTO",
    headline: "37.7K views · 404 likes",
    metrics: ["37.7K reel views", "404 likes"],
    note: "Posted via partner account @pune.vibes_",
    images: [
      { src: "/proof/laundryto-reel.png", alt: "LaundryTO reel screenshot" },
    ],
  },
  {
    id: "blue-buddha",
    brand: "Blue Buddha",
    headline: "459K views · 904 likes · 205 shares",
    metrics: ["459K reel views", "904 likes", "205 shares"],
    note: "Posted via partner account @pune.vibes_",
    images: [
      { src: "/proof/blue-buddha-reel-a.png", alt: "Blue Buddha store reel" },
      { src: "/proof/blue-buddha-reel-b.png", alt: "Blue Buddha reel engagement" },
    ],
  },
];

export const WHATSAPP_BOOKING_NUMBER = "918827411901";
export const WHATSAPP_BOOKING_MESSAGE =
  "Hi Nikhil — I found your portfolio and I'd like to discuss a modeling / brand collaboration.";
export const WHATSAPP_BOOKING_HREF = `https://wa.me/${WHATSAPP_BOOKING_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_BOOKING_MESSAGE
)}`;
