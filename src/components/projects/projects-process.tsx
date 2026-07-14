import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui";

export function ProjectsProcess() {
  return (
    <section className="section">
      <div className="site-container">
        <SectionHeading
          eyebrow="How work moves"
          title="Projects progress through visible engineering stages."
          description="The process is structured to surface constraints early, validate before production, and keep support connected after delivery."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article key={step.number} className="soft-card">
              <div className="text-sm font-bold text-blue">{step.number}</div>
              <h3 className="mt-7 text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
