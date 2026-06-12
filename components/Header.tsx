import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SITE } from "@/lib/site";

// Site header / primary navigation. Server-rendered, semantic <nav>. The horizontal
// nav shows from md up; below that a MobileNav disclosure replaces it.
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
    <header className="sticky top-0 z-40 border-b border-line bg-surface/80 backdrop-blur-md supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex max-w-page-wide items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-semibold text-accent no-underline"
          lang="fi"
        >
          {SITE.name}
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <nav aria-label="Päävalikko" className="hidden md:block">
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
          <ThemeToggle />
          <MobileNav items={NAV} />
        </div>
      </div>
    </header>
  );
}
