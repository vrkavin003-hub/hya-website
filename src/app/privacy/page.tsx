import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy information for the HYA TECH corporate website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="site-container max-w-3xl pb-24 pt-36 sm:pt-44">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-navy sm:text-6xl">
        Privacy policy
      </h1>
      <p className="mt-5 text-sm text-muted">Last updated: June 20, 2026</p>
      <div className="mt-10 space-y-8 leading-8 text-muted">
        <section>
          <h2 className="text-2xl font-semibold text-navy">Information handling</h2>
          <p className="mt-3">
            This website does not store contact or career-form submissions. The
            forms validate information and open a prepared email draft in the
            visitor’s email application.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy">Technical data</h2>
          <p className="mt-3">
            Hosting and analytics providers may process ordinary technical data
            such as IP address, browser type, referring page, and performance
            information. Analytics should only be enabled after a verified
            provider and consent configuration are supplied.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy">Contact</h2>
          <p className="mt-3">
            Questions about privacy can be sent to{" "}
            <a className="font-semibold text-blue" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
