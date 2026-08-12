"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui";

const cultureCards = [
  {
    src: "/images/careers/hands-on-industrial-work.png",
    alt: "Hands-on industrial work at HYA TECH",
  },
  {
    src: "/images/careers/cross-functional-collaboration.png",
    alt: "Cross-functional collaboration at HYA TECH",
  },
  {
    src: "/images/careers/project-lifecycles.png",
    alt: "Exposure to complete project lifecycles at HYA TECH",
  },
  {
    src: "/images/careers/precision-responsibility-culture.png",
    alt: "A culture of precision and responsibility at HYA TECH",
  },
];

export function WhyHyaTech() {
  const [selectedImage, setSelectedImage] = useState<(typeof cultureCards)[number] | null>(
    null,
  );
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedCardRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!selectedImage) {
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
          '[data-career-image-modal] button, [data-career-image-modal] [tabindex]:not([tabindex="-1"])',
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
  }, [selectedImage]);

  return (
    <section className="pb-section">
      <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Why HYA Tech"
            title="Grow yourself while growing through the industry"
            description="Work in the industry most fast paced industry vertical of EMS industry giants in an organization that values
            a prolific work-life culture and employee engaement."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {cultureCards.map((card) => (
            <button
              key={card.src}
              type="button"
              className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] border border-border bg-alt shadow-[0_12px_35px_rgba(11,31,58,0.045)] transition-all duration-300 ease-in-out hover:z-10 hover:scale-[1.06] hover:shadow-[0_22px_55px_rgba(11,31,58,0.12)]"
              aria-label={`Preview image: ${card.alt}`}
              onClick={(event) => {
                lastFocusedCardRef.current = event.currentTarget;
                setSelectedImage(card);
              }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            data-career-image-modal
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Career image preview"
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
              aria-label="Close image preview"
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
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1536}
                height={1024}
                sizes="90vw"
                className="mx-auto max-h-[90vh] w-auto max-w-[90vw] rounded-[18px] object-contain shadow-[0_28px_80px_rgba(0,0,0,0.4)]"
                priority
                unoptimized
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
