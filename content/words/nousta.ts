import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 66/rohkaista (type 3), no gradation,
// e-stem nouse-. Present nousen, past nousin, past participle noussut.
const nousta: Word = {
  fi: "nousta",
  slug: "nousta",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A2",
  en: "to rise, get up, go up",
  selitys:
    "Liikkua ylöspäin; nousta seisomaan tai sängystä; kohota. Tyyppi 3 (e-vartalo): nousta → nousen. Vastakohta laskea / istua. Vrt. herätä (wake up).",
  kuva: { alt: "nousta – liike ylöspäin" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-sta → -se); ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "nousen", merkitys: "I rise / get up" },
      { sija: "imperfekti (minä)", muoto: "nousin", merkitys: "I rose" },
      { sija: "kielto (minä)", muoto: "en nouse", merkitys: "I don't get up" },
    ],
    huom:
      "Tyyppi 3: infinitiivin -sta jää pois ja tilalle tulee -e (nouse-). Nousta ylös = to get up; nousta seisomaan = to stand up; hinnat nousevat = prices rise.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "nousen" },
          { label: "sinä", form: "nouset" },
          { label: "hän", form: "nousee" },
          { label: "me", form: "nousemme" },
          { label: "te", form: "nousette" },
          { label: "he", form: "nousevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en nouse" },
          { label: "hän", form: "ei nouse" },
          { label: "he", form: "eivät nouse" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "nousin" },
          { label: "sinä", form: "nousit" },
          { label: "hän", form: "nousi" },
          { label: "me", form: "nousimme" },
          { label: "te", form: "nousitte" },
          { label: "he", form: "nousivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen noussut" },
          { label: "hän", form: "on noussut" },
          { label: "he", form: "ovat nousseet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "nouse!" },
          { label: "te", form: "nouskaa!" },
          { label: "kielto (sinä)", form: "älä nouse" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nousu",
      en: "rise, ascent, climb",
      taso: "A2",
      esim: { fi: "Hintojen nousu huolestuttaa.", en: "The rise in prices is worrying." },
    },
    {
      fi: "nostaa",
      en: "to lift, raise (something)",
      taso: "A2",
      esim: { fi: "Nostin laukun pöydälle.", en: "I lifted the bag onto the table." },
    },
    {
      fi: "auringonnousu",
      en: "sunrise",
      taso: "B1",
      esim: { fi: "Auringonnousu oli upea.", en: "The sunrise was magnificent." },
    },
  ],
  synonyymit: [
    { fi: "kohota", en: "to rise, ascend" },
    { fi: "nousta ylös", en: "to get up" },
  ],
  esimerkit: {
    A2: { fi: "Nousen aamulla kello seitsemän.", en: "I get up at seven in the morning." },
    B1: { fi: "Lämpötila nousi yli kolmenkymmenen asteen.", en: "The temperature rose above thirty degrees." },
    B2: {
      fi: "Kun nimeni luettiin, nousin seisomaan ja kävelin lavalle.",
      en: "When my name was read out, I stood up and walked to the stage.",
    },
  },
  updatedAt: "2026-06-05",
};

export default nousta;
