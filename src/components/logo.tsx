import Image from "next/image";
import Link from "next/link";

export function Logo({
  compact = false,
  variant = "navbar",
}: {
  compact?: boolean;
  variant?: "navbar" | "footer";
}) {
  return (
    <Link
      href="/"
      className={`brand-lockup brand-lockup-${variant} group flex items-center gap-3`}
      aria-label="HYA TECH home"
    >
      <span className="logo-mark relative block size-11 overflow-hidden rounded-xl bg-white">
        <Image
          src="/images/hya-logo.jpg"
          alt=""
          fill
          sizes="44px"
          className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </span>
      {!compact ? (
        <span className="logo-copy leading-none">
          <span className="block text-[15px] font-bold tracking-[0.12em] text-navy">
            HYA TECH
          </span>
          <span className="logo-tagline mt-1 block text-[8px] font-bold uppercase tracking-[0.18em] text-blue">
            <span>Precision </span>
            <span className="tagline-beyond">Beyond</span>
            <span> Belief</span>
          </span>
        </span>
      ) : null}
    </Link>
  );
}
