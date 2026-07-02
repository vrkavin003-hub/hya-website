"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/data/site";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

export function ProjectGrid({ limit }: { limit?: number }) {
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
        <div className="mb-10 flex flex-wrap gap-2" aria-label="Project categories">
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <motion.article
            key={project.slug}
            className="group overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_12px_40px_rgba(11,31,58,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(11,31,58,0.10)]"
            initial={false}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-alt">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
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
          </motion.article>
        ))}
      </div>
    </>
  );
}
