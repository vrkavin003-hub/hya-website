import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactMethods } from "@/components/contact/contact-methods";
import { ContactConsultation } from "@/components/contact/contact-consultation";
import { ContactHeadOffice } from "@/components/contact/contact-head-office";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact HYA Tech in Hosur to discuss precision manufacturing, custom fixtures, industrial automation, intelligent equipment, and production support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your manufacturing"
        accent="challenge."
        description="Share your requirements, application goals, or production needs, and our team will help you shape the right engineering solution."
        image="/images/heroes/contact-hero.png"
        imageAlt="Engineering partners discussing a precision manufacturing project"
        imagePosition="center center"
        primaryAction={{ label: "Contact Us", href: "#consultation" }}
        secondaryAction={{ label: "Request Consultation", href: "#consultation" }}
      />

      <ContactMethods />
      <ContactConsultation />
      <ContactHeadOffice />
    </>
  );
}
