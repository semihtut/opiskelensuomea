import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, mp:mm gradation, stem hampaa- ~ hammas.
// Genitive hampaan, partitive hammasta, illative hampaaseen, partitive pl hampaita.
const hammas: Word = {
  fi: "hammas",
  slug: "hammas",
  pos: "substantiivi (tyyppi 41/vieras)",
  posClass: "substantiivi",
  level: "A2",
  en: "tooth",
  selitys:
    "Suun kova rakenne, jolla pureskellaan: 'pestä hampaat'. Tyyppi 41, astevaihtelu mp:mm (hammas → hampaan). Vahva aste mp näkyy vartalossa hampaa-. Vrt. hammaslääkäri (dentist), hammastahna (toothpaste).",
  kuva: { emoji: "🦷", alt: "hammas – suun kova rakenne" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 41/vieras; astevaihtelu mp:mm (hammas ↔ hampaa-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hampaan", merkitys: "of the tooth" },
      { sija: "partitiivi (yks.)", muoto: "hammasta", merkitys: "tooth (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hampaita", merkitys: "teeth (partitive pl.)" },
    ],
    huom:
      "Nominatiivissa hammas (mm), mutta vartalossa hampaa- (mp): genetiivi hampaan, monikon nominatiivi hampaat. Partitiivi yksikössä hammasta. Vrt. hammasharja = toothbrush.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hammas" },
          { label: "Partitiivi", form: "hammasta" },
          { label: "Genetiivi", form: "hampaan" },
          { label: "Inessiivi", form: "hampaassa" },
          { label: "Elatiivi", form: "hampaasta" },
          { label: "Illatiivi", form: "hampaaseen" },
          { label: "Adessiivi", form: "hampaalla" },
          { label: "Ablatiivi", form: "hampaalta" },
          { label: "Allatiivi", form: "hampaalle" },
          { label: "Essiivi", form: "hampaana" },
          { label: "Translatiivi", form: "hampaaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hampaat" },
          { label: "Partitiivi", form: "hampaita" },
          { label: "Genetiivi", form: "hampaiden / hampaitten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hammaslääkäri",
      en: "dentist",
      taso: "A2",
      esim: { fi: "Menen hammaslääkäriin huomenna.", en: "I'm going to the dentist tomorrow." },
    },
    {
      fi: "hammastahna",
      en: "toothpaste",
      taso: "A2",
      esim: { fi: "Hammastahna loppui.", en: "The toothpaste ran out." },
    },
    {
      fi: "hammasharja",
      en: "toothbrush",
      taso: "A2",
      esim: { fi: "Ostin uuden hammasharjan.", en: "I bought a new toothbrush." },
    },
  ],
  synonyymit: [
    { fi: "poskihammas", en: "molar" },
    { fi: "etuhammas", en: "front tooth" },
  ],
  esimerkit: {
    A2: { fi: "Pesen hampaat kahdesti päivässä.", en: "I brush my teeth twice a day." },
    B1: { fi: "Minulla on kipeä hammas.", en: "I have an aching tooth." },
    B2: {
      fi: "Säännöllinen hammashuolto ehkäisee suurempia ongelmia.",
      en: "Regular dental care prevents bigger problems.",
    },
  },
  updatedAt: "2026-06-06",
};

export default hammas;
