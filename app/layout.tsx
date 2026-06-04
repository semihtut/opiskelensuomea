import type { Metadata } from "next";
import "./globals.css";

// Root layout. Fonts, Organization JSON-LD, and the shared header/footer are
// added in Phases 2/4 via the site-design and content-page-seo skills.
export const metadata: Metadata = {
  title: "Opiskelen Suomea",
  description: "Free, structured way to learn Finnish — Suomi 90.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
