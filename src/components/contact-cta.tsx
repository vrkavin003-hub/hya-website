import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { siteConfig } from "@/data/site";

export function ContactCta({
  title = "Have a project in mind?",
  description = "Let’s discuss how HYA TECH can bring precision, efficiency, and practical engineering support to your production.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="pb-section">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[32px] bg-navy px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-blue/25 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow eyebrow-invert">Start a conversation</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request consultation</ButtonLink>
              <a
                className="button border border-white/20 bg-white/5 text-white hover:bg-white/10"
                href={`mailto:${siteConfig.email}`}
              >
                <Mail aria-hidden="true" size={17} />
                <span className="flex flex-col items-start gap-0.5 leading-none">
                  <span>Email</span>
                  <span>HYA TECH</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
