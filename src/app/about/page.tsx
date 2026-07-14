import type { Metadata } from "next";
import { BadgeCheck, ShieldCheck, UsersRound } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/contact-cta";
import { AboutWhoWeAre } from "@/components/about/about-who-we-are";
import { MissionVision } from "@/components/about/mission-vision";
import { AboutValues } from "@/components/about/about-values";
import { AboutJourney } from "@/components/about/about-journey";
import { AboutFaqSection } from "@/components/about/about-faq-section";
import { AboutLocations } from "@/components/about/about-locations";
import { projects } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn how HYA Tech grew from an engineering-services origin in 2018 into a precision manufacturing and automation company in Hosur.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HYA Tech"
        title="Engineering today."
        accent="Empowering tomorrow."
        description="HYA Tech is a precision engineering company committed to delivering smart, reliable, and future-ready solutions. We combine advanced technology with skilled expertise to build long-lasting value for our clients and communities."
        image="/images/heroes/about-hero.webp"
        imageAlt="Precision manufacturing laser equipment operating in a modern factory"
        imagePosition="58% center"
        rotatingImages={projects.map((project) => ({
          src: project.image,
          alt: `${project.title} — ${project.description}`,
        }))}
        primaryAction={{ label: "Our Capabilities", href: "/capabilities" }}
        secondaryAction={{ label: "Explore Our Story", href: "#journey" }}
        highlights={[
          { title: "Driven by precision.", icon: ShieldCheck },
          { title: "People Focused", icon: UsersRound },
          { title: "Built to Last", icon: BadgeCheck },
        ]}
      />

      <AboutWhoWeAre />
      <MissionVision />
      <AboutValues />
      <AboutJourney />
      <AboutFaqSection />
      <AboutLocations />
      <ContactCta />
    </>
  );
}
