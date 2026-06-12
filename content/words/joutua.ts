import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, t:d gradation, stem joutu- ~ joudu-.
// Present minä joudun, hän joutuu; imperfect minä jouduin; NUT joutunut.
const joutua: Word = {
  fi: "joutua",
  slug: "joutua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to end up (in); to be forced to, have to",
  selitys:
    "Päätyä tahtomattaan johonkin tilanteeseen tai joutua tekemään jotain: 'joutua vaikeuksiin', 'jouduin odottamaan'. Tyyppi 1 (-ua), Kotus 52/sanoa, astevaihtelu t:d (joudun). Vrt. päästä, joutua + illatiivi.",
  kuva: { alt: "joutua – päätyä tahtomattaan johonkin tilanteeseen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; astevaihtelu t:d (joutu- ~ joudu-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "joudun", merkitys: "I end up / have to" },
      { sija: "imperfekti (minä)", muoto: "jouduin", merkitys: "I ended up / had to" },
      { sija: "NUT-partisiippi", muoto: "joutunut", merkitys: "(have) ended up" },
    ],
    huom:
      "Astevaihtelu t:d: vahva joutu- (joutua, joutuu, joutunut), heikko joudu- (joudun, jouduin). Aina tahaton: 'joutua johonkin' (illat.) tai 'joutua tekemään' (= to be forced to). Vastakohta tahdolle: päästä = to get to. Vrt. päästä.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "joudun" },
          { label: "sinä", form: "joudut" },
          { label: "hän", form: "joutuu" },
          { label: "me", form: "joudumme" },
          { label: "te", form: "joudutte" },
          { label: "he", form: "joutuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en joudu" },
          { label: "hän", form: "ei joudu" },
          { label: "he", form: "eivät joudu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "jouduin" },
          { label: "sinä", form: "jouduit" },
          { label: "hän", form: "joutui" },
          { label: "me", form: "jouduimme" },
          { label: "te", form: "jouduitte" },
          { label: "he", form: "joutuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen joutunut" },
          { label: "hän", form: "on joutunut" },
          { label: "he", form: "ovat joutuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "joudu!" },
          { label: "te", form: "joutukaa!" },
          { label: "kielto (sinä)", form: "älä joudu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "joutua vaikeuksiin",
      en: "to get into trouble",
      taso: "B2",
      esim: { fi: "Hän joutui vaikeuksiin velkojen takia.", en: "He got into trouble because of debts." },
    },
    {
      fi: "joutava",
      en: "idle, useless",
      taso: "B2",
      esim: { fi: "Älä puhu joutavia.", en: "Don't talk nonsense." },
    },
  ],
  synonyymit: [
    { fi: "päätyä", en: "to end up" },
  ],
  esimerkit: {
    A2: { fi: "Jouduin odottamaan kauan.", en: "I had to wait a long time." },
    B1: { fi: "Auto hajosi, ja jouduimme kävelemään.", en: "The car broke down and we had to walk." },
    B2: {
      fi: "Jos et maksa laskua ajoissa, voit joutua maksamaan korkoa.",
      en: "If you don't pay the bill on time, you may end up paying interest.",
    },
  },
  updatedAt: "2026-06-07",
};

export default joutua;
