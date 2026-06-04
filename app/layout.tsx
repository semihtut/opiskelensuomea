import type { Metadata } from "next";
import { fraunces, hankenGrotesk } from "./fonts";
import "./globals.css";

// Root layout. Organization JSON-LD + shared header/footer arrive in Phases 4/5.
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
    <html lang="en" className={`${fraunces.variable} ${hankenGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
