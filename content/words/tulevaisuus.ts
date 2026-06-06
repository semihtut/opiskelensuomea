import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem tulevaisuude-.
// Genitive tulevaisuuden, partitive tulevaisuutta, illative tulevaisuuteen, partitive pl tulevaisuuksia.
const tulevaisuus: Word = {
  fi: "tulevaisuus",
  slug: "tulevaisuus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "the future",
  selitys:
    "Aika, joka on vielä tulossa: 'suunnitella tulevaisuutta'. Tyyppi 40, astevaihtelu t:d (tulevaisuus → tulevaisuuden). Yleensä yksikössä. Johdettu verbistä tulla. Vastakohta menneisyys.",
  kuva: { emoji: "🔮", alt: "tulevaisuus – aika, joka on vielä tulossa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (vartalo tulevaisuude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tulevaisuuden", merkitys: "of the future" },
      { sija: "partitiivi (yks.)", muoto: "tulevaisuutta", merkitys: "the future (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "tulevaisuuteen", merkitys: "into the future" },
    ],
    huom:
      "Tyyppi 40 (-uus/-yys): genetiivi -suuden, partitiivi -suutta, partitiivin monikko -suuksia. Yleensä yksikössä. 'Tulevaisuudessa' = in the future. Vastakohta menneisyys.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tulevaisuus" },
          { label: "Partitiivi", form: "tulevaisuutta" },
          { label: "Genetiivi", form: "tulevaisuuden" },
          { label: "Inessiivi", form: "tulevaisuudessa" },
          { label: "Elatiivi", form: "tulevaisuudesta" },
          { label: "Illatiivi", form: "tulevaisuuteen" },
          { label: "Adessiivi", form: "tulevaisuudella" },
          { label: "Ablatiivi", form: "tulevaisuudelta" },
          { label: "Allatiivi", form: "tulevaisuudelle" },
          { label: "Essiivi", form: "tulevaisuutena" },
          { label: "Translatiivi", form: "tulevaisuudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tulevaisuudet" },
          { label: "Partitiivi", form: "tulevaisuuksia" },
          { label: "Genetiivi", form: "tulevaisuuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuleva",
      en: "coming, future (adj.)",
      taso: "B1",
      esim: { fi: "Ensi vuosi on tuleva.", en: "Next year is coming." },
    },
    {
      fi: "tulevaisuudennäkymä",
      en: "future prospect, outlook",
      taso: "B2",
      esim: { fi: "Alan tulevaisuudennäkymät ovat hyvät.", en: "The field's future prospects are good." },
    },
    {
      fi: "tulevaisuudenusko",
      en: "faith in the future, optimism",
      taso: "B2",
      esim: { fi: "Nuorilla on vahva tulevaisuudenusko.", en: "Young people have strong faith in the future." },
    },
  ],
  synonyymit: [
    { fi: "tuleva aika", en: "coming time" },
    { fi: "huominen", en: "tomorrow, the future" },
  ],
  esimerkit: {
    A2: { fi: "Mitä haluat tehdä tulevaisuudessa?", en: "What do you want to do in the future?" },
    B1: { fi: "Tulevaisuus näyttää valoisalta.", en: "The future looks bright." },
    B2: {
      fi: "Kukaan ei voi tietää tulevaisuutta varmasti, joten kannattaa varautua eri vaihtoehtoihin.",
      en: "No one can know the future for sure, so it's worth preparing for different options.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tulevaisuus;
