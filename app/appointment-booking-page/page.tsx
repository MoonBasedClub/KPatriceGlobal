import { site } from "@/content/site";
import { BookingEmbed } from "@/components/BookingEmbed";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Book an appointment",
  description: `Schedule a call with ${site.name}.`,
};

export default function AppointmentBookingPage() {
  return (
    <section className="container-page py-16">
      <Reveal direction="up">
        <h1 className="text-3xl font-semibold sm:text-4xl">{site.booking.heading}</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">{site.booking.body}</p>
      </Reveal>

      <Reveal direction="up" delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-xl border border-line bg-white">
          <BookingEmbed calendarId={site.booking.calendarId} title={site.booking.calendarName} />
        </div>
      </Reveal>
    </section>
  );
}
