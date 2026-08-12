import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function AboutPreview() {
  return (
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
            Engineering excellence - built through close collaboration
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted">
            <p>
              At HyaTech Pvt Ltd, we deliver world-class precision engineering solutions with manufacturing capabilities of up to ±5 Microns. Established in 2023, we specialize in CNC Machining, VMC Machining, Precision Turning, Reverse Engineering, Sheet Metal Fabrication, Fixtures, Jigs, and Industrial Consumables designed for modern manufacturing environments.
            </p>
            <p>
              With a mission to strengthen India's manufacturing ecosystem, we help leading companies localize critical production-line components traditionally sourced from overseas suppliers. Our solutions enable faster procurement, reduced costs, improved quality, and resilient supply chains.
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
  );
}
