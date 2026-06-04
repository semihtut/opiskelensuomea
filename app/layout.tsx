import type { Metadata } from "next";
import { fraunces, hankenGrotesk } from "./fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

// Root layout: fonts, shared header/footer, base metadata. Organization JSON-LD +
// richer metadata defaults are added in Phase 5 (lib/schema, lib/seo).
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" className={`${fraunces.variable} ${hankenGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
