import type { Word } from "@/lib/content-types";

// Interrogative pronoun (things). Verified against Wiktionary: genitive minkä,
// partitive mitä, inessive missä, illative mihin; plural mitkä.
const mika: Word = {
  fi: "mikä",
  slug: "mikä",
  pos: "pronomini (interrogatiivipronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "what; which",
  selitys:
    "Kysyy asiaa tai esinettä (what/which). Genetiivi minkä, partitiivi mitä. Paikallissijat ovat tavallisia kysymyssanoja: missä, mistä, mihin. Henkilöistä kysytään kuka.",
  kuva: { emoji: "❔", alt: "mikä – kysymys asiasta" },

  kielioppi: {
    tyyppi: "interrogatiivipronomini (asia); epäsäännöllinen, vartalo mi-",
    muodot: [
      { sija: "genetiivi", muoto: "minkä", merkitys: "of what / which" },
      { sija: "partitiivi", muoto: "mitä", merkitys: "what (partitive)" },
      { sija: "inessiivi", muoto: "missä", merkitys: "where (in what)" },
    ],
    huom:
      "Paikallissijat ovat omia kysymyssanojaan: missä (where), mistä (from where), mihin (to where), milloin (when). Monikko mitkä. Henkilöistä kuka.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (yksikkö)",
        rows: [
          { label: "Nominatiivi", form: "mikä" },
          { label: "Genetiivi", form: "minkä" },
          { label: "Partitiivi", form: "mitä" },
          { label: "Inessiivi", form: "missä" },
          { label: "Elatiivi", form: "mistä" },
          { label: "Illatiivi", form: "mihin" },
          { label: "Adessiivi", form: "millä" },
          { label: "Ablatiivi", form: "miltä" },
          { label: "Allatiivi", form: "mille" },
        ],
      },
      {
        title: "Monikko (mitkä)",
        rows: [
          { label: "Nominatiivi", form: "mitkä" },
          { label: "Partitiivi", form: "mitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "miksi",
      en: "why (translative)",
      taso: "A1",
      esim: { fi: "Miksi olet myöhässä?", en: "Why are you late?" },
    },
    {
      fi: "millainen",
      en: "what kind of",
      taso: "A2",
      esim: { fi: "Millainen sää tänään on?", en: "What kind of weather is it today?" },
    },
    {
      fi: "mikään",
      en: "anything / (not) anything",
      taso: "B1",
      esim: { fi: "Mikään ei muuttunut.", en: "Nothing changed." },
    },
  ],
  synonyymit: [
    { fi: "kuka", en: "who (for people)" },
    { fi: "millainen", en: "what sort of" },
  ],
  esimerkit: {
    A2: { fi: "Mikä tämä on?", en: "What is this?" },
    B1: { fi: "Missä sinä asut?", en: "Where do you live?" },
    B2: {
      fi: "En oikein tiedä, mistä aloittaisin.",
      en: "I'm not quite sure where I'd start.",
    },
  },
  updatedAt: "2026-06-05",
};

export default mika;
