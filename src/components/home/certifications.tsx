import Image from "next/image";
import { certifications } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function Certifications() {
  return (
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
  );
}
