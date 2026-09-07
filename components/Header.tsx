import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-page flex h-28 items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} — home`} className="flex items-center">
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={900}
            height={450}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </Link>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 text-sm sm:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:+1${site.contact.phone.replace(/\D/g, "")}`}
            className="btn-primary ml-2 px-4 py-2 text-xs uppercase tracking-wide"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
