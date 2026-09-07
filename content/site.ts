/**
 * Single source of truth for all site copy and imagery.
 *
 * Transcribed from the live site at kpatriceglobal.com (a GoHighLevel/
 * LeadConnector funnel) along with its images, palette and section order.
 */

/** The booking route, matching the path the current site already uses. */
const BOOKING_PATH = "/appointment-booking-page";

export const site = {
  name: "Kpatrice Global Solutions",
  tagline: "Strategic Operations & Growth Advisory",
  description:
    "Kpatrice Global Solutions serves as a Strategic Operations & Growth Advisor to small and mid-sized businesses and workforce development organizations navigating growth and change.",
  url: "https://kpatriceglobal.com",

  logo: {
    src: "/images/logo.png",
    alt: "Kpatrice Global Solutions — Connecting People to Resources",
  },

  contact: {
    // Publicly listed on the live site.
    email: "info@kpatrice.com",
    phone: "561.507.0240",
    // Contact-form submissions are delivered here (see CONTACT_TO_EMAIL).
    formRecipient: "keisha@kpatrice.com",
  },

  social: [
    { label: "Facebook", href: "" }, // TODO: live site links these icons to the homepage; add real URLs.
    { label: "LinkedIn", href: "" },
  ] as { label: string; href: string }[],

  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Strategic Operations & Growth Advisory",
    heading: "For organizations ready to execute - not just plan.",
    body: "Stop reacting to growth challenges. Start aligning strategy, systems, and partnerships so your organization can move forward with clarity and confidence.",
    primaryCta: { label: "Schedule a Strategy Clarity Call", href: BOOKING_PATH },
    image: { src: "/images/hero.jpg", alt: "A professional reviewing work on a tablet" },
  },

  bookingCta: { label: "Book a Free Consultation!", href: BOOKING_PATH },

  booking: {
    /** Path kept identical to the current site so existing links keep working. */
    path: BOOKING_PATH,
    /**
     * GoHighLevel calendar behind the live site's booking page —
     * "Keisha Smith's Personal Calendar". Override with
     * NEXT_PUBLIC_BOOKING_CALENDAR_ID to point at a different calendar.
     */
    calendarId: process.env.NEXT_PUBLIC_BOOKING_CALENDAR_ID || "O56KTncw7NcR9Q5uzM6n",
    calendarName: "Keisha Smith's Personal Calendar",
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

  /** Logos in the marquee, in the order the live site shows them. */
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
    heading: "Contact Us",
    formHeading: "SEND US A MESSAGE",
  },

  copyright: "Copyright © 2024 Kpatrice Global Solutions. All rights reserved",
};

export type Site = typeof site;
