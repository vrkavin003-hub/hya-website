import { values } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function AboutValues() {
  return (
    <section className="section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our values"
          title="Standards that shape everyday decisions."
          description="The values published by HYA Tech have been reorganized into a clearer operating framework."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={(index % 3) * 0.04}>
                <article className="soft-card group h-full">
                  <div className="icon-tile">
                    <Icon aria-hidden="true" size={22} />
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
