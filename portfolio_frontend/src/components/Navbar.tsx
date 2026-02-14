import type { JSX } from "react";
import Link from "next/link";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar(): JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(249,250,251,0.85)] backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Link href="#home" className="flex items-baseline gap-2 rounded-md">
          <span className="text-base font-semibold tracking-tight text-[var(--primary)]">
            Your Name
          </span>
          <span className="hidden text-sm text-[var(--muted)] sm:inline">
            Portfolio
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-1"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--primary)] hover:bg-[rgba(31,41,55,0.06)] focus-visible:bg-[rgba(31,41,55,0.06)]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-1 inline-flex items-center rounded-full bg-[var(--secondary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 focus-visible:opacity-90"
          >
            Let’s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
