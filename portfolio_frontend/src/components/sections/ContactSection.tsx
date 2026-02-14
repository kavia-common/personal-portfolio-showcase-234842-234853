import type { JSX } from "react";

export default function ContactSection(): JSX.Element {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Send a note and I’ll get back to you. This form uses a mailto action
          to remain static-export friendly.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form
              className="card p-6"
              action="mailto:hello@example.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-sm font-semibold text-[var(--primary)]">
                    Name
                  </span>
                  <input
                    className="h-11 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 text-sm text-[var(--text)]"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className="grid gap-1">
                  <span className="text-sm font-semibold text-[var(--primary)]">
                    Email
                  </span>
                  <input
                    className="h-11 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 text-sm text-[var(--text)]"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="mt-4 grid gap-1">
                <span className="text-sm font-semibold text-[var(--primary)]">
                  Message
                </span>
                <textarea
                  className="min-h-32 resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm text-[var(--text)]"
                  name="message"
                  placeholder="Tell me about your project..."
                />
              </label>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--secondary)] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  Send message
                </button>
                <a
                  href="mailto:hello@example.com"
                  className="text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline"
                >
                  Or email directly
                </a>
              </div>

              <p className="mt-4 text-xs text-[var(--muted)]">
                Tip: On some devices, mailto forms may open your default mail
                client with the form values.
              </p>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4">
              <div className="card p-6">
                <p className="text-sm font-semibold text-[var(--primary)]">
                  Email
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  hello@example.com
                </p>
              </div>

              <div className="card p-6">
                <p className="text-sm font-semibold text-[var(--primary)]">
                  Location
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Based anywhere, working globally
                </p>
              </div>

              <div className="card p-6">
                <p className="text-sm font-semibold text-[var(--primary)]">
                  Social
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--primary)] hover:bg-[rgba(31,41,55,0.04)]"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                  <a
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--primary)] hover:bg-[rgba(31,41,55,0.04)]"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
