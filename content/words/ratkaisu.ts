import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem ratkaisu-.
// Genitive ratkaisun, partitive ratkaisua, partitive pl ratkaisuja.
const ratkaisu: Word = {
  fi: "ratkaisu",
  slug: "ratkaisu",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B1",
  en: "solution; decision",
  selitys:
    "Tapa, jolla ongelma saadaan ratkaistua, tai tehty päätös: 'löytää ratkaisu'. Tyyppi 2/palvelu, ei astevaihtelua. Johdettu verbistä ratkaista. Vrt. ongelma, ratkaista.",
  kuva: { emoji: "💡", alt: "ratkaisu – tapa ratkaista ongelma" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua (vartalo ratkaisu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ratkaisun", merkitys: "of the solution" },
      { sija: "partitiivi (yks.)", muoto: "ratkaisua", merkitys: "solution (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ratkaisuja", merkitys: "solutions (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2 (-u/-y, kolmitavuinen): ei astevaihtelua, partitiivin monikko -ja (ratkaisuja). Johdettu verbistä ratkaista. 'Tehdä ratkaisu' = to make a decision; 'löytää ratkaisu' = to find a solution.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ratkaisu" },
          { label: "Partitiivi", form: "ratkaisua" },
          { label: "Genetiivi", form: "ratkaisun" },
          { label: "Inessiivi", form: "ratkaisussa" },
          { label: "Elatiivi", form: "ratkaisusta" },
          { label: "Illatiivi", form: "ratkaisuun" },
          { label: "Adessiivi", form: "ratkaisulla" },
          { label: "Ablatiivi", form: "ratkaisulta" },
          { label: "Allatiivi", form: "ratkaisulle" },
          { label: "Essiivi", form: "ratkaisuna" },
          { label: "Translatiivi", form: "ratkaisuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ratkaisut" },
          { label: "Partitiivi", form: "ratkaisuja" },
          { label: "Genetiivi", form: "ratkaisujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ratkaista",
      en: "to solve, resolve",
      taso: "B1",
      esim: { fi: "Osaatko ratkaista tämän?", en: "Can you solve this?" },
    },
    {
      fi: "ratkaiseva",
      en: "decisive, crucial",
      taso: "B2",
      esim: { fi: "Se oli ratkaiseva hetki.", en: "It was a decisive moment." },
    },
  ],
  synonyymit: [
    { fi: "vastaus", en: "answer" },
    { fi: "päätös", en: "decision" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on hyvä ratkaisu.", en: "This is a good solution." },
    B1: { fi: "Etsimme yhdessä ratkaisua ongelmaan.", en: "We look for a solution to the problem together." },
    B2: {
      fi: "Lopullinen ratkaisu vaati useita kompromisseja molemmilta osapuolilta.",
      en: "The final solution required several compromises from both parties.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ratkaisu;
