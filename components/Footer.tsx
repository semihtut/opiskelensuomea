import Link from "next/link";
import { SITE } from "@/lib/site";

// Site footer with the author byline (E-E-A-T) and key links.
export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface/60">
      <div className="mx-auto flex max-w-page-wide flex-col gap-3 px-6 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>
          Kirjoittaja:{" "}
          <Link href="/about" className="text-link">
            {SITE.author.name}
          </Link>
          . Sisältö tarkistetaan Kielitoimiston sanakirjasta.
        </p>
        <p>
          © {SITE.name} · <span lang="fi">{SITE.tagline}</span>
        </p>
      </div>
    </footer>
  );
}
