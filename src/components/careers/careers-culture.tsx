import { values } from "@/data/site";
import { SectionHeading } from "@/components/ui";

export function CareersCulture() {
  return (
    <section id="culture" className="section scroll-mt-32">
      <div className="site-container">
        <SectionHeading
          eyebrow="Culture"
          title="Values that guide the work and workspace"
          description="At HYA TECH,precision, innovation, teamwork, safety, responsibility, and customer focus are expected to show up in everyday decisions."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {values.slice(0, 6).map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="flex gap-4 rounded-[20px] border border-border p-5"
              >
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-blue"
                  size={20}
                />
                <div>
                  <h3 className="font-semibold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {value.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
