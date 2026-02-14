import type { JSX } from "react";
import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <main className="min-h-dvh bg-[var(--background)] text-[var(--text)]">
      <div className="container-page pt-24 pb-16">
        <section className="card p-8" role="alert" aria-live="assertive">
          <h1 className="text-2xl font-semibold text-[var(--primary)]">
            404 — Page Not Found
          </h1>
          <p className="mt-2 text-[var(--muted)]">
            The page you’re looking for doesn’t exist.
          </p>

          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-[var(--primary)] px-4 py-2 text-white hover:opacity-90"
            >
              Go home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
