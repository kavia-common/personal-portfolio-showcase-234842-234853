import type { JSX } from "react";

export default function HomeSection(): JSX.Element {
  return (
    <section id="home" className="section">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="badge">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full bg-[var(--success)]"
              />
              Available for work
            </span>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--primary)] sm:text-5xl">
              Building elegant, high-performance web experiences.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              I’m a frontend-focused developer who ships polished interfaces and
              thoughtful UX. Explore my projects, learn about my skills, and
              reach out if you’d like to collaborate.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--primary)] hover:bg-[rgba(31,41,55,0.04)]"
              >
                Contact me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind", "Accessibility"].map(
                (t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--primary)]">
                  Snapshot
                </p>
                <span className="text-xs font-medium text-[var(--secondary)]">
                  Ivory &amp; Gold
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-xl border border-[var(--border)] bg-[rgba(31,41,55,0.03)] p-4">
                  <p className="text-sm font-medium text-[var(--primary)]">
                    What I do
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    UI engineering, design systems, performance, and polish.
                  </p>
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[rgba(180,83,9,0.06)] p-4">
                  <p className="text-sm font-medium text-[var(--primary)]">
                    Current focus
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Building accessible component libraries and single-page
                    experiences.
                  </p>
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[rgba(15,118,110,0.06)] p-4">
                  <p className="text-sm font-medium text-[var(--primary)]">
                    Tools
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Next.js, React, TypeScript, Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
