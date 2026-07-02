import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="site-container flex min-h-[75vh] flex-col items-center justify-center pb-20 pt-36 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-navy sm:text-6xl">
        This page is not on the production line.
      </h1>
      <p className="mt-5 max-w-lg leading-8 text-muted">
        The address may have changed, or the page may no longer be available.
      </p>
      <Link className="button button-primary mt-8" href="/">
        <ArrowLeft aria-hidden="true" size={17} />
        Return home
      </Link>
    </section>
  );
}
