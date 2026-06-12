import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 74/katketa, t–d gradation, stem putoa-.
// Present putoan, past putosin, past participle pudonnut. Intransitive.
const pudota: Word = {
  fi: "pudota",
  slug: "pudota",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to fall, drop (intransitive)",
  selitys:
    "Tippua korkeammalta alas itsestään: 'kynä putosi pöydältä'. Tyyppi 74, astevaihtelu t:d (pudota → putoan). Vrt. pudottaa = to drop (transitiivinen).",
  kuva: { alt: "pudota – tippua alas" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ota); astevaihtelu t:d; vartalo putoa-",
    muodot: [
      { sija: "preesens (minä)", muoto: "putoan", merkitys: "I fall" },
      { sija: "imperfekti (minä)", muoto: "putosin", merkitys: "I fell" },
      { sija: "NUT-partisiippi", muoto: "pudonnut", merkitys: "(have) fallen" },
    ],
    huom:
      "Intransitiivinen (ei objektia): jokin putoaa itsestään. Lähtöpaikka erosijassa: 'putosi pöydältä' (ablatiivi). Vrt. pudottaa = drop on purpose, tippua = to drip/fall.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "putoan" },
          { label: "sinä", form: "putoat" },
          { label: "hän", form: "putoaa" },
          { label: "me", form: "putoamme" },
          { label: "te", form: "putoatte" },
          { label: "he", form: "putoavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en putoa" },
          { label: "hän", form: "ei putoa" },
          { label: "he", form: "eivät putoa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "putosin" },
          { label: "sinä", form: "putosit" },
          { label: "hän", form: "putosi" },
          { label: "me", form: "putosimme" },
          { label: "te", form: "putositte" },
          { label: "he", form: "putosivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pudonnut" },
          { label: "hän", form: "on pudonnut" },
          { label: "he", form: "ovat pudonneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "putoa!" },
          { label: "te", form: "pudotkaa!" },
          { label: "kielto (sinä)", form: "älä putoa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pudottaa",
      en: "to drop (transitive)",
      taso: "B1",
      esim: { fi: "Pudotin avaimeni lattialle.", en: "I dropped my keys on the floor." },
    },
    {
      fi: "pudotus",
      en: "drop, fall; elimination",
      taso: "B2",
      esim: { fi: "Lämpötilan pudotus oli nopea.", en: "The temperature drop was rapid." },
    },
    {
      fi: "putous",
      en: "waterfall",
      taso: "B2",
      esim: { fi: "Ihailimme suurta putousta.", en: "We admired the great waterfall." },
    },
  ],
  synonyymit: [
    { fi: "tippua", en: "to drip, fall" },
    { fi: "romahtaa", en: "to collapse, plunge" },
  ],
  esimerkit: {
    A2: { fi: "Kirja putosi hyllyltä.", en: "The book fell off the shelf." },
    B1: { fi: "Putosin polkupyörältä, mutta en loukkaantunut.", en: "I fell off the bike, but I wasn't hurt." },
    B2: {
      fi: "Joukkue putosi sarjasta viime hetkellä.",
      en: "The team was relegated from the league at the last moment.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pudota;
