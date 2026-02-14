import type { JSX } from "react";

const skills = [
  { label: "UI Engineering", detail: "Reusable components & design systems" },
  { label: "Accessibility", detail: "Keyboard, screen reader, ARIA patterns" },
  { label: "Performance", detail: "Core Web Vitals, bundle and runtime tuning" },
  { label: "TypeScript", detail: "Maintainable, well-typed React codebases" },
  { label: "CSS Craft", detail: "Tailwind, tokens, and scalable styling" },
  { label: "Collaboration", detail: "Product-minded communication and feedback" },
];

export default function AboutSection(): JSX.Element {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          I build elegant interfaces with an emphasis on clarity, consistency,
          and human-friendly UX.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="card p-6">
              <h3 className="text-base font-semibold text-[var(--primary)]">
                A bit about me
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                I enjoy turning complex problems into calm, intuitive products.
                My work blends frontend engineering with a design-system mindset
                — consistent typography, accessible interactions, and thoughtful
                states.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Remote-friendly", "Detail-oriented", "Product-minded"].map(
                  (b) => (
                    <span key={b} className="badge">
                      {b}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.label} className="card p-6">
                  <p className="text-sm font-semibold text-[var(--primary)]">
                    {s.label}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
