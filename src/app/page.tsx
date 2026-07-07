import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  MoveRight,
  Sparkles,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { HomeHero, HomeStats } from "@/components/home-hero";
import { ProjectGrid } from "@/components/project-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading, ButtonLink } from "@/components/ui";
import { Timeline } from "@/components/timeline";
import {
  capabilityGroups,
  certifications,
  locations,
  processSteps,
  values,
} from "@/data/site";
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
      <section className="core-services home-core-services">
        <div className="site-container">
          <Reveal>
            <div className="service-panel rounded-[30px] border border-border bg-white p-5 shadow-[0_26px_75px_rgba(6,29,54,0.14)] sm:p-8">
              <div className="mb-8 flex flex-col gap-3 text-center">
                <span className="mx-auto text-xs font-bold uppercase tracking-[0.16em] text-blue">
                  What we do
                </span>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-navy sm:text-4xl">
                  Our core services
                </h2>
                <span className="mx-auto h-1 w-12 rounded-full bg-blue" />
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-9">
                {capabilityGroups.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      href={`/capabilities#${service.slug}`}
                      className="service-card group overflow-hidden rounded-[18px] border border-border bg-white"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-alt">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 190px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                      </div>
                      <div className="relative px-3 pb-4 pt-7 text-center">
                        <span className="service-icon absolute -top-5 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-xl bg-blue text-white shadow-lg">
                          <Icon aria-hidden="true" size={19} strokeWidth={1.9} />
                        </span>
                        <h3 className="text-sm font-semibold leading-5 text-navy">
                          {service.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-white shadow-[0_22px_60px_rgba(11,31,58,0.09)]">
              <Image
                src="/images/intelligentmanufacturing.jpg"
                alt="Intelligent manufacturing equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-navy sm:text-5xl">
              Engineering excellence, built through close collaboration.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted">
              <p>
                HYA Tech is committed to becoming a leading industry player by
                expanding through deep collaboration with customers and
                investing in technology and talent.
              </p>
              <p>
                The company was founded to build world-class engineering
                excellence in precision manufacturing for the electronics
                industry—delivering innovation, quality, and reliability from
                India.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">
                Read our story
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our foundation"
            title="Clear values behind precise work."
            description="A practical culture of excellence, customer focus, safety, responsibility, and continuous improvement."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.slice(0, 3).map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 0.04}>
                  <article className="soft-card group h-full">
                    <div className="icon-tile">
                      <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted">{value.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="site-container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Core capabilities"
              title="One partner across the manufacturing lifecycle."
              description="Focused capability groups make it easier to move from engineering need to a supported production outcome."
            />
            <ButtonLink href="/capabilities" variant="secondary">
              View all capabilities
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilityGroups.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Reveal key={capability.slug} delay={(index % 3) * 0.04}>
                  <Link
                    href={`/capabilities#${capability.slug}`}
                    className="soft-card group block h-full"
                  >
                    <div className="flex items-center justify-between">
                      <div className="icon-tile">
                        <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                      </div>
                      <ArrowRight
                        aria-hidden="true"
                        className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue"
                        size={20}
                      />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-navy">
                      {capability.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted">{capability.short}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="End-to-end delivery"
            title="A disciplined path from need to production."
            description="Each engagement follows a clear sequence, with decisions and validation happening before unnecessary complexity is introduced."
            invert
          />
          <ol className="mt-12 grid gap-4 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li
                key={step.number}
                className="relative rounded-[22px] border border-white/10 bg-white/[0.045] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-sky-300">{step.number}</span>
                  {index < processSteps.length - 1 ? (
                    <MoveRight
                      aria-hidden="true"
                      className="hidden text-white/20 lg:block"
                      size={18}
                    />
                  ) : null}
                </div>
                <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Manufacturing problems made tangible."
              description="A selection of the project categories and solutions presented by HYA Tech."
            />
            <ButtonLink href="/projects" variant="secondary">
              Explore projects
            </ButtonLink>
          </div>
          <div className="mt-12">
            <ProjectGrid limit={6} />
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Company journey"
              title="Built step by step, with each capability earned."
              description="From an engineering-services origin in Madurai to manufacturing in Hosur and international capability partnerships."
            />
            <div className="mt-8">
              <ButtonLink href="/about#journey" variant="secondary">
                Full company story
              </ButtonLink>
            </div>
          </div>
          <Timeline compact />
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Locations"
            title="Close to production. Connected to expertise."
            description="HYA Tech’s operating and partnership network supports manufacturing, customer delivery, and know-how exchange."
            align="center"
          />
          <div className="home-location-track mt-12">
            {locations.map((location) => (
              <article key={location.city} className="home-location-card soft-card">
                <div className="flex items-center justify-between gap-4">
                  <MapPin aria-hidden="true" className="text-blue" size={22} />
                  <span className="rounded-full bg-lightblue px-3 py-1 text-xs font-semibold text-blue">
                    {location.status}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy">
                  {location.city}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue">{location.role}</p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {location.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Certified standards"
            title="Quality systems built for dependable delivery."
            description="Internationally recognized management standards guide quality, environmental responsibility, medical-device manufacturing, and workplace safety."
            align="center"
            invert
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((certification, index) => (
              <Reveal key={certification.title} delay={index * 0.04}>
                <article className="group h-full rounded-[24px] border border-white/10 bg-white/[0.055] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.08]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-white p-5 shadow-[0_14px_35px_rgba(0,0,0,0.16)]">
                    <Image
                      src={certification.image}
                      alt={certification.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      className="object-contain p-5 transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-5">
                    <h3 className="text-lg font-semibold text-white">
                      {certification.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {certification.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="site-container">
          <div className="grid overflow-hidden rounded-[30px] border border-border bg-lightblue lg:grid-cols-[1fr_0.78fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <span className="eyebrow">
                <Sparkles aria-hidden="true" size={13} />
                Careers
              </span>
              <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-navy sm:text-5xl">
                Join India&apos;s precision manufacturing journey.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-muted">
                Be part of a team building practical engineering capability
                across design, machining, quality, assembly, and automation.
              </p>
              <div className="mt-8">
                <ButtonLink href="/careers">Explore careers</ButtonLink>
              </div>
            </div>
            <div className="relative min-h-[300px] lg:min-h-full">
              <Image
                src="/images/team.jpg"
                alt="Manufacturing team collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
