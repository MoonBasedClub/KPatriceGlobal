import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="container-page py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Get in touch</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        Tell us a little about the work and we&rsquo;ll come back to you within two business days.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_18rem]">
        <ContactForm />
        <aside className="space-y-4 text-sm text-muted lg:border-l lg:border-line lg:pl-8">
          {site.contact.email && (
            <p>
              <span className="block font-medium text-ink">Email</span>
              <a className="hover:text-ink" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </p>
          )}
          {site.contact.phone && (
            <p>
              <span className="block font-medium text-ink">Phone</span>
              <a className="hover:text-ink" href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`}>
                {site.contact.phone}
              </a>
            </p>
          )}
          {site.contact.location && (
            <p>
              <span className="block font-medium text-ink">Location</span>
              {site.contact.location}
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}
