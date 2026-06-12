import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (sana): Kotus type 9/kala, no gradation, stem salasana-.
// Genitive salasanan, partitive salasanaa, illative salasanaan, partitive pl salasanoja.
const salasana: Word = {
  fi: "salasana",
  slug: "salasana",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "password",
  selitys:
    "Salainen merkkijono, jolla kirjaudutaan palveluun: 'vahva salasana'. Yhdyssana sala + sana. Tyyppi 9, ei astevaihtelua. Partitiivin monikko salasanoja. Vrt. käyttäjätunnus, tunnussana.",
  kuva: { alt: "salasana – salainen merkkijono kirjautumiseen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "salasanan", merkitys: "of the password" },
      { sija: "partitiivi (yks.)", muoto: "salasanaa", merkitys: "password (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "salasanoja", merkitys: "passwords (partitive pl.)" },
    ],
    huom:
      "Yhdyssana sala + sana; taipuu kuten sana (tyyppi 9). Partitiivin monikossa a → o: salasanoja. 'Vaihtaa salasana' = to change the password. Vrt. käyttäjätunnus = username.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "salasana" },
          { label: "Partitiivi", form: "salasanaa" },
          { label: "Genetiivi", form: "salasanan" },
          { label: "Inessiivi", form: "salasanassa" },
          { label: "Elatiivi", form: "salasanasta" },
          { label: "Illatiivi", form: "salasanaan" },
          { label: "Adessiivi", form: "salasanalla" },
          { label: "Ablatiivi", form: "salasanalta" },
          { label: "Allatiivi", form: "salasanalle" },
          { label: "Essiivi", form: "salasanana" },
          { label: "Translatiivi", form: "salasanaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "salasanat" },
          { label: "Partitiivi", form: "salasanoja" },
          { label: "Genetiivi", form: "salasanojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käyttäjätunnus",
      en: "username",
      taso: "B1",
      esim: { fi: "Anna käyttäjätunnus ja salasana.", en: "Enter the username and password." },
    },
    {
      fi: "salasanahallinta",
      en: "password manager",
      taso: "B2",
      esim: { fi: "Käytän salasanahallintaa.", en: "I use a password manager." },
    },
    {
      fi: "tunnussana",
      en: "passphrase, watchword",
      taso: "B2",
      esim: { fi: "Hän kuiskasi tunnussanan.", en: "He whispered the watchword." },
    },
  ],
  synonyymit: [
    { fi: "tunnussana", en: "passphrase" },
    { fi: "PIN-koodi", en: "PIN code" },
  ],
  esimerkit: {
    A2: { fi: "Unohdin salasanani.", en: "I forgot my password." },
    B1: { fi: "Vaihda salasana säännöllisesti.", en: "Change your password regularly." },
    B2: {
      fi: "Hyvä salasana on pitkä eikä sisällä helposti arvattavia sanoja.",
      en: "A good password is long and doesn't contain easily guessable words.",
    },
  },
  updatedAt: "2026-06-07",
};

export default salasana;
