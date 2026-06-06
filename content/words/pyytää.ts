import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53 (huutaa-pattern), t–d gradation, stem pyytä-.
// Present pyydän, IRREGULAR past pyysin (in the "ask/request" sense), past participle pyytänyt.
const pyytaa: Word = {
  fi: "pyytää",
  slug: "pyytää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to ask (for), to request",
  selitys:
    "Esittää toive saada jotain: 'pyydän apua' (I ask for help). Astevaihtelu t:d (pyytää → pyydän), imperfekti poikkeava: pyysin. Pyydettävä asia partitiivissa.",
  kuva: { emoji: "🙋", alt: "pyytää – esittää toive saada jotain" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-tää); astevaihtelu t:d; vartalo pyytä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "pyydän", merkitys: "I ask for" },
      { sija: "imperfekti (minä)", muoto: "pyysin", merkitys: "I asked for" },
      { sija: "NUT-partisiippi", muoto: "pyytänyt", merkitys: "(have) asked for" },
    ],
    huom:
      "Imperfekti on poikkeava: pyysin, pyysit, pyysi (ei *pyydin). Astevaihtelu t:d preesensissä: pyydän, pyydät. Vrt. kysyä = to ask (a question). Pyyntö = request.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "pyydän" },
          { label: "sinä", form: "pyydät" },
          { label: "hän", form: "pyytää" },
          { label: "me", form: "pyydämme" },
          { label: "te", form: "pyydätte" },
          { label: "he", form: "pyytävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pyydä" },
          { label: "hän", form: "ei pyydä" },
          { label: "he", form: "eivät pyydä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "pyysin" },
          { label: "sinä", form: "pyysit" },
          { label: "hän", form: "pyysi" },
          { label: "me", form: "pyysimme" },
          { label: "te", form: "pyysitte" },
          { label: "he", form: "pyysivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pyytänyt" },
          { label: "hän", form: "on pyytänyt" },
          { label: "he", form: "ovat pyytäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pyydä!" },
          { label: "te", form: "pyytäkää!" },
          { label: "kielto (sinä)", form: "älä pyydä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pyyntö",
      en: "request",
      taso: "B1",
      esim: { fi: "Esitin pyynnön kohteliaasti.", en: "I made the request politely." },
    },
    {
      fi: "anteeksipyyntö",
      en: "apology",
      taso: "B2",
      esim: { fi: "Hyväksyn anteeksipyyntösi.", en: "I accept your apology." },
    },
    {
      fi: "pyydetty",
      en: "requested",
      taso: "B2",
      esim: { fi: "Lähetin pyydetyt tiedot.", en: "I sent the requested information." },
    },
  ],
  synonyymit: [
    { fi: "anoa", en: "to apply for, petition" },
    { fi: "pyydellä", en: "to keep asking" },
  ],
  esimerkit: {
    A2: { fi: "Pyydän laskun, kiitos.", en: "I'd like the bill, please." },
    B1: { fi: "Pyysin häneltä apua.", en: "I asked him for help." },
    B2: {
      fi: "Hän pyysi anteeksi, vaikkei ollut tehnyt mitään väärää.",
      en: "She apologized even though she hadn't done anything wrong.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pyytaa;
