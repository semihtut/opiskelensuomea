import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 6/paperi, no gradation, stem kaveri-.
// Partitive pl kavereita (also kavereja), genitive pl kavereiden (also kaverien).
const kaveri: Word = {
  fi: "kaveri",
  slug: "kaveri",
  pos: "substantiivi (tyyppi: paperi)",
  posClass: "substantiivi",
  level: "A2",
  en: "buddy, pal, mate",
  selitys:
    "Arkikielinen sana kaverille tai tutulle; 'ystävää' epämuodollisempi. Vartalo kaveri-, ei astevaihtelua.",
  kuva: { emoji: "🧑‍🤝‍🧑", alt: "kaveri – kaksi ystävää käsi kädessä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 6/paperi; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "kaveria", merkitys: "buddy (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "kaverin", merkitys: "of the buddy" },
      { sija: "partitiivi (mon.)", muoto: "kavereita", merkitys: "buddies (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi kavereita (myös kavereja), genetiivi kavereiden (myös kaverien). Arkisempi kuin ystävä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kaveri" },
          { label: "Partitiivi", form: "kaveria" },
          { label: "Genetiivi", form: "kaverin" },
          { label: "Inessiivi", form: "kaverissa" },
          { label: "Elatiivi", form: "kaverista" },
          { label: "Illatiivi", form: "kaveriin" },
          { label: "Adessiivi", form: "kaverilla" },
          { label: "Ablatiivi", form: "kaverilta" },
          { label: "Allatiivi", form: "kaverille" },
          { label: "Essiivi", form: "kaverina" },
          { label: "Translatiivi", form: "kaveriksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kaverit" },
          { label: "Partitiivi", form: "kavereita" },
          { label: "Genetiivi", form: "kavereiden" },
          { label: "Inessiivi", form: "kavereissa" },
          { label: "Illatiivi", form: "kavereihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työkaveri",
      en: "coworker, colleague",
      taso: "A2",
      esim: { fi: "Työkaverini auttoi minua.", en: "My coworker helped me." },
    },
    {
      fi: "kaveruus",
      en: "companionship, friendship (casual)",
      taso: "B2",
      esim: { fi: "Heidän kaveruutensa alkoi koulussa.", en: "Their friendship started at school." },
    },
    {
      fi: "leikkikaveri",
      en: "playmate",
      taso: "B1",
      esim: { fi: "Lapsella on monta leikkikaveria.", en: "The child has many playmates." },
    },
  ],
  synonyymit: [
    { fi: "ystävä", en: "friend (warmer, more formal)" },
    { fi: "tuttu", en: "a familiar person" },
  ],
  esimerkit: {
    A2: { fi: "Menen kaverin kanssa elokuviin.", en: "I'm going to the movies with a buddy." },
    B1: { fi: "Tapaan kavereita viikonloppuna.", en: "I'll meet my friends on the weekend." },
    B2: {
      fi: "Hyvä työkaveri tekee arjesta mukavampaa.",
      en: "A good coworker makes everyday life nicer.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kaveri;
