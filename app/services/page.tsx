import Link from "next/link";
import { site } from "@/content/site";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="container-page py-20">
      <FadeIn>
        <p className="eyebrow">Services</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
          How we work together
        </h1>
      </FadeIn>
      <Stagger className="mt-12 divide-y divide-line border-y border-line">
        {site.services.map((s) => (
          <StaggerItem key={s.title}>
            <div className="grid gap-4 py-8 sm:grid-cols-[16rem_1fr]">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="text-muted">{s.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <FadeIn className="mt-12">
        <Link href="/book" className="btn-primary">Book a consultation</Link>
      </FadeIn>
    </section>
  );
}
