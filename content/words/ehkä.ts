import type { Word } from "@/lib/content-types";

// Modal adverb "ehkä" (maybe, perhaps). Invariant.
const ehka: Word = {
  fi: "ehkä",
  slug: "ehkä",
  pos: "adverbi (modaaliadverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "maybe, perhaps",
  selitys:
    "Ilmaisee epävarmuutta tai mahdollisuutta. Modaaliadverbi, ei taivuteta. 'Ehkä tulen.' Synonyymi kenties, mahdollisesti.",
  kuva: { emoji: "🤔", alt: "ehkä – mahdollisesti, epävarmuus" },

  kielioppi: {
    tyyppi: "modaaliadverbi (mahdollisuus); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "ehkä", merkitys: "maybe, perhaps" },
      { sija: "muodollinen", muoto: "kenties", merkitys: "perhaps (literary)" },
      { sija: "vrt.", muoto: "mahdollisesti", merkitys: "possibly" },
    ],
    huom:
      "Usein lauseen alussa: 'Ehkä sataa huomenna.' Voi yhtyä konditionaaliin: 'Ehkä voisimme tavata.' Synonyymit kenties, mahdollisesti.",
  },
  johdokset: [
    {
      fi: "kenties",
      en: "perhaps (literary)",
      taso: "B2",
      esim: { fi: "Kenties hän tietää vastauksen.", en: "Perhaps she knows the answer." },
    },
    {
      fi: "mahdollisesti",
      en: "possibly",
      taso: "B1",
      esim: { fi: "Tulen mahdollisesti myöhässä.", en: "I'll possibly be late." },
    },
    {
      fi: "ehkäpä",
      en: "perhaps (softened)",
      taso: "B1",
      esim: { fi: "Ehkäpä voisimme jutella.", en: "Perhaps we could talk." },
    },
  ],
  synonyymit: [
    { fi: "kenties", en: "perhaps" },
    { fi: "mahdollisesti", en: "possibly" },
  ],
  esimerkit: {
    A2: { fi: "Ehkä menen elokuviin tänään.", en: "Maybe I'll go to the movies today." },
    B1: { fi: "Ehkä sinun kannattaisi levätä.", en: "Maybe you should rest." },
    B2: {
      fi: "Ehkä emme koskaan saa tietää, mitä todella tapahtui sinä iltana.",
      en: "Maybe we'll never find out what really happened that evening.",
    },
  },
  updatedAt: "2026-06-05",
};

export default ehka;
