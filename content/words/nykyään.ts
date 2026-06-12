import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: ajan adverbi, taipumaton (nyky- + -än).
const nykyaan: Word = {
  fi: "nykyään",
  slug: "nykyään",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "nowadays, these days",
  selitys:
    "Tähän aikaan, näinä päivinä, ennen-sanan vastakohtana: 'nykyään moni tekee etätyötä'. Taipumaton ajan adverbi. Vrt. nyt (now), ennen (before), nykyinen (current), nykyaika.",
  kuva: { alt: "nykyään – tähän aikaan, näinä päivinä" },

  kielioppi: {
    tyyppi: "adverbi (ajan adverbi); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "nykyään", merkitys: "nowadays" },
      { sija: "vrt.", muoto: "ennen", merkitys: "before, in the past" },
      { sija: "vrt.", muoto: "nyt", merkitys: "now" },
    ],
    huom:
      "Taipumaton adverbi (ei sijamuotoja). Viittaa nykyiseen aikakauteen, vastakohtana 'ennen' (before). Vrt. adjektiivi nykyinen = current, substantiivi nykyaika = the present day.",
  },
  johdokset: [
    {
      fi: "nykyinen",
      en: "current, present",
      taso: "B1",
      esim: { fi: "Nykyinen tilanne on parempi.", en: "The current situation is better." },
    },
    {
      fi: "nykyaika",
      en: "the present day, modern times",
      taso: "B2",
      esim: { fi: "Nykyaika vaatii joustavuutta.", en: "Modern times require flexibility." },
    },
  ],
  synonyymit: [
    { fi: "nykyisin", en: "nowadays" },
    { fi: "näinä aikoina", en: "these days" },
  ],
  esimerkit: {
    A2: { fi: "Nykyään asun Helsingissä.", en: "Nowadays I live in Helsinki." },
    B1: { fi: "Nykyään moni opiskelee verkossa.", en: "Nowadays many people study online." },
    B2: {
      fi: "Nykyään tieto leviää nopeammin kuin koskaan ennen.",
      en: "Nowadays information spreads faster than ever before.",
    },
  },
  updatedAt: "2026-06-07",
};

export default nykyaan;
