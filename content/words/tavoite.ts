import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, tt:t gradation, stem tavoittee- ~ tavoite-.
// Genitive tavoitteen, partitive tavoitetta, illative tavoitteeseen, partitive pl tavoitteita.
const tavoite: Word = {
  fi: "tavoite",
  slug: "tavoite",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "goal, objective, target",
  selitys:
    "Päämäärä, johon pyritään, usein lyhyen aikavälin: 'asettaa tavoite'. Tyyppi 48/hame, astevaihtelu tt:t (tavoitteen vahva, tavoite/tavoitetta heikko). Johdettu verbistä tavoittaa. Vrt. päämäärä (pitkän aikavälin), pyrkiä.",
  kuva: { emoji: "🎯", alt: "tavoite – päämäärä, johon pyritään" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu tt:t (vartalo tavoittee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tavoitteen", merkitys: "of the goal" },
      { sija: "partitiivi (yks.)", muoto: "tavoitetta", merkitys: "goal (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tavoitteita", merkitys: "goals (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48: nominatiivi tavoite (heikko t), vartalo tavoittee- vahvistuu (tavoitteen, tavoitteeseen), partitiivi tavoitetta (heikko). 'Asettaa/saavuttaa tavoite'. Vrt. päämäärä = (long-term) aim, pyrkiä = to strive.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tavoite" },
          { label: "Partitiivi", form: "tavoitetta" },
          { label: "Genetiivi", form: "tavoitteen" },
          { label: "Inessiivi", form: "tavoitteessa" },
          { label: "Elatiivi", form: "tavoitteesta" },
          { label: "Illatiivi", form: "tavoitteeseen" },
          { label: "Adessiivi", form: "tavoitteella" },
          { label: "Ablatiivi", form: "tavoitteelta" },
          { label: "Allatiivi", form: "tavoitteelle" },
          { label: "Essiivi", form: "tavoitteena" },
          { label: "Translatiivi", form: "tavoitteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tavoitteet" },
          { label: "Partitiivi", form: "tavoitteita" },
          { label: "Genetiivi", form: "tavoitteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tavoittaa",
      en: "to reach, attain; to get hold of",
      taso: "B1",
      esim: { fi: "En tavoittanut häntä puhelimella.", en: "I couldn't reach him by phone." },
    },
    {
      fi: "tavoitteellinen",
      en: "goal-oriented, purposeful",
      taso: "B2",
      esim: { fi: "Harjoittelu oli tavoitteellista.", en: "The training was goal-oriented." },
    },
  ],
  synonyymit: [
    { fi: "päämäärä", en: "aim, goal (long-term)" },
    { fi: "maali", en: "goal, target" },
  ],
  esimerkit: {
    A2: { fi: "Minun tavoitteeni on oppia suomea.", en: "My goal is to learn Finnish." },
    B1: { fi: "Saavutimme tavoitteen ajoissa.", en: "We reached the goal on time." },
    B2: {
      fi: "Realistiset tavoitteet pitävät motivaation yllä pitkänkin projektin aikana.",
      en: "Realistic goals keep motivation up even during a long project.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tavoite;
