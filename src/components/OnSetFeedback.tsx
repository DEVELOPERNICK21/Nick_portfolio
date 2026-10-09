import ScrollReveal from "@/components/ScrollReveal";
import { isDemo } from "@/config/site";

/**
 * Feedback camera teams have given in person. Deliberately unnamed and unquoted:
 * these are summaries, not word-for-word quotes. If a photographer or brand agrees to
 * be named, add their real written quote here with their name and company.
 */
const FEEDBACK = [
  {
    title: "Never creates confusion",
    line: "Clear on the brief and easy to work with on set.",
  },
  {
    title: "Patient on set",
    line: "Stays calm and patient through the shoot.",
  },
  {
    title: "Skilled with poses",
    line: "Quick to give the camera strong, usable poses.",
  },
] as const;

export default function OnSetFeedback() {
  if (isDemo) return null;

  return (
    <section id="on-set-feedback" className="ed-section" data-chapter="Feedback">
      <div className="container-custom">
        <ScrollReveal direction="up" delay={40}>
          <p className="ed-kicker">On-set feedback</p>
          <h2 className="ed-heading mt-3">What camera teams say</h2>
          <p className="ed-body mt-4 max-w-2xl">
            Feedback from the camera teams I&apos;ve worked with. Brands hire
            for reliability as much as for looks.
          </p>
          <div className="ed-divider my-8 max-w-md" />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80} variant="stagger">
          <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
            {FEEDBACK.map((item) => (
              <li key={item.title} className="ed-surface p-6 md:p-8">
                <p className="font-serif text-xl text-editorial-ink md:text-2xl">
                  {item.title}
                </p>
                <p className="mt-3 text-balance text-sm leading-relaxed text-editorial-muted md:text-base">
                  {item.line}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
