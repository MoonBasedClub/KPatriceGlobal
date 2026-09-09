/**
 * Single source of truth for all site copy and imagery.
 *
 * Every string the site renders lives here, so copy changes never require
 * touching a component.
 */

/** The booking route. */
const BOOKING_PATH = "/appointment-booking-page";
/** Hero CTAs scroll to the calendar embedded on the homepage. */
const BOOKING_ANCHOR = "#contact";

export const site = {
  name: "Kpatrice Global Solutions",
  tagline: "Strategic Operations & Growth Advisory",
  description:
    "Kpatrice Global Solutions serves as a Strategic Operations & Growth Advisor to small and mid-sized businesses and workforce development organizations navigating growth and change.",
  /**
   * Canonical domain. Every absolute URL on the site — canonical tags, sitemap
   * entries, share cards, structured data — is derived from this, so it is the
   * only place a domain change needs to be made.
   */
  url: "https://kpatrice.com",

  seo: {
    /**
     * The legal entity behind the site, used in structured data. Search
     * engines treat this as the organization's formal name, distinct from the
     * brand name shown on the page.
     */
    legalName: "Kpatrice Global Solutions",
    /**
     * Terms the site should rank for. These do not affect ranking directly —
     * no engine has read the keywords meta since 2009 — but they keep the
     * intended search intent written down next to the copy that has to earn
     * it, and they seed the structured data below.
     */
    services: [
      "Strategic Planning",
      "Operational Efficiency",
      "Business Diagnostics",
      "Workforce Development Consulting",
      "Business Process Improvement",
    ],
    /**
     * Where the business takes clients. Kept broad because the site lists no
     * street address; add a real postal address here and in the structured
     * data once one is available, since local search results depend on it.
     */
    areaServed: "United States",
  },

  logo: {
    src: "/images/logo.png",
    alt: "Kpatrice Global Solutions — Connecting People to Resources",
  },

  contact: {
    email: "info@kpatrice.com",
    phone: "561.507.0240",
  },

  social: [
    // TODO: add real profile URLs. These also populate `sameAs` in the
    // structured data, which is how search engines tie the site to the
    // profiles, so a blank href is left out rather than guessed at.
    { label: "Facebook", href: "" },
    { label: "LinkedIn", href: "" },
  ] as { label: string; href: string }[],

  // Root-relative so these still resolve from the booking page, where the
  // homepage's sections do not exist.
  nav: [
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],

  hero: {
    eyebrow: "Strategic Operations & Growth Advisory",
    heading: "For organizations ready to execute - not just plan.",
    body: "Stop reacting to growth challenges. Start aligning strategy, systems, and partnerships so your organization can move forward with clarity and confidence.",
    image: { src: "/images/hero.jpg", alt: "A professional reviewing work on a tablet" },
  },

  bookingCta: { label: "Book a Free Consultation!", href: BOOKING_ANCHOR },

  booking: {
    path: BOOKING_PATH,
    /**
     * GoHighLevel calendar behind the live site's booking page —
     * "Keisha Smith's Personal Calendar". Override with
     * NEXT_PUBLIC_BOOKING_CALENDAR_ID to point at a different calendar.
     */
    calendarId: process.env.NEXT_PUBLIC_BOOKING_CALENDAR_ID || "O56KTncw7NcR9Q5uzM6n",
    calendarName: "Keisha Smith's Personal Calendar",
    host: {
      name: "Keisha P Smith",
      photo: {
        // 200x200 is the original GoHighLevel holds; sized on the page to stay sharp.
        src: "/images/keisha-smith.jpg",
        alt: "Keisha P Smith",
      },
    },
    heading: "Book an appointment",
    body: "Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.",
  },

  workBestWith: {
    heading: "Who We Work Best With",
    items: [
      "Growing organizations",
      "Leadership teams ready to make decisions",
      "Workforce organizations strengthening employer partnerships",
      "Businesses ready to professionalize operations",
    ],
    image: { src: "/images/who-we-work-with.jpg", alt: "Colleagues collaborating" },
  },

  approach: {
    heading: "Our Approach",
    items: [
      "Diagnose before prescribing",
      "Align leadership before optimizing systems",
      "Prioritize execution over perfection",
      "Design structures that last beyond the engagement",
    ],
    image: { src: "/images/our-approach.webp", alt: "A team working through a plan" },
  },

  /** Logos in the marquee, in display order. */
  partners: [
    {
      name: "Miami-Dade County Public Schools",
      src: "/images/partners/miami-dade-public-schools.jpg",
    },
    { name: "MWBE Certified — Minority and Women-Owned Business Enterprise",
      src: "/images/partners/mwbe-certified.webp" },
    { name: "The School District of Palm Beach County",
      src: "/images/partners/palm-beach-county-schools.webp" },
    { name: "Broward County Public Schools",
      src: "/images/partners/broward-county-public-schools.jpg" },
    { name: "Florida Department of Management Services — Supplier Diversity",
      src: "/images/partners/florida-dms-supplier-diversity.webp" },
  ] as { name: string; src: string }[],

  services: {
    heading: "Our Services",
    intro:
      "Our consultancy services are designed to help your business operate at its highest potential. Whether you’re scaling, restructuring, or simply stuck we provide the tools, frameworks, and insights to help you move forward with clarity and confidence.",
    items: [
      {
        title: "Strategic Planning",
        subtitle: "Turn Your Vision into Action.",
        body: "We help you define your long-term goals and build customized strategies that lead to measurable outcomes. Whether you’re entering a new market, launching a new offer, or revisiting your mission we bring structure to your strategy.",
        includes: [
          "Vision + Goal Mapping",
          "90-Day Action Plans",
          "Strategic Roadmapping",
          "Planning Retreat Facilitation",
        ],
        image: { src: "/images/service-strategic-planning.jpg", alt: "Strategic planning session" },
      },
      {
        title: "Operational Efficiency",
        subtitle: "Work Smarter. Scale Faster.",
        body: "We assess your current workflows and implement improvements that reduce waste and increase productivity so your team can focus on what matters.",
        includes: [
          "Workflow Audits",
          "Process Streamlining",
          "SOP (Standard Operating Procedure) Creation",
          "Automation & Tool Integration",
        ],
        image: {
          src: "/images/service-operational-efficiency.webp",
          alt: "A team reviewing work together in an office",
        },
      },
      {
        title: "Business Diagnostics",
        subtitle: "Get a Clear Picture of What’s Working—And What’s Not.",
        body: "Before making big decisions, we help you assess your performance across people, process, and profit. Our diagnostic tools identify pain points and growth blockers.",
        includes: [
          "Business Health Assessment",
          "Efficiency Scorecard",
          "Recommendations Report",
          "Priority Action Plan",
        ],
        image: {
          src: "/images/service-business-diagnostics.webp",
          alt: "Reviewing business performance data",
        },
      },
    ],
  },

  mission: {
    heading: "Our Mission",
    body: "To empower businesses by creating clarity, building capacity, and eliminating inefficiency one strategic solution at a time.",
  },

  about: {
    heading: "About Us",
    lead: "Growth exposes what’s misaligned.",
    paragraphs: [
      "As organizations scale, cracks appear unclear priorities, overextended leaders, fragmented systems, and partnerships that don’t deliver their full value.",
      "Kpatrice Global Solutions serves as a Strategic Operations & Growth Advisor to small and mid-sized businesses and workforce development organizations navigating growth and change.",
      "We work closely with leadership teams to diagnose execution challenges, align strategy with operations, and build systems that support sustainable progress.",
      "This work is not about adding more tools, meetings, or initiatives.",
      "It’s about clarity, structure, and disciplined execution.",
    ],
    image: { src: "/images/about.jpg", alt: "Kpatrice Global Solutions at work" },
  },

  contactSection: {
    heading: "Book a Consultation",
    body: "Pick a time that works for you — or reach out directly.",
  },

  /** Rendered with the current year prepended by the footer. */
  copyright: "Kpatrice Global Solutions. All rights reserved.",
};

export type Site = typeof site;
