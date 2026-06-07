import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation, stem huomio-.
// Genitive huomion, partitive huomiota, partitive pl huomioita.
const huomio: Word = {
  fi: "huomio",
  slug: "huomio",
  pos: "substantiivi (tyyppi 3/valtio)",
  posClass: "substantiivi",
  level: "B1",
  en: "attention; observation, remark",
  selitys:
    "1) Tarkkaavaisuuden suuntaaminen: 'kiinnittää huomiota'. 2) Esitetty havainto tai kommentti: 'hyvä huomio'. Tyyppi 3/valtio, ei astevaihtelua; partitiivi huomiota, partitiivin monikko huomioita. Johdettu verbistä huomata. Vrt. huomata, huomauttaa, havainto.",
  kuva: { emoji: "👀", alt: "huomio – tarkkaavaisuus tai esitetty havainto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua (vartalo huomio-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "huomion", merkitys: "of the attention" },
      { sija: "partitiivi (yks.)", muoto: "huomiota", merkitys: "attention (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "huomioita", merkitys: "remarks (partitive pl.)" },
    ],
    huom:
      "Tyyppi 3 (-io): partitiivi -ota (huomiota), partitiivin monikko -oita (huomioita). Ei astevaihtelua. 'Kiinnittää huomiota johonkin' = to pay attention to; 'ottaa huomioon' = to take into account. Vrt. huomata.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "huomio" },
          { label: "Partitiivi", form: "huomiota" },
          { label: "Genetiivi", form: "huomion" },
          { label: "Inessiivi", form: "huomiossa" },
          { label: "Elatiivi", form: "huomiosta" },
          { label: "Illatiivi", form: "huomioon" },
          { label: "Adessiivi", form: "huomiolla" },
          { label: "Ablatiivi", form: "huomiolta" },
          { label: "Allatiivi", form: "huomiolle" },
          { label: "Essiivi", form: "huomiona" },
          { label: "Translatiivi", form: "huomioksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "huomiot" },
          { label: "Partitiivi", form: "huomioita" },
          { label: "Genetiivi", form: "huomioiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "huomata",
      en: "to notice",
      taso: "A2",
      esim: { fi: "Huomasin sen heti.", en: "I noticed it right away." },
    },
    {
      fi: "huomioida",
      en: "to take into account, note",
      taso: "B2",
      esim: { fi: "Huomioi myös riskit.", en: "Take the risks into account too." },
    },
    {
      fi: "huomaavainen",
      en: "considerate, attentive",
      taso: "B2",
      esim: { fi: "Hän on huomaavainen.", en: "He is considerate." },
    },
  ],
  synonyymit: [
    { fi: "tarkkaavaisuus", en: "attentiveness" },
    { fi: "havainto", en: "observation" },
  ],
  esimerkit: {
    A2: { fi: "Kiinnitä huomiota ohjeisiin.", en: "Pay attention to the instructions." },
    B1: { fi: "Otan ehdotuksesi huomioon.", en: "I'll take your suggestion into account." },
    B2: {
      fi: "Hän teki muutaman tarkkanäköisen huomion esityksestä.",
      en: "She made a few perceptive remarks about the presentation.",
    },
  },
  updatedAt: "2026-06-07",
};

export default huomio;
