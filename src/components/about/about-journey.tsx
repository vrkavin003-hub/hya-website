import { Timeline } from "@/components/timeline";
import { SectionHeading } from "@/components/ui";

export function AboutJourney() {
  return (
    <section id="journey" className="section-alt scroll-mt-32">
      <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Our story"
            title="A journey toward's engineering independence"
            description="Every milestone represents an expansion of practical capability—from engineering support to manufacturing, tooling, automation, and international partnerships."
          />
        </div>
        <Timeline />
      </div>
    </section>
  );
}
