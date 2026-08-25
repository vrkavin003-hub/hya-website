"use client";

import {
  Box,
  BriefcaseBusiness,
  Cog,
  Globe2,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { useState, useEffect, useRef } from "react";

const homeMetricsRaw = [
  { raw: "20+", label: "Years of Industry Experience", icon: Trophy },
  { raw: "50,000+", label: "Fixtures Supplied", icon: Box },
  { raw: "5+", label: "Industry Verticals Served", icon: Globe2 },
  { raw: "5000+", label: "Projects Delivered", icon: Users },
];

// Parse target numeric values from raw strings (remove + and commas)
const targetValues = homeMetricsRaw.map((m) =>
  parseInt(m.raw.replace("+", "").replace(/,/g, ""), 10),
);

// Display metrics with icons and suffixes preserved
const displayMetrics = homeMetricsRaw.map((m) => ({
  raw: m.raw,
  label: m.label,
  icon: m.icon,
  suffix: m.raw.includes("+") ? "+" : "",
}));

export function HomeHero() {
  return (
    <PageHero
      eyebrow="Engineering excellence"
      title="Precision Engineering"
      accent="Powerful Solutions"
      subtitle="Precision Beyond Limits - Engineering the Future of Manufacturing"
      description="Delivering precision and excellence since 2023."
      image="/images/heroes/home-hero-cnc.png"
      imageAlt="CNC milling equipment machining a precision HYA TECH component"
      imagePosition="center center"
      variant="home"
      descriptionAtBottom
      primaryAction={{ label: "Our Services", href: "/capabilities" }}
      secondaryAction={{ label: "Facility Overview", href: "/projects" }}
      highlights={[
        {
          title: "Quality Assured",
          description: "International standards & proven process",
          icon: ShieldCheck,
        },
        {
          title: "Advanced Technology",
          description: "Cutting-edge machines & innovation",
          icon: Cog,
        },
        {
          title: "Industry Expertise",
          description: "Serving diverse industries with excellence",
          icon: BriefcaseBusiness,
        },
      ]}
      highlightsCta={{ label: "Get a Quote | Talk to an Engineer", href: "/contact" }}
    />
  );
}

export function HomeStats() {
  const hasAnimated = useRef(false);
  const [displayValues, setDisplayValues] = useState(
    targetValues.map(() => 0)
  );
  const reducedMotion = typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // IntersectionObserver to detect when stats section enters viewport
  useEffect(() => {
    if (hasAnimated.current) return;

    const section = document.querySelector(".home-stats-section");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Start counting animation for each metric
          targetValues.forEach((target, index) => {
            const suffix = displayMetrics[index].suffix;

            const wrapper = document.querySelector(
              `.stats-item[data-index="${index}"]`
            );
            if (!wrapper) return;

            const startTime = performance.now();
            const duration = 1800; // 1.8 seconds

            const animate = (timestamp: number) => {
              const elapsed = timestamp - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // eased cubic: 1 - (1 - progress)^3
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(target * eased);

              setDisplayValues((prev) => {
                const arr = [...prev];
                arr[index] = current;
                return arr;
              });

              if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
              } else {
                // Ensure final value is displayed
                setDisplayValues((prev) => {
                  const arr = [...prev];
                  arr[index] = target;
                  return arr;
                });
              }
            };

            let animationFrame;
            animate(performance.now());
          });

          observer.disconnect();
        }
      },
      { rootMargin: "-80px", threshold: 0.1 }
    );

    observer.observe(section);
  }, [hasAnimated.current]);

  return (
    <section className="home-stats-section" aria-label="Company statistics">
      <div className="site-container home-stats-container">
        <Reveal>
          <div className="home-stats-panel">
            {displayMetrics.map((metric, index) => {
              const Icon = metric.icon;
              const target = targetValues[index];
              const suffix = metric.suffix;

              return (
                <div
                  key={metric.label}
                  className="stats-item"
                  data-index={index}
                  role="article"
                  aria-label={`${metric.label}: ${displayValues[index]} ${suffix}`}
                >
                  <span className="stats-icon">
                    <Icon aria-hidden="true" size={28} strokeWidth={2} />
                  </span>
                  <span className="stats-value">
                    {displayValues[index]}{" "}{suffix}
                  </span>
                  <span className="stats-label">
                    <small>{metric.label}</small>
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}