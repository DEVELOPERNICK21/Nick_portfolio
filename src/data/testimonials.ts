import { isDemo, site } from "@/config/site";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const productionTestimonials: Testimonial[] = [
  {
    quote:
      "Nikhil brought exceptional professionalism and on-camera presence to our campaign. His tech background made collaboration seamless — he understood our brand vision immediately.",
    name: "Creative Director",
    role: "Campaign Lead",
    company: "WeWork",
  },
  {
    quote:
      "Reliable, versatile, and easy to work with. Nikhil delivered strong editorial shots and was punctual throughout the shoot. Highly recommended for commercial work.",
    name: "Photographer",
    role: "Fashion & Editorial",
    company: "Blue Budha Store",
  },
];

const demoTestimonials: Testimonial[] = [
  {
    quote:
      "Brought exceptional professionalism and on-camera presence to our campaign. Understood the brand vision immediately and delivered campaign-ready frames on schedule.",
    name: "Creative Director",
    role: "Campaign Lead",
    company: "Lifestyle Brand",
  },
  {
    quote:
      "Reliable, versatile, and easy to work with. Strong editorial shots, punctual on set, and natural in front of the camera. Highly recommended for commercial work.",
    name: "Photographer",
    role: "Fashion & Editorial",
    company: "Fashion Label",
  },
];

export const testimonials: Testimonial[] = isDemo
  ? demoTestimonials
  : productionTestimonials;

export function testimonialSubject(): string {
  return site.firstName;
}
