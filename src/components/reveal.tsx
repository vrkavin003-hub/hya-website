"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Reveal({
  children,
  delay = 0,
  variant = "fade-up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-fade" | "slide-up";
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, clearProps: "transform" });
      return;
    }

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const duration = variant === "scale-fade" || variant === "slide-up" ? 1.3 : 1.2;

    switch (variant) {
      case "fade-up":
        fromVars.y = 40;
        break;
      case "fade-down":
        fromVars.y = -40;
        break;
      case "fade-left":
        fromVars.x = -40;
        break;
      case "fade-right":
        fromVars.x = 40;
        break;
      case "scale-fade":
        fromVars.scale = 0.9;
        break;
      case "slide-up":
        fromVars.y = 40;
        break;
    }

    const ctx = gsap.context(() => {
      gsap.from(el, {
        ...fromVars,
        duration,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, [variant, delay]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
