import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem lapsuude- ~ lapsuute-.
// Genitive lapsuuden, partitive lapsuutta, partitive pl lapsuuksia.
const lapsuus: Word = {
  fi: "lapsuus",
  slug: "lapsuus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "childhood",
  selitys:
    "Elämänvaihe, jolloin ihminen on lapsi: 'onnellinen lapsuus'. Tyyppi 40/kalleus, astevaihtelu t:d (lapsuus → lapsuuden). Sanasta lapsi. Vrt. lapsi, nuoruus, aikuisuus.",
  kuva: { alt: "lapsuus – elämänvaihe jolloin ihminen on lapsi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (lapsuute- ~ lapsuude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lapsuuden", merkitys: "of childhood" },
      { sija: "partitiivi (yks.)", muoto: "lapsuutta", merkitys: "childhood (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lapsuuksia", merkitys: "childhoods (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40/kalleus (-uus): genetiivi -uuden (t:d), partitiivi -uutta, partitiivin monikko -uuksia. Sanasta lapsi. Yleensä yksikössä. Lapsuudenkoti = childhood home. Vrt. nuoruus, vanhuus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lapsuus" },
          { label: "Partitiivi", form: "lapsuutta" },
          { label: "Genetiivi", form: "lapsuuden" },
          { label: "Inessiivi", form: "lapsuudessa" },
          { label: "Elatiivi", form: "lapsuudesta" },
          { label: "Illatiivi", form: "lapsuuteen" },
          { label: "Adessiivi", form: "lapsuudella" },
          { label: "Ablatiivi", form: "lapsuudelta" },
          { label: "Allatiivi", form: "lapsuudelle" },
          { label: "Essiivi", form: "lapsuutena" },
          { label: "Translatiivi", form: "lapsuudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lapsuudet" },
          { label: "Partitiivi", form: "lapsuuksia" },
          { label: "Genetiivi", form: "lapsuuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lapsuudenkoti",
      en: "childhood home",
      taso: "B2",
      esim: { fi: "Kävin lapsuudenkodissani.", en: "I visited my childhood home." },
    },
    {
      fi: "lapsi",
      en: "child",
      taso: "A1",
      esim: { fi: "Heillä on kaksi lasta.", en: "They have two children." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Minulla oli onnellinen lapsuus.", en: "I had a happy childhood." },
    B1: { fi: "Hän muisteli lapsuuttaan.", en: "She reminisced about her childhood." },
    B2: {
      fi: "Lapsuuden kokemukset vaikuttavat aikuisuuteen asti.",
      en: "Childhood experiences have an effect well into adulthood.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lapsuus;
