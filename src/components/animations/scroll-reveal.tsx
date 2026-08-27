"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium scroll reveal animation using GSAP + ScrollTrigger
 * 
 * @param element - The element to animate (Ref or selector)
 * @param options - Animation configuration
 */
export function useScrollReveal(
  element: RefObject<HTMLElement> | string,
  options: ScrollRevealOptions = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    distance = "40px",
    easing = "power3.out",
    opacity = true,
    y = true,
    rotate = false,
    scale = false,
    staggerChildren = 0,
    container = ".reveal-section",
    reset = false,
    mobileDistance = null,
    ...rest
  } = options;

  useEffect(() => {
    const target = typeof element === "string" 
      ? document.querySelector(element) 
      : element?.current;

    if (!target) return;

    const context = gsap.context(() => {
      // Skip if reduced motion is enabled
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (opacity) {
          gsap.set(target, { opacity: 1, y: 0, rotation: 0, scale: 1 });
        }
        return;
      }

      // Determine effective distance based on viewport
      const effectiveDistance = mobileDistance ?? distance;

      // Build animation config based on enabled properties
      const anim: any = {
        opacity: 0,
        y: distance,
        ease: easing,
        duration,
        delay,
        overwrite: "auto",
      };

      if (!opacity) anim.opacity = undefined;
      if (!y) anim.y = undefined;
      if (rotate) anim.rotation = 360;
      if (scale) anim.scale = scale ? 0 : 1;

      // Handle staggered children
      if (staggerChildren > 0 && target.querySelectorAll) {
        const children = target.querySelectorAll("*");
        if (children.length > 1) {
          gsap.from(children, {
            ...anim,
            stagger: staggerChildren,
            ease: easing,
            overwrite: "auto",
          });
          return;
        }
      }

      // Single element animation
      gsap.from(target, anim);
    });

    // Cleanup on unmount or re-run
    return () => {
      context.revert();
    };
  }, [element, delay, duration, distance, easing, opacity, y, rotate, scale, staggerChildren, reset]);

  return null;
}

/**
 * Options for scroll reveal animations
 */
export type ScrollRevealOptions = {
  delay?: number;
  duration?: number;
  distance?: string;
  easing?: string;
  opacity?: boolean;
  y?: boolean;
  x?: string;
  rotate?: boolean;
  scale?: number | boolean;
  staggerChildren?: number;
  container?: string;
  reset?: boolean;
  mobileDistance?: string;
  className?: string;
}

/**
 * Fade up animation (most common)
 * Element fades in while moving up from its original position
 */
export function useFadeUp(
  element: RefObject<HTMLElement> | string,
  options: { delay?: number; duration?: number; distance?: string } = {}
) {
  return useScrollReveal(element, {
    delay: options.delay,
    duration: options.duration ?? 0.8,
    distance: options.distance ?? "40px",
    opacity: true,
    y: true,
    ...options,
  });
}

/**
 * Fade down animation
 * Element fades in while moving down from its original position
 */
export function useFadeDown(
  element: RefObject<HTMLElement> | string,
  options: { delay?: number; duration?: number; distance?: string } = {}
) {
  return useScrollReveal(element, {
    delay: options.delay,
    duration: options.duration ?? 0.8,
    distance: options.distance ?? "40px",
    opacity: true,
    y: true,
    easing: "power3.in",
    ...options,
  });
}

/**
 * Fade left animation
 * Element fades in while moving left from its original position
 */
export function useFadeLeft(
  element: RefObject<HTMLElement> | string,
  options: { delay?: number; duration?: number; distance?: string } = {}
) {
  return useScrollReveal(element, {
    delay: options.delay,
    duration: options.duration ?? 0.8,
    distance: options.distance ?? "40px",
    opacity: true,
    y: false,
    x: "-40px",
    rotate: false,
    scale: false,
    ...options,
  });
}

