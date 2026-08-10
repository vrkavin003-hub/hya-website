import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function AboutWhoWeAre() {
  return (
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
                HYA TECH is committed to becoming a leading industry player by
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
  );
}
