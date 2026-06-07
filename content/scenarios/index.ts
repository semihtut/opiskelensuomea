import type { Scenario } from "@/lib/content-types";

import tutustuminen from "./tutustuminen";
import kahvilassa from "./kahvilassa";
import tienKysyminen from "./tien-kysyminen";
import vuokraAsunto from "./vuokra-asunto";
import tyohaastattelu from "./tyohaastattelu";
import pankissa from "./pankissa";
import saaMuuttaaSuunnitelmat from "./saa-muuttaa-suunnitelmat";
import lentokentalla from "./lentokentalla";
import erimielisyys from "./erimielisyys";
import taloyhtionKokous from "./taloyhtion-kokous";
import sairastuminen from "./sairastuminen";
import virastossaAsiointi from "./virastossa-asiointi";
import perhejuhla from "./perhejuhla";

/**
 * Registry of all scenarios ("Viikon tilanne"). One per week of the Suomi 90 program
 * (weeks 1–13). Add a scenario: create content/scenarios/<slug>.ts and import it here.
 */
export const scenarios: Scenario[] = [
  tutustuminen, // 1
  kahvilassa, // 2
  tienKysyminen, // 3
  vuokraAsunto, // 4
  tyohaastattelu, // 5
  pankissa, // 6
  saaMuuttaaSuunnitelmat, // 7
  lentokentalla, // 8
  erimielisyys, // 9
  taloyhtionKokous, // 10
  sairastuminen, // 11
  virastossaAsiointi, // 12
  perhejuhla, // 13
];
