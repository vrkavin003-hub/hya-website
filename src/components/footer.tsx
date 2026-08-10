import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import {
  footerCapabilities,
  navigation,
  siteConfig,
} from "@/data/site";

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
                  className="contact-link"
                  href="https://linkedin.com/company/hya-tech?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit HYA TECH on LinkedIn"
                >
                  <LinkedinIcon size={17} />
                 Visit HYA TECH on LinkedIn
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
          <p>© {new Date().getFullYear()} HYA TECH. All rights reserved.</p>
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
