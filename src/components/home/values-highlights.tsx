import { Target, Factory, Zap, ShieldCheck, Handshake } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

const foundationCards = [
  {
    title: "Excellence & precision in every orders",
    description:
      "Committed to delivering exceptional quality, precision, and reliability in every project, ensuring results that consistently exceed customer expectations.",
    icon: Target,
  },
  {
    title: "Manufacturing Versatility",
    description:
      "Equipped to handle diverse manufacturing requirements with flexible solutions tailored to industries of every scale and complexity.",
    icon: Factory,
  },
  {
    title: "Faster lead times and competitive pricing",
    description:
      "Combining efficient production processes with cost-effective solutions to deliver faster turnaround times without compromising quality.",
    icon: Zap,
  },
  {
    title: "Expert Team",
    description:
      "Driven by a highly  technical skilled team of engineering professionals dedicated to providing innovative solutions, technical expertise, and dependable support throughout every stage of your project.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Centric Approach",
    description:
      "Every interaction is designed with you in mind. By prioritising your needs, embracing your feedback, and delivering excellence at every touchpoint, we ensure an experience that inspires confidence, loyalty, and continued success.",
    icon: Handshake,
  },
];

export function ValuesHighlights() {
  return (
    <section className="section-alt">
      <div className="mx-auto w-full max-w-screen-2xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Our foundation"
          title="Clear values behind precise work"
          description="A practical culture of excellence, customer focus, safety, responsibility, and continuous improvement."
          align="center"
        />
        <div className="foundation-grid mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {foundationCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.06} className="h-full">
                <article className="soft-card foundation-card group h-full flex flex-col items-center justify-center text-center">
                  <div className="foundation-icon-wrap mx-auto mb-4">
                    <Icon aria-hidden="true" size={28} strokeWidth={2} />
                  </div>
                  <h3 className="foundation-card-title font-semibold text-navy">
                    {card.title}
                  </h3>
                  <p className="foundation-card-text mt-3 text-muted">
                    {card.description}
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