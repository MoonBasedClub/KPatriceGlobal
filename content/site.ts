/**
 * Single source of truth for all site copy.
 *
 * PLACEHOLDER CONTENT — every string marked `TODO` is a stand-in written from
 * the domain name alone. The live site at kpatriceglobal.com could not be read
 * from the build environment (blocked by the network egress policy), so nothing
 * here is transcribed from it. Replace this file's values with the real copy;
 * no component needs to change.
 */

export const site = {
  name: "K Patrice Global",
  // TODO: replace with the real tagline from the live site.
  tagline: "Strategy, communications, and operations consulting",
  description:
    "K Patrice Global partners with organizations and leaders to sharpen strategy, strengthen communications, and build operations that hold up under growth.",
  url: "https://kpatriceglobal.com",

  contact: {
    email: "keisha@kpatrice.com",
    phone: "",
    location: "",
  },

  social: [
    // TODO: confirm real profile URLs.
    // { label: "LinkedIn", href: "https://www.linkedin.com/company/..." },
  ] as { label: string; href: string }[],

  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Book", href: "/book" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    // TODO: replace with the real headline.
    heading: "Clarity, then momentum.",
    body: "We work alongside founders, executives, and mission-driven teams to turn a broad ambition into a plan people can actually execute.",
    primaryCta: { label: "Book a consultation", href: "/book" },
    secondaryCta: { label: "See how we work", href: "/services" },
  },

  // TODO: replace with the real service lines.
  services: [
    {
      title: "Strategic advisory",
      body: "Positioning, growth planning, and the hard prioritization calls that decide where the next year actually goes.",
    },
    {
      title: "Communications",
      body: "Messaging, narrative, and stakeholder communications that stay consistent from the pitch deck to the front line.",
    },
    {
      title: "Operations & delivery",
      body: "Process, systems, and accountability structures that let a small team move like a much larger one.",
    },
    {
      title: "Leadership coaching",
      body: "One-on-one work with executives and emerging leaders on decision-making, delegation, and presence.",
    },
  ],

  about: {
    heading: "About K Patrice Global",
    // TODO: replace with the real founder bio and company story.
    paragraphs: [
      "K Patrice Global is a consultancy built on a simple premise: most organizations do not lack ideas, they lack a shared plan and the discipline to run it.",
      "We embed with leadership teams for focused engagements — diagnosing what is actually blocking progress, designing the plan, and staying long enough to see it take hold.",
      "Our work spans early-stage companies finding their footing and established organizations navigating a change in scale, market, or mandate.",
    ],
  },

  // TODO: replace with real client outcomes, or delete this section.
  proof: [
    { stat: "15+", label: "years of combined advisory experience" },
    { stat: "40+", label: "engagements delivered" },
    { stat: "6", label: "sectors served" },
  ],
};

export type Site = typeof site;

/** Scheduling link; falls back to the contact page when unset. */
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
