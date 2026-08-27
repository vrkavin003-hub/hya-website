"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveredRef = useRef(false);
  const reducedMotionRef = useRef(false);

  const current = leadershipPerspectives[activeIndex];
  const paragraphs = current.content.split("\n\n");

  const clearAutoplay = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    clearAutoplay();

    if (reducedMotionRef.current || isHoveredRef.current) {
      return;
    }

    timerRef.current = setTimeout(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % leadershipPerspectives.length;
      });
    }, AUTOPLAY_INTERVAL);
  }, [clearAutoplay]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;

      if (event.matches) {
        clearAutoplay();
      } else {
        startAutoplay();
      }
    };

    reducedMotionRef.current = mediaQuery.matches;
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [clearAutoplay, startAutoplay]);

  useEffect(() => {
    startAutoplay();

    return () => {
      clearAutoplay();
    };
  }, [activeIndex, startAutoplay, clearAutoplay]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      clearAutoplay();
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      startAutoplay();
    };

    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [clearAutoplay, startAutoplay]);

  useEffect(() => {
    const section = sectionRef.current;

    if (
      !section ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const quoteMark = section.querySelector(".leadership-quote-mark");
      const revealItems = gsap.utils.toArray<HTMLElement>(".leadership-reveal", section);

      gsap.set(quoteMark, { autoAlpha: 0, scale: 0.96 });
      gsap.set(revealItems, { autoAlpha: 0, y: 18 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        })
        .to(quoteMark, { autoAlpha: 1, scale: 1, duration: 0.6 })
        .to(
          revealItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.58,
            stagger: 0.11,
          },
          "-=0.32",
        );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleDotClick = useCallback(
    (index: number) => {
      setActiveIndex(index);
      clearAutoplay();

      if (!reducedMotionRef.current && !isHoveredRef.current) {
        timerRef.current = setTimeout(() => {
          setActiveIndex((currentIndex) => {
            return (currentIndex + 1) % leadershipPerspectives.length;
          });
        }, AUTOPLAY_INTERVAL);
      }
    },
    [clearAutoplay],
  );

  return (
    <section
      ref={sectionRef}
      className="leadership-perspectives section overflow-hidden"
      aria-label="Leadership Perspectives"
    >
      <div className="site-container">
        <div className="relative mx-auto max-w-5xl py-4 text-center">
          <span
            aria-hidden="true"
            className="leadership-quote-mark pointer-events-none absolute -left-4 -top-8 text-[9rem] font-semibold leading-none text-blue/10 sm:-left-10 sm:text-[13rem]"
          >
            “
          </span>

          <div className="relative">
            <span className="leadership-reveal text-xs font-bold uppercase tracking-[0.24em] text-blue">
              Leadership Perspectives
            </span>

            <h2
              key={`${current.id}-title`}
              className="leadership-reveal mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-navy sm:text-5xl lg:text-6xl"
            >
              {current.title}
            </h2>

            <div
              key={`${current.id}-content`}
              className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted sm:text-xl sm:leading-9"
            >
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="leadership-reveal">
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              key={`${current.id}-identity`}
              className="leadership-reveal mt-9 text-navy"
            >
              <p className="text-lg font-semibold">— {current.name}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                {current.role}
              </p>
            </div>

            <div className="leadership-reveal mt-8 flex justify-center gap-2">
              {leadershipPerspectives.map((perspective, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={perspective.id}
                    type="button"
                    aria-label={`Show ${perspective.name}'s perspective`}
                    aria-current={isActive ? "step" : undefined}
                    className={`size-3 rounded-full border transition-all duration-200 ${
                      isActive
                        ? "border-blue bg-blue"
                        : "border-border bg-white hover:border-blue/50"
                    }`}
                    onClick={() => handleDotClick(index)}
                  >
                    <span className="sr-only">
                      Director {index + 1}: {perspective.name}
                    </span>
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
