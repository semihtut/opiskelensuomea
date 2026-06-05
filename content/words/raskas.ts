import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, no gradation, consonant stem.
// Genitive raskaan, partitive raskasta, partitive pl raskaita. Comp raskaampi, superl raskain.
const raskas: Word = {
  fi: "raskas",
  slug: "raskas",
  pos: "adjektiivi (tyyppi 41/vieras)",
  posClass: "adjektiivi",
  level: "A2",
  en: "heavy",
  selitys:
    "Painava; myös kuvallisesti vaikea tai rankka. Tyyppi 41, ei astevaihtelua, konsonanttivartalo (raskasta). Vastakohta kevyt.",
  kuva: { emoji: "🏋️", alt: "raskas – painava taakka" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 41/vieras; ei astevaihtelua, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "raskaan", merkitys: "of the heavy" },
      { sija: "partitiivi (yks.)", muoto: "raskasta", merkitys: "heavy (partitive)" },
      { sija: "komparatiivi", muoto: "raskaampi", merkitys: "heavier" },
    ],
    huom:
      "Vokaalivartalo raskaa-: raskaan, raskaaseen, raskaita. Konsonanttivartalo näkyy partitiivissa raskasta. Vertailu raskaampi/raskain. Vastakohta kevyt.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "raskas" },
          { label: "Partitiivi", form: "raskasta" },
          { label: "Genetiivi", form: "raskaan" },
          { label: "Inessiivi", form: "raskaassa" },
          { label: "Illatiivi", form: "raskaaseen" },
          { label: "Adessiivi", form: "raskaalla" },
          { label: "Essiivi", form: "raskaana" },
          { label: "Translatiivi", form: "raskaaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "raskaat" },
          { label: "Partitiivi", form: "raskaita" },
          { label: "Genetiivi", form: "raskaiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "raskaampi" },
          { label: "Komparatiivi (gen.)", form: "raskaamman" },
          { label: "Superlatiivi (nom.)", form: "raskain" },
          { label: "Superlatiivi (gen.)", form: "raskaimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "raskaasti",
      en: "heavily",
      taso: "B1",
      esim: { fi: "Hän hengitti raskaasti.", en: "He breathed heavily." },
    },
    {
      fi: "raskauttaa",
      en: "to aggravate, burden",
      taso: "B2",
      esim: { fi: "Se raskauttaa tilannetta.", en: "It aggravates the situation." },
    },
    {
      fi: "raskaus",
      en: "pregnancy; heaviness",
      taso: "B2",
      esim: { fi: "Raskaus kesti yhdeksän kuukautta.", en: "The pregnancy lasted nine months." },
    },
  ],
  synonyymit: [
    { fi: "painava", en: "weighty" },
    { fi: "rankka", en: "tough, harsh" },
  ],
  esimerkit: {
    A2: { fi: "Tämä laukku on raskas.", en: "This bag is heavy." },
    B1: { fi: "Päivä oli pitkä ja raskas.", en: "The day was long and hard." },
    B2: {
      fi: "Raskainta oli hyvästellä vanhat ystävät.",
      en: "The hardest part was saying goodbye to old friends.",
    },
  },
  updatedAt: "2026-06-05",
};

export default raskas;
