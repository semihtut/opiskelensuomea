import type { Metadata } from "next";

// Personalised progress path — engagement surface, depends on local progress → noindex.
// The SEO pillar overview stays at /program.
export const metadata: Metadata = {
  title: "Edistymispolku",
  robots: { index: false, follow: true },
};

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  return children;
}
