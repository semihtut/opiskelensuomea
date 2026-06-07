import type { Scenario } from "@/lib/content-types";

import tutustuminen from "./tutustuminen";
import sairastuminen from "./sairastuminen";

/**
 * Registry of all scenarios ("Viikon tilanne"). Add a scenario: create
 * content/scenarios/<slug>.ts and import it here. Order is by week, then category.
 */
export const scenarios: Scenario[] = [tutustuminen, sairastuminen];
