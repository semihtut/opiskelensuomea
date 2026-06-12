import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, verbijohdos hakea → hake- + -mus.
// Stem hakemukse-. Genitive hakemuksen, partitive hakemusta, partitive pl hakemuksia.
const hakemus: Word = {
  fi: "hakemus",
  slug: "hakemus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "application",
  selitys:
    "Kirjallinen pyyntö, jolla haetaan esimerkiksi työpaikkaa tai opiskelupaikkaa: 'lähettää hakemus'. Tyyppi 39, ei astevaihtelua; vartalo hakemukse-. Partitiivin monikko hakemuksia. Johdettu verbistä hakea.",
  kuva: { alt: "hakemus – kirjallinen pyyntö esimerkiksi työpaikasta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua; vartalo hakemukse-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hakemuksen", merkitys: "of the application" },
      { sija: "partitiivi (yks.)", muoto: "hakemusta", merkitys: "application (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hakemuksia", merkitys: "applications (partitive pl.)" },
    ],
    huom:
      "Verbijohdos hakea → -mus; vartalo hakemukse- (genetiivi hakemuksen). Partitiivi hakemusta, partitiivin monikko hakemuksia. Vrt. työhakemus = job application.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hakemus" },
          { label: "Partitiivi", form: "hakemusta" },
          { label: "Genetiivi", form: "hakemuksen" },
          { label: "Inessiivi", form: "hakemuksessa" },
          { label: "Elatiivi", form: "hakemuksesta" },
          { label: "Illatiivi", form: "hakemukseen" },
          { label: "Adessiivi", form: "hakemuksella" },
          { label: "Ablatiivi", form: "hakemukselta" },
          { label: "Allatiivi", form: "hakemukselle" },
          { label: "Essiivi", form: "hakemuksena" },
          { label: "Translatiivi", form: "hakemukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hakemukset" },
          { label: "Partitiivi", form: "hakemuksia" },
          { label: "Genetiivi", form: "hakemusten / hakemuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työhakemus",
      en: "job application",
      taso: "B1",
      esim: { fi: "Kirjoitin työhakemuksen huolellisesti.", en: "I wrote the job application carefully." },
    },
    {
      fi: "hakea",
      en: "to apply, fetch, seek",
      taso: "A2",
      esim: { fi: "Hän haki paikkaa yliopistosta.", en: "She applied for a place at the university." },
    },
    {
      fi: "hakija",
      en: "applicant",
      taso: "B2",
      esim: { fi: "Paikkaan oli monta hakijaa.", en: "There were many applicants for the position." },
    },
  ],
  synonyymit: [
    { fi: "anomus", en: "petition, application (formal)" },
    { fi: "pyyntö", en: "request" },
  ],
  esimerkit: {
    A2: { fi: "Lähetin hakemuksen eilen.", en: "I sent the application yesterday." },
    B1: { fi: "Hakemus pitää jättää ennen perjantaita.", en: "The application must be submitted before Friday." },
    B2: {
      fi: "Hyvä hakemus erottuu joukosta ja kertoo selkeästi osaamisesta.",
      en: "A good application stands out and clearly describes the applicant's skills.",
    },
  },
  updatedAt: "2026-06-06",
};

export default hakemus;
