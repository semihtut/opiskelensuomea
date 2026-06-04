import type { Metadata } from "next";

// Learning surface — engagement-first, depends on local progress state, so noindex
// (the reference/acquisition pages carry SEO). See docs/DESIGN-SYSTEM.md.
export const metadata: Metadata = {
  title: "Oma edistyminen",
  robots: { index: false, follow: true },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
