import Link from "next/link";
import { SITE } from "@/lib/site";

// Site header / primary navigation. Server-rendered, semantic <nav>.
const NAV = [
  { href: "/dashboard", label: "Oma" },
  { href: "/roadmap", label: "Polku" },
  { href: "/program", label: "Ohjelma" },
  { href: "/words", label: "Sanat" },
  { href: "/week/1", label: "Viikot" },
  { href: "/scenarios", label: "Tilanteet" },
  { href: "/about", label: "Tietoa" },
];

export function Header() {
  return (
    <header className="border-b border-line bg-surface/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-semibold text-accent no-underline"
          lang="fi"
        >
          {SITE.name}
        </Link>
        <nav aria-label="Päävalikko">
          <ul className="flex items-center gap-5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink no-underline hover:text-accent hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
