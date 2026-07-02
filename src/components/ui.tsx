import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `button button-${variant} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${align === "center" ? "text-center mx-auto items-center" : ""}`}
    >
      <span className={`eyebrow ${invert ? "eyebrow-invert" : ""}`}>
        {eyebrow}
      </span>
      <h2 className={invert ? "text-white" : "text-navy"}>{title}</h2>
      {description ? (
        <p className={invert ? "text-white/70" : "text-muted"}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
};

export function IconCard({
  icon: Icon,
  title,
  description,
  children,
}: IconCardProps) {
  return (
    <article className="soft-card group h-full">
      <div className="icon-tile">
        <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
      {children}
    </article>
  );
}
