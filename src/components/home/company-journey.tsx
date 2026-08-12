import { ButtonLink } from "@/components/ui";
import { Timeline } from "@/components/timeline";
import { SectionHeading } from "@/components/ui";

export function CompanyJourney() {
  return (
    <section className="section-alt">
      <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Company journey"
            title="Built step by step, with each capability earned"
            description="From an engineering-services origin in Madurai to manufacturing in Hosur and international capability partnerships."
          />
          <div className="mt-8">
            <ButtonLink href="/about#journey" variant="secondary">
              Full company story
            </ButtonLink>
          </div>
        </div>
        <Timeline compact />
      </div>
    </section>
  );
}
