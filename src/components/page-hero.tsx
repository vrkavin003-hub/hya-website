import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  HeroImageRotator,
  type RotatingHeroImage,
} from "@/components/hero-image-rotator";
import { Reveal } from "@/components/reveal";

type HeroAction = {
  label: string;
  href: string;
};

type HeroHighlight = {
  title: string;
  description?: string;
  icon: LucideIcon;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  highlights?: HeroHighlight[];
  imagePosition?: string;
  rotatingImages?: RotatingHeroImage[];
  priority?: boolean;
  variant?: "page" | "home" | "about";
};

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt,
  primaryAction,
  secondaryAction,
  highlights = [],
  imagePosition = "center",
  rotatingImages = [],
  priority = true,
  variant = "page",
}: PageHeroProps) {
  const isHome = variant === "home";
  const isAbout = variant === "about";
  const isCinematic = isHome || isAbout;
  const transitionPath = isHome
    ? "M 652 -18 L 520 188 C 485 246 447 320 422 386 C 402 440 409 489 444 545 L 550 718"
    : isAbout
      ? "M 682 -18 L 588 154 C 548 228 518 318 503 404 C 489 493 514 590 584 718"
      : "M 598 -18 C 522 84 528 166 476 258 C 416 364 397 458 458 548 C 503 614 535 662 563 718";
  const transitionDepthPath = isHome
    ? "M 652 -18 L 520 188 C 485 246 447 320 422 386 C 402 440 409 489 444 545 L 550 718 L 410 718 L 322 584 C 288 532 286 474 312 414 C 352 321 417 202 528 -18 Z"
    : isAbout
      ? "M 682 -18 L 588 154 C 548 228 518 318 503 404 C 489 493 514 590 584 718 L 446 718 C 390 610 369 505 390 398 C 409 298 452 173 544 -18 Z"
      : "M 598 -18 C 522 84 528 166 476 258 C 416 364 397 458 458 548 C 503 614 535 662 563 718 L 407 718 C 386 635 318 558 346 452 C 378 332 404 229 470 112 C 496 66 512 20 520 -18 Z";
  const transitionFinePath = isHome
    ? "M 676 -18 L 542 198 C 509 256 473 326 450 390 C 432 441 439 482 472 535 L 575 718"
    : isAbout
      ? "M 704 -18 L 610 166 C 574 238 546 322 532 408 C 519 492 542 581 608 718"
      : "M 618 -18 C 547 88 551 176 500 267 C 447 362 426 455 483 538 C 527 603 559 657 585 718";

  return (
    <section className={`page-hero page-hero-${variant}`}>
      <div className={`site-container page-hero-container page-hero-${variant}-container`}>
        <Reveal>
          <div className={`page-hero-card page-hero-card-${variant}`}>
            <div className="page-hero-blueprint" aria-hidden="true" />
            <div className="page-hero-media-frame">
              <div className="page-hero-media">
                {rotatingImages.length ? (
                  <HeroImageRotator
                    images={rotatingImages}
                    imagePosition={imagePosition}
                  />
                ) : (
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    style={{ objectPosition: imagePosition }}
                    priority={priority}
                  />
                )}
                <div className="page-hero-media-overlay" />
                <div className="page-hero-media-glass" aria-hidden="true" />
              </div>
            </div>

            <div className="page-hero-transition" aria-hidden="true">
              <svg
                viewBox="0 0 1000 700"
                preserveAspectRatio="none"
                role="presentation"
              >
                <defs>
                  <linearGradient id={`hero-depth-${variant}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#020b18" stopOpacity="0.96" />
                    <stop offset="0.52" stopColor="#061d37" stopOpacity="0.78" />
                    <stop offset="1" stopColor="#0b3f70" stopOpacity="0.24" />
                  </linearGradient>
                  <filter id={`hero-glow-${variant}`} x="-80%" y="-20%" width="260%" height="140%">
                    <feGaussianBlur stdDeviation={isCinematic ? "2.5" : "3.2"} result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  className="page-hero-transition-depth"
                  d={transitionDepthPath}
                  fill={`url(#hero-depth-${variant})`}
                />
                <path
                  className="page-hero-transition-shadow"
                  d={transitionPath}
                />
                <path
                  className="page-hero-transition-glow"
                  d={transitionPath}
                  filter={`url(#hero-glow-${variant})`}
                />
                <path
                  className="page-hero-transition-fine"
                  d={transitionFinePath}
                />
              </svg>
            </div>

            <div className="page-hero-content">
              <span className="page-hero-eyebrow">
                <span aria-hidden="true" />
                {eyebrow}
              </span>
              <h1>
                {title}
                {accent ? (
                  <>
                    {" "}
                    <strong>{accent}</strong>
                  </>
                ) : null}
              </h1>
              <p>{description}</p>

              {primaryAction || secondaryAction ? (
                <div className="page-hero-actions">
                  {primaryAction ? (
                    <Link
                      href={primaryAction.href}
                      className="page-hero-button page-hero-button-primary"
                    >
                      {primaryAction.label}
                      <ArrowRight aria-hidden="true" size={18} />
                    </Link>
                  ) : null}
                  {secondaryAction ? (
                    <Link
                      href={secondaryAction.href}
                      className="page-hero-button page-hero-button-secondary"
                    >
                      {secondaryAction.label}
                    </Link>
                  ) : null}
                </div>
              ) : null}

              {highlights.length ? (
                <div className="page-hero-highlights">
                  {highlights.map((highlight) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={highlight.title} className="page-hero-highlight">
                        <span className="page-hero-highlight-icon">
                          <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                        </span>
                        <span>
                          <strong>{highlight.title}</strong>
                          {highlight.description ? (
                            <small>{highlight.description}</small>
                          ) : null}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
