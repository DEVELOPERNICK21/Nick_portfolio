export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
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
