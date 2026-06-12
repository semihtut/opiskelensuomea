import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem keino-.
// Genitive keinon, partitive keinoa, illative keinoon, partitive pl keinoja.
const keino: Word = {
  fi: "keino",
  slug: "keino",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "means, method, way",
  selitys:
    "Tapa saavuttaa jokin tavoite: 'keino ratkaista ongelma'. Tyyppi 1, ei astevaihtelua. Vrt. tapa (way, habit), keinotekoinen (artificial).",
  kuva: { alt: "keino – tapa saavuttaa tavoite" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "keinon", merkitys: "of the means" },
      { sija: "partitiivi (yks.)", muoto: "keinoa", merkitys: "means (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "keinoja", merkitys: "means (partitive pl.)" },
    ],
    huom:
      "'Keinolla millä hyvänsä' = by any means. 'Viimeinen keino' = the last resort. Vrt. tapa = way/habit, keinotekoinen = artificial, keinottelu = speculation.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "keino" },
          { label: "Partitiivi", form: "keinoa" },
          { label: "Genetiivi", form: "keinon" },
          { label: "Inessiivi", form: "keinossa" },
          { label: "Elatiivi", form: "keinosta" },
          { label: "Illatiivi", form: "keinoon" },
          { label: "Adessiivi", form: "keinolla" },
          { label: "Ablatiivi", form: "keinolta" },
          { label: "Allatiivi", form: "keinolle" },
          { label: "Essiivi", form: "keinona" },
          { label: "Translatiivi", form: "keinoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "keinot" },
          { label: "Partitiivi", form: "keinoja" },
          { label: "Genetiivi", form: "keinojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "keinotekoinen",
      en: "artificial",
      taso: "B2",
      esim: { fi: "Se on keinotekoinen järvi.", en: "It is an artificial lake." },
    },
    {
      fi: "keinottelu",
      en: "speculation, profiteering",
      taso: "B2",
      esim: { fi: "Keinottelu nosti hintoja.", en: "Speculation drove up the prices." },
    },
    {
      fi: "apukeino",
      en: "aid, expedient",
      taso: "B2",
      esim: { fi: "Muistilista on hyvä apukeino.", en: "A checklist is a good aid." },
    },
  ],
  synonyymit: [
    { fi: "tapa", en: "way, method" },
    { fi: "menetelmä", en: "method" },
  ],
  esimerkit: {
    A2: { fi: "Etsin keinoa oppia nopeammin.", en: "I'm looking for a way to learn faster." },
    B1: { fi: "Kaikki keinot on jo kokeiltu.", en: "All the means have already been tried." },
    B2: {
      fi: "Tarkoitus ei pyhitä keinoja.",
      en: "The end does not justify the means.",
    },
  },
  updatedAt: "2026-06-06",
};

export default keino;
