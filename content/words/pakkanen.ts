import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem pakkase-.
// Genitive pakkasen, partitive pakkasta, illative pakkaseen, partitive pl pakkasia.
const pakkanen: Word = {
  fi: "pakkanen",
  slug: "pakkanen",
  pos: "substantiivi (tyyppi 38/nainen)",
  posClass: "substantiivi",
  level: "B1",
  en: "frost, sub-zero cold",
  selitys:
    "Pakkaslämpötila, alle nollan asteen kylmyys: 'kova pakkanen'. Tyyppi 38, ei astevaihtelua; vartalo pakkase-. Partitiivin monikko pakkasia. Johdettu sanasta pakata/pakkaa. Vrt. pakastaa, pakkaslukema.",
  kuva: { emoji: "🥶", alt: "pakkanen – alle nollan asteen kylmyys" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 38/nainen; ei astevaihtelua; vartalo pakkase-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pakkasen", merkitys: "of the frost" },
      { sija: "partitiivi (yks.)", muoto: "pakkasta", merkitys: "frost (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pakkasia", merkitys: "frosts (partitive pl.)" },
    ],
    huom:
      "Vartalo pakkase- (genetiivi pakkasen, partitiivi pakkasta). 'Kymmenen astetta pakkasta' = ten degrees below zero. 'Pakkasella' = in freezing weather. Vrt. pakastaa = to freeze.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pakkanen" },
          { label: "Partitiivi", form: "pakkasta" },
          { label: "Genetiivi", form: "pakkasen" },
          { label: "Inessiivi", form: "pakkasessa" },
          { label: "Elatiivi", form: "pakkasesta" },
          { label: "Illatiivi", form: "pakkaseen" },
          { label: "Adessiivi", form: "pakkasella" },
          { label: "Ablatiivi", form: "pakkaselta" },
          { label: "Allatiivi", form: "pakkaselle" },
          { label: "Essiivi", form: "pakkasena" },
          { label: "Translatiivi", form: "pakkaseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pakkaset" },
          { label: "Partitiivi", form: "pakkasia" },
          { label: "Genetiivi", form: "pakkasten / pakkasien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pakastaa",
      en: "to freeze (food)",
      taso: "B1",
      esim: { fi: "Pakastan marjat talveksi.", en: "I freeze the berries for winter." },
    },
    {
      fi: "pakkaslukema",
      en: "sub-zero reading",
      taso: "B2",
      esim: { fi: "Pakkaslukemat laskivat yöllä.", en: "The sub-zero readings dropped at night." },
    },
    {
      fi: "pakkasyö",
      en: "frosty night",
      taso: "B2",
      esim: { fi: "Kirkas pakkasyö oli kaunis.", en: "The clear frosty night was beautiful." },
    },
  ],
  synonyymit: [
    { fi: "kylmyys", en: "cold(ness)" },
    { fi: "halla", en: "ground frost" },
  ],
  esimerkit: {
    A2: { fi: "Ulkona on kova pakkanen.", en: "It's freezing cold outside." },
    B1: { fi: "Pakkanen paukkui yöllä.", en: "The frost crackled at night." },
    B2: {
      fi: "Kovalla pakkasella kannattaa pukeutua lämpimästi kerroksittain.",
      en: "In hard frost it's worth dressing warmly in layers.",
    },
  },
  updatedAt: "2026-06-07",
};

export default pakkanen;
