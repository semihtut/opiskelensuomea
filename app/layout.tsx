import type { Metadata } from "next";
import { fraunces, hankenGrotesk } from "./fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/schema";
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
    <html
      lang="fi"
      className={`${fraunces.variable} ${hankenGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        {/* Apply the saved light/dark choice before paint to avoid a theme flash.
            Runs synchronously ahead of the rest of the body. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          }}
        />
        <JsonLd data={[organizationSchema(), websiteSchema(), personSchema()]} />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
