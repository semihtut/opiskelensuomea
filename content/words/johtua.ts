import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, t:d gradation, stem johtu- ~ johdu-.
// Present minä johdun, hän johtuu; imperfect minä johduin; NUT johtunut. Governs elative. Intransitive.
const johtua: Word = {
  fi: "johtua",
  slug: "johtua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to be caused by, result from, stem from",
  selitys:
    "Olla seurausta jostakin syystä: 'myöhästyminen johtui ruuhkasta'. Tyyppi 1 (-ua), Kotus 52/sanoa, astevaihtelu t:d (johdun). Intransitiivinen, hallitsee elatiivia ('johtua jostakin'). Useimmiten 3. persoonassa. Vrt. johtaa, syy, aiheutua.",
  kuva: { alt: "johtua – olla seurausta jostakin syystä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; astevaihtelu t:d (johtu- ~ johdu-)",
    muodot: [
      { sija: "preesens (se)", muoto: "johtuu", merkitys: "(it) is caused by" },
      { sija: "imperfekti (se)", muoto: "johtui", merkitys: "(it) was caused by" },
      { sija: "NUT-partisiippi", muoto: "johtunut", merkitys: "(has) resulted from" },
    ],
    huom:
      "Hallitsee elatiivia: 'johtua jostakin' = to be due to sth. Astevaihtelu t:d (johdun, mutta johtuu). Useimmiten yksikön/monikon 3. persoonassa. Vrt. aiheutua (synonyymi), johtaa = to lead.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "se / asia", form: "johtuu" },
          { label: "ne / asiat", form: "johtuvat" },
          { label: "kielto", form: "ei johdu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se / asia", form: "johtui" },
          { label: "ne / asiat", form: "johtuivat" },
          { label: "kielto", form: "ei johtunut" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se / asia", form: "on johtunut" },
          { label: "ne / asiat", form: "ovat johtuneet" },
        ],
      },
      {
        title: "Persoonamuodot (harv.)",
        rows: [
          { label: "minä", form: "johdun" },
          { label: "imperfekti (minä)", form: "johduin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "johtaa",
      en: "to lead, direct",
      taso: "B1",
      esim: { fi: "Tie johtaa rannalle.", en: "The road leads to the beach." },
    },
    {
      fi: "aiheutua",
      en: "to be caused (synonym)",
      taso: "B2",
      esim: { fi: "Vahinko aiheutui huolimattomuudesta.", en: "The damage was caused by carelessness." },
    },
  ],
  synonyymit: [
    { fi: "aiheutua", en: "to result from" },
    { fi: "olla seurausta", en: "to be a consequence of" },
  ],
  esimerkit: {
    A2: { fi: "Mistä tämä johtuu?", en: "What is this caused by?" },
    B1: { fi: "Virhe johtui väsymyksestä.", en: "The mistake was due to tiredness." },
    B2: {
      fi: "Ongelmat johtuivat osittain huonosta suunnittelusta ja osittain kiireestä.",
      en: "The problems stemmed partly from poor planning and partly from haste.",
    },
  },
  updatedAt: "2026-06-07",
};

export default johtua;
