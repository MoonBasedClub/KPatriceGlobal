import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={260}
            height={130}
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm text-muted">{site.description}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted hover:text-ink">
              {item.label}
            </Link>
          ))}
          {site.contact.email && (
            <a href={`mailto:${site.contact.email}`} className="text-muted hover:text-ink">
              {site.contact.email}
            </a>
          )}
          {site.social.map((s) => (
            <a key={s.href} href={s.href} className="text-muted hover:text-ink">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container-page border-t border-line py-6 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. {site.tagline}.
      </div>
    </footer>
  );
}
