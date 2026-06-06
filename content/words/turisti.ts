import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem turisti-.
// Genitive turistin, partitive turistia, illative turistiin, partitive pl turisteja.
const turisti: Word = {
  fi: "turisti",
  slug: "turisti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "tourist",
  selitys:
    "Henkilö, joka matkustaa huvin vuoksi ja katselee nähtävyyksiä: 'kaupunki on täynnä turisteja'. Tyyppi 5, ei astevaihtelua (st säilyy). Partitiivin monikko turisteja. Vrt. matkailija, turismi.",
  kuva: { emoji: "📸", alt: "turisti – henkilö, joka matkustaa huvin vuoksi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "turistin", merkitys: "of the tourist" },
      { sija: "partitiivi (yks.)", muoto: "turistia", merkitys: "tourist (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "turisteja", merkitys: "tourists (partitive pl.)" },
    ],
    huom:
      "Tyyppi 5, ei astevaihtelua (st säilyy). Partitiivin monikko turisteja (e-vartalo). Vrt. matkailija (suomalaisempi synonyymi), turismi = tourism, turistikohde = tourist destination.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "turisti" },
          { label: "Partitiivi", form: "turistia" },
          { label: "Genetiivi", form: "turistin" },
          { label: "Inessiivi", form: "turistissa" },
          { label: "Elatiivi", form: "turistista" },
          { label: "Illatiivi", form: "turistiin" },
          { label: "Adessiivi", form: "turistilla" },
          { label: "Ablatiivi", form: "turistilta" },
          { label: "Allatiivi", form: "turistille" },
          { label: "Essiivi", form: "turistina" },
          { label: "Translatiivi", form: "turistiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "turistit" },
          { label: "Partitiivi", form: "turisteja" },
          { label: "Genetiivi", form: "turistien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "turismi",
      en: "tourism",
      taso: "B1",
      esim: { fi: "Turismi on alueelle tärkeää.", en: "Tourism is important for the region." },
    },
    {
      fi: "matkailija",
      en: "traveller, tourist",
      taso: "B1",
      esim: { fi: "Matkailijat ihastuivat maisemiin.", en: "The travellers were charmed by the scenery." },
    },
    {
      fi: "turistikohde",
      en: "tourist destination",
      taso: "B2",
      esim: { fi: "Se on suosittu turistikohde.", en: "It is a popular tourist destination." },
    },
  ],
  synonyymit: [
    { fi: "matkailija", en: "traveller" },
    { fi: "lomailija", en: "holidaymaker" },
  ],
  esimerkit: {
    A2: { fi: "Olen täällä turistina.", en: "I'm here as a tourist." },
    B1: { fi: "Turistit valokuvasivat vanhaa kirkkoa.", en: "The tourists photographed the old church." },
    B2: {
      fi: "Kesäisin pieni kylä täyttyy turisteista eri puolilta maailmaa.",
      en: "In summer the small village fills with tourists from all over the world.",
    },
  },
  updatedAt: "2026-06-07",
};

export default turisti;
