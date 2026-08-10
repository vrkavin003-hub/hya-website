import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "Website terms for the HYA TECH corporate website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="site-container max-w-3xl pb-24 pt-36 sm:pt-44">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-navy sm:text-6xl">
        Terms of service
      </h1>
      <p className="mt-5 text-sm text-muted">Last updated: June 20, 2026</p>
      <div className="mt-10 space-y-8 leading-8 text-muted">
        <section>
          <h2 className="text-2xl font-semibold text-navy">Website information</h2>
          <p className="mt-3">
            This website provides general information about HYA TECH’s
            capabilities. It does not constitute a binding technical proposal,
            quotation, certification, warranty, or delivery commitment.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy">Project enquiries</h2>
          <p className="mt-3">
            Commercial and technical commitments become valid only through
            written documents issued and accepted by authorized parties.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy">Intellectual property</h2>
          <p className="mt-3">
            HYA TECH branding and original website content may not be reused
            without permission. Third-party technology names remain the property
            of their respective owners.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-navy">Contact</h2>
          <p className="mt-3">
            Questions can be sent to{" "}
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
