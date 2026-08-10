import { careerRoles } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function CareerRoles() {
  return (
    <section className="section-alt">
      <div className="site-container">
        <SectionHeading
          eyebrow="Career paths"
          title="Roles connected to real manufacturing outcomes."
          description="These positions are listed on the existing HYA TECH careers experience. Availability should be confirmed during application."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {careerRoles.map((role, index) => (
            <Reveal key={role.title} delay={(index % 3) * 0.04}>
              <article className="soft-card h-full">
                <div className="flex size-9 items-center justify-center rounded-full bg-lightblue text-sm font-bold text-blue">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy">
                  {role.title}
                </h3>
                <p className="mt-3 leading-7 text-muted">{role.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