/**
 * Fade right animation
 * Element fades in while moving right from its original position
 */
export function useFadeRight(
  element: RefObject<HTMLElement> | string,
  options: { delay?: number; duration?: number; distance?: string } = {}
) {
  return useScrollReveal(element, {
    delay: options.delay,
    duration: options.duration ?? 0.8,
    distance: options.distance ?? "40px",
    opacity: true,
    y: false,
    x: "40px",
    rotate: false,
    scale: false,
    ...options,
  });
}

/**
 * Scale fade animation
 * Element scales up from smaller size while fading in
 */
export function useScaleFade(
  element: RefObject<HTMLElement> | string,
  options: { delay?: number; duration?: number; scale?: number } = {}
) {
  const scaleVal = options.scale ?? 0.95;
  return useScrollReveal(element, {
    delay: options.delay,
    duration: options.duration ?? 0.8,
    opacity: true,
    scale: scaleVal,
    y: false,
    easing: "power3.out",
    ...options,
  });
}

/**
 * Image clip-path reveal animation
 * Image reveals from invisible to visible using clip-path
 */
export function useImageReveal(
  element: RefObject<HTMLElement> | string,
  options: { duration?: number; easing?: string; className?: string } = {}
) {
  const classNameVal = (options.className ?? "") + " image-reveal";
  return useScrollReveal(element, {
    duration: options.duration ?? 1,
    easing: options.easing ?? "power2.out",
    opacity: true,
    y: false,
    scale: false,
    rotate: false,
    className: classNameVal,
  });
}

/**
 * Stagger reveal for multiple children
 * Used for card groups, list items, etc.
 */
export function useStaggerReveal(
  element: RefObject<HTMLElement> | string,
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
    distance?: string;
    easing?: string;
  } = {}
) {
  return useScrollReveal(element, {
    delay: options.delay,
    duration: options.duration ?? 0.8,
    distance: options.distance ?? "40px",
    staggerChildren: options.stagger ?? 0.12,
    easing: options.easing ?? "power3.out",
    ...options,
  });
}

/**
 * Counter reveal - for statistics counter preservation
 * Preserves existing counter animation while adding reveal
 */
export function useCounterReveal(
  element: React.RefObject<HTMLDivElement>,
  finalValue: number,
  options: { duration?: number; suffix?: string; prefix?: string } = {}
) {
  const { duration = 1.8, suffix = "", prefix = "" } = options;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Skip if reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(finalValue);
      return;
    }

    const target = element.current;
    if (!target) return;

    const suffixEl = target.querySelector(".stat-suffix");
    const startValue = 0;

    // Animate the counter using gsap.to with onUpdate
    gsap.to(
      { value: startValue },
      {
        value: finalValue,
        ease: "power3.out",
        duration,
        onUpdate: (instance: any) => {
          const current = Math.round(instance.targets[0].value);
          if (suffixEl) {
            suffixEl.textContent = suffix;
          }
          // Update display
          ;(target as HTMLElement).textContent = `${prefix}${current}${suffix}`;
        },
      }
    );
  }, [element, finalValue, duration, suffix]);

  return <div ref={element} className="stat-counter">{displayValue}{suffix}</div>;
}

/**
 * Parallax subtle effect
 * Light parallax on scroll for hero/section backgrounds
 */
export function useParallax(
  element: RefObject<HTMLElement>,
  options: { factor?: number; intensity?: number } = {}
) {
  const factor = options.factor ?? 0.2;
  const intensity = options.intensity ?? 20;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = element.current;
    if (!target) return;

    let raf: number;
    let lastScroll = 0;

    const update = () => {
      const currentScroll = window.pageYOffset;
      const delta = currentScroll - lastScroll;
      lastScroll = currentScroll;

      const transform = `translateY(${delta * factor}px)`;
      target.style.transform = transform;

      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update, { passive: true } as EventListenerOptions);
    };
  }, [factor, intensity]);
}