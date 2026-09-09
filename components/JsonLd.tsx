import { site } from "@/content/site";

/**
 * Schema.org structured data for the business.
 *
 * This is what lets search engines show the phone number, service list and
 * booking action as a rich result rather than a plain blue link, and it is the
 * machine-readable half of the contact details the footer renders for humans.
 *
 * Everything here must stay true to what the page itself says — asserting
 * facts in JSON-LD that the visible copy does not support is what Google
 * penalises as structured-data spam. When a real postal address exists, add it
 * as an `address` PostalAddress: local pack placement depends on it.
 */
export function OrganizationJsonLd() {
  const profiles = site.social.map((s) => s.href).filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.seo.legalName,
    description: site.description,
    url: site.url,
    logo: `${site.url}${site.logo.src}`,
    image: `${site.url}${site.logo.src}`,
    email: site.contact.email,
    telephone: `+1${site.contact.phone.replace(/\D/g, "")}`,
    areaServed: site.seo.areaServed,
    // `sameAs` is how engines reconcile this business with its profiles
    // elsewhere, so a blank or wrong URL is worse than none. The key is
    // dropped entirely until real profile URLs are filled in.
    ...(profiles.length > 0 ? { sameAs: profiles } : {}),
    founder: { "@type": "Person", name: site.booking.host.name },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: site.services.heading,
      itemListElement: site.services.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.body,
        },
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}${site.booking.path}`,
      },
      result: { "@type": "Reservation", name: site.booking.heading },
    },
  };

  return (
    <script
      type="application/ld+json"
      // The payload is built from committed site copy, not user input, so
      // there is nothing here for a reader to inject into.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Breadcrumb trail for a sub-page, so search results show the path to it. */
export function BreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
