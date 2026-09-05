import Image from "next/image";
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
            <div className="grid items-center gap-8 py-10 sm:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-3 text-muted">{s.body}</p>
              </div>
              {s.image && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              )}
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
