"use client";

import type { JSX } from "react";
import { useId, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const CONTACT_EMAIL = "hello@example.com";

function isValidEmail(value: string): boolean {
  // Pragmatic email check (avoid overly strict regex)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  if (!isValidEmail(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please add a brief message (at least 10 characters).";
  }

  return errors;
}

export default function ContactSection(): JSX.Element {
  const formId = useId();

  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, true>>>(
    {},
  );

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio inquiry from ${values.name || "Website visitor"}`;
    const bodyLines = [
      `Name: ${values.name}`.trim(),
      `Email: ${values.email}`.trim(),
      "",
      values.message.trim(),
    ];
    const body = bodyLines.join("\n").trim();

    const url = new URL(`mailto:${CONTACT_EMAIL}`);
    if (subject) url.searchParams.set("subject", subject);
    if (body) url.searchParams.set("body", body);
    return url.toString();
  }, [values.email, values.message, values.name]);

  function onBlur(field: keyof FormState) {
    setTouched((t) => ({ ...t, [field]: true }));
    const next = validate(values);
    setErrors(next);
  }

  async function onCopyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setStatus("success");
      setStatusMessage("Email address copied to clipboard.");
      window.setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 2500);
    } catch {
      setStatus("error");
      setStatusMessage("Could not copy. Please copy the email manually.");
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });

    const hasErrors = Object.keys(nextErrors).length > 0;
    if (hasErrors) {
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields and try again.");
      return;
    }

    // Static-export-friendly "submit": open mail client prefilled.
    // We also show success UX regardless of mail client availability.
    window.location.href = mailtoHref;
    setStatus("success");
    setStatusMessage(
      "Opening your email client. If it doesn’t open, use the buttons below.",
    );
  }

  function resetForm() {
    setValues({ name: "", email: "", message: "" });
    setErrors({});
    setTouched({});
    setStatus("idle");
    setStatusMessage("");
  }

  const nameErrId = `${formId}-name-error`;
  const emailErrId = `${formId}-email-error`;
  const msgErrId = `${formId}-message-error`;
  const statusId = `${formId}-status`;

  return (
    <section id="contact" className="section" aria-labelledby={`${formId}-h2`}>
      <div className="container-page">
        <h2 id={`${formId}-h2`} className="section-title">
          Contact
        </h2>
        <p className="section-subtitle">
          Send a note and I’ll get back to you. This is a static site—your
          message is prepared locally and sent via your email client.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form className="card p-6" onSubmit={onSubmit} noValidate>
              <p id={statusId} className="sr-only" aria-live="polite">
                {statusMessage}
              </p>

              <div
                className="mb-4 rounded-xl border border-[var(--border)] bg-[rgba(31,41,55,0.03)] p-4 text-sm text-[var(--muted)]"
                aria-live="polite"
              >
                <span className="font-semibold text-[var(--primary)]">
                  Contact email:
                </span>{" "}
                <a
                  className="font-medium text-[var(--primary)] underline-offset-4 hover:underline"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1" htmlFor={`${formId}-name`}>
                  <span className="text-sm font-semibold text-[var(--primary)]">
                    Name <span className="text-[var(--muted)]">(required)</span>
                  </span>
                  <input
                    id={`${formId}-name`}
                    className="form-control"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, name: e.target.value }))
                    }
                    onBlur={() => onBlur("name")}
                    required
                    aria-invalid={Boolean(touched.name && errors.name)}
                    aria-describedby={
                      touched.name && errors.name ? nameErrId : undefined
                    }
                  />
                  {touched.name && errors.name ? (
                    <span
                      id={nameErrId}
                      className="text-xs text-[var(--error)]"
                      aria-live="polite"
                    >
                      {errors.name}
                    </span>
                  ) : null}
                </label>

                <label className="grid gap-1" htmlFor={`${formId}-email`}>
                  <span className="text-sm font-semibold text-[var(--primary)]">
                    Email <span className="text-[var(--muted)]">(required)</span>
                  </span>
                  <input
                    id={`${formId}-email`}
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    inputMode="email"
                    value={values.email}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, email: e.target.value }))
                    }
                    onBlur={() => onBlur("email")}
                    required
                    aria-invalid={Boolean(touched.email && errors.email)}
                    aria-describedby={
                      touched.email && errors.email ? emailErrId : undefined
                    }
                  />
                  {touched.email && errors.email ? (
                    <span
                      id={emailErrId}
                      className="text-xs text-[var(--error)]"
                      aria-live="polite"
                    >
                      {errors.email}
                    </span>
                  ) : null}
                </label>
              </div>

              <label
                className="mt-4 grid gap-1"
                htmlFor={`${formId}-message`}
              >
                <span className="text-sm font-semibold text-[var(--primary)]">
                  Message <span className="text-[var(--muted)]">(required)</span>
                </span>
                <textarea
                  id={`${formId}-message`}
                  className="min-h-32 resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm text-[var(--text)] focus-visible:outline-[3px] focus-visible:outline-[var(--ring)] focus-visible:outline-offset-2"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={values.message}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, message: e.target.value }))
                  }
                  onBlur={() => onBlur("message")}
                  required
                  aria-invalid={Boolean(touched.message && errors.message)}
                  aria-describedby={
                    touched.message && errors.message ? msgErrId : undefined
                  }
                />
                {touched.message && errors.message ? (
                  <span
                    id={msgErrId}
                    className="text-xs text-[var(--error)]"
                    aria-live="polite"
                  >
                    {errors.message}
                  </span>
                ) : null}
              </label>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--secondary)] px-5 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
                  disabled={status === "submitting"}
                >
                  Send message
                </button>

                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--primary)] hover:bg-[rgba(31,41,55,0.04)]"
                >
                  Open email client
                </a>

                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline"
                >
                  Copy email address
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="text-sm font-medium text-[var(--muted)] underline-offset-4 hover:underline"
                >
                  Reset
                </button>
              </div>

              {status !== "idle" && statusMessage ? (
                <p
                  className={`mt-4 text-sm ${
                    status === "error"
                      ? "text-[var(--error)]"
                      : "text-[var(--muted)]"
                  }`}
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              ) : (
                <p className="mt-4 text-xs text-[var(--muted)]">
                  If your device doesn’t support opening an email app, copy the
                  address and send your message manually.
                </p>
              )}
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4">
              <div className="card p-6">
                <p className="text-sm font-semibold text-[var(--primary)]">
                  Email
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-[var(--primary)] underline-offset-4 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
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
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--primary)] hover:bg-[rgba(31,41,55,0.04)] focus-visible:bg-[rgba(31,41,55,0.04)]"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                  <a
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--primary)] hover:bg-[rgba(31,41,55,0.04)] focus-visible:bg-[rgba(31,41,55,0.04)]"
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
