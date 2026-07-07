import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, ShieldCheck, UsersRound } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { LocationGrid } from "@/components/location-grid";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";
import { SectionHeading } from "@/components/ui";
import { missionVision, projects, values } from "@/data/site";
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

      <section className="pb-section">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <span className="eyebrow">Who we are</span>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-navy sm:text-5xl">
                Engineering excellence cultivated in India.
              </h2>
              <div className="mt-6 space-y-5 leading-8 text-muted">
                <p>
                  HYA Tech is committed to becoming a leading industry player by
                  expanding through deep collaboration with customers. Years of
                  practical manufacturing experience are reinforced by continued
                  investment in technology and talent.
                </p>
                <p>
                  The company was founded with a clear mission: build world-class
                  engineering excellence in precision manufacturing for the
                  electronics industry and deliver innovation, quality, and
                  reliability.
                </p>
                <p>
                  HYA Tech believes manufacturing excellence can—and should—be
                  cultivated within India using local talent, resources, and
                  values while staying connected to global know-how.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-alt shadow-[0_24px_65px_rgba(11,31,58,0.11)]">
              <Image
                src="/images/intelligentmanufacturing.jpg"
                alt="Advanced manufacturing equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our foundation"
            title="Mission, vision, and the way we work."
            description="Ambition matters most when it is supported by practical capability, responsible behavior, and transparent partnerships."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {missionVision.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="soft-card group h-full">
                    <div className="icon-tile">
                      <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-8 text-muted">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our values"
            title="Standards that shape everyday decisions."
            description="The values published by HYA Tech have been reorganized into a clearer operating framework."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={(index % 3) * 0.04}>
                  <article className="soft-card group h-full">
                    <div className="icon-tile">
                      <Icon aria-hidden="true" size={22} />
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

      <section id="journey" className="section-alt scroll-mt-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Our story"
              title="A journey toward engineering independence."
              description="Every milestone represents an expansion of practical capability—from engineering support to manufacturing, tooling, automation, and international partnerships."
            />
          </div>
          <Timeline />
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Operating network"
            title="A clear role for every location."
            description="The location descriptions below follow the status stated on the source website and avoid implying unverified legal entities."
            align="center"
          />
          <div className="mt-12">
            <LocationGrid />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
