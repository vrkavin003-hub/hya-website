import { MoveRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

const deliverySteps = [
  {
    number: "01",
    title: "Concept",
    description:
      "Understanding your requirements and transforming ideas into practical manufacturing solutions with a clear project vision.",
  },
  {
    number: "02",
    title: "Design & Simulation",
    description:
      "Creating optimized engineering designs and validating performance through advanced simulation to ensure accuracy before production.",
  },
  {
    number: "03",
    title: "Prototype & Validation",
    description:
      "Developing precision prototypes and conducting rigorous testing to verify quality, functionality, and production readiness.",
  },
  {
    number: "04",
    title: "Batch / Mass Production",
    description:
      "Delivering consistent, high-quality manufacturing at scale with streamlined processes, strict quality control, and reliable turnaround times.",
  },
  {
    number: "05",
    title: "Installation & Support",
    description:
      "Providing seamless installation, technical assistance, and ongoing support to ensure long-term performance and customer satisfaction.",
  },
];

export function ProcessSteps() {
  return (
    <section className="section bg-navy text-white">
      <div className="site-container">
        <SectionHeading
          eyebrow="End-to-End Delivery"
          title="End-to-End Delivery"
          description="From concept to mass production, your one-step precision partner – HYATECH."
          invert
        />
        <ol className="mt-10 grid gap-3 lg:grid-cols-5">
          {deliverySteps.map((step, index) => (
            <li
              key={step.number}
              className="relative rounded-[22px] border border-white/10 bg-white/[0.045] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-sky-300">{step.number}</span>
                {index < deliverySteps.length - 1 ? (
                  <MoveRight
                    aria-hidden="true"
                    className="hidden text-white/20 lg:block"
                    size={18}
                  />
                ) : null}
              </div>
              <h3 className="mt-6 text-base font-semibold">{step.title}</h3>
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
