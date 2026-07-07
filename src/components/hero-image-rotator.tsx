"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type RotatingHeroImage = {
  src: string;
  alt: string;
};

export function HeroImageRotator({
  images,
  imagePosition = "center",
}: {
  images: RotatingHeroImage[];
  imagePosition?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
    };

    const start = () => {
      stop();
      if (reducedMotion.matches || document.visibilityState !== "visible") return;
      timer = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % images.length);
      }, 3000);
    };

    const handleVisibility = () => start();
    reducedMotion.addEventListener("change", start);
    document.addEventListener("visibilitychange", handleVisibility);
    start();

    return () => {
      stop();
      reducedMotion.removeEventListener("change", start);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [images.length]);

  return (
    <div className="hero-image-rotator">
      {images.map((image, index) => {
        const active = index === activeIndex;
        return (
          <Image
            key={`${image.src}-${index}`}
            src={image.src}
            alt={active ? image.alt : ""}
            aria-hidden={!active}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className={`hero-rotator-image object-cover ${active ? "is-active" : ""}`}
            style={{ objectPosition: imagePosition }}
            priority={index === 0}
          />
        );
      })}
    </div>
  );
}
