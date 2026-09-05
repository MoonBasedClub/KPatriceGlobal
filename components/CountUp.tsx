"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/**
 * Counts a numeric stat up when it scrolls into view.
 *
 * The label is parsed out of strings like "15+" or "40+" so the suffix is
 * preserved; anything without a leading number is rendered as-is.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";

  // Initial state deliberately ignores `reduced`: it is unknown on the server,
  // so depending on it here would make the first client render disagree.
  const [display, setDisplay] = useState(target === null ? value : `0${suffix}`);

  useEffect(() => {
    if (target === null) return;
    // Reduced motion: show the final figure without counting.
    if (reduced) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(`${Math.round(latest)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, target, suffix, reduced, value]);

  return (
    <p ref={ref} className={className}>
      {target === null ? value : display}
    </p>
  );
}
