import { isDemo, site } from "@/config/site";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

/**
 * Intentionally empty. Add a testimonial only when a named person or brand has given you
 * a real written quote and permission to publish it. The on-set feedback from camera teams
 * is shown by OnSetFeedback on the home page.
 */
const productionTestimonials: Testimonial[] = [];

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
