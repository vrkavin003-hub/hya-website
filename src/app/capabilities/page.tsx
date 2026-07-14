import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/contact-cta";
import { StructuredData } from "@/components/structured-data";
import { CapabilityGroups } from "@/components/capabilities/capability-groups";
import { AssemblyTechnologies } from "@/components/capabilities/assembly-technologies";
import { DeliveryModel } from "@/components/capabilities/delivery-model";
import { serviceSchemas } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Capabilities",
  description:
    "Explore HYA Tech capabilities in design, precision machining, custom fixtures, industrial automation, intelligent equipment, and production support.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <StructuredData data={serviceSchemas} />
      <PageHero
        eyebrow="Capabilities"
        title="Complete manufacturing"
        accent="capabilities."
        description="From concept to production, we deliver precision engineering, advanced manufacturing, automation, and lifecycle support—seamlessly and reliably."
        image="/images/heroes/capabilities-hero.webp"
        imageAlt="CNC machine producing a precision metal component"
        imagePosition="54% center"
        primaryAction={{ label: "Explore Our Capabilities", href: "#capability-groups" }}
        secondaryAction={{ label: "Watch Overview", href: "#delivery-model" }}
      />

      <CapabilityGroups />
      <AssemblyTechnologies />
      <DeliveryModel />

      <ContactCta
        title="Need several capabilities working together?"
        description="Share the production challenge rather than trying to preselect the answer. HYA Tech can help organize the engineering path."
      />
    </>
  );
}
