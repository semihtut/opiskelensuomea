import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, tt–t gradation, stem muuttu-.
// Present muutun, past muutuin, hän muuttui, past participle muuttunut. Intransitive.
const muuttua: Word = {
  fi: "muuttua",
  slug: "muuttua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to change, become (intransitive)",
  selitys:
    "Tulla erilaiseksi itsestään: 'sää muuttuu'. Astevaihtelu tt:t (muuttua → muutun). Tulosija translatiivi: 'vesi muuttuu jääksi'. Vrt. muuttaa = to change/move (transitiivinen).",
  kuva: { emoji: "🦋", alt: "muuttua – tulla erilaiseksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua); astevaihtelu tt:t; vartalo muuttu-",
    muodot: [
      { sija: "preesens (minä)", muoto: "muutun", merkitys: "I change" },
      { sija: "imperfekti (minä)", muoto: "muutuin", merkitys: "I changed" },
      { sija: "NUT-partisiippi", muoto: "muuttunut", merkitys: "(have) changed" },
    ],
    huom:
      "Intransitiivinen: jokin muuttuu itsestään. Astevaihtelu tt:t: muutun, muutut, muuttuu. Lopputila translatiivissa: 'muuttua paremmaksi'. Vrt. muuttaa = to change something / to move.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "muutun" },
          { label: "sinä", form: "muutut" },
          { label: "hän", form: "muuttuu" },
          { label: "me", form: "muutumme" },
          { label: "te", form: "muututte" },
          { label: "he", form: "muuttuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en muutu" },
          { label: "hän", form: "ei muutu" },
          { label: "he", form: "eivät muutu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "muutuin" },
          { label: "sinä", form: "muutuit" },
          { label: "hän", form: "muuttui" },
          { label: "me", form: "muutuimme" },
          { label: "te", form: "muutuitte" },
          { label: "he", form: "muuttuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen muuttunut" },
          { label: "hän", form: "on muuttunut" },
          { label: "he", form: "ovat muuttuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "muutu!" },
          { label: "te", form: "muuttukaa!" },
          { label: "kielto (sinä)", form: "älä muutu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "muutos",
      en: "change",
      taso: "B1",
      esim: { fi: "Tarvitsemme suuren muutoksen.", en: "We need a big change." },
    },
    {
      fi: "muuttaa",
      en: "to change (something); to move",
      taso: "A2",
      esim: { fi: "Muutimme uuteen kaupunkiin.", en: "We moved to a new city." },
    },
    {
      fi: "muuttuva",
      en: "changing, variable",
      taso: "B2",
      esim: { fi: "Maailma on jatkuvasti muuttuva.", en: "The world is constantly changing." },
    },
  ],
  synonyymit: [
    { fi: "vaihtua", en: "to change, be replaced" },
    { fi: "kehittyä", en: "to develop, evolve" },
  ],
  esimerkit: {
    A2: { fi: "Sää muuttuu nopeasti.", en: "The weather changes quickly." },
    B1: { fi: "Olet muuttunut paljon vuosien aikana.", en: "You have changed a lot over the years." },
    B2: {
      fi: "Suunnitelmat muuttuivat täysin viime hetkellä.",
      en: "The plans changed completely at the last moment.",
    },
  },
  updatedAt: "2026-06-06",
};

export default muuttua;
