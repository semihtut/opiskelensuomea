import type { Week } from "@/lib/content-types";

import week1 from "./1";

/**
 * Registry of all week definitions. Add a week: create content/weeks/<n>.ts and
 * import it here. The full Suomi 90 program is 13 weeks across 3 phases.
 */
export const weeks: Week[] = [week1];
