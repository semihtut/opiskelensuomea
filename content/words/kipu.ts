import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, p:v gradation. Genitive kivun,
// partitive kipua, illative kipuun, partitive pl kipuja.
const kipu: Word = {
  fi: "kipu",
  slug: "kipu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "pain, ache",
  selitys:
    "Epämiellyttävä tuntemus kehossa. Tyyppi 1, astevaihtelu p:v (kipu → kivun). Vrt. särky (tietynlainen kipu).",
  kuva: { alt: "kipu – kivun tunne" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu p:v",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kivun", merkitys: "of the pain" },
      { sija: "partitiivi (yks.)", muoto: "kipua", merkitys: "pain (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kipuja", merkitys: "pains (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa p → v: kivun, kivussa, kivulla. Vahva aste säilyy: kipua, kipuun, kipuja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kipu" },
          { label: "Partitiivi", form: "kipua" },
          { label: "Genetiivi", form: "kivun" },
          { label: "Inessiivi", form: "kivussa" },
          { label: "Elatiivi", form: "kivusta" },
          { label: "Illatiivi", form: "kipuun" },
          { label: "Adessiivi", form: "kivulla" },
          { label: "Ablatiivi", form: "kivulta" },
          { label: "Allatiivi", form: "kivulle" },
          { label: "Essiivi", form: "kipuna" },
          { label: "Translatiivi", form: "kivuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kivut" },
          { label: "Partitiivi", form: "kipuja" },
          { label: "Genetiivi", form: "kipujen" },
          { label: "Inessiivi", form: "kivuissa" },
          { label: "Illatiivi", form: "kipuihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kipeä",
      en: "sore, painful",
      taso: "A2",
      esim: { fi: "Minulla on kipeä kurkku.", en: "I have a sore throat." },
    },
    {
      fi: "kivulias",
      en: "painful",
      taso: "B2",
      esim: { fi: "Toipuminen oli kivulias.", en: "The recovery was painful." },
    },
    {
      fi: "kivunlievitys",
      en: "pain relief",
      taso: "B2",
      esim: { fi: "Hän sai kivunlievitystä.", en: "She was given pain relief." },
    },
  ],
  synonyymit: [
    { fi: "särky", en: "ache" },
    { fi: "tuska", en: "agony, anguish" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on kipu vatsassa.", en: "I have a pain in my stomach." },
    B1: { fi: "Kipu hellitti lääkkeen jälkeen.", en: "The pain eased after the medicine." },
    B2: {
      fi: "Hän kärsi kovista kivuista koko yön.",
      en: "He suffered severe pains all night.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kipu;
