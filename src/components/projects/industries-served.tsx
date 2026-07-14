import { industries } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function IndustriesServed() {
  return (
    <section className="section-alt">
      <div className="site-container">
        <SectionHeading
          eyebrow="Industries"
          title="Engineering support across demanding sectors."
          description="Focused engineering support for electronics, automotive, tooling, fixtures, and production assembly requirements."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={index * 0.04}>
                <article className="soft-card group h-full">
                  <div className="icon-tile">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {industry.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
