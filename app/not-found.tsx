import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  // Keeps soft-404s and mistyped URLs out of the index.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-page py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold">This page doesn&rsquo;t exist.</h1>
      <Link href="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  );
}
