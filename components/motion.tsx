"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Animation primitives mirroring the Animate.css effects the live site uses:
 * fadeInLeft, fadeInRight, fadeInUp and zoomIn, each over 1s, triggered as the
 * element scrolls into view.
 *
 * Animate.css translates by a percentage of the element's own size
 * (translate3d(-100%, 0, 0) for fadeInLeft). That reads as a lurch on wide
 * blocks, so we use a fixed pixel offset in the same direction — the same
 * gesture, without the distance scaling with the element.
 *
 * Everything collapses to a plain fade when the visitor has "reduce motion"
 * set at the OS level.
 */

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 1;
const OFFSET = 60;

export type Direction = "left" | "right" | "up" | "zoom" | "none";

function hiddenState(direction: Direction, reduced: boolean) {
  if (reduced || direction === "none") return { opacity: 0 };
  switch (direction) {
    case "left":
      return { opacity: 0, x: -OFFSET };
    case "right":
      return { opacity: 0, x: OFFSET };
    case "up":
      return { opacity: 0, y: OFFSET };
    case "zoom":
      return { opacity: 0, scale: 0.85 };
  }
}

function shownState(direction: Direction) {
  switch (direction) {
    case "left":
    case "right":
      return { opacity: 1, x: 0 };
    case "up":
      return { opacity: 1, y: 0 };
    case "zoom":
      return { opacity: 1, scale: 1 };
    default:
      return { opacity: 1 };
  }
}

/** Animates a block in as it scrolls into view. */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={hiddenState(direction, !!reduced)}
      whileInView={shownState(direction)}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduced ? 0.3 : DURATION, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/** Above-the-fold content: animates on mount instead of on scroll. */
export function HeroReveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={hiddenState(direction, !!reduced)}
      animate={shownState(direction)}
      transition={{ duration: reduced ? 0.3 : DURATION, delay: reduced ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Parent for a list whose children animate in one after another. */
export function Stagger({
  children,
  className,
  gap = 0.12,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  as?: "div" | "ul";
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : gap } } }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  direction = "right",
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  as?: "div" | "li";
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  const variants: Variants = {
    hidden: hiddenState(direction, !!reduced),
    visible: {
      ...shownState(direction),
      transition: { duration: reduced ? 0.3 : DURATION, ease: EASE },
    },
  };

  return (
    <Tag className={className} variants={variants}>
      {children}
    </Tag>
  );
}

/** Subtle lift on hover, for cards. */
export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
