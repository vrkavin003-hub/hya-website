"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";

const environmentHighlights = [
  {
    number: "01",
    label: "Technology Ready",
    description: "Workspaces built for the way modern engineering teams work.",
  },
  {
    number: "02",
    label: "Collaborative",
    description: "Spaces designed to bring people and ideas together.",
  },
  {
    number: "03",
    label: "Innovation Focused",
    description: "An environment tuned for turning concepts into solutions.",
  },
];

export function FacilityMetrics() {
  return (
    <section className="section-alt">
      <div className="site-container">
        <SectionHeading
          eyebrow="The environment"
          title="Our Environment"
          description="A facility shaped around the work: precision, people, and technology in one place."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {environmentHighlights.map((item, index) => (
            <motion.div
              key={item.number}
              className="border-t-2 border-blue/25 pt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-4xl font-bold tracking-tight text-blue">
                {item.number}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-navy">
                {item.label}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
