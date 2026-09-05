import Link from "next/link";
import { site } from "@/content/site";
import { FadeIn, Stagger, StaggerItem, HeroReveal, HoverLift } from "@/components/motion";
import { CountUp } from "@/components/CountUp";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container-page py-24 sm:py-32">
          <HeroReveal>
            <p className="eyebrow">{site.tagline}</p>
          </HeroReveal>
          <HeroReveal delay={0.1}>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-6xl">
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
      </section>

      <section className="container-page py-20">
        <FadeIn>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Where we help most</h2>
        </FadeIn>
        <Stagger className="mt-12 grid gap-8 sm:grid-cols-2">
          {site.services.map((s) => (
            <StaggerItem key={s.title}>
              <HoverLift className="h-full rounded-lg border border-line p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted">{s.body}</p>
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
          <div className="rounded-lg border border-line bg-brand px-8 py-14 text-center text-white">
            <h2 className="text-3xl font-semibold">
              Let&rsquo;s talk about what you&rsquo;re building.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              A short conversation is usually enough to tell whether we&rsquo;re the right fit.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/book" className="btn bg-white text-brand hover:bg-white/90">
                Book a consultation
              </Link>
              <Link
                href="/contact"
                className="btn border border-white/40 text-white hover:bg-white/10"
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
