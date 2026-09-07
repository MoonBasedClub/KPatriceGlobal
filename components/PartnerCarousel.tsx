"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { useMounted } from "@/lib/useMounted";

type Partner = { name: string; src: string };

/** Seconds for one full cycle — matches the live site's 30.4s marquee. */
const CYCLE_SECONDS = 30.4;

/**
 * Infinite partner-logo marquee.
 *
 * The track repeats the logo list and slides left by a plain pixel offset,
 * wrapping once that offset passes the width of one copy — at that instant the
 * next copy sits exactly where the previous one began, so the reset is
 * invisible. Driving it from an animation frame rather than a keyframe
 * animation is what makes hover-to-pause possible: we stop accumulating, with
 * no animation to interrupt and restart.
 *
 * The number of copies is measured rather than fixed. Two copies of a short
 * list are narrower than a wide viewport, which leaves empty space trailing the
 * last logo until the wrap comes round. Repeating until the track covers the
 * container plus one whole copy guarantees a logo is always entering as another
 * leaves, at any width.
 *
 * With "reduce motion" enabled the marquee is replaced by a static wrapping row.
 */
export function PartnerCarousel({ partners }: { partners: Partner[] }) {
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const [paused, setPaused] = useState(false);
  const [copies, setCopies] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);

  // Re-measure on mount and whenever the container resizes, since the number of
  // copies needed depends on how wide the viewport is.
  useEffect(() => {
    // `mounted` gates the branch below that renders the container, so this must
    // re-run when it flips — otherwise the first pass sees a null ref and the
    // track is never measured.
    const container = containerRef.current;
    if (!container || reduced || !mounted) return;

    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const copyWidth = track.scrollWidth / copies;
      if (copyWidth === 0) return;
      const needed = Math.ceil(container.clientWidth / copyWidth) + 1;
      // At least two, so there is always a following copy to wrap onto.
      const next = Math.max(2, needed);
      if (next !== copies) setCopies(next);
    };

    measure();
    // Watch the track as well as the container: logo widths are only known once
    // the images load, and measuring before that yields the wrong copy count.
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, [copies, reduced, mounted, partners.length]);

  useAnimationFrame((_, delta) => {
    if (paused || reduced || !mounted || !trackRef.current) return;
    const copyWidth = trackRef.current.scrollWidth / copies;
    if (copyWidth === 0) return;
    const speed = copyWidth / CYCLE_SECONDS; // px per second
    const next = x.get() - (speed * delta) / 1000;
    x.set(next <= -copyWidth ? next + copyWidth : next);
  });

  if (partners.length === 0) return null;

  const logo = (partner: Partner, key: string, hidden: boolean) => (
    <li
      key={key}
      className="flex shrink-0 items-center justify-center px-10"
      aria-hidden={hidden || undefined}
    >
      <Image
        src={partner.src}
        alt={hidden ? "" : partner.name}
        width={240}
        height={120}
        className="h-24 w-auto object-contain"
      />
    </li>
  );

  // Until mounted we cannot know the motion preference, so render the static
  // list — it matches the server output and is the sensible no-JS fallback.
  if (!mounted || reduced) {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-y-8">
        {partners.map((p) => logo(p, p.name, false))}
      </ul>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <motion.ul ref={trackRef} className="flex w-max" style={{ x }}>
        {Array.from({ length: copies }).flatMap((_, copy) =>
          // Only the first copy is announced; the rest repeat it for the loop.
          partners.map((p) => logo(p, `${copy}-${p.name}`, copy > 0)),
        )}
      </motion.ul>
    </div>
  );
}
