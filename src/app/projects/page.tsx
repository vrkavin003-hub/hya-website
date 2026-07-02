import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ProjectGrid } from "@/components/project-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { industries, processSteps } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Explore HYA Tech work across CNC machining, precision components, fixtures, assembly systems, EDM, grinding, and industrial automation.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Precision work across components, fixtures, and"
        accent="automation."
        description="Explore a capability-led portfolio covering precision components, tooling, fixtures, and automation systems engineered for real manufacturing needs."
        image="/images/heroes/projects-hero.webp"
        imageAlt="Portfolio of precision manufactured components, fixtures, and tooling"
        imagePosition="52% center"
        primaryAction={{ label: "View Projects", href: "#portfolio" }}
        secondaryAction={{ label: "Explore Portfolio", href: "#portfolio" }}
      />

      <section id="portfolio" className="pb-section scroll-mt-32">
        <div className="site-container">
          <SectionHeading
            eyebrow="Selected work"
            title="Explore the portfolio by capability."
            description="Filter the work by machining, components, fixtures, or automation."
          />
          <div className="mt-10">
            <ProjectGrid />
          </div>
        </div>
      </section>

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

      <ContactCta />
    </>
  );
}
