import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation (agent noun), stem käyttäjä-.
// Genitive käyttäjän, partitive käyttäjää, illative käyttäjään, partitive pl käyttäjiä.
const käyttäjä: Word = {
  fi: "käyttäjä",
  slug: "käyttäjä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "user",
  selitys:
    "Henkilö, joka käyttää jotakin, esim. palvelua tai laitetta: 'rekisteröitynyt käyttäjä'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko käyttäjiä. Tekijännimi verbistä käyttää. Vrt. käyttäjätunnus.",
  kuva: { emoji: "👤", alt: "käyttäjä – henkilö, joka käyttää jotakin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua; tekijännimi (-jä)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "käyttäjän", merkitys: "of the user" },
      { sija: "partitiivi (yks.)", muoto: "käyttäjää", merkitys: "user (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "käyttäjiä", merkitys: "users (partitive pl.)" },
    ],
    huom:
      "Tekijännimi (-jä) verbistä käyttää; ei astevaihtelua (tt säilyy). Partitiivin monikko käyttäjiä. Vrt. käyttäjätunnus = username, käyttää = to use.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "käyttäjä" },
          { label: "Partitiivi", form: "käyttäjää" },
          { label: "Genetiivi", form: "käyttäjän" },
          { label: "Inessiivi", form: "käyttäjässä" },
          { label: "Elatiivi", form: "käyttäjästä" },
          { label: "Illatiivi", form: "käyttäjään" },
          { label: "Adessiivi", form: "käyttäjällä" },
          { label: "Ablatiivi", form: "käyttäjältä" },
          { label: "Allatiivi", form: "käyttäjälle" },
          { label: "Essiivi", form: "käyttäjänä" },
          { label: "Translatiivi", form: "käyttäjäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "käyttäjät" },
          { label: "Partitiivi", form: "käyttäjiä" },
          { label: "Genetiivi", form: "käyttäjien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käyttäjätunnus",
      en: "username, user ID",
      taso: "B1",
      esim: { fi: "Loin uuden käyttäjätunnuksen.", en: "I created a new username." },
    },
    {
      fi: "käyttää",
      en: "to use",
      taso: "A2",
      esim: { fi: "Käytän puhelinta päivittäin.", en: "I use the phone daily." },
    },
    {
      fi: "loppukäyttäjä",
      en: "end user",
      taso: "B2",
      esim: { fi: "Tuote suunniteltiin loppukäyttäjää varten.", en: "The product was designed for the end user." },
    },
  ],
  synonyymit: [
    { fi: "asiakas", en: "customer (in some contexts)" },
    { fi: "käyttäjäkunta", en: "user base" },
  ],
  esimerkit: {
    A2: { fi: "Sovelluksella on miljoonia käyttäjiä.", en: "The app has millions of users." },
    B1: { fi: "Uusi käyttäjä saa ohjeet sähköpostiin.", en: "A new user receives instructions by email." },
    B2: {
      fi: "Palvelu kerää tietoa siitä, miten käyttäjät liikkuvat sivustolla.",
      en: "The service collects data on how users move around the site.",
    },
  },
  updatedAt: "2026-06-07",
};

export default käyttäjä;
