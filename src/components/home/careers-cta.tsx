import Image from "next/image";
import { Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui";

export function CareersCta() {
  return (
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
  );
}
