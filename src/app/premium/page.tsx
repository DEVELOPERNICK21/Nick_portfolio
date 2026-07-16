import PremiumExperience from "@/components/PremiumExperience";
import { createPageMetadata } from "@/config/metadata";
import { site } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Premium Interactive Experience",
  description: `Cinematic and interactive premium experience for ${site.name}.`,
});

export default function PremiumPage() {
  return (
    <div className='premium-shell'>
      <PremiumExperience />
    </div>
  );
}
