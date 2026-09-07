"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";

type Status = { kind: "idle" | "sending" | "ok" } | { kind: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const reduced = useReducedMotion();
  const router = useRouter();

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
      setStatus({ kind: "ok" });
      // Same-tab hand-off to the booking page, as the current site does.
      router.push(site.booking.path);
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again." });
    }
  }

  const busy = status.kind === "sending" || status.kind === "ok";

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
        disabled={busy}
        whileHover={reduced || busy ? undefined : { scale: 1.02 }}
        whileTap={reduced ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.15 }}
      >
        {status.kind === "sending" ? "Sending…" : status.kind === "ok" ? "Opening calendar…" : "Send"}
      </motion.button>

      <AnimatePresence mode="wait">
        {(status.kind === "ok" || status.kind === "error") && (
          <motion.p
            key={status.kind}
            role="status"
            initial={{ opacity: 0, y: reduced ? 0 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={status.kind === "ok" ? "text-sm text-brand" : "text-sm text-red-600"}
          >
            {status.kind === "error"
              ? status.message
              : "Thanks — taking you to the calendar to pick a time."}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
