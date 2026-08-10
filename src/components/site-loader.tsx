"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteLoader() {
  const pathname = usePathname();

  return <LoaderInstance key={pathname} />;
}

function LoaderInstance() {
  const [leaving, setLeaving] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const visibleDuration = reducedMotion ? 150 : 1650;
    const fadeDuration = reducedMotion ? 150 : 420;
    const exitTimer = window.setTimeout(
      () => setLeaving(true),
      visibleDuration,
    );
    const removeTimer = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      setRemoved(true);
    }, visibleDuration + fadeDuration);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`site-loader${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading HYA TECH website"
    >
      <div className="site-loader-content">
        <div className="site-loader-mark" aria-hidden="true">
          <Image
            src="/images/hya-loader-logo.png"
            alt=""
            width={142}
            height={125}
            priority
            className="site-loader-logo site-loader-logo-base"
          />
          <div className="site-loader-logo-reveal">
            <Image
              src="/images/hya-loader-logo.png"
              alt=""
              width={142}
              height={125}
              priority
              className="site-loader-logo"
            />
          </div>
          <span className="site-loader-laser" />
        </div>
        <p className="site-loader-label">Precision in motion</p>
        <span className="site-loader-progress" aria-hidden="true" />
      </div>
    </div>
  );
}
