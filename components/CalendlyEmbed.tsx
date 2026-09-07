"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget(opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: { name?: string; email?: string };
      }): void;
    };
  }
}

const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";

/** Loads Calendly's widget script once per page, shared by every caller. */
function loadWidgetScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SRC}"]`);
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("calendly")), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("calendly"));
    document.head.appendChild(script);
  });
}

/**
 * Inline Calendly scheduler, shown after the contact form is submitted — the
 * same flow the current GoHighLevel site uses.
 *
 * The visitor's name and email are prefilled from what they just typed, so they
 * are not asked for the same details twice.
 */
export function CalendlyEmbed({
  url,
  prefill,
}: {
  url: string;
  prefill?: { name?: string; email?: string };
}) {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadWidgetScript()
      .then(() => {
        if (cancelled || !host.current || !window.Calendly) return;
        host.current.innerHTML = "";
        window.Calendly.initInlineWidget({ url, parentElement: host.current, prefill });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [url, prefill]);

  // If the widget script is blocked (ad blockers commonly do), a plain link
  // still gets the visitor to the calendar.
  if (failed) {
    return (
      <p className="text-sm text-muted">
        <a className="text-brand underline" href={url} target="_blank" rel="noopener noreferrer">
          Open the scheduling calendar
        </a>{" "}
        to pick a time.
      </p>
    );
  }

  return <div ref={host} className="min-h-[42rem] w-full" aria-label="Scheduling calendar" />;
}
