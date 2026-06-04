import { Fraunces, Hanken_Grotesk } from "next/font/google";

// Display / headwords — a characterful variable serif (editorial feel).
// latin-ext is required so Finnish ä/ö/å render correctly.
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

// Body / UI — a legible humanist sans (NOT Inter/Roboto/system).
export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-hanken",
});
