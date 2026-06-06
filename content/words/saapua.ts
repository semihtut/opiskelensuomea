import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, p:v gradation, stem saapu- ~ saavu-.
// Present saavun, past saavuin, past participle saapunut. Takes illative for destination.
const saapua: Word = {
  fi: "saapua",
  slug: "saapua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to arrive",
  selitys:
    "Tulla perille määränpäähän: 'saapua asemalle'. Tyyppi 1 (-ua), astevaihtelu p:v (saavun). Määränpää illatiivissa. Vrt. saapuminen (arrival), tulla (more general).",
  kuva: { emoji: "🛬", alt: "saapua – tulla perille" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua); astevaihtelu p:v (saapu- ↔ saavu-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "saavun", merkitys: "I arrive" },
      { sija: "imperfekti (minä)", muoto: "saavuin", merkitys: "I arrived" },
      { sija: "NUT-partisiippi", muoto: "saapunut", merkitys: "(have) arrived" },
    ],
    huom:
      "Persoonamuodoissa heikko v (saavun, saavuin), 3. persoonassa ja infinitiivissä vahva p (saapuu, saapua, saapunut). Määränpää illatiivissa: 'saavumme Turkuun'. Vrt. saada = to get.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "saavun" },
          { label: "sinä", form: "saavut" },
          { label: "hän", form: "saapuu" },
          { label: "me", form: "saavumme" },
          { label: "te", form: "saavutte" },
          { label: "he", form: "saapuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en saavu" },
          { label: "hän", form: "ei saavu" },
          { label: "he", form: "eivät saavu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "saavuin" },
          { label: "sinä", form: "saavuit" },
          { label: "hän", form: "saapui" },
          { label: "me", form: "saavuimme" },
          { label: "te", form: "saavuitte" },
          { label: "he", form: "saapuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen saapunut" },
          { label: "hän", form: "on saapunut" },
          { label: "he", form: "ovat saapuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "saavu!" },
          { label: "te", form: "saapukaa!" },
          { label: "kielto (sinä)", form: "älä saavu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "saapuminen",
      en: "arrival",
      taso: "B2",
      esim: { fi: "Saapuminen kestää noin tunnin.", en: "The arrival takes about an hour." },
    },
    {
      fi: "saapumisaika",
      en: "arrival time",
      taso: "B2",
      esim: { fi: "Mikä on junan saapumisaika?", en: "What is the train's arrival time?" },
    },
    {
      fi: "saapuva",
      en: "incoming, arriving",
      taso: "B2",
      esim: { fi: "Saapuva juna on myöhässä.", en: "The arriving train is late." },
    },
  ],
  synonyymit: [
    { fi: "tulla perille", en: "to reach (a destination)" },
    { fi: "saavuttaa", en: "to reach, attain" },
  ],
  esimerkit: {
    A2: { fi: "Saavun kotiin kuudelta.", en: "I arrive home at six." },
    B1: { fi: "Vieraat saapuivat ajoissa.", en: "The guests arrived on time." },
    B2: {
      fi: "Lento saapui määränpäähän puoli tuntia etuajassa.",
      en: "The flight arrived at its destination half an hour early.",
    },
  },
  updatedAt: "2026-06-06",
};

export default saapua;
