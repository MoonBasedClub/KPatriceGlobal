import Image from "next/image";
import { site } from "@/content/site";
import { BookingEmbed } from "@/components/BookingEmbed";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: site.booking.heading,
  description: `Schedule a call with ${site.name}.`,
};

export default function AppointmentBookingPage() {
  const { host, body, calendarId, calendarName } = site.booking;

  return (
    <section className="container-page py-16">
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
