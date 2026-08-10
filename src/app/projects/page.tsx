import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/contact-cta";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/ui";
import { IndustriesServed } from "@/components/projects/industries-served";
import { ProjectsProcess } from "@/components/projects/projects-process";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Explore HYA TECH work across CNC machining, precision components, fixtures, assembly systems, EDM, grinding, and industrial automation.",
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

      <IndustriesServed />
      <ProjectsProcess />
      <ContactCta />
    </>
  );
}
