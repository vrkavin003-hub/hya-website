import { MoveRight } from "lucide-react";
import { processSteps } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function ProcessSteps() {
  return (
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
  );
}
