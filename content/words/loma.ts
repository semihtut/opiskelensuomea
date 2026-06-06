import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem loma-.
// Genitive loman, partitive lomaa, illative lomaan, partitive pl lomia.
const loma: Word = {
  fi: "loma",
  slug: "loma",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "holiday, vacation; leave",
  selitys:
    "Vapaa-aika työstä tai koulusta: 'kesäloma'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko lomia. 'Lomalla' = on holiday. Alkuperäinen merkitys 'gap, opening'. Vrt. kesäloma, lomamatka, lomailla.",
  kuva: { emoji: "🏖️", alt: "loma – vapaa-aika työstä tai koulusta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "loman", merkitys: "of the holiday" },
      { sija: "partitiivi (yks.)", muoto: "lomaa", merkitys: "holiday (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lomia", merkitys: "holidays (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10, ei astevaihtelua. Partitiivin monikko lomia. 'Olla lomalla' = to be on holiday (adessiivi), 'jäädä lomalle' = to go on holiday. Vrt. kesäloma = summer holiday, lomailla = to vacation.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "loma" },
          { label: "Partitiivi", form: "lomaa" },
          { label: "Genetiivi", form: "loman" },
          { label: "Inessiivi", form: "lomassa" },
          { label: "Elatiivi", form: "lomasta" },
          { label: "Illatiivi", form: "lomaan" },
          { label: "Adessiivi", form: "lomalla" },
          { label: "Ablatiivi", form: "lomalta" },
          { label: "Allatiivi", form: "lomalle" },
          { label: "Essiivi", form: "lomana" },
          { label: "Translatiivi", form: "lomaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lomat" },
          { label: "Partitiivi", form: "lomia" },
          { label: "Genetiivi", form: "lomien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kesäloma",
      en: "summer holiday",
      taso: "A2",
      esim: { fi: "Kesäloma kestää neljä viikkoa.", en: "The summer holiday lasts four weeks." },
    },
    {
      fi: "lomamatka",
      en: "holiday trip",
      taso: "B1",
      esim: { fi: "Suunnittelemme lomamatkaa Italiaan.", en: "We're planning a holiday trip to Italy." },
    },
    {
      fi: "lomailla",
      en: "to be on holiday, vacation",
      taso: "B2",
      esim: { fi: "He lomailevat Espanjassa.", en: "They are holidaying in Spain." },
    },
  ],
  synonyymit: [
    { fi: "vapaa", en: "time off, day off" },
    { fi: "loma-aika", en: "holiday season" },
  ],
  esimerkit: {
    A2: { fi: "Olen ensi viikolla lomalla.", en: "I'm on holiday next week." },
    B1: { fi: "Vietimme loman mökillä.", en: "We spent the holiday at the cottage." },
    B2: {
      fi: "Pitkän loman jälkeen töihin paluu tuntui vaikealta.",
      en: "After a long holiday, returning to work felt difficult.",
    },
  },
  updatedAt: "2026-06-07",
};

export default loma;
