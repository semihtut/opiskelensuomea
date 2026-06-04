import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 27/käsi with t:d gradation. Consonant
// stem in partitive (vuotta), weak d in closed syllables (vuoden), strong t before
// the illative (vuoteen). Plural stem vuos-.
const vuosi: Word = {
  fi: "vuosi",
  slug: "vuosi",
  pos: "substantiivi (tyyppi: käsi)",
  posClass: "substantiivi",
  level: "A1",
  en: "year",
  selitys:
    "Kahdentoista kuukauden jakso. Konsonanttivartalo (partitiivi vuotta), astevaihtelu t:d.",
  kuva: { emoji: "📆", alt: "vuosi – vuosikalenteri" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 27/käsi; astevaihtelu t:d, konsonanttivartalo",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "vuotta", merkitys: "year (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "vuoden", merkitys: "of the year" },
      { sija: "partitiivi (mon.)", muoto: "vuosia", merkitys: "years (partitive pl.)" },
    ],
    huom:
      "Partitiivi vuotta (konsonanttivartalo vuot-), genetiivi vuoden (heikko d), illatiivi vuoteen (vahva t). Iän kanssa: 'olen kolmekymmentä vuotta vanha'.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vuosi" },
          { label: "Partitiivi", form: "vuotta" },
          { label: "Genetiivi", form: "vuoden" },
          { label: "Inessiivi", form: "vuodessa" },
          { label: "Elatiivi", form: "vuodesta" },
          { label: "Illatiivi", form: "vuoteen" },
          { label: "Adessiivi", form: "vuodella" },
          { label: "Ablatiivi", form: "vuodelta" },
          { label: "Allatiivi", form: "vuodelle" },
          { label: "Essiivi", form: "vuotena" },
          { label: "Translatiivi", form: "vuodeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vuodet" },
          { label: "Partitiivi", form: "vuosia" },
          { label: "Genetiivi", form: "vuosien" },
          { label: "Illatiivi", form: "vuosiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vuosi",
      en: "anniversary (in compounds: vuosipäivä)",
      taso: "B1",
      esim: { fi: "Vietämme hääpäivän vuosipäivää.", en: "We celebrate our wedding anniversary." },
    },
    {
      fi: "vuosittain",
      en: "annually, every year",
      taso: "B1",
      esim: { fi: "Festivaali järjestetään vuosittain.", en: "The festival is held annually." },
    },
    {
      fi: "vuosikymmen",
      en: "decade",
      taso: "B2",
      esim: { fi: "Hän asui ulkomailla vuosikymmenen.", en: "He lived abroad for a decade." },
    },
  ],
  synonyymit: [
    { fi: "vuosikerta", en: "year, vintage (of a product)" },
    { fi: "ikävuosi", en: "year of age" },
  ],
  esimerkit: {
    A2: { fi: "Hyvää uutta vuotta!", en: "Happy New Year!" },
    B1: { fi: "Olen opiskellut suomea kaksi vuotta.", en: "I have studied Finnish for two years." },
    B2: {
      fi: "Vuoden aikana yritys kasvoi nopeasti.",
      en: "Over the course of the year the company grew quickly.",
    },
  },
  updatedAt: "2026-06-04",
};

export default vuosi;
