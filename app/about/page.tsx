import { site } from "@/content/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="container-page py-20">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">{site.about.heading}</h1>
      <div className="mt-10 max-w-2xl space-y-6 text-lg text-muted">
        {site.about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
