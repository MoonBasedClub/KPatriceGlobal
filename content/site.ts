/**
 * Single source of truth for all site copy and imagery.
 *
 * The company name, tagline and brand colors come from the official logo.
 * Strings still marked `TODO` are placeholders: the live site at
 * kpatriceglobal.com could not be read from the build environment (blocked by
 * the network egress policy), so body copy has not been transcribed from it.
 */

export const site = {
  name: "KPatrice Global Solutions",
  shortName: "KPatrice Global",
  tagline: "Connecting People to Resources",
  description:
    "KPatrice Global Solutions connects people to the resources, partners, and programs they need — working with school districts, agencies, and employers to close the gap between opportunity and access.",
  url: "https://kpatriceglobal.com",

  logo: {
    src: "/images/logo.png",
    alt: "KPatrice Global Solutions — Connecting People to Resources",
  },

  contact: {
    email: "keisha@kpatrice.com",
    // TODO: add phone and address if they appear on the live site.
    phone: "",
    location: "",
  },

  social: [
    // TODO: confirm real profile URLs.
  ] as { label: string; href: string }[],

  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Book", href: "/book" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    // TODO: replace with the real headline from the live site.
    heading: "Connecting people to resources.",
    body: "We bridge the distance between the people who need opportunity and the organizations built to provide it — in workforce development, education, and community programs.",
    primaryCta: { label: "Book a consultation", href: "/book" },
    secondaryCta: { label: "What we do", href: "/services" },
    image: {
      src: "/images/hero-professional.png",
      alt: "A professional reviewing work on a tablet in a bright office",
    },
  },

  // TODO: replace with the real service lines from the live site.
  services: [
    {
      title: "Workforce development",
      body: "Connecting job seekers with training, credentials, and employers who are actively hiring.",
      image: {
        src: "/images/services-workforce.png",
        alt: "Two colleagues reviewing work together on a manufacturing floor",
      },
    },
    {
      title: "Consulting & advisory",
      body: "Program design and strategy for agencies and districts building services that have to reach real people.",
      image: {
        src: "/images/services-consulting.png",
        alt: "Three professionals in discussion around a conference table",
      },
    },
    {
      title: "Community partnerships",
      body: "Building the relationships between employers, educators, and community organizations that make programs work.",
      image: null,
    },
    {
      title: "Training & facilitation",
      body: "Workshops and facilitation that leave teams with something they can actually run.",
      image: null,
    },
  ],

  about: {
    heading: "About KPatrice Global Solutions",
    // TODO: replace with the real company story and founder bio.
    paragraphs: [
      "KPatrice Global Solutions exists to close the distance between people and the resources meant to serve them.",
      "We work with school districts, public agencies, employers, and community organizations — the institutions holding the resources — and with the people trying to reach them, making sure those two sides actually meet.",
      "The work spans workforce development, program strategy, and the partnerships that hold a community's services together.",
    ],
    image: {
      src: "/images/about-team.png",
      alt: "Colleagues in conversation in a meeting room",
    },
  },

  /**
   * Partner / client logos for the carousel.
   * Drop each file in public/images/partners/ and add a row here.
   */
  partners: [
    {
      name: "The School District of Palm Beach County",
      src: "/images/partners/palm-beach-county-schools.png",
      href: "",
    },
    // TODO: add the remaining partner logos from the live site's carousel.
  ] as { name: string; src: string; href: string }[],

  // TODO: replace with real figures, or delete this section.
  proof: [
    { stat: "15+", label: "years connecting people to resources" },
    { stat: "40+", label: "partner organizations" },
    { stat: "6", label: "sectors served" },
  ],
};

export type Site = typeof site;
