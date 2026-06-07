import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem työttömyyde- ~ työttömyyte-.
// Genitive työttömyyden, partitive työttömyyttä, partitive pl työttömyyksiä.
const tyottomyys: Word = {
  fi: "työttömyys",
  slug: "työttömyys",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "unemployment",
  selitys:
    "Tila, jossa ihmisellä ei ole työtä, tai ilmiö yhteiskunnassa: 'pitkäaikaistyöttömyys', 'työttömyys laski'. Tyyppi 40/kalleus, astevaihtelu t:d (työttömyys → työttömyyden). Sanasta työtön. Vrt. työtön, työllisyys, työttömyyskorvaus.",
  kuva: { emoji: "📉", alt: "työttömyys – tila jossa ihmisellä ei ole työtä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (työttömyyte- ~ työttömyyde-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "työttömyyden", merkitys: "of unemployment" },
      { sija: "partitiivi (yks.)", muoto: "työttömyyttä", merkitys: "unemployment (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "työttömyyksiä", merkitys: "unemployments (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40/kalleus (-yys): genetiivi -yyden (t:d), partitiivi -yyttä, partitiivin monikko -yyksiä. Ominaisuudennimi adjektiivista työtön. Yleensä yksikössä. Vastakohta työllisyys. Vrt. työtön.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "työttömyys" },
          { label: "Partitiivi", form: "työttömyyttä" },
          { label: "Genetiivi", form: "työttömyyden" },
          { label: "Inessiivi", form: "työttömyydessä" },
          { label: "Elatiivi", form: "työttömyydestä" },
          { label: "Illatiivi", form: "työttömyyteen" },
          { label: "Adessiivi", form: "työttömyydellä" },
          { label: "Ablatiivi", form: "työttömyydeltä" },
          { label: "Allatiivi", form: "työttömyydelle" },
          { label: "Essiivi", form: "työttömyytenä" },
          { label: "Translatiivi", form: "työttömyydeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "työttömyydet" },
          { label: "Partitiivi", form: "työttömyyksiä" },
          { label: "Genetiivi", form: "työttömyyksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työtön",
      en: "unemployed",
      taso: "B1",
      esim: { fi: "Hän on ollut työtön puoli vuotta.", en: "He has been unemployed for half a year." },
    },
    {
      fi: "työllisyys",
      en: "employment (rate)",
      taso: "B2",
      esim: { fi: "Työllisyys on parantunut.", en: "Employment has improved." },
    },
  ],
  synonyymit: [
    { fi: "työttömänä olo", en: "being out of work" },
  ],
  esimerkit: {
    A2: { fi: "Työttömyys on vaikeaa.", en: "Unemployment is hard." },
    B1: { fi: "Nuorten työttömyys huolettaa.", en: "Youth unemployment is worrying." },
    B2: {
      fi: "Pitkäaikainen työttömyys vaikuttaa sekä talouteen että ihmisen hyvinvointiin.",
      en: "Long-term unemployment affects both the economy and a person's well-being.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tyottomyys;
