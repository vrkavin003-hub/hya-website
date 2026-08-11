"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui";

const facilitySpaces = [
  {
    src: "/images/factory-team.jpg",
    alt: "Modern workstations inside the HYA TECH facility",
    title: "Modern Workspace",
    description:
      "Technology-ready workspaces designed to support focused, productive engineering work.",
  },
  {
    src: "/images/intelligentmanufacturing.jpg",
    alt: "Technology environment with intelligent manufacturing equipment",
    title: "Technology Environment",
    description:
      "Machining and automation technology arranged to support precision work from start to finish.",
  },
  {
    src: "/images/team.jpg",
    alt: "Collaboration space where HYA TECH teams work together",
    title: "Collaboration Space",
    description:
      "Dedicated areas where engineering, manufacturing, and support teams share knowledge.",
  },
];

export function FacilityTour() {
  const [selectedSpace, setSelectedSpace] = useState<(typeof facilitySpaces)[number] | null>(
    null,
  );
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedCardRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = () => {
    setSelectedSpace(null);
  };

  useEffect(() => {
    if (!selectedSpace) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        document.querySelectorAll<HTMLElement>(
          '[data-facility-tour-modal] button, [data-facility-tour-modal] [tabindex]:not([tabindex="-1"])',
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
      lastFocusedCardRef.current?.focus();
    };
  }, [selectedSpace]);

  return (
    <section id="facility-tour" className="pb-section scroll-mt-32">
      <div className="site-container">
        <SectionHeading
          eyebrow="Facility tour"
          title="Inside HYA TECH"
          description="Explore the environment where ideas, technology, and collaboration come together."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilitySpaces.map((space, index) => (
            <motion.div
              key={space.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-border bg-alt shadow-[0_12px_35px_rgba(11,31,58,0.05)] transition-all duration-300 ease-in-out hover:z-10 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(11,31,58,0.12)]"
                aria-label={`Preview facility image: ${space.title}`}
                onClick={(event) => {
                  lastFocusedCardRef.current = event.currentTarget;
                  setSelectedSpace(space);
                }}
              >
                <Image
                  src={space.src}
                  alt={space.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                <div className="absolute inset-0 bg-blue/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute right-4 top-4 inline-flex size-10 translate-y-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Maximize2 aria-hidden="true" size={17} strokeWidth={2} />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <h3 className="text-lg font-semibold text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                    {space.title}
                  </h3>
                  <p className="mt-1.5 max-w-[36ch] text-sm leading-6 text-white/80 opacity-90 transition-all duration-300 group-hover:text-white group-hover:opacity-100">
                    {space.description}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSpace ? (
          <motion.div
            data-facility-tour-modal
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Facility image preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            onClick={closeModal}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-300 ease-in-out hover:bg-white/20 sm:right-6 sm:top-6"
              aria-label="Close facility image preview"
              onClick={closeModal}
            >
              <X aria-hidden="true" size={21} />
            </button>

            <motion.div
              className="relative max-h-[90vh] w-[90vw]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedSpace.src}
                alt={selectedSpace.alt}
                width={1600}
                height={1067}
                sizes="90vw"
                className="mx-auto max-h-[90vh] w-auto max-w-[90vw] rounded-[18px] object-contain shadow-[0_28px_80px_rgba(0,0,0,0.4)]"
                priority
                unoptimized
              />
              <div className="mx-auto mt-4 flex max-w-[90vw] items-center justify-between gap-4 rounded-[16px] bg-white/10 px-5 py-3.5 backdrop-blur-sm">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {selectedSpace.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-white/70">
                    {selectedSpace.description}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white/85">
                  HYA TECH Facility
                </span>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
