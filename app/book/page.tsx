import Link from "next/link";
import { site } from "@/content/site";
import { FadeIn } from "@/components/motion";

export const metadata = { title: "Book a consultation" };

export default function BookPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";

  return (
    <section className="container-page py-20">
      <FadeIn>
        <p className="eyebrow">Scheduling</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Book a consultation</h1>
      </FadeIn>
      <p className="mt-6 max-w-xl text-lg text-muted">
        Pick a time that works for you. If nothing fits, send a note through the{" "}
        <Link href="/contact" className="underline underline-offset-4">contact form</Link> and
        we&rsquo;ll find one.
      </p>

      {bookingUrl ? (
        <div className="mt-12 overflow-hidden rounded-lg border border-line">
          <iframe
            src={bookingUrl}
            title="Scheduling calendar"
            className="h-[46rem] w-full"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="mt-12 rounded-lg border border-dashed border-line bg-surface p-8">
          <p className="font-medium">Scheduling isn&rsquo;t connected yet.</p>
          <p className="mt-2 text-sm text-muted">
            Set <code className="rounded bg-white px-1.5 py-0.5">NEXT_PUBLIC_BOOKING_URL</code> in
            the Vercel project to a Calendly or Acuity embed link and this page will render the
            calendar. Until then, visitors are pointed at the contact form.
          </p>
          <Link href="/contact" className="btn-primary mt-6">Contact us instead</Link>
        </div>
      )}

      {site.contact.email && (
        <p className="mt-8 text-sm text-muted">
          Prefer email? <a className="underline underline-offset-4" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </p>
      )}
    </section>
  );
}
