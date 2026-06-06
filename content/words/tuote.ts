import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, t–tt gradation, stem tuottee-/tuote-.
// Genitive tuotteen, partitive tuotetta, illative tuotteeseen, partitive pl tuotteita.
const tuote: Word = {
  fi: "tuote",
  slug: "tuote",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "A2",
  en: "product",
  selitys:
    "Valmistettu tai tuotettu tavara: 'uusi tuote'. Tyyppi 48, astevaihtelu t:tt (tuote → tuotteen). Juuri verbistä tuottaa. Vrt. palvelu (service), maitotuote (dairy product).",
  kuva: { emoji: "📦", alt: "tuote – valmistettu tavara" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu t:tt",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tuotteen", merkitys: "of the product" },
      { sija: "partitiivi (yks.)", muoto: "tuotetta", merkitys: "product (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tuotteita", merkitys: "products (partitive pl.)" },
    ],
    huom:
      "Loppu -e, vartalo pitenee: tuote → tuotteen. Astevaihtelu t:tt: nominatiivi tuote ja partitiivi tuotetta (heikko t), muu taivutus tuottee- (vahva tt). Vrt. tuottaa = to produce, tuotanto = production.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tuote" },
          { label: "Partitiivi", form: "tuotetta" },
          { label: "Genetiivi", form: "tuotteen" },
          { label: "Inessiivi", form: "tuotteessa" },
          { label: "Elatiivi", form: "tuotteesta" },
          { label: "Illatiivi", form: "tuotteeseen" },
          { label: "Adessiivi", form: "tuotteella" },
          { label: "Ablatiivi", form: "tuotteelta" },
          { label: "Allatiivi", form: "tuotteelle" },
          { label: "Essiivi", form: "tuotteena" },
          { label: "Translatiivi", form: "tuotteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tuotteet" },
          { label: "Partitiivi", form: "tuotteita" },
          { label: "Genetiivi", form: "tuotteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuottaa",
      en: "to produce, yield",
      taso: "B1",
      esim: { fi: "Tehdas tuottaa autoja.", en: "The factory produces cars." },
    },
    {
      fi: "tuotanto",
      en: "production",
      taso: "B2",
      esim: { fi: "Tuotanto kasvoi viime vuonna.", en: "Production grew last year." },
    },
    {
      fi: "tuotemerkki",
      en: "brand",
      taso: "B2",
      esim: { fi: "Se on tunnettu tuotemerkki.", en: "It is a well-known brand." },
    },
  ],
  synonyymit: [
    { fi: "tavara", en: "goods, item" },
    { fi: "valmiste", en: "product, preparation" },
  ],
  esimerkit: {
    A2: { fi: "Tämä tuote on edullinen.", en: "This product is cheap." },
    B1: { fi: "Kaupassa on monia uusia tuotteita.", en: "The shop has many new products." },
    B2: {
      fi: "Yritys lanseerasi tuotteen, joka muutti koko markkinan.",
      en: "The company launched a product that changed the entire market.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tuote;
