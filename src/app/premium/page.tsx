import type { Metadata } from "next";
import PremiumExperience from "@/components/PremiumExperience";

export const metadata: Metadata = {
  title: "Premium Interactive Experience",
  description:
    "Cinematic and interactive premium experience for Nikhil Kubde.",
};

export default function PremiumPage() {
  return (
    <div className='premium-shell'>
      <PremiumExperience />
    </div>
  );
}
