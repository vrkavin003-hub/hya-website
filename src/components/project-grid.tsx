"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Box, CircuitBoard, Cog, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/data/site";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

const categoryIcons: Record<string, LucideIcon> = {
  Machining: Cog,
  Components: Box,
  Fixtures: Wrench,
  Automation: CircuitBoard,
};

export function ProjectGrid({ limit, gridClass, compact }: { limit?: number; gridClass?: string; compact?: boolean }) {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () =>
      (filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter)
      ).slice(0, limit ?? projects.length),
    [filter, limit],
  );

  return (
    <>
      {!limit ? (
        <div className="mb-10 flex flex-wrap gap-2 overflow-hidden" aria-label="Project categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                filter === category
                  ? "border-blue bg-blue text-white"
                  : "border-border bg-white text-slate-600 hover:border-blue/30 hover:text-blue"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className={gridClass ?? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"}>
        {filtered.map((project) => {
          const Icon = categoryIcons[project.category] ?? Cog;
          return (
            <motion.article
              key={project.slug}
              className={`group overflow-hidden rounded-[20px] transition-all duration-300 ${
                compact
                  ? "relative aspect-[3/4] bg-navy"
                  : "border border-border bg-white shadow-[0_12px_40px_rgba(11,31,58,0.05)] hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(11,31,58,0.10)]"
              }`}
              initial={false}
              whileHover={{ y: compact ? -4 : -4 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {compact ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-blue">
                    {project.category}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-base font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-lightblue via-alt to-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(22,119,184,0.16),transparent_62%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <Icon
                      aria-hidden="true"
                      size={72}
                      strokeWidth={1.3}
                      className="relative text-blue transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-lightblue px-3 py-1 text-xs font-semibold text-blue">
                        {project.category}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="text-slate-400 transition-colors group-hover:text-blue"
                        size={19}
                      />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-navy">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted">{project.description}</p>
                  </div>
                </>
              )}
            </motion.article>
          );
        })}
      </div>
    </>
  );
}
