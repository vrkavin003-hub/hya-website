import { values } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function ValuesHighlights() {
  return (
    <section className="section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our foundation"
          title="Clear values behind precise work."
          description="A practical culture of excellence, customer focus, safety, responsibility, and continuous improvement."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.slice(0, 3).map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={index * 0.04}>
                <article className="soft-card group h-full">
                  <div className="icon-tile">
                    <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">{value.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
