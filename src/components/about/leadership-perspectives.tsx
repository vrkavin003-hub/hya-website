"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { SectionHeading } from "@/components/ui";
import { ArrowDown } from "lucide-react";

const leadershipPerspectives = [
  {
    id: "guru",
    title: "VISION & INNOVATION",
    name: "Guru",
    role: "Founder & Director, Hyatech",
    content:
      "At Hyatech, we believe that meaningful progress begins with the courage to think differently. Our journey has always been driven by a clear vision: to create solutions that combine innovation, quality, and real-world impact.\n\nWe continuously challenge ourselves to stay ahead of change, embrace new technologies, and deliver solutions that create lasting value. For us, success is about building a stronger, smarter, and more sustainable future.\n\nI am proud of the team behind Hyatech and the commitment we bring to everything we do. Together, we look forward to creating new possibilities, strengthening partnerships, and making a meaningful difference in the years ahead.",
  },
  {
    id: "jeyaraman",
    title: "TRUST & EXCELLENCE",
    name: "Jeyaraman",
    role: "Director, Hyatech",
    content:
      "At Hyatech, our greatest strength is the trust placed in us by our customers, partners, and people.\n\nOur approach is rooted in consistency, transparency, and the commitment to deliver excellence. We strive to maintain the highest standards of quality and professionalism. We believe that sustainable growth comes from responding responsibly, and constantly improving.\n\nAs we continue to grow, our values remain at the heart of every decision we make and creating partnerships across various verticals.",
  },
  {
    id: "sabareeshwaran",
    title: "PEOPLE & PURPOSE",
    name: "Sabareeshwaran S",
    role: "Director, Hyatech",
    content:
      "Every successful organization is built by people who believe in its purpose. At Hyatech, our people are the driving force behind our continued growth.\n\nWe encourage a culture where curiosity leads to innovation, collaboration leads to stronger solutions, and responsibility guides our actions. While technology and business are constantly changing, our commitment to creating genuine value remains unchanged.\n\nLooking ahead, our ambition is clear: to grow with purpose, serve our customers better, and contribute positively to the industries and communities we are part of.",
  },
];

const AUTOPLAY_INTERVAL = 5500;

export function LeadershipPerspectives() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const mouseLeaveRef = useRef(true);

  // Check for reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    mq.addEventListener("change", setReducedMotion);
    return () => mq.removeEventListener("change", setReducedMotion);
  }, []);

  // Start autoplay timer
  useEffect(() => {
    if (reducedMotion) return;

    function startTimer() {
      timerRef.current = setTimeout(() => {
        setActiveIndex((i) => (i + 1) % 3);
        if (!mouseLeaveRef.current) startTimer();
    }, AUTOPLAY_INTERVAL);

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    startTimer();
  }, [reducedMotion, activeIndex]);

  // Pause on hover (desktop)
  useEffect(() => {
    const handleMouseEnter = () => {
      mouseLeaveRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    };

    const handleMouseLeave = () => {
      mouseLeaveRef.current = true;
      startTimer();
    };

    const container = document.querySelector(
      ".leadership-perspectives-container",
    ) as HTMLElement;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      container?.removeEventListener("mouseenter", handleMouseEnter);
      container?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [reducedMotion]);

  // Restart timer on dot click
  const handleDotClick = useCallback(
    (index: number) => {
      setActiveIndex(index);
      // Restart timer from new position
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setActiveIndex((i) => (i + 1) % 3);
        if (!mouseLeaveRef.current) startTimer();
    }, AUTOPLAY_INTERVAL);
    },
    [activeIndex],
  );

  const current = leadershipPerspectives[activeIndex];
  const prevIndex = activeIndex === 0 ? 2 : activeIndex - 1;
  const nextIndex = (activeIndex + 1) % 3;

  const transitionClass = !reducedMotion
    ? "transition-opacity duration-500 ease-out"
    : "transition-none";

  const prevOpacity = !reducedMotion ? "opacity-100" : "opacity-0";
  const nextOpacity = !reducedMotion ? "opacity-0" : "opacity-100";

  return (
    <section
      className="leadership-perspectives section"
      aria-label="Leadership Perspectives"
    >
      <div className="site-container">
        <div className="leadership-perspectives-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr]">
          {/* LEFT: Our Story */}
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="A journey toward engineering independence"
              description="Every milestone represents an expansion of practical capability—from engineering support to manufacturing, tooling, automation, and international partnerships."
              align="center"
            />
            <div className="prose prose-sm mt-4">
              {/* Existing journey content would go here */}
              <p>
                Every milestone represents an expansion of practical capability—from
                engineering support to manufacturing, tooling, automation, and
                international partnerships.
              </p>
            </div>
          </div>

          {/* RIGHT: Leadership Perspectives */}
          <div className="space-y-6">
            {/* Heading */}
            <div className="pb-2">
              <span className="text-xs tracking-widest uppercase text-blue-600">
                LEADERSHIP PERSPECTIVES
              </span>
            </div>

            {/* Active perspective card */}
            <article
              className={`leadership-card rounded-lg border border-border bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-navy/10 ${transitionClass}`}
              style={{ opacity: activeIndex === 0 ? 1 : 0, transform: `translateY(${activeIndex === 0 ? 0 : -8}px)` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {current.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {current.content}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span>
                    — {current.name}
                  </span>
                  <span className="text-navy/70">{current.role}</span>
                </div>
              </div>
            </article>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2">
              {leadershipPerspectives.map((perspective, idx) => {
                const isActive = idx === activeIndex;
                const dotClass = isActive
                  ? "dot-active"
                  : "dot-inactive";
                const ariaLabel = `Show ${perspective.name}'s perspective`;

                return (
                  <button
                    key={perspective.id}
                    type="button"
                    aria-label={ariaLabel}
                    aria-current={isActive ? "step" : "false"}
                    className={`dot ${dotClass} transition-colors duration-200 hover:shadow-lg hover:shadow-navy/10`}
                    onClick={() => {
                      setActiveIndex(idx);
                      if (timerRef.current) clearTimeout(timerRef.current);
                      timerRef.current = setTimeout(startAutoplay, AUTOPLAY_INTERVAL);
                    }}
                  >
                    <span className="sr-only">Director {idx + 1}</span>
                    <svg
                      className={`w-5 h-5 fill-current ${
                        isActive ? "text-navy" : "text-slate-300"
                      }`}
                    >
                      <circle
                        cx="6"
                        cy="6"
                        r="5"
                        className={`${
                          isActive ? "ring-2 ring-navy" : "ring-note"
                        } transition-all duration-200`}
                      />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function startAutoplay() {
  timerRef.current = setTimeout(() => {
    setActiveIndex((i) => (i + 1) % 3);
    if (!mouseLeaveRef.current) startAutoplay();
  }, AUTOPLAY_INTERVAL);
}