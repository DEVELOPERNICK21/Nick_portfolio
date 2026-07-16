import GtaCinematicLanding from "@/components/GtaCinematicLanding";
import { createPageMetadata } from "@/config/metadata";
import { site } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Cinematic Experience",
  description: `Scroll-driven cinematic portfolio experience for ${site.name} — fashion, editorial, and commercial modeling.`,
});

export default function CinematicPage() {
  return <GtaCinematicLanding />;
}
