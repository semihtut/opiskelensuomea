import type { Word } from "@/lib/content-types";

import talo from "./talo";
import olla from "./olla";
import tehda from "./tehdä";
import voida from "./voida";
import saada from "./saada";
import aika from "./aika";
import paiva from "./päivä";
import henkilo from "./henkilö";
import hyva from "./hyvä";
import huono from "./huono";
import nyt from "./nyt";
import ja from "./ja";
import heiMitaKuuluu from "./hei-mitä-kuuluu";
// Week 1 · Day 2 — Ihmiset ja perhe
import perhe from "./perhe";
import aiti from "./äiti";
import isa from "./isä";
import lapsi from "./lapsi";
import nainen from "./nainen";
import mies from "./mies";
import ystava from "./ystävä";
import kaveri from "./kaveri";
import nimi from "./nimi";
import vanha from "./vanha";
import nuori from "./nuori";
import asua from "./asua";

/**
 * Registry of all word entries. Order is the canonical learning sequence used
 * for prev/next navigation (Week 1 Day 1 order; talo is the demo word, last).
 * Add a word: create content/words/<slug>.ts and import it here.
 */
export const words: Word[] = [
  olla,
  tehda,
  voida,
  saada,
  aika,
  paiva,
  henkilo,
  hyva,
  huono,
  nyt,
  ja,
  heiMitaKuuluu,
  // Day 2 — Ihmiset ja perhe
  perhe,
  aiti,
  isa,
  lapsi,
  nainen,
  mies,
  ystava,
  kaveri,
  nimi,
  vanha,
  nuori,
  asua,
  talo,
];
