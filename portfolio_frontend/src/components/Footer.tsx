import type { JSX } from "react";

const links = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-page py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  className="text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline"
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    l.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
