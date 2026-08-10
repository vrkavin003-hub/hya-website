import { ArrowDown } from "lucide-react";
import { CareerApplication } from "@/components/forms";

export function CareersApply() {
  return (
    <section id="apply" className="section-alt scroll-mt-32">
      <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <span className="eyebrow">Apply</span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-navy sm:text-5xl">
            Start with a concise introduction.
          </h2>
          <p className="mt-6 leading-8 text-muted">
            Complete the form to prepare an email application. Attach your
            latest résumé before sending it to HYA TECH.
          </p>
          <a
            href="#application-form"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue lg:hidden"
          >
            Go to application <ArrowDown aria-hidden="true" size={17} />
          </a>
        </div>
        <div id="application-form" className="scroll-mt-32">
          <CareerApplication />
        </div>
      </div>
    </section>
  );
}
