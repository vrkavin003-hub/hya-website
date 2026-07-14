import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui";

export function WhyHyaTech() {
  return (
    <section className="pb-section">
      <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Why HYA Tech"
            title="Work close to the problem—and the result."
            description="HYA Tech's work brings engineering, manufacturing, and automation together. That creates room to learn across disciplines and see ideas become operating solutions."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Hands-on industrial work",
            "Cross-functional collaboration",
            "Exposure to complete project lifecycles",
            "A culture of precision and responsibility",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-[18px] border border-border bg-alt p-5 text-sm font-semibold leading-6 text-slate-700"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-blue"
                size={19}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
