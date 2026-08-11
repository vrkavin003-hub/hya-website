import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/contact-cta";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/ui";
import { FacilityCollage } from "@/components/projects/facility-collage";
import { FacilityFeatures } from "@/components/projects/facility-features";
import { FacilityMetrics } from "@/components/projects/facility-metrics";
import { FacilityProcess } from "@/components/projects/facility-process";
import { FacilityTour } from "@/components/projects/facility-tour";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Facility",
  description:
    "Explore the HYA TECH facility — a technology-driven environment built for innovation, precision manufacturing, collaboration, and continuous growth.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Facility"
        title="Where Ideas Become"
        accent="Reality."
        description="A technology-driven environment designed for innovation, collaboration, and continuous growth."
        image="/images/heroes/projects-hero.webp"
        imageAlt="Inside the HYA TECH manufacturing facility"
        imagePosition="52% center"
        primaryAction={{ label: "Take a Facility Tour", href: "#facility-tour" }}
        secondaryAction={{ label: "Explore Our Work", href: "#portfolio" }}
      />

      <FacilityTour />
      <FacilityFeatures />
      <FacilityProcess />
      <FacilityCollage />
      <FacilityMetrics />

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

      <ContactCta />
    </>
  );
}
