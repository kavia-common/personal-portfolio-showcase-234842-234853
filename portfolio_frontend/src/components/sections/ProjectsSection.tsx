import type { JSX } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "Design System Starter",
    description:
      "A reusable component library with tokens, accessibility patterns, and documentation.",
    tags: ["React", "TypeScript", "A11y"],
    href: "https://example.com",
  },
  {
    title: "Static Portfolio",
    description:
      "A clean, single-page portfolio optimized for static export and fast load times.",
    tags: ["Next.js", "Tailwind", "SEO"],
    href: "https://example.com",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Responsive charts and data tables with careful performance tuning and UX refinements.",
    tags: ["UI", "Performance", "Charts"],
    href: "https://example.com",
  },
];

export default function ProjectsSection(): JSX.Element {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of work that highlights UI craft, performance, and
          accessibility.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="card p-6">
              <header>
                <h3 className="text-lg font-semibold text-[var(--primary)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {p.description}
                </p>
              </header>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
                {p.tags.map((t) => (
                  <li key={t} className="badge">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--primary)] hover:bg-[rgba(31,41,55,0.04)]"
                  >
                    View details
                  </a>
                ) : (
                  <span className="text-sm text-[var(--muted)]">
                    Details coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
