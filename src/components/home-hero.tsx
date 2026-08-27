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
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

gsap.registerPlugin(ScrollTrigger);

const homeMetricsRaw = [
  { value: 20, suffix: "+", label: "Years of Industry Experience", icon: Trophy },
  { value: 50000, suffix: "+", label: "Fixtures Supplied", icon: Box },
  { value: 5, suffix: "+", label: "Industry Verticals Served", icon: Globe2 },
  { value: 5000, suffix: "+", label: "Projects Delivered", icon: Users },
];

const numberFormatter = new Intl.NumberFormat("en-IN");

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
  const sectionRef = useRef<HTMLElement>(null);
  const [displayValues, setDisplayValues] = useState(() =>
    homeMetricsRaw.map(() => 0),
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || hasAnimated.current) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const panel = section.querySelector(".home-stats-panel");
    const icons = gsap.utils.toArray<HTMLElement>(".stats-icon", section);
    const values = gsap.utils.toArray<HTMLElement>(".stats-value", section);
    const labels = gsap.utils.toArray<HTMLElement>(".stats-label", section);

    if (reduceMotion) {
      hasAnimated.current = true;
      requestAnimationFrame(() => {
        setDisplayValues(homeMetricsRaw.map((metric) => metric.value));
      });
      gsap.set([panel, icons, values, labels], { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(panel, { autoAlpha: 0, y: 18 });
      gsap.set(icons, { autoAlpha: 0, scale: 0.86 });
      gsap.set(values, { autoAlpha: 0, y: 8 });
      gsap.set(labels, { autoAlpha: 0, y: 10 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 82%",
        once: true,
        onEnter: () => {
          hasAnimated.current = true;

          const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

          timeline
            .to(panel, { autoAlpha: 1, y: 0, duration: 0.58 })
            .to(
              icons,
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.44,
                stagger: 0.09,
              },
              "-=0.25",
            )
            .to(
              values,
              { autoAlpha: 1, y: 0, duration: 0.34, stagger: 0.08 },
              "-=0.18",
            );

          homeMetricsRaw.forEach((metric, index) => {
            const counter = { value: 0 };

            timeline.to(
              counter,
              {
                value: metric.value,
                duration: metric.value > 1000 ? 1.45 : 1.2,
                ease: "power3.out",
                onUpdate() {
                  const currentValue = Math.round(counter.value);

                  setDisplayValues((previous) => {
                    if (previous[index] === currentValue) {
                      return previous;
                    }

                    const next = [...previous];
                    next[index] = currentValue;
                    return next;
                  });
                },
                onComplete() {
                  setDisplayValues((previous) => {
                    if (previous[index] === metric.value) {
                      return previous;
                    }

                    const next = [...previous];
                    next[index] = metric.value;
                    return next;
                  });
                },
              },
              index === 0 ? "-=0.18" : "<",
            );
          });

          timeline.to(
            labels,
            { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.08 },
            "-=0.7",
          );
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-stats-section"
      aria-label="Company statistics"
    >
      <div className="site-container home-stats-container">
        <Reveal>
          <div className="home-stats-panel">
            {homeMetricsRaw.map((metric, index) => {
              const Icon = metric.icon;
              const value = `${numberFormatter.format(displayValues[index])}${metric.suffix}`;

              return (
                <div key={metric.label} className="stats-item">
                  <span className="stats-icon" aria-hidden="true">
                    <Icon size={25} strokeWidth={1.8} />
                  </span>
                  <strong className="stats-value">{value}</strong>
                  <small className="stats-label">{metric.label}</small>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
