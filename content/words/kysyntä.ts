import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, nt:nn gradation, stem kysyntä- ~ kysynnä-.
// Genitive kysynnän, partitive kysyntää. Usually singular.
const kysynta: Word = {
  fi: "kysyntä",
  slug: "kysyntä",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B2",
  en: "demand (economics)",
  selitys:
    "Halukkuus ostaa tuotetta tai palvelua: 'kysyntä ja tarjonta'. Tyyppi 9/kala, astevaihtelu nt:nn (kysyntä → kysynnän). Yleensä yksikössä. Johdettu verbistä kysyä. Vastakohta tarjonta. Vrt. kysyä, tarjonta.",
  kuva: { emoji: "🛒", alt: "kysyntä – halukkuus ostaa tuotetta tai palvelua" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu nt:nn (vartalo kysynnä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kysynnän", merkitys: "of the demand" },
      { sija: "partitiivi (yks.)", muoto: "kysyntää", merkitys: "demand (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "kysyntään", merkitys: "into demand" },
    ],
    huom:
      "Astevaihtelu nt:nn: nominatiivi kysyntä (vahva nt), genetiivi kysynnän (heikko nn). Yleensä yksikössä. Johdettu verbistä kysyä. 'Kysyntä ja tarjonta' = supply and demand. Vastakohta tarjonta.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kysyntä" },
          { label: "Partitiivi", form: "kysyntää" },
          { label: "Genetiivi", form: "kysynnän" },
          { label: "Inessiivi", form: "kysynnässä" },
          { label: "Elatiivi", form: "kysynnästä" },
          { label: "Illatiivi", form: "kysyntään" },
          { label: "Adessiivi", form: "kysynnällä" },
          { label: "Ablatiivi", form: "kysynnältä" },
          { label: "Allatiivi", form: "kysynnälle" },
          { label: "Essiivi", form: "kysyntänä" },
          { label: "Translatiivi", form: "kysynnäksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kysyä",
      en: "to ask; (passive) to be in demand",
      taso: "A2",
      esim: { fi: "Tätä tuotetta kysytään paljon.", en: "This product is in great demand." },
    },
    {
      fi: "tarjonta",
      en: "supply",
      taso: "B2",
      esim: { fi: "Tarjonta ylitti kysynnän.", en: "Supply exceeded demand." },
    },
  ],
  synonyymit: [
    { fi: "tarve", en: "need" },
    { fi: "menekki", en: "sales, demand" },
  ],
  esimerkit: {
    A2: { fi: "Tuotteella on kova kysyntä.", en: "The product is in high demand." },
    B1: { fi: "Kysyntä kasvoi kesällä.", en: "Demand grew in the summer." },
    B2: {
      fi: "Kun kysyntä ylittää tarjonnan, hinnat yleensä nousevat.",
      en: "When demand exceeds supply, prices usually rise.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kysynta;
