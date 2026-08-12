import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilityGroups } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading, ButtonLink } from "@/components/ui";

export function CapabilitiesPreview() {
  return (
    <section className="section-alt">
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Core capabilities"
            title="One partner across the manufacturing lifecycle"
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
  );
}
