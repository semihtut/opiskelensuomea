import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation, stem nime-.
// i → e in the stem: nimen, nimeä. Partitive pl nimiä, genitive pl nimien.
const nimi: Word = {
  fi: "nimi",
  slug: "nimi",
  pos: "substantiivi (tyyppi: ovi)",
  posClass: "substantiivi",
  level: "A1",
  en: "name",
  selitys:
    "Sana, jolla ihmistä, paikkaa tai asiaa kutsutaan. Vartalossa i → e: nimen, nimeä. Ei astevaihtelua.",
  kuva: { emoji: "🏷️", alt: "nimi – nimilappu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua (vartalo nime-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "nimeä", merkitys: "name (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "nimen", merkitys: "of the name" },
      { sija: "partitiivi (mon.)", muoto: "nimiä", merkitys: "names (partitive pl.)" },
    ],
    huom: "Lemman i muuttuu vartalossa e:ksi: nimi → nimen, nimeä. Monikon genetiivi nimien.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "nimi" },
          { label: "Partitiivi", form: "nimeä" },
          { label: "Genetiivi", form: "nimen" },
          { label: "Inessiivi", form: "nimessä" },
          { label: "Elatiivi", form: "nimestä" },
          { label: "Illatiivi", form: "nimeen" },
          { label: "Adessiivi", form: "nimellä" },
          { label: "Ablatiivi", form: "nimeltä" },
          { label: "Allatiivi", form: "nimelle" },
          { label: "Essiivi", form: "nimenä" },
          { label: "Translatiivi", form: "nimeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "nimet" },
          { label: "Partitiivi", form: "nimiä" },
          { label: "Genetiivi", form: "nimien" },
          { label: "Inessiivi", form: "nimissä" },
          { label: "Illatiivi", form: "nimiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "etunimi",
      en: "first name",
      taso: "A2",
      esim: { fi: "Hänen etunimensä on Anna.", en: "Her first name is Anna." },
    },
    {
      fi: "nimittää",
      en: "to name, to appoint",
      taso: "B1",
      esim: { fi: "Hänet nimitettiin johtajaksi.", en: "He was appointed director." },
    },
    {
      fi: "nimetön",
      en: "nameless, anonymous",
      taso: "B2",
      esim: { fi: "Vihje tuli nimettömältä lähettäjältä.", en: "The tip came from an anonymous sender." },
    },
  ],
  synonyymit: [
    { fi: "nimitys", en: "designation, appellation" },
    { fi: "kutsumanimi", en: "the name one is called by" },
  ],
  esimerkit: {
    A2: { fi: "Mikä sinun nimesi on?", en: "What is your name?" },
    B1: { fi: "En muista hänen nimeään.", en: "I don't remember his/her name." },
    B2: {
      fi: "Kadun nimi on muuttunut vuosien varrella.",
      en: "The street's name has changed over the years.",
    },
  },
  updatedAt: "2026-06-04",
};

export default nimi;
