"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { useMounted } from "@/lib/useMounted";

type Partner = { name: string; src: string };

/** Seconds for one full cycle — matches the live site's 30.4s marquee. */
const CYCLE_SECONDS = 30.4;

/**
 * Infinite partner-logo marquee.
 *
 * The track holds two identical copies of the logo list. We advance it left by
 * a plain pixel offset and wrap once that offset passes the width of a single
 * copy — at that instant the second copy sits exactly where the first began, so
 * the reset is invisible. Driving it from an animation frame (rather than a
 * keyframe animation) is what makes hover-to-pause possible: we simply stop
 * accumulating, with no animation to interrupt and restart.
 *
 * With "reduce motion" enabled the marquee is replaced by a static wrapping row.
 */
export function PartnerCarousel({ partners }: { partners: Partner[] }) {
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (paused || reduced || !mounted || !trackRef.current) return;
    // scrollWidth covers both copies; one copy is half of it.
    const copyWidth = trackRef.current.scrollWidth / 2;
    if (copyWidth === 0) return;
    const speed = copyWidth / CYCLE_SECONDS; // px per second
    const next = x.get() - (speed * delta) / 1000;
    x.set(next <= -copyWidth ? next + copyWidth : next);
  });

  if (partners.length === 0) return null;

  const logo = (partner: Partner, key: string, hidden = false) => {
    const img = (
      <Image
        src={partner.src}
        alt={hidden ? "" : partner.name}
        width={240}
        height={120}
        className="h-24 w-auto object-contain"
      />
    );
    return (
      <li
        key={key}
        className="flex shrink-0 items-center justify-center px-10"
        aria-hidden={hidden || undefined}
      >
        {img}
      </li>
    );
  };

  // Until mounted we cannot know the motion preference, so render the static
  // list — it matches the server output and is the sensible no-JS fallback.
  if (!mounted || reduced) {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-y-8">
        {partners.map((p) => logo(p, p.name))}
      </ul>
    );
  }

  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <motion.ul ref={trackRef} className="flex w-max" style={{ x }}>
        {partners.map((p) => logo(p, `a-${p.name}`))}
        {/* Duplicate copy — the wrap above lands on it, making the loop seamless.
            Hidden from assistive tech so logos aren't announced twice. */}
        {partners.map((p) => logo(p, `b-${p.name}`, true))}
      </motion.ul>
    </div>
  );
}
