import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st cluster), stem poista-.
// Present minä poistan, hän poistaa; imperfect minä poistin; NUT poistanut.
const poistaa: Word = {
  fi: "poistaa",
  slug: "poistaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to remove, delete, take away",
  selitys:
    "Ottaa pois tai hävittää: 'poistaa tiedosto'. Tyyppi 1 (-aa), Kotus 53/muistaa, ei astevaihtelua (st säilyy). Objekti partitiivissa/akkusatiivissa. Johdettu sanasta pois. Vrt. pois, poisto, poistua.",
  kuva: { emoji: "🗑️", alt: "poistaa – ottaa pois tai hävittää" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; ei astevaihtelua; vartalo poista-",
    muodot: [
      { sija: "preesens (minä)", muoto: "poistan", merkitys: "I remove" },
      { sija: "imperfekti (minä)", muoto: "poistin", merkitys: "I removed" },
      { sija: "NUT-partisiippi", muoto: "poistanut", merkitys: "(have) removed" },
    ],
    huom:
      "Ei astevaihtelua – st-yhtymä säilyy (poistan, poistin, poistanut). Johdettu sanasta pois. Transitiivinen; intransitiivinen pari poistua = to leave. Vrt. poisto = deletion, pois = away.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "poistan" },
          { label: "sinä", form: "poistat" },
          { label: "hän", form: "poistaa" },
          { label: "me", form: "poistamme" },
          { label: "te", form: "poistatte" },
          { label: "he", form: "poistavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en poista" },
          { label: "hän", form: "ei poista" },
          { label: "he", form: "eivät poista" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "poistin" },
          { label: "sinä", form: "poistit" },
          { label: "hän", form: "poisti" },
          { label: "me", form: "poistimme" },
          { label: "te", form: "poistitte" },
          { label: "he", form: "poistivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen poistanut" },
          { label: "hän", form: "on poistanut" },
          { label: "he", form: "ovat poistaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "poista!" },
          { label: "te", form: "poistakaa!" },
          { label: "kielto (sinä)", form: "älä poista" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "poistua",
      en: "to leave, exit (intransitive)",
      taso: "B1",
      esim: { fi: "Poistuin huoneesta.", en: "I left the room." },
    },
    {
      fi: "poisto",
      en: "removal, deletion",
      taso: "B2",
      esim: { fi: "Tietojen poisto on pysyvää.", en: "The deletion of data is permanent." },
    },
  ],
  synonyymit: [
    { fi: "ottaa pois", en: "to take away" },
    { fi: "hävittää", en: "to destroy, get rid of" },
  ],
  esimerkit: {
    A2: { fi: "Poista vanhat kuvat.", en: "Delete the old photos." },
    B1: { fi: "Poistin viestin vahingossa.", en: "I deleted the message by accident." },
    B2: {
      fi: "Sovellus poistaa automaattisesti turhat tiedostot levyltä.",
      en: "The app automatically removes unnecessary files from the disk.",
    },
  },
  updatedAt: "2026-06-07",
};

export default poistaa;
