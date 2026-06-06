import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (paikka): Kotus type 9/kala, kk:k gradation, stem työpaikka- ~ työpaika-.
// Genitive työpaikan, partitive työpaikkaa, illative työpaikkaan, partitive pl työpaikkoja.
const työpaikka: Word = {
  fi: "työpaikka",
  slug: "työpaikka",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "workplace, job",
  selitys:
    "Paikka tai tehtävä, jossa ihminen käy töissä: 'uusi työpaikka'. Yhdyssana työ + paikka. Tyyppi 9, astevaihtelu kk:k (työpaikka → työpaikan). Partitiivin monikko työpaikkoja. Vrt. työpaikkahaastattelu (job interview).",
  kuva: { emoji: "🏢", alt: "työpaikka – paikka, jossa käydään töissä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu kk:k (työpaikka ↔ työpaika-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "työpaikan", merkitys: "of the workplace" },
      { sija: "partitiivi (yks.)", muoto: "työpaikkaa", merkitys: "workplace (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "työpaikkoja", merkitys: "workplaces (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa kk → k: genetiivi työpaikan, adessiivi työpaikalla. Vahva aste kk säilyy partitiivissa työpaikkaa ja monikossa työpaikkoja (a → o). 'Sain uuden työpaikan' = I got a new job.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "työpaikka" },
          { label: "Partitiivi", form: "työpaikkaa" },
          { label: "Genetiivi", form: "työpaikan" },
          { label: "Inessiivi", form: "työpaikassa" },
          { label: "Elatiivi", form: "työpaikasta" },
          { label: "Illatiivi", form: "työpaikkaan" },
          { label: "Adessiivi", form: "työpaikalla" },
          { label: "Ablatiivi", form: "työpaikalta" },
          { label: "Allatiivi", form: "työpaikalle" },
          { label: "Essiivi", form: "työpaikkana" },
          { label: "Translatiivi", form: "työpaikaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "työpaikat" },
          { label: "Partitiivi", form: "työpaikkoja" },
          { label: "Genetiivi", form: "työpaikkojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työpaikkahaastattelu",
      en: "job interview",
      taso: "B1",
      esim: { fi: "Menen huomenna työpaikkahaastatteluun.", en: "I'm going to a job interview tomorrow." },
    },
    {
      fi: "työpaikkailmoitus",
      en: "job advertisement",
      taso: "B2",
      esim: { fi: "Luin kiinnostavan työpaikkailmoituksen.", en: "I read an interesting job ad." },
    },
    {
      fi: "työpaikkaruokala",
      en: "workplace canteen",
      taso: "B2",
      esim: { fi: "Syömme lounaan työpaikkaruokalassa.", en: "We eat lunch in the workplace canteen." },
    },
  ],
  synonyymit: [
    { fi: "työ", en: "work, job" },
    { fi: "toimipaikka", en: "place of work, office" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on uusi työpaikka.", en: "I have a new job." },
    B1: { fi: "Hän etsii työpaikkaa kaupungista.", en: "She is looking for a job in the city." },
    B2: {
      fi: "Hyvä työpaikka tarjoaa muutakin kuin palkan.",
      en: "A good workplace offers more than just a salary.",
    },
  },
  updatedAt: "2026-06-06",
};

export default työpaikka;
