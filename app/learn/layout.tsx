import type { Metadata } from "next";

// Learning surface — engagement-first, depends on local progress, so noindex.
export const metadata: Metadata = {
  title: "Harjoittele",
  robots: { index: false, follow: true },
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
