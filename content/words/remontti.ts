import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, tt:t gradation, stem remontti- ~ remonti-.
// Genitive remontin, partitive remonttia, illative remonttiin, partitive pl remontteja.
const remontti: Word = {
  fi: "remontti",
  slug: "remontti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "B1",
  en: "renovation, repair work",
  selitys:
    "Asunnon tai rakennuksen korjaus ja uudistus: 'kylpyhuoneremontti'. Tyyppi 5, astevaihtelu tt:t (remontti → remontin). Partitiivin monikko remontteja. Vrt. remontoida (to renovate), peruskorjaus.",
  kuva: { emoji: "🔨", alt: "remontti – asunnon korjaus ja uudistus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu tt:t (remontti ↔ remonti-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "remontin", merkitys: "of the renovation" },
      { sija: "partitiivi (yks.)", muoto: "remonttia", merkitys: "renovation (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "remontteja", merkitys: "renovations (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa tt → t: genetiivi remontin, adessiivi remontilla. Vahva aste tt säilyy partitiivissa remonttia ja monikossa remontteja. 'Olla remontissa' = to be under renovation. Vrt. remontoida.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "remontti" },
          { label: "Partitiivi", form: "remonttia" },
          { label: "Genetiivi", form: "remontin" },
          { label: "Inessiivi", form: "remontissa" },
          { label: "Elatiivi", form: "remontista" },
          { label: "Illatiivi", form: "remonttiin" },
          { label: "Adessiivi", form: "remontilla" },
          { label: "Ablatiivi", form: "remontilta" },
          { label: "Allatiivi", form: "remontille" },
          { label: "Essiivi", form: "remonttina" },
          { label: "Translatiivi", form: "remontiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "remontit" },
          { label: "Partitiivi", form: "remontteja" },
          { label: "Genetiivi", form: "remonttien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "remontoida",
      en: "to renovate",
      taso: "B2",
      esim: { fi: "Remontoimme keittiön viime kesänä.", en: "We renovated the kitchen last summer." },
    },
    {
      fi: "putkiremontti",
      en: "plumbing renovation",
      taso: "B2",
      esim: { fi: "Taloyhtiössä on putkiremontti.", en: "The housing company has a plumbing renovation." },
    },
    {
      fi: "peruskorjaus",
      en: "complete renovation, overhaul",
      taso: "B2",
      esim: { fi: "Koulu on peruskorjauksessa.", en: "The school is undergoing a complete renovation." },
    },
  ],
  synonyymit: [
    { fi: "korjaus", en: "repair" },
    { fi: "kunnostus", en: "refurbishment" },
  ],
  esimerkit: {
    A2: { fi: "Asunnossa on remontti.", en: "The apartment is being renovated." },
    B1: { fi: "Remontti kesti kaksi kuukautta.", en: "The renovation took two months." },
    B2: {
      fi: "Suuri remontti nostaa asunnon arvoa, mutta maksaa paljon.",
      en: "A big renovation raises the apartment's value but costs a lot.",
    },
  },
  updatedAt: "2026-06-06",
};

export default remontti;
