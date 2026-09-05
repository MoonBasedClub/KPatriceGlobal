import Image from "next/image";
import { site } from "@/content/site";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="container-page py-20">
      <FadeIn>
        <p className="eyebrow">About</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">{site.about.heading}</h1>
      </FadeIn>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_minmax(0,28rem)]">
        <Stagger className="max-w-2xl space-y-6 text-lg text-muted">
          {site.about.paragraphs.map((p) => (
            <StaggerItem key={p}>
              <p>{p}</p>
            </StaggerItem>
          ))}
        </Stagger>

        {site.about.image && (
          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={site.about.image.src}
                alt={site.about.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 28rem"
                className="object-cover"
              />
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
