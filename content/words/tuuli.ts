import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni, no gradation, consonant stem.
// Genitive tuulen, partitive tuulta, illative tuuleen, partitive pl tuulia.
const tuuli: Word = {
  fi: "tuuli",
  slug: "tuuli",
  pos: "substantiivi (tyyppi 26/pieni)",
  posClass: "substantiivi",
  level: "A2",
  en: "wind",
  selitys:
    "Liikkuva ilma. Tyyppi 26, ei astevaihtelua, mutta konsonanttivartalo näkyy partitiivissa tuulta. Myös 'olla hyvällä tuulella' = be in a good mood.",
  kuva: { alt: "tuuli – puhaltava tuuli" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 26/pieni; ei astevaihtelua, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tuulen", merkitys: "of the wind" },
      { sija: "partitiivi (yks.)", muoto: "tuulta", merkitys: "wind (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tuulia", merkitys: "winds (partitive pl.)" },
    ],
    huom:
      "Konsonanttivartalo näkyy partitiivissa tuulta. Muuten vartalo tuule-: tuulen, tuuleen, tuulessa. Idiomi: 'hyvällä tuulella' = in a good mood.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tuuli" },
          { label: "Partitiivi", form: "tuulta" },
          { label: "Genetiivi", form: "tuulen" },
          { label: "Inessiivi", form: "tuulessa" },
          { label: "Elatiivi", form: "tuulesta" },
          { label: "Illatiivi", form: "tuuleen" },
          { label: "Adessiivi", form: "tuulella" },
          { label: "Ablatiivi", form: "tuulelta" },
          { label: "Allatiivi", form: "tuulelle" },
          { label: "Essiivi", form: "tuulena" },
          { label: "Translatiivi", form: "tuuleksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tuulet" },
          { label: "Partitiivi", form: "tuulia" },
          { label: "Genetiivi", form: "tuulien" },
          { label: "Inessiivi", form: "tuulissa" },
          { label: "Illatiivi", form: "tuuliin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuulinen",
      en: "windy",
      taso: "A2",
      esim: { fi: "Sää on tuulinen tänään.", en: "The weather is windy today." },
    },
    {
      fi: "tuulla",
      en: "to blow (of wind)",
      taso: "B1",
      esim: { fi: "Ulkona tuulee kovaa.", en: "It's blowing hard outside." },
    },
    {
      fi: "tuulilasi",
      en: "windshield",
      taso: "B2",
      esim: { fi: "Tuulilasi oli jäässä.", en: "The windshield was iced over." },
    },
  ],
  synonyymit: [
    { fi: "viima", en: "cold draft, chill wind" },
    { fi: "tuulenvire", en: "breeze" },
  ],
  esimerkit: {
    A2: { fi: "Kylmä tuuli puhaltaa pohjoisesta.", en: "A cold wind blows from the north." },
    B1: { fi: "Tuuli kaatoi puita myrskyssä.", en: "The wind knocked down trees in the storm." },
    B2: {
      fi: "Olen tänään hyvällä tuulella, koska aurinko paistaa.",
      en: "I'm in a good mood today because the sun is shining.",
    },
  },
  updatedAt: "2026-06-04",
};

export default tuuli;
