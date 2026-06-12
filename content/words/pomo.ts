import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem pomo-.
// Genitive pomon, partitive pomoa, illative pomoon, partitive pl pomoja.
const pomo: Word = {
  fi: "pomo",
  slug: "pomo",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "boss",
  selitys:
    "Henkilö, joka johtaa työntekijöitä, esimies (arkinen sana): 'kysy pomolta'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko pomoja. Arkikielinen; virallisempi sana on esimies tai esihenkilö.",
  kuva: { alt: "pomo – henkilö, joka johtaa työntekijöitä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pomon", merkitys: "of the boss" },
      { sija: "partitiivi (yks.)", muoto: "pomoa", merkitys: "boss (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pomoja", merkitys: "bosses (partitive pl.)" },
    ],
    huom:
      "Arkinen sana; virallisempi on esimies / esihenkilö / johtaja. 'Pomo sanoi' = the boss said. Partitiivin monikko pomoja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pomo" },
          { label: "Partitiivi", form: "pomoa" },
          { label: "Genetiivi", form: "pomon" },
          { label: "Inessiivi", form: "pomossa" },
          { label: "Elatiivi", form: "pomosta" },
          { label: "Illatiivi", form: "pomoon" },
          { label: "Adessiivi", form: "pomolla" },
          { label: "Ablatiivi", form: "pomolta" },
          { label: "Allatiivi", form: "pomolle" },
          { label: "Essiivi", form: "pomona" },
          { label: "Translatiivi", form: "pomoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pomot" },
          { label: "Partitiivi", form: "pomoja" },
          { label: "Genetiivi", form: "pomojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "esimies",
      en: "supervisor, superior",
      taso: "B1",
      esim: { fi: "Puhuin asiasta esimieheni kanssa.", en: "I discussed the matter with my supervisor." },
    },
    {
      fi: "esihenkilö",
      en: "supervisor (gender-neutral)",
      taso: "B2",
      esim: { fi: "Uusi esihenkilö aloitti maanantaina.", en: "The new supervisor started on Monday." },
    },
    {
      fi: "työnantaja",
      en: "employer",
      taso: "B1",
      esim: { fi: "Työnantaja maksaa palkan.", en: "The employer pays the salary." },
    },
  ],
  synonyymit: [
    { fi: "esimies", en: "boss, superior" },
    { fi: "johtaja", en: "manager, director" },
  ],
  esimerkit: {
    A2: { fi: "Pomo on tänään lomalla.", en: "The boss is on holiday today." },
    B1: { fi: "Kysyin pomolta lupaa lähteä aikaisin.", en: "I asked the boss for permission to leave early." },
    B2: {
      fi: "Hyvä pomo kuuntelee työntekijöitään ja luottaa heihin.",
      en: "A good boss listens to their employees and trusts them.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pomo;
