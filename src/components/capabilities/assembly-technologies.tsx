import { assemblyTechnologies } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function AssemblyTechnologies() {
  return (
    <section className="section-alt">
      <div className="site-container">
        <SectionHeading
          eyebrow="Assembly technologies"
          title="Processes integrated around the production need."
          description="HYA Tech's source portfolio includes a range of joining, fastening, dispensing, and inspection technologies."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {assemblyTechnologies.map((technology, index) => {
            const Icon = technology.icon;
            return (
              <Reveal key={technology.title} delay={(index % 3) * 0.04}>
                <article className="soft-card group h-full">
                  <div className="icon-tile">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy">
                    {technology.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">
                    {technology.description}
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
