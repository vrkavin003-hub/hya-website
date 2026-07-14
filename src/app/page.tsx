import type { Metadata } from "next";
import { HomeHero, HomeStats } from "@/components/home-hero";
import { ContactCta } from "@/components/contact-cta";
import { CoreServices } from "@/components/home/core-services";
import { AboutPreview } from "@/components/home/about-preview";
import { ValuesHighlights } from "@/components/home/values-highlights";
import { CapabilitiesPreview } from "@/components/home/capabilities-preview";
import { ProcessSteps } from "@/components/home/process-steps";
import { SelectedWork } from "@/components/home/selected-work";
import { CompanyJourney } from "@/components/home/company-journey";
import { HomeLocations } from "@/components/home/home-locations";
import { Certifications } from "@/components/home/certifications";
import { CareersCta } from "@/components/home/careers-cta";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Precision Manufacturing & Automation Solutions",
  description:
    "HYA Tech delivers precision manufacturing, custom fixtures, industrial automation and intelligent equipment solutions from design through production and support.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <CoreServices />
      <AboutPreview />
      <ValuesHighlights />
      <CapabilitiesPreview />
      <ProcessSteps />
      <SelectedWork />
      <CompanyJourney />
      <HomeLocations />
      <Certifications />
      <CareersCta />
      <ContactCta />
    </>
  );
}
