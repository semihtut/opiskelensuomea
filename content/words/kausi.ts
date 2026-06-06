import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 27/käsi, t:d gradation, stem kaude- ~ kaut-.
// Genitive kauden, partitive kautta, illative kauteen, partitive pl kausia.
const kausi: Word = {
  fi: "kausi",
  slug: "kausi",
  pos: "substantiivi (tyyppi 27/käsi)",
  posClass: "substantiivi",
  level: "B1",
  en: "period, season, term",
  selitys:
    "Tietty ajanjakso: vuodenaika, tv-kausi tai toimikausi: 'sadekausi' / 'sarjan toinen kausi'. Tyyppi 27, astevaihtelu t:d (kausi → kauden, partitiivi kautta). Vrt. kuukausi, vuorokausi, kausityö.",
  kuva: { emoji: "🗓️", alt: "kausi – tietty ajanjakso" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 27/käsi; astevaihtelu t:d (kaude- ~ kaut-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kauden", merkitys: "of the period" },
      { sija: "partitiivi (yks.)", muoto: "kautta", merkitys: "period (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kausia", merkitys: "periods (partitive pl.)" },
    ],
    huom:
      "Kuten käsi: si → de/te. Genetiivi kauden, partitiivi kautta, illatiivi kauteen, partitiivin monikko kausia. 'Kautta' toimii myös postpositiona: 'kesän kautta' = via summer. Vrt. kuukausi = month.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kausi" },
          { label: "Partitiivi", form: "kautta" },
          { label: "Genetiivi", form: "kauden" },
          { label: "Inessiivi", form: "kaudessa" },
          { label: "Elatiivi", form: "kaudesta" },
          { label: "Illatiivi", form: "kauteen" },
          { label: "Adessiivi", form: "kaudella" },
          { label: "Ablatiivi", form: "kaudelta" },
          { label: "Allatiivi", form: "kaudelle" },
          { label: "Essiivi", form: "kautena" },
          { label: "Translatiivi", form: "kaudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kaudet" },
          { label: "Partitiivi", form: "kausia" },
          { label: "Genetiivi", form: "kausien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuukausi",
      en: "month",
      taso: "A2",
      esim: { fi: "Vuodessa on kaksitoista kuukautta.", en: "There are twelve months in a year." },
    },
    {
      fi: "sadekausi",
      en: "rainy season",
      taso: "B2",
      esim: { fi: "Sadekausi alkaa kesäkuussa.", en: "The rainy season starts in June." },
    },
    {
      fi: "kausityö",
      en: "seasonal work",
      taso: "B2",
      esim: { fi: "Hän tekee kausityötä maatilalla.", en: "He does seasonal work on a farm." },
    },
  ],
  synonyymit: [
    { fi: "jakso", en: "period, stretch" },
    { fi: "ajanjakso", en: "span of time" },
  ],
  esimerkit: {
    A2: { fi: "Sarjan uusi kausi alkaa pian.", en: "The series' new season starts soon." },
    B1: { fi: "Presidentin kausi kestää kuusi vuotta.", en: "The president's term lasts six years." },
    B2: {
      fi: "Talvikausi on monelle yritykselle hiljaisinta aikaa.",
      en: "The winter season is the quietest time for many businesses.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kausi;
