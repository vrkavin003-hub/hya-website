"use client";

import { motion } from "framer-motion";
import { Monitor, Network, ShieldCheck, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui";

const features = [
  {
    icon: Monitor,
    title: "Modern Workstations",
    description:
      "Technology-ready workspaces designed for productive work.",
  },
  {
    icon: Network,
    title: "Connected Infrastructure",
    description:
      "Reliable digital connectivity supporting everyday operations.",
  },
  {
    icon: Users,
    title: "Collaboration Spaces",
    description:
      "Dedicated spaces that encourage teamwork and knowledge sharing.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Environment",
    description:
      "A professional environment designed with operational security in mind.",
  },
];

export function FacilityFeatures() {
  return (
    <section className="section-alt">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our environment"
          title="Built for Better Work"
          description="Our environment is designed to support productivity, collaboration, and technology-driven work."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                className="soft-card group h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="icon-tile">
                  <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
