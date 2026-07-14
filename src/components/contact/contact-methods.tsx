import { Clock3, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactMethods() {
  const contactMethods = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phoneHref}`,
      icon: Phone,
    },
    {
      label: "Business hours",
      value: siteConfig.hours,
      icon: Clock3,
    },
  ];

  return (
    <section className="pb-section">
      <div className="site-container">
        <div className="grid gap-5 md:grid-cols-3">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const content = (
              <>
                <div className="icon-tile">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <div className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-blue">
                  {method.label}
                </div>
                <div className="mt-2 text-lg font-semibold text-navy">
                  {method.value}
                </div>
              </>
            );

            return method.href ? (
              <a
                key={method.label}
                className="soft-card group block"
                href={method.href}
              >
                {content}
              </a>
            ) : (
              <div key={method.label} className="soft-card group">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
