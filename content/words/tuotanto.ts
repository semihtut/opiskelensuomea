import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, nt:nn gradation, stem tuotanto- ~ tuotanno-.
// Genitive tuotannon, partitive tuotantoa, partitive pl tuotantoja.
const tuotanto: Word = {
  fi: "tuotanto",
  slug: "tuotanto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B2",
  en: "production, output",
  selitys:
    "Tavaroiden tai palvelujen valmistaminen ja sen määrä: 'teollinen tuotanto'. Tyyppi 1/valo, astevaihtelu nt:nn (tuotanto → tuotannon). Johdettu verbistä tuottaa. Vrt. tuottaa, tuote, valmistus.",
  kuva: { emoji: "🏭", alt: "tuotanto – tavaroiden tai palvelujen valmistaminen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nt:nn (vartalo tuotanno-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tuotannon", merkitys: "of the production" },
      { sija: "partitiivi (yks.)", muoto: "tuotantoa", merkitys: "production (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tuotantoja", merkitys: "productions (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu nt:nn: nominatiivi tuotanto (vahva nt), genetiivi tuotannon (heikko nn). Johdettu verbistä tuottaa. 'Teollinen tuotanto' = industrial production. Vrt. tuottaa, valmistus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tuotanto" },
          { label: "Partitiivi", form: "tuotantoa" },
          { label: "Genetiivi", form: "tuotannon" },
          { label: "Inessiivi", form: "tuotannossa" },
          { label: "Elatiivi", form: "tuotannosta" },
          { label: "Illatiivi", form: "tuotantoon" },
          { label: "Adessiivi", form: "tuotannolla" },
          { label: "Ablatiivi", form: "tuotannolta" },
          { label: "Allatiivi", form: "tuotannolle" },
          { label: "Essiivi", form: "tuotantona" },
          { label: "Translatiivi", form: "tuotannoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tuotannot" },
          { label: "Partitiivi", form: "tuotantoja" },
          { label: "Genetiivi", form: "tuotantojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tuottaa",
      en: "to produce",
      taso: "B1",
      esim: { fi: "Tehdas tuottaa terästä.", en: "The factory produces steel." },
    },
    {
      fi: "tuotannollinen",
      en: "productional, manufacturing",
      taso: "B2",
      esim: { fi: "Tuotannolliset syyt vaikuttivat päätökseen.", en: "Production-related reasons affected the decision." },
    },
  ],
  synonyymit: [
    { fi: "valmistus", en: "manufacturing" },
    { fi: "tuottaminen", en: "producing" },
  ],
  esimerkit: {
    A2: { fi: "Tuotanto kasvaa.", en: "Production is growing." },
    B1: { fi: "Tehtaan tuotanto pysähtyi.", en: "The factory's production halted." },
    B2: {
      fi: "Uusiutuvan energian tuotanto lisääntyi merkittävästi viime vuonna.",
      en: "The production of renewable energy increased significantly last year.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tuotanto;
