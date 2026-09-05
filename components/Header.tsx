import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} — home`} className="flex items-center">
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={260}
            height={130}
            priority
            className="h-12 w-auto"
          />
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
