import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { FadeIn, Stagger, StaggerItem, HeroReveal, HoverLift } from "@/components/motion";
import { CountUp } from "@/components/CountUp";
import { PartnerCarousel } from "@/components/PartnerCarousel";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <HeroReveal>
              <p className="eyebrow">{site.tagline}</p>
            </HeroReveal>
            <HeroReveal delay={0.1}>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl xl:text-6xl">
                {site.hero.heading}
              </h1>
            </HeroReveal>
            <HeroReveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-muted">{site.hero.body}</p>
            </HeroReveal>
            <HeroReveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={site.hero.primaryCta.href} className="btn-primary">
                  {site.hero.primaryCta.label}
                </Link>
                <Link href={site.hero.secondaryCta.href} className="btn-secondary">
                  {site.hero.secondaryCta.label}
                </Link>
              </div>
            </HeroReveal>
          </div>

          <HeroReveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={site.hero.image.src}
                alt={site.hero.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </HeroReveal>
        </div>
      </section>

      {site.partners.length > 0 && (
        <section className="border-b border-line py-14">
          <FadeIn>
            <p className="container-page text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Trusted by the organizations we serve
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <PartnerCarousel partners={site.partners} />
          </FadeIn>
        </section>
      )}

      <section className="container-page py-20">
        <FadeIn>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Where we help most</h2>
        </FadeIn>
        <Stagger className="mt-12 grid gap-8 sm:grid-cols-2">
          {site.services.map((s) => (
            <StaggerItem key={s.title}>
              <HoverLift className="h-full overflow-hidden rounded-xl border border-line">
                {s.image && (
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted">{s.body}</p>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {site.proof.length > 0 && (
        <section className="border-y border-line bg-surface">
          <Stagger className="container-page grid gap-10 py-16 sm:grid-cols-3">
            {site.proof.map((p) => (
              <StaggerItem key={p.label}>
                <CountUp
                  value={p.stat}
                  className="font-display text-4xl font-semibold text-brand"
                />
                <p className="mt-2 text-sm text-muted">{p.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}

      <section className="container-page py-20">
        <FadeIn>
          <div className="rounded-xl bg-gradient-to-r from-brand-orange via-brand to-brand-purple px-8 py-14 text-center text-white">
            <h2 className="text-3xl font-semibold">Let&rsquo;s connect people to what they need.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Tell us what you&rsquo;re working on and we&rsquo;ll tell you whether we can help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/book" className="btn bg-white text-brand-deep hover:bg-white/90">
                Book a consultation
              </Link>
              <Link
                href="/contact"
                className="btn border border-white/50 text-white hover:bg-white/10"
              >
                Send a message
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
