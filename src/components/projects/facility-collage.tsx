"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";

const collageImages = [
  {
    src: "/images/inside hya.png",
    alt: "HYA TECH team collaborating in the facility",
    className: "absolute right-0 top-0 h-full w-[62%] z-[1]",
  },
  {
    src: "/images/place to collaborate1.png",
    alt: "HYA TECH team collaborating in the facility",
    className: "absolute left-0 top-0 w-[40%] h-[38%] z-[3]",
  },
  {
    src: "/images/place to collaborate2.png",
    alt: "HYA TECH team collaborating in the facility",
    className: "absolute bottom-0 left-0 w-[46%] h-[52%] z-[2]",
    priority: false,
  },
];

export function FacilityCollage() {
  return (
    <section className="pb-section">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="A place to collaborate"
              title="Collaboration Drives Innovation"
              description="A collaborative environment brings together ideas, skills, and technology to create meaningful solutions."
            />
            <motion.p
              className="mt-6 max-w-[520px] leading-7 text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Engineers, machinists, and automation specialists work side by side,
              so problems surface early and answers travel fast.
            </motion.p>
          </div>

          <motion.div
            className="relative mx-auto aspect-[4/3] w-full max-w-[560px]"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {collageImages.map((image, index) => (
              <div
                key={image.src}
                className={`group overflow-hidden rounded-[20px] border-[6px] border-white shadow-[0_16px_40px_rgba(11,31,58,0.16)] transition-transform duration-300 ease-in-out hover:z-[5] ${
                  index === 0 ? "" : "hover:-translate-y-1"
                } ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={image.priority}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
            ))}

            <div className="absolute bottom-4 right-4 z-[4] rounded-full bg-navy px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(11,31,58,0.28)]">
              Inside HYA TECH
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
