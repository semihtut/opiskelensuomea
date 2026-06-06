import type { Week } from "@/lib/content-types";

import week1 from "./1";
import week2 from "./2";
import week3 from "./3";
import week4 from "./4";
import week5 from "./5";
import week6 from "./6";
import week7 from "./7";
import week8 from "./8";

/**
 * Registry of all week definitions. Add a week: create content/weeks/<n>.ts and
 * import it here. The full Suomi 90 program is 13 weeks across 3 phases.
 */
export const weeks: Week[] = [week1, week2, week3, week4, week5, week6, week7, week8];
