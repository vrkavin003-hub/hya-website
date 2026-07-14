"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div
        className="site-header mx-auto max-w-[1180px] rounded-[24px] border px-4 sm:px-5"
      >
        <div className="flex h-[68px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-lightblue text-blue"
                      : "text-slate-600 hover:bg-slate-50 hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden rounded-full bg-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-dark sm:inline-flex"
            >
              Request consultation
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-navy transition-colors hover:bg-alt lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={21} />}
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-navigation"
            className="border-t border-border py-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="grid gap-1">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      active
                        ? "bg-lightblue text-blue"
                        : "text-slate-700 hover:bg-alt"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-blue px-4 py-3 text-center text-sm font-semibold text-white sm:hidden"
              >
                Request consultation
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
