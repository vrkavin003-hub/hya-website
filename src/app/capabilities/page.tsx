import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { StructuredData } from "@/components/structured-data";
import {
  assemblyTechnologies,
  capabilityGroups,
  processSteps,
  serviceSchemas,
} from "@/data/site";
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

      <section id="capability-groups" className="pb-section scroll-mt-32">
        <div className="site-container">
          <SectionHeading
            eyebrow="Capability groups"
            title="Focused expertise that works as one system."
            description="Choose a specific capability or combine them into an end-to-end delivery program."
            align="center"
          />
          <div className="mt-14 space-y-8">
            {capabilityGroups.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Reveal key={capability.slug}>
                  <article
                    id={capability.slug}
                    className="scroll-mt-32 overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_16px_45px_rgba(11,31,58,0.05)]"
                  >
                    <div className="grid lg:grid-cols-2">
                      <div
                        className={`relative min-h-[320px] ${
                          index % 2 ? "lg:order-2" : ""
                        }`}
                      >
                        <Image
                          src={capability.image}
                          alt={capability.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div
                        className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${
                          index % 2 ? "lg:order-1" : ""
                        }`}
                      >
                        <div className="icon-tile">
                          <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
                        </div>
                        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-navy sm:text-4xl">
                          {capability.title}
                        </h2>
                        <p className="mt-5 leading-8 text-muted">
                          {capability.description}
                        </p>
                        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                          {capability.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-700"
                            >
                              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-lightblue text-blue">
                                <Check aria-hidden="true" size={13} strokeWidth={2.5} />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="site-container">
          <SectionHeading
            eyebrow="Assembly technologies"
            title="Processes integrated around the production need."
            description="HYA Tech’s source portfolio includes a range of joining, fastening, dispensing, and inspection technologies."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {assemblyTechnologies.map((technology, index) => {
              const Icon = technology.icon;
              return (
                <Reveal key={technology.title} delay={(index % 3) * 0.04}>
                  <article className="soft-card group h-full">
                    <div className="icon-tile">
                      <Icon aria-hidden="true" size={22} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-navy">
                      {technology.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted">
                      {technology.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="delivery-model" className="section scroll-mt-32 bg-navy text-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Delivery model"
            title="From first conversation to ongoing support."
            description="A simple, reviewable process keeps engineering decisions aligned with the intended production result."
            invert
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[22px] border border-white/10 bg-white/[0.045] p-6"
              >
                <div className="text-sm font-bold text-sky-300">{step.number}</div>
                <h3 className="mt-7 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title="Need several capabilities working together?"
        description="Share the production challenge rather than trying to preselect the answer. HYA Tech can help organize the engineering path."
      />
    </>
  );
}
