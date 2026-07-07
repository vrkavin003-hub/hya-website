import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import {
  footerCapabilities,
  navigation,
  siteConfig,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.3fr]">
          <div>
            <Logo variant="footer" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              Precision manufacturing excellence since 2018. Delivering
              practical engineering, fixtures, automation, and production
              support for modern industry.
            </p>
          </div>

          <div>
            <h2 className="footer-title">Company</h2>
            <ul className="mt-5 space-y-3">
              {navigation.slice(1).map((item) => (
                <li key={item.href}>
                  <Link className="footer-link" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-title">Capabilities</h2>
            <ul className="mt-5 space-y-3">
              {footerCapabilities.map((item) => (
                <li key={item.href}>
                  <Link className="footer-link" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-title">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li>
                <a className="contact-link" href={`mailto:${siteConfig.email}`}>
                  <Mail aria-hidden="true" size={17} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a className="contact-link" href={`tel:${siteConfig.phoneHref}`}>
                  <Phone aria-hidden="true" size={17} />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  className="contact-link items-start"
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin aria-hidden="true" className="mt-0.5 shrink-0" size={17} />
                  {siteConfig.address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="site-container flex flex-col gap-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HYA Tech. All rights reserved.</p>
          <div className="flex gap-5">
            <Link className="footer-link" href="/privacy">
              Privacy policy
            </Link>
            <Link className="footer-link" href="/terms">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
