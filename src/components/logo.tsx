import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="HYA Tech home">
      <span className="logo-mark relative block size-11 overflow-hidden rounded-xl bg-white">
        <Image
          src="/images/hya-loader-logo.png"
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
          <span className="logo-tagline mt-1 block text-[8px] font-semibold uppercase tracking-[0.18em] text-blue">
            Precision beyond belief
          </span>
        </span>
      ) : null}
    </Link>
  );
}
