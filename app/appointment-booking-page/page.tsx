import Image from "next/image";
import { site } from "@/content/site";
import { BookingEmbed } from "@/components/BookingEmbed";
import { Reveal } from "@/components/motion";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";

const title = site.booking.heading;
const description = `Schedule a free consultation with ${site.booking.host.name} of ${site.name} — ${site.tagline.toLowerCase()}.`;

export const metadata: Metadata = {
  title,
  description,
  // This path is inherited from the previous site, so it already has inbound
  // links and search-result presence worth keeping pointed here.
  alternates: { canonical: site.booking.path },
  openGraph: {
    title: `${title} — ${site.name}`,
    description,
    url: `${site.url}${site.booking.path}`,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${title} — ${site.name}`, description },
};

export default function AppointmentBookingPage() {
  const { host, body, calendarId, calendarName } = site.booking;

  return (
    <section className="container-page py-16">
      <BreadcrumbJsonLd name={title} path={site.booking.path} />
      <Reveal direction="up" className="text-center">
        <Image
          src={host.photo.src}
          alt={host.photo.alt}
          width={200}
          height={200}
          priority
          // Rendered below the 200px source so it stays sharp on dense displays.
          className="mx-auto h-32 w-32 rounded-full object-cover"
        />
        <h1 className="mt-6 text-2xl font-semibold sm:text-3xl">{host.name}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{body}</p>
      </Reveal>

      <Reveal direction="up" delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-xl border border-line bg-white">
          <BookingEmbed calendarId={calendarId} title={calendarName} />
        </div>
      </Reveal>
    </section>
  );
}
