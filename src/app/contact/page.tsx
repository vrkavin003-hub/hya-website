import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms";
import { LocationGrid } from "@/components/location-grid";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact HYA Tech in Hosur to discuss precision manufacturing, custom fixtures, industrial automation, intelligent equipment, and production support.",
  path: "/contact",
});

export default function ContactPage() {
  const contactMethods = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phoneHref}`,
      icon: Phone,
    },
    {
      label: "Business hours",
      value: siteConfig.hours,
      icon: Clock3,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your manufacturing"
        accent="challenge."
        description="Share your requirements, application goals, or production needs, and our team will help you shape the right engineering solution."
        image="/images/heroes/contact-hero.png"
        imageAlt="Engineering partners discussing a precision manufacturing project"
        imagePosition="center center"
        primaryAction={{ label: "Contact Us", href: "#consultation" }}
        secondaryAction={{ label: "Request Consultation", href: "#consultation" }}
      />

      <section className="pb-section">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const content = (
                <>
                  <div className="icon-tile">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <div className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-blue">
                    {method.label}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-navy">
                    {method.value}
                  </div>
                </>
              );

              return method.href ? (
                <a
                  key={method.label}
                  className="soft-card group block"
                  href={method.href}
                >
                  {content}
                </a>
              ) : (
                <div key={method.label} className="soft-card group">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="consultation" className="section-alt scroll-mt-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Request consultation"
              title="Tell us enough to begin well."
              description="A few concrete details about the application, production environment, timeline, and constraints help HYA Tech route your enquiry effectively."
            />
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[28px] bg-navy p-8 text-white sm:p-12">
            <span className="eyebrow eyebrow-invert">Head office</span>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Hosur manufacturing headquarters
            </h2>
            <div className="mt-7 flex items-start gap-3 text-white/70">
              <MapPin aria-hidden="true" className="mt-1 shrink-0 text-sky-300" size={20} />
              <p className="leading-7">{siteConfig.address}</p>
            </div>
            <div className="mt-8">
              <ButtonLink href={siteConfig.mapUrl} variant="ghost" external>
                Get directions
              </ButtonLink>
            </div>
          </div>
          <LocationGrid compact />
        </div>
      </section>
    </>
  );
}
