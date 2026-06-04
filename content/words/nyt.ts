import type { Word } from "@/lib/content-types";

// Invariant time adverb — no inflection, so no taivutus (per CONTENT-MODEL).
const nyt: Word = {
  fi: "nyt",
  slug: "nyt",
  pos: "adverbi",
  posClass: "adverbi",
  level: "A1",
  en: "now",
  selitys:
    "Ajan adverbi, joka viittaa nykyhetkeen. Ei taivuteta. Sijoittuu usein lauseen alkuun tai verbin jälkeen.",
  kielioppi: {
    tyyppi: "adverbi; ei taivuteta",
    muodot: [
      { sija: "perusmuoto", muoto: "nyt", merkitys: "now" },
      { sija: "vahvistettu", muoto: "juuri nyt", merkitys: "right now" },
      { sija: "vastakohta", muoto: "silloin", merkitys: "then (at that time)" },
    ],
    huom:
      "Taipumaton ajan adverbi. Sanajärjestys joustava: 'Nyt menen.' tai 'Menen nyt.' Älä sekoita sanaan 'nyky-' (nykyään, nykyinen), joka taipuu.",
  },
  johdokset: [
    {
      fi: "nykyään",
      en: "nowadays",
      taso: "A2",
      esim: { fi: "Nykyään asun Helsingissä.", en: "Nowadays I live in Helsinki." },
    },
    {
      fi: "nykyinen",
      en: "current, present",
      taso: "B1",
      esim: { fi: "Nykyinen asuntoni on pieni.", en: "My current apartment is small." },
    },
    {
      fi: "nykyhetki",
      en: "the present moment",
      taso: "B2",
      esim: { fi: "Eläminen nykyhetkessä on vaikeaa.", en: "Living in the present moment is hard." },
    },
  ],
  synonyymit: [
    { fi: "juuri nyt", en: "right now" },
    { fi: "tällä hetkellä", en: "at the moment" },
  ],
  esimerkit: {
    A2: { fi: "Mitä teet nyt?", en: "What are you doing now?" },
    B1: {
      fi: "Nyt kun ymmärrän kieliopin, lukeminen on helpompaa.",
      en: "Now that I understand the grammar, reading is easier.",
    },
    B2: { fi: "Nyt tai ei koskaan – päätä!", en: "Now or never – decide!" },
  },
  updatedAt: "2026-06-04",
};

export default nyt;
