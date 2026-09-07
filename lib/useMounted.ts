"use client";

import { useEffect, useState } from "react";

/**
 * False during server render and the first client render, true afterwards.
 *
 * `useReducedMotion()` can only know the visitor's preference in the browser,
 * so branching the returned markup on it directly makes the server and client
 * render different DOM — a hydration mismatch. Gate that branch on this hook so
 * the first client render always matches the server, and the motion-aware
 * variant swaps in immediately after.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
