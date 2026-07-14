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
  );
}
