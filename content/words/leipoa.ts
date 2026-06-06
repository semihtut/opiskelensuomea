import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, p:v gradation, stem leipo- ~ leivo-.
// Present minä leivon, hän leipoo; imperfect minä leivoin, hän leipoi; NUT leiponut.
const leipoa: Word = {
  fi: "leipoa",
  slug: "leipoa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to bake",
  selitys:
    "Valmistaa leivonnaisia, kuten leipää tai kakkua: 'leipoa pullaa'. Tyyppi 1 (-oa), astevaihtelu p:v (leivon ~ leipoo). Johdettu sanasta leipä. Vrt. leivos (pastry), leipuri (baker).",
  kuva: { emoji: "🧁", alt: "leipoa – valmistaa leivonnaisia" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-oa), Kotus 52/sanoa; astevaihtelu p:v (leivon ↔ leipoo)",
    muodot: [
      { sija: "preesens (minä)", muoto: "leivon", merkitys: "I bake" },
      { sija: "imperfekti (minä)", muoto: "leivoin", merkitys: "I baked" },
      { sija: "NUT-partisiippi", muoto: "leiponut", merkitys: "(have) baked" },
    ],
    huom:
      "Heikko aste v minä/sinä/me/te-muodoissa (leivon, leivoin), vahva aste p hän/he- ja perusmuodossa (leipoo, leipoi, leiponut). Tarkoittaa koko leipomisprosessia, ei vain uunissa kypsentämistä.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "leivon" },
          { label: "sinä", form: "leivot" },
          { label: "hän", form: "leipoo" },
          { label: "me", form: "leivomme" },
          { label: "te", form: "leivotte" },
          { label: "he", form: "leipovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en leivo" },
          { label: "hän", form: "ei leivo" },
          { label: "he", form: "eivät leivo" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "leivoin" },
          { label: "sinä", form: "leivoit" },
          { label: "hän", form: "leipoi" },
          { label: "me", form: "leivoimme" },
          { label: "te", form: "leivoitte" },
          { label: "he", form: "leipoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen leiponut" },
          { label: "hän", form: "on leiponut" },
          { label: "he", form: "ovat leiponeet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "leivo!" },
          { label: "te", form: "leipokaa!" },
          { label: "kielto (sinä)", form: "älä leivo" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "leivos",
      en: "pastry, baked treat",
      taso: "B1",
      esim: { fi: "Kahvilassa oli herkullisia leivoksia.", en: "There were delicious pastries in the café." },
    },
    {
      fi: "leipuri",
      en: "baker",
      taso: "B1",
      esim: { fi: "Leipuri herää aikaisin aamulla.", en: "The baker wakes up early in the morning." },
    },
    {
      fi: "leivonta",
      en: "baking",
      taso: "B2",
      esim: { fi: "Leivonta on minun harrastukseni.", en: "Baking is my hobby." },
    },
  ],
  synonyymit: [
    { fi: "tehdä taikinaa", en: "to make dough" },
    { fi: "paistaa leivonnaisia", en: "to bake pastries" },
  ],
  esimerkit: {
    A2: { fi: "Leivon pullaa viikonloppuna.", en: "I bake buns at the weekend." },
    B1: { fi: "Äiti leipoi kakun syntymäpäivääni.", en: "Mum baked a cake for my birthday." },
    B2: {
      fi: "Joulun alla monet leipovat piparkakkuja koko perheen voimin.",
      en: "Before Christmas many bake gingerbread together as a whole family.",
    },
  },
  updatedAt: "2026-06-07",
};

export default leipoa;
