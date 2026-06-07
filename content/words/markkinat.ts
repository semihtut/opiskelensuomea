import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: plurale tantum; plural declension Kotus type 12/kulkija, no gradation.
// Nominative pl markkinat, genitive pl markkinoiden, partitive pl markkinoita.
const markkinat: Word = {
  fi: "markkinat",
  slug: "markkinat",
  pos: "substantiivi (monikkosana, tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "B1",
  en: "market(s) (economics); fair",
  selitys:
    "Talouden vaihdannan järjestelmä tai kauppatapahtuma: 'kysyntä ja tarjonta markkinoilla'. Monikkosana (pluralia tantum), taipuu monikossa tyyppi 12/kulkija, ei astevaihtelua. Yksikkö 'markkina' on harvinainen. Vrt. kauppa, talous, kysyntä.",
  kuva: { emoji: "📈", alt: "markkinat – talouden vaihdannan järjestelmä" },

  kielioppi: {
    tyyppi: "substantiivi, monikkosana (pluralia tantum); monikon taivutus tyyppi 12/kulkija",
    muodot: [
      { sija: "nominatiivi (mon.)", muoto: "markkinat", merkitys: "the market(s)" },
      { sija: "genetiivi (mon.)", muoto: "markkinoiden", merkitys: "of the markets" },
      { sija: "partitiivi (mon.)", muoto: "markkinoita", merkitys: "markets (partitive)" },
    ],
    huom:
      "Monikkosana: käytetään monikossa (markkinat, markkinoilla). 'Markkinoilla' = on the market; 'tulla markkinoille' = to come to market. Eri merkitys: markkinat = myös tori-tapahtuma (fair). Vrt. kysyntä, tarjonta.",
  },
  taivutus: {
    sections: [
      {
        title: "Monikko (sijat)",
        rows: [
          { label: "Nominatiivi", form: "markkinat" },
          { label: "Partitiivi", form: "markkinoita" },
          { label: "Genetiivi", form: "markkinoiden" },
          { label: "Inessiivi", form: "markkinoissa" },
          { label: "Elatiivi", form: "markkinoista" },
          { label: "Illatiivi", form: "markkinoille" },
          { label: "Adessiivi", form: "markkinoilla" },
          { label: "Ablatiivi", form: "markkinoilta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "markkinointi",
      en: "marketing",
      taso: "B2",
      esim: { fi: "Markkinointi tavoitti nuoret.", en: "The marketing reached young people." },
    },
    {
      fi: "markkinoida",
      en: "to market",
      taso: "B2",
      esim: { fi: "Tuotetta markkinoidaan netissä.", en: "The product is marketed online." },
    },
  ],
  synonyymit: [
    { fi: "kauppapaikka", en: "marketplace" },
    { fi: "talous", en: "economy" },
  ],
  esimerkit: {
    A2: { fi: "Tuote tuli markkinoille.", en: "The product came on the market." },
    B1: { fi: "Markkinoilla on kova kilpailu.", en: "There is fierce competition on the market." },
    B2: {
      fi: "Markkinoiden heilahtelut vaikuttavat sijoittajien päätöksiin.",
      en: "The fluctuations of the markets affect investors' decisions.",
    },
  },
  updatedAt: "2026-06-07",
};

export default markkinat;
