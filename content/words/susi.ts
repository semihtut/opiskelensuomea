import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 27/käsi, t:d gradation, stem sude- (cons. stem sut-).
// Genitive suden, partitive sutta, illative suteen, partitive pl susia.
const susi: Word = {
  fi: "susi",
  slug: "susi",
  pos: "substantiivi (tyyppi 27/käsi)",
  posClass: "substantiivi",
  level: "B1",
  en: "wolf",
  selitys:
    "Villi koiraeläin, joka elää laumassa: 'susi ulvoo'. Tyyppi 27/käsi, astevaihtelu t:d (susi → suden, partitiivi sutta). Vrt. koira, karhu, lauma.",
  kuva: { emoji: "🐺", alt: "susi – villi koiraeläin joka elää laumassa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 27/käsi; astevaihtelu t:d (sude- ~ konsonanttivartalo sut-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "suden", merkitys: "of the wolf" },
      { sija: "partitiivi (yks.)", muoto: "sutta", merkitys: "wolf (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "susia", merkitys: "wolves (partitive pl.)" },
    ],
    huom:
      "Tyyppi 27/käsi (kuten käsi → käden/kättä): vokaalivartalo sude- (suden, sudella), konsonanttivartalo sut- partitiivissa (sutta) ja illatiivissa (suteen). Partitiivin monikko susia. Vrt. käsi, vesi.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "susi" },
          { label: "Partitiivi", form: "sutta" },
          { label: "Genetiivi", form: "suden" },
          { label: "Inessiivi", form: "sudessa" },
          { label: "Elatiivi", form: "sudesta" },
          { label: "Illatiivi", form: "suteen" },
          { label: "Adessiivi", form: "sudella" },
          { label: "Ablatiivi", form: "sudelta" },
          { label: "Allatiivi", form: "sudelle" },
          { label: "Essiivi", form: "sutena" },
          { label: "Translatiivi", form: "sudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sudet" },
          { label: "Partitiivi", form: "susia" },
          { label: "Genetiivi", form: "susien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "susilauma",
      en: "wolf pack",
      taso: "B2",
      esim: { fi: "Susilauma liikkuu yhdessä.", en: "The wolf pack moves together." },
    },
    {
      fi: "sudenpentu",
      en: "wolf cub",
      taso: "B2",
      esim: { fi: "Sudenpennut syntyvät keväällä.", en: "Wolf cubs are born in spring." },
    },
  ],
  synonyymit: [
    { fi: "hukka", en: "wolf (folk/byname)" },
  ],
  esimerkit: {
    A2: { fi: "Susi on villieläin.", en: "The wolf is a wild animal." },
    B1: { fi: "Metsässä saattaa elää susia.", en: "There may be wolves living in the forest." },
    B2: {
      fi: "Sudet metsästävät laumana ja viestivät toisilleen ulvomalla.",
      en: "Wolves hunt as a pack and communicate with each other by howling.",
    },
  },
  updatedAt: "2026-06-07",
};

export default susi;
