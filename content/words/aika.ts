import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: k:– gradation (aika → ajan), plural stem aiko-/ajoi-
// (partitive aikoja, genitive aikojen, inessive ajoissa, illative aikoihin).
const aika: Word = {
  fi: "aika",
  slug: "aika",
  pos: "substantiivi",
  posClass: "substantiivi",
  level: "A1",
  en: "time",
  selitys:
    "Ajan kulkua tai sen jaksoa tarkoittava sana. Astevaihtelussa vahva aik- vaihtuu heikoksi aj- (aika → ajan).",
  kuva: { emoji: "⏰", alt: "aika – kello" },

  kielioppi: {
    tyyppi: "substantiivi; astevaihtelu k : – (aika → ajan)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "aikaa", merkitys: "time (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "ajan", merkitys: "of time / the time's" },
      { sija: "partitiivi (mon.)", muoto: "aikoja", merkitys: "times (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu k : – — vahva vartalo aik- (nominatiivi, partitiivi: aika, aikaa), heikko aj- (genetiivi ym.: ajan, ajassa). Monikon vartalo aiko-/ajoi- (aikoja, aikojen, ajoissa).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "aika" },
          { label: "Partitiivi", form: "aikaa" },
          { label: "Genetiivi", form: "ajan" },
          { label: "Inessiivi", form: "ajassa" },
          { label: "Elatiivi", form: "ajasta" },
          { label: "Illatiivi", form: "aikaan" },
          { label: "Adessiivi", form: "ajalla" },
          { label: "Ablatiivi", form: "ajalta" },
          { label: "Allatiivi", form: "ajalle" },
          { label: "Essiivi", form: "aikana" },
          { label: "Translatiivi", form: "ajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ajat" },
          { label: "Partitiivi", form: "aikoja" },
          { label: "Genetiivi", form: "aikojen" },
          { label: "Inessiivi", form: "ajoissa" },
          { label: "Illatiivi", form: "aikoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "aikataulu",
      en: "schedule, timetable",
      taso: "A2",
      esim: { fi: "Mikä on bussin aikataulu?", en: "What's the bus schedule?" },
    },
    {
      fi: "aikuinen",
      en: "adult",
      taso: "A2",
      esim: { fi: "Olen jo aikuinen.", en: "I'm an adult already." },
    },
    {
      fi: "ajoissa",
      en: "in time, on time",
      taso: "B1",
      esim: { fi: "Tulin ajoissa kokoukseen.", en: "I arrived at the meeting in time." },
    },
  ],
  synonyymit: [
    { fi: "hetki", en: "moment" },
    { fi: "kausi", en: "period, season" },
  ],
  esimerkit: {
    A2: { fi: "Minulla ei ole aikaa nyt.", en: "I don't have time now." },
    B1: { fi: "Vietämme paljon aikaa yhdessä.", en: "We spend a lot of time together." },
    B2: { fi: "Ajan myötä kaikki muuttuu.", en: "With time, everything changes." },
  },
  updatedAt: "2026-06-04",
};

export default aika;
