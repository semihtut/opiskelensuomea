import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 53/muistaa (verb type 1), no gradation,
// stem aja-. Present ajan, past ajoin/ajoi (a→o before i), past participle ajanut.
const ajaa: Word = {
  fi: "ajaa",
  slug: "ajaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to drive; to chase",
  selitys:
    "Ohjata ajoneuvoa, esim. autoa. Tyyppi 1, vartalo aja-, ei astevaihtelua. Imperfektissä a → o ennen i:tä (ajoin).",
  kuva: { alt: "ajaa – auton ratissa ajaminen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); vartalo aja-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "ajan", merkitys: "I drive" },
      { sija: "imperfekti (minä)", muoto: "ajoin", merkitys: "I drove" },
      { sija: "kielto (minä)", muoto: "en aja", merkitys: "I don't drive" },
    ],
    huom:
      "Imperfektissä vartalon a muuttuu o:ksi: ajan → ajoin. Erota 'ajaa autoa' (drive) ja 'ajaa takaa' (chase).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ajan" },
          { label: "sinä", form: "ajat" },
          { label: "hän", form: "ajaa" },
          { label: "me", form: "ajamme" },
          { label: "te", form: "ajatte" },
          { label: "he", form: "ajavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en aja" },
          { label: "sinä", form: "et aja" },
          { label: "hän", form: "ei aja" },
          { label: "me", form: "emme aja" },
          { label: "te", form: "ette aja" },
          { label: "he", form: "eivät aja" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ajoin" },
          { label: "sinä", form: "ajoit" },
          { label: "hän", form: "ajoi" },
          { label: "me", form: "ajoimme" },
          { label: "te", form: "ajoitte" },
          { label: "he", form: "ajoivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en ajanut" },
          { label: "sinä", form: "et ajanut" },
          { label: "hän", form: "ei ajanut" },
          { label: "me", form: "emme ajaneet" },
          { label: "te", form: "ette ajaneet" },
          { label: "he", form: "eivät ajaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ajanut" },
          { label: "sinä", form: "olet ajanut" },
          { label: "hän", form: "on ajanut" },
          { label: "me", form: "olemme ajaneet" },
          { label: "te", form: "olette ajaneet" },
          { label: "he", form: "ovat ajaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole ajanut" },
          { label: "hän", form: "ei ole ajanut" },
          { label: "he", form: "eivät ole ajaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "aja!" },
          { label: "te", form: "ajakaa!" },
          { label: "kielto (sinä)", form: "älä aja" },
          { label: "kielto (te)", form: "älkää ajako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ajo",
      en: "driving, a drive",
      taso: "B1",
      esim: { fi: "Ajo kesti kaksi tuntia.", en: "The drive took two hours." },
    },
    {
      fi: "ajaja",
      en: "driver",
      taso: "A2",
      esim: { fi: "Bussin ajaja oli ystävällinen.", en: "The bus driver was friendly." },
    },
    {
      fi: "ajokortti",
      en: "driver's license",
      taso: "A2",
      esim: { fi: "Sain ajokortin viime vuonna.", en: "I got my driver's license last year." },
    },
  ],
  synonyymit: [
    { fi: "kuljettaa", en: "to drive, transport" },
    { fi: "ohjata", en: "to steer, drive" },
  ],
  esimerkit: {
    A2: { fi: "Ajan autolla töihin.", en: "I drive to work by car." },
    B1: { fi: "Ajoimme rannikkoa pitkin koko päivän.", en: "We drove along the coast all day." },
    B2: {
      fi: "Hän on ajanut bussia kaupungissa yli kaksikymmentä vuotta.",
      en: "He has driven a bus in the city for over twenty years.",
    },
  },
  updatedAt: "2026-06-04",
};

export default ajaa;
