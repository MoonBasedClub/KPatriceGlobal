"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

type Submitted = { name: string; email: string };
type Status =
  | { kind: "idle" | "sending" }
  | { kind: "error"; message: string }
  | { kind: "ok"; message: string; submitted: Submitted };

/** Set in the Vercel project; empty means "no calendar configured". */
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const reduced = useReducedMotion();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus({ kind: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus({ kind: "error", message: body.error ?? "Something went wrong." });
        return;
      }
      form.reset();
      setStatus({
        kind: "ok",
        message: CALENDLY_URL
          ? "Thanks — now pick a time that works for you."
          : "Thanks — your message is on its way.",
        submitted: { name: data.name ?? "", email: data.email ?? "" },
      });
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again." });
    }
  }

  // Message sent and a calendar is configured: hand the visitor straight to it,
  // which is how the current GoHighLevel site behaves.
  if (status.kind === "ok" && CALENDLY_URL) {
    return (
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p role="status" className="text-sm font-medium text-brand">
          {status.message}
        </p>
        <div className="mt-4">
          <CalendlyEmbed url={CALENDLY_URL} prefill={status.submitted} />
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-5">
      {/* Honeypot: bots fill hidden fields, humans never see this one. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="label" htmlFor="name">Name</label>
        <input className="field" id="name" name="name" required maxLength={120} autoComplete="name" />
      </div>
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input className="field" id="email" name="email" type="email" required maxLength={200} autoComplete="email" />
      </div>
      <div>
        <label className="label" htmlFor="message">How can we help?</label>
        <textarea className="field min-h-40" id="message" name="message" required maxLength={4000} />
      </div>

      <motion.button
        className="btn-primary disabled:opacity-70"
        type="submit"
        disabled={status.kind === "sending"}
        whileHover={reduced || status.kind === "sending" ? undefined : { scale: 1.02 }}
        whileTap={reduced ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.15 }}
      >
        {status.kind === "sending" ? "Sending…" : "Send"}
      </motion.button>

      <AnimatePresence mode="wait">
        {(status.kind === "ok" || status.kind === "error") && (
          <motion.p
            key={status.message}
            role="status"
            initial={{ opacity: 0, y: reduced ? 0 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={status.kind === "ok" ? "text-sm text-brand" : "text-sm text-red-600"}
          >
            {status.message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
