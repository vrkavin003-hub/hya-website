"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/site";
import { ButtonLink, SectionHeading } from "@/components/ui";

const displayed = projects.slice(0, 6);

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="selected-work-card group"
    >
      <Link href={`/projects#${project.slug}`} className="block overflow-hidden rounded-[20px]">
        <div className="selected-work-image-wrapper">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="selected-work-image"
          />
          <div className="selected-work-overlay">
            <span className="selected-work-btn">
              View Project
              <ArrowRight size={16} strokeWidth={2} />
            </span>
          </div>
        </div>
        <div className="selected-work-info">
          <h3 className="selected-work-title">{project.title}</h3>
          <span className="selected-work-category">{project.category}</span>
        </div>
      </Link>
    </motion.div>
  );
}

export function SelectedWork() {
  return (
    <section className="section-compact">
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Manufacturing problems made tangible"
          />
          <ButtonLink href="/projects" variant="secondary">
            Explore projects
          </ButtonLink>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
