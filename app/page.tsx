import Image from "next/image";
import { site } from "@/content/site";
import { Reveal, HeroReveal, Stagger, StaggerItem, HoverLift } from "@/components/motion";
import { PartnerCarousel } from "@/components/PartnerCarousel";
import { ContactForm } from "@/components/ContactForm";

/**
 * Calendly link, when configured. The hero CTAs open it directly; without it
 * they scroll to the contact form, which reveals the calendar on submit.
 */
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

function Cta({ label, className }: { label: string; className: string }) {
  const href = calendlyUrl || "#contact";
  const external = Boolean(calendlyUrl);
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}

function Bullets({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  return (
    <Stagger as="ul" className="mt-8 space-y-4">
      {items.map((item) => (
        <StaggerItem as="li" key={item} direction={direction} className="flex gap-3">
          <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
          <span className="text-lg text-muted">{item}</span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <HeroReveal direction="left">
              <p className="eyebrow">{site.hero.eyebrow}</p>
            </HeroReveal>
            <HeroReveal direction="left" delay={0.15}>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{site.hero.heading}</h1>
            </HeroReveal>
            <HeroReveal direction="left" delay={0.3}>
              <p className="mt-6 max-w-xl text-lg text-muted">{site.hero.body}</p>
            </HeroReveal>
            <HeroReveal direction="zoom" delay={0.45}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Cta label={site.hero.primaryCta.label} className="btn-primary" />
                <Cta label={site.bookingCta.label} className="btn-secondary" />
              </div>
            </HeroReveal>
          </div>
          <HeroReveal direction="right" delay={0.2}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
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

      {/* Who we work best with */}
      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={site.workBestWith.image.src}
              alt={site.workBestWith.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal direction="right">
            <h2 className="text-3xl font-semibold sm:text-4xl">{site.workBestWith.heading}</h2>
          </Reveal>
          <Bullets items={site.workBestWith.items} direction="right" />
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-surface">
        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
          <div className="lg:order-2">
            <Reveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={site.approach.image.src}
                  alt={site.approach.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:order-1">
            <Reveal direction="left">
              <h2 className="text-3xl font-semibold sm:text-4xl">{site.approach.heading}</h2>
            </Reveal>
            <Bullets items={site.approach.items} direction="left" />
          </div>
        </div>
      </section>

      {/* Partner / credential carousel */}
      <section className="border-y border-line py-14">
        <PartnerCarousel partners={site.partners} />
      </section>

      {/* Services */}
      <section id="services" className="container-page scroll-mt-24 py-20">
        <Reveal direction="up">
          <h2 className="text-3xl font-semibold sm:text-4xl">{site.services.heading}</h2>
          <p className="mt-5 max-w-3xl text-lg text-muted">{site.services.intro}</p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {site.services.items.map((service, i) => (
            <Reveal key={service.title} direction={i % 2 === 0 ? "left" : "right"}>
              <HoverLift className="overflow-hidden rounded-xl border border-line bg-white">
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className={`relative min-h-64 ${i % 2 === 0 ? "" : "lg:order-2"}`}>
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-lg font-medium text-brand">{service.subtitle}</p>
                    <p className="mt-4 text-muted">{service.body}</p>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-wide">Includes:</p>
                    <ul className="mt-3 space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex gap-3 text-muted">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-ink text-white">
        <Reveal direction="zoom" className="container-page py-20 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{site.mission.heading}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/85">{site.mission.body}</p>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="container-page grid scroll-mt-24 items-center gap-12 py-20 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={site.about.image.src}
              alt={site.about.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal direction="right">
            <h2 className="text-3xl font-semibold sm:text-4xl">{site.about.heading}</h2>
            <p className="mt-4 text-xl font-medium text-brand">{site.about.lead}</p>
          </Reveal>
          <Stagger className="mt-6 space-y-4 text-muted">
            {site.about.paragraphs.map((p) => (
              <StaggerItem key={p} direction="right">
                <p>{p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-surface">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-2">
          <Reveal direction="left">
            <h2 className="text-3xl font-semibold sm:text-4xl">{site.contactSection.heading}</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide">Email</dt>
                <dd className="mt-1">
                  <a className="text-brand hover:underline" href={`mailto:${site.contact.email}`}>
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide">Office Number</dt>
                <dd className="mt-1">
                  <a
                    className="text-brand hover:underline"
                    href={`tel:+1${site.contact.phone.replace(/\D/g, "")}`}
                  >
                    {site.contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal direction="right">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">
              {site.contactSection.formHeading}
            </h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
