import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui";

export function DeliveryModel() {
  return (
    <section id="delivery-model" className="section scroll-mt-32 bg-navy text-white">
      <div className="site-container">
        <SectionHeading
          eyebrow="Delivery model"
          title="From first conversation to ongoing support."
          description="A simple, reviewable process keeps engineering decisions aligned with the intended production result."
          invert
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-[22px] border border-white/10 bg-white/[0.045] p-6"
            >
              <div className="text-sm font-bold text-sky-300">{step.number}</div>
              <h3 className="mt-7 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
