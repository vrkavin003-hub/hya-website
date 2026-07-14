import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { WhyHyaTech } from "@/components/careers/why-hyatech";
import { CareerRoles } from "@/components/careers/career-roles";
import { CareersCulture } from "@/components/careers/careers-culture";
import { CareersApply } from "@/components/careers/careers-apply";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Careers",
  description:
    "Explore engineering, machining, quality, and assembly career opportunities with HYA Tech in precision manufacturing and automation.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your future in precision"
        accent="engineering."
        description="Join a team focused on quality, innovation, and manufacturing excellence across design, production, automation, and customer delivery."
        image="/images/heroes/careers-future-hero.png"
        imageAlt="Manufacturing engineer viewing a digital career development pathway"
        imagePosition="right center"
        primaryAction={{ label: "Explore Careers", href: "#apply" }}
        secondaryAction={{ label: "Our Culture", href: "#culture" }}
      />

      <WhyHyaTech />
      <CareerRoles />
      <CareersCulture />
      <CareersApply />
    </>
  );
}
