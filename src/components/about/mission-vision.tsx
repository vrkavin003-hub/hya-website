import { missionVision } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function MissionVision() {
  return (
    <section className="section-alt">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our foundation"
          title="Mission, vision, and the way we work"
          description="Ambition matters most when it is supported by practical capability, responsible behavior, and transparent partnerships."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {missionVision.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="soft-card group h-full">
                  <div className="icon-tile">
                    <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
