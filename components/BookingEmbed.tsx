"use client";

import { useEffect, useRef } from "react";

const CALENDLY_WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";
const DEFAULT_CALENDLY_URL =
  "https://calendly.com/mikeysmediabusiness/30min?hide_event_type_details=1";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget?: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

function loadCalendlyWidget() {
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${CALENDLY_WIDGET_SRC}"]`,
  );

  if (existing) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = CALENDLY_WIDGET_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Calendly widget"));
    document.body.appendChild(script);
  });
}

/** Embeds the Calendly inline scheduler. */
export function BookingEmbed({
  calendlyUrl = DEFAULT_CALENDLY_URL,
  title = "Booking calendar",
}: {
  calendlyUrl?: string;
  title?: string;
}) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    loadCalendlyWidget().then(() => {
      const widget = widgetRef.current;
      if (cancelled || !widget || !window.Calendly?.initInlineWidget) return;

      widget.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: widget,
      });
    });

    return () => {
      cancelled = true;
    };
  }, [calendlyUrl]);

  return (
    <div className="w-full">
      <div
        ref={widgetRef}
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        title={title}
        style={{ minWidth: 320, height: 700 }}
      />
      <noscript>
        <p className="p-4 text-sm text-muted">
          <a className="text-brand underline" href={calendlyUrl}>
            Open the booking calendar
          </a>
        </p>
      </noscript>
    </div>
  );
}
