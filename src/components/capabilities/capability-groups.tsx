import Image from "next/image";
import { Check } from "lucide-react";
import { capabilityGroups } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function CapabilityGroups() {
  return (
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
  );
}
