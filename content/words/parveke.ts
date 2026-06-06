import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, k:kk gradation, stem parveke ~ parvekkee-.
// Genitive parvekkeen, partitive parveketta, illative parvekkeeseen, partitive pl parvekkeita.
const parveke: Word = {
  fi: "parveke",
  slug: "parveke",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "balcony",
  selitys:
    "Talon ulkoseinään liittyvä avoin taso: 'istua parvekkeella'. Tyyppi 48, astevaihtelu k:kk (parveke → parvekkeen). Partitiivin monikko parvekkeita. Johdettu sanasta parvi. Vrt. parvekekasvi.",
  kuva: { emoji: "🪟", alt: "parveke – talon ulkoseinään liittyvä avoin taso" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu k:kk (parveke ↔ parvekkee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "parvekkeen", merkitys: "of the balcony" },
      { sija: "partitiivi (yks.)", muoto: "parveketta", merkitys: "balcony (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "parvekkeita", merkitys: "balconies (partitive pl.)" },
    ],
    huom:
      "Nominatiivi parveke (yksi k, heikko aste), vahva aste kk obliikvimuodoissa (parvekkeen, parvekkeella). Partitiivi parveketta. 'Parvekkeella' = on the balcony. Vrt. parvi = loft.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "parveke" },
          { label: "Partitiivi", form: "parveketta" },
          { label: "Genetiivi", form: "parvekkeen" },
          { label: "Inessiivi", form: "parvekkeessa" },
          { label: "Elatiivi", form: "parvekkeesta" },
          { label: "Illatiivi", form: "parvekkeeseen" },
          { label: "Adessiivi", form: "parvekkeella" },
          { label: "Ablatiivi", form: "parvekkeelta" },
          { label: "Allatiivi", form: "parvekkeelle" },
          { label: "Essiivi", form: "parvekkeena" },
          { label: "Translatiivi", form: "parvekkeeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "parvekkeet" },
          { label: "Partitiivi", form: "parvekkeita" },
          { label: "Genetiivi", form: "parvekkeiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "parvekekasvi",
      en: "balcony plant",
      taso: "B2",
      esim: { fi: "Kastelen parvekekasvit joka aamu.", en: "I water the balcony plants every morning." },
    },
    {
      fi: "parvekepuutarha",
      en: "balcony garden",
      taso: "B2",
      esim: { fi: "Hänellä on pieni parvekepuutarha.", en: "She has a small balcony garden." },
    },
    {
      fi: "lasitettu parveke",
      en: "glazed balcony",
      taso: "B2",
      esim: { fi: "Asunnossa on lasitettu parveke.", en: "The apartment has a glazed balcony." },
    },
  ],
  synonyymit: [
    { fi: "terassi", en: "terrace" },
    { fi: "altaani", en: "balcony (dated)" },
  ],
  esimerkit: {
    A2: { fi: "Juon kahvia parvekkeella.", en: "I drink coffee on the balcony." },
    B1: { fi: "Parvekkeelta näkyy meri.", en: "You can see the sea from the balcony." },
    B2: {
      fi: "Kesäiltaisin parveke on talon mukavin paikka.",
      en: "On summer evenings the balcony is the nicest spot in the home.",
    },
  },
  updatedAt: "2026-06-06",
};

export default parveke;
