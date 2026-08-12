"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useEffect, useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE } },
};

type ProjectShowcaseProps = {
  project: {
    slug: string;
    category: string;
    title: string;
    showcaseTitle: string;
    subtitle: string;
    overview: string;
    capabilities: string[];
  };
  imageSrc: string;
  onClose: () => void;
};

export function ProjectShowcase({ project, imageSrc, onClose }: ProjectShowcaseProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        document.querySelectorAll<HTMLElement>(
          '[data-project-showcase] button, [data-project-showcase] [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      lastFocusedRef.current?.focus();
    };
  }, [onClose]);

  const paragraphs = project.overview.split("\n\n").filter(Boolean);

  return (
    <motion.div
      data-project-showcase
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.showcaseTitle} project overview`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex h-[100dvh] w-full flex-col bg-white shadow-[0_40px_120px_rgba(7,26,47,0.4)] sm:h-auto sm:max-h-[88vh] sm:max-w-4xl sm:rounded-[24px] sm:border sm:border-border"
        initial={{ opacity: 0, y: 28, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.985 }}
        transition={{ duration: 0.36, ease: EASE }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label={`Close ${project.showcaseTitle} details`}
          className="absolute right-4 top-4 z-30 inline-flex size-11 items-center justify-center rounded-full border border-border bg-white/95 text-navy shadow-[0_10px_28px_rgba(11,31,58,0.2)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue/30 hover:text-blue"
          onClick={onClose}
        >
          <X aria-hidden="true" size={20} strokeWidth={2.2} />
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <motion.div
            className="relative aspect-[3/2] w-full overflow-hidden bg-navy"
            initial={{ opacity: 0.6, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Image
              src={imageSrc}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </motion.div>

          <motion.div
            className="p-6 sm:p-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex rounded-full bg-lightblue px-3 py-1 text-xs font-semibold text-blue"
            >
              {project.category}
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-navy sm:text-4xl"
            >
              {project.showcaseTitle}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-3 max-w-[46ch] text-base font-medium text-blue sm:text-lg"
            >
              {project.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-7 h-px w-full bg-border" />

            <motion.div variants={itemVariants} className="mt-7">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue">
                Overview
              </h3>
              <div className="mt-4 space-y-4">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-9">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue">
                Key capabilities
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-lightblue text-blue">
                      <Check aria-hidden="true" size={12} strokeWidth={2.6} />
                    </span>
                    <span className="text-sm leading-6 text-slate-600 sm:text-base">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
