"use client";

import { useEffect } from "react";

/** GoHighLevel's iframe resizer — it posts the widget's height to the parent. */
const RESIZER_SRC = "https://link.msgsndr.com/js/form_embed.js";

/**
 * Embeds the GoHighLevel booking calendar.
 *
 * The widget renders in an iframe and reports its own height through
 * form_embed.js, so the frame grows with the content instead of scrolling
 * internally. Loading the script once per page is enough — it binds to every
 * booking iframe present.
 */
export function BookingEmbed({
  calendarId,
  title = "Booking calendar",
}: {
  calendarId: string;
  title?: string;
}) {
  useEffect(() => {
    if (document.querySelector(`script[src="${RESIZER_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = RESIZER_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const src = `https://api.leadconnectorhq.com/widget/booking/${calendarId}`;

  return (
    <div className="w-full">
      <iframe
        src={src}
        id={calendarId}
        title={title}
        scrolling="no"
        className="h-[46rem] w-full border-0"
      />
      {/* If the iframe is blocked, the calendar is still one click away. */}
      <noscript>
        <p className="text-sm text-muted">
          <a className="text-brand underline" href={src}>
            Open the booking calendar
          </a>
        </p>
      </noscript>
    </div>
  );
}
