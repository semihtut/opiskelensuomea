import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, pp:p gradation. Genitive kaapin,
// partitive kaappia, illative kaappiin, partitive pl kaappeja.
const kaappi: Word = {
  fi: "kaappi",
  slug: "kaappi",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "cupboard, cabinet, closet",
  selitys:
    "Säilytyskaluste, jossa on ovet ja hyllyt. Tyyppi 5, astevaihtelu pp:p (kaappi → kaapin).",
  kuva: { alt: "kaappi – säilytyskaappi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu pp:p",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kaapin", merkitys: "of the cupboard" },
      { sija: "partitiivi (yks.)", muoto: "kaappia", merkitys: "cupboard (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kaappeja", merkitys: "cupboards (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa pp → p: kaapin, kaapissa, kaapit. Vahva aste säilyy: kaappia, kaappiin, kaappeja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kaappi" },
          { label: "Partitiivi", form: "kaappia" },
          { label: "Genetiivi", form: "kaapin" },
          { label: "Inessiivi", form: "kaapissa" },
          { label: "Elatiivi", form: "kaapista" },
          { label: "Illatiivi", form: "kaappiin" },
          { label: "Adessiivi", form: "kaapilla" },
          { label: "Ablatiivi", form: "kaapilta" },
          { label: "Allatiivi", form: "kaapille" },
          { label: "Essiivi", form: "kaappina" },
          { label: "Translatiivi", form: "kaapiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kaapit" },
          { label: "Partitiivi", form: "kaappeja" },
          { label: "Genetiivi", form: "kaappien" },
          { label: "Inessiivi", form: "kaapeissa" },
          { label: "Illatiivi", form: "kaappeihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaatekaappi",
      en: "wardrobe",
      taso: "A2",
      esim: { fi: "Ripustin takin vaatekaappiin.", en: "I hung the coat in the wardrobe." },
    },
    {
      fi: "jääkaappi",
      en: "refrigerator",
      taso: "A2",
      esim: { fi: "Maito on jääkaapissa.", en: "The milk is in the fridge." },
    },
    {
      fi: "kaapinovi",
      en: "cupboard door",
      taso: "B1",
      esim: { fi: "Kaapinovi narisee.", en: "The cupboard door squeaks." },
    },
  ],
  synonyymit: [
    { fi: "komero", en: "closet (built-in)" },
    { fi: "hyllykkö", en: "shelving unit" },
  ],
  esimerkit: {
    A2: { fi: "Lautaset ovat kaapissa.", en: "The plates are in the cupboard." },
    B1: { fi: "Ostimme uuden kaapin keittiöön.", en: "We bought a new cabinet for the kitchen." },
    B2: {
      fi: "Kaappi oli niin täynnä, ettei ovi mennyt kiinni.",
      en: "The cupboard was so full that the door wouldn't close.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kaappi;
