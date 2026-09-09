import Image from "next/image";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page flex flex-col items-center gap-6 py-12 text-center">
        <Image
          src={site.logo.src}
          alt={site.logo.alt}
          width={900}
          height={450}
          className="h-16 w-auto"
        />
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a className="text-muted hover:text-ink" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
          <a
            className="text-muted hover:text-ink"
            href={`tel:+1${site.contact.phone.replace(/\D/g, "")}`}
          >
            {site.contact.phone}
          </a>
        </div>
        <p className="text-xs text-muted">
          Copyright &copy; {new Date().getFullYear()} {site.copyright}
        </p>
      </div>
    </footer>
  );
}
