"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FlaskConical,
  LifeBuoy,
  Lightbulb,
  PenTool,
  Rocket,
} from "lucide-react";
import { SectionHeading } from "@/components/ui";

const stages = [
  {
    icon: Lightbulb,
    title: "Idea",
    description: "Concepts take shape in an environment built for clear thinking.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Ideas become drawings, models, and engineering direction.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Designs are turned into manufactured parts and working systems.",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    description: "Work is validated against specification before it moves forward.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Solutions are delivered, installed, and made operational.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "Continued assistance keeps solutions working over time.",
  },
];

export function FacilityProcess() {
  return (
    <section className="pb-section">
      <div className="site-container">
        <SectionHeading
          eyebrow="How work moves"
          title="Technology at Work"
          description="Our environment supports every stage of turning an idea into a working solution."
        />

        <ol className="relative mt-14 lg:grid lg:grid-cols-6 lg:gap-6">
          <span
            className="absolute bottom-8 left-6 top-6 w-px bg-border lg:hidden"
            aria-hidden="true"
          />
          <span
            className="absolute left-[8.33%] right-[8.33%] top-6 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />

          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.li
                key={stage.title}
                className="relative flex gap-5 pb-10 last:pb-0 lg:block lg:pb-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-blue/20 bg-lightblue text-blue transition-colors duration-300 ease-in-out">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                </div>
                <div className="lg:mt-5 lg:flex lg:flex-col lg:items-center lg:text-center">
                  <span className="text-xs font-bold tracking-[0.14em] text-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-navy">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted lg:max-w-[22ch]">
                    {stage.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
