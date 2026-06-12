import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem viimeise-.
// Genitive viimeisen, partitive viimeistä, illative viimeiseen, partitive pl viimeisiä.
const viimeinen: Word = {
  fi: "viimeinen",
  slug: "viimeinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A2",
  en: "last, final",
  selitys:
    "Sarjan tai järjestyksen viimeinen, viimeksi tuleva: 'viimeinen kerta'. Tyyppi 38, ei astevaihtelua; vartalo viimeise-. Partitiivin monikko viimeisiä. Vastakohta ensimmäinen. Vrt. viime (last, previous).",
  kuva: { alt: "viimeinen – sarjan tai järjestyksen viimeinen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua; vartalo viimeise-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "viimeisen", merkitys: "of the last (one)" },
      { sija: "partitiivi (yks.)", muoto: "viimeistä", merkitys: "last (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "viimeisiä", merkitys: "last (partitive pl.)" },
    ],
    huom:
      "Vartalo viimeise- (genetiivi viimeisen, partitiivi viimeistä). Vastakohta ensimmäinen. HUOM ero: viimeinen = last in order; viime = previous (viime viikko = last week). Vrt. viimein = at last.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "viimeinen" },
          { label: "Partitiivi", form: "viimeistä" },
          { label: "Genetiivi", form: "viimeisen" },
          { label: "Inessiivi", form: "viimeisessä" },
          { label: "Elatiivi", form: "viimeisestä" },
          { label: "Illatiivi", form: "viimeiseen" },
          { label: "Adessiivi", form: "viimeisellä" },
          { label: "Ablatiivi", form: "viimeiseltä" },
          { label: "Allatiivi", form: "viimeiselle" },
          { label: "Essiivi", form: "viimeisenä" },
          { label: "Translatiivi", form: "viimeiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "viimeiset" },
          { label: "Partitiivi", form: "viimeisiä" },
          { label: "Genetiivi", form: "viimeisten / viimeisien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "viimein",
      en: "at last, finally",
      taso: "B1",
      esim: { fi: "Viimein pääsimme perille.", en: "At last we arrived." },
    },
    {
      fi: "viimeistään",
      en: "at the latest",
      taso: "B2",
      esim: { fi: "Tule viimeistään kahdeksalta.", en: "Come by eight at the latest." },
    },
    {
      fi: "viimeistellä",
      en: "to finish off, finalize",
      taso: "B2",
      esim: { fi: "Viimeistelin raportin.", en: "I finalized the report." },
    },
  ],
  synonyymit: [
    { fi: "viimeisin", en: "the latest, most recent" },
    { fi: "lopullinen", en: "final, definitive" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on viimeinen kerta.", en: "This is the last time." },
    B1: { fi: "Hän tuli viimeisenä maaliin.", en: "He came last to the finish." },
    B2: {
      fi: "Viimeisellä hetkellä hän muutti mielensä.",
      en: "At the last moment he changed his mind.",
    },
  },
  updatedAt: "2026-06-06",
};

export default viimeinen;
