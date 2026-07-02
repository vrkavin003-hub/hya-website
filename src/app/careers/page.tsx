import type { Metadata } from "next";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { CareerApplication } from "@/components/forms";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { careerRoles, values } from "@/data/site";
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

      <section className="pb-section">
        <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Why HYA Tech"
              title="Work close to the problem—and the result."
              description="HYA Tech’s work brings engineering, manufacturing, and automation together. That creates room to learn across disciplines and see ideas become operating solutions."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Hands-on industrial work",
              "Cross-functional collaboration",
              "Exposure to complete project lifecycles",
              "A culture of precision and responsibility",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[18px] border border-border bg-alt p-5 text-sm font-semibold leading-6 text-slate-700"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-blue"
                  size={19}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="site-container">
          <SectionHeading
            eyebrow="Career paths"
            title="Roles connected to real manufacturing outcomes."
            description="These positions are listed on the existing HYA Tech careers experience. Availability should be confirmed during application."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {careerRoles.map((role, index) => (
              <Reveal key={role.title} delay={(index % 3) * 0.04}>
                <article className="soft-card h-full">
                  <div className="flex size-9 items-center justify-center rounded-full bg-lightblue text-sm font-bold text-blue">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-navy">
                    {role.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">{role.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="section scroll-mt-32">
        <div className="site-container">
          <SectionHeading
            eyebrow="Culture"
            title="The same values guide the work and the workplace."
            description="Precision, innovation, teamwork, safety, responsibility, and customer focus are expected to show up in everyday decisions."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.slice(0, 6).map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="flex gap-4 rounded-[20px] border border-border p-5"
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-blue"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-navy">{value.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {value.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="apply" className="section-alt scroll-mt-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="eyebrow">Apply</span>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-navy sm:text-5xl">
              Start with a concise introduction.
            </h2>
            <p className="mt-6 leading-8 text-muted">
              Complete the form to prepare an email application. Attach your
              latest résumé before sending it to HYA Tech.
            </p>
            <a
              href="#application-form"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue lg:hidden"
            >
              Go to application <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>
          <div id="application-form" className="scroll-mt-32">
            <CareerApplication />
          </div>
        </div>
      </section>
    </>
  );
}
