import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, pp:p gradation. Genitive helpon,
// partitive helppoa, illative helppoon, partitive pl helppoja. Comp helpompi, superl helpoin.
const helppo: Word = {
  fi: "helppo",
  slug: "helppo",
  pos: "adjektiivi (tyyppi 1/valo)",
  posClass: "adjektiivi",
  level: "A1",
  en: "easy, simple",
  selitys:
    "Ei vaivaa vaativa; vastakohta vaikea. Tyyppi 1, astevaihtelu pp:p (helppo → helpon).",
  kuva: { emoji: "👌", alt: "helppo – helppo, vaivaton" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 1/valo; astevaihtelu pp:p",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "helpon", merkitys: "of the easy" },
      { sija: "partitiivi (yks.)", muoto: "helppoa", merkitys: "easy (partitive)" },
      { sija: "komparatiivi", muoto: "helpompi", merkitys: "easier" },
    ],
    huom:
      "Heikossa asteessa pp → p: helpon, helpolla, helpoin. Vahva aste säilyy: helppoa, helppoon, helppoja. Superlatiivi helpoin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "helppo" },
          { label: "Partitiivi", form: "helppoa" },
          { label: "Genetiivi", form: "helpon" },
          { label: "Inessiivi", form: "helpossa" },
          { label: "Illatiivi", form: "helppoon" },
          { label: "Adessiivi", form: "helpolla" },
          { label: "Essiivi", form: "helppona" },
          { label: "Translatiivi", form: "helpoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "helpot" },
          { label: "Partitiivi", form: "helppoja" },
          { label: "Genetiivi", form: "helppojen" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "helpompi" },
          { label: "Komparatiivi (gen.)", form: "helpomman" },
          { label: "Komparatiivi (part.)", form: "helpompaa" },
          { label: "Superlatiivi (nom.)", form: "helpoin" },
          { label: "Superlatiivi (gen.)", form: "helpoimman" },
          { label: "Superlatiivi (part.)", form: "helpointa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "helposti",
      en: "easily",
      taso: "A2",
      esim: { fi: "Tehtävä ratkesi helposti.", en: "The task was solved easily." },
    },
    {
      fi: "helpottaa",
      en: "to ease, make easier",
      taso: "B1",
      esim: { fi: "Lääke helpotti kipua.", en: "The medicine eased the pain." },
    },
    {
      fi: "helppous",
      en: "ease, easiness",
      taso: "B2",
      esim: { fi: "Yllätyin tehtävän helppoudesta.", en: "I was surprised by how easy the task was." },
    },
  ],
  synonyymit: [
    { fi: "vaivaton", en: "effortless" },
    { fi: "yksinkertainen", en: "simple" },
  ],
  esimerkit: {
    A2: { fi: "Tämä tehtävä on helppo.", en: "This task is easy." },
    B1: { fi: "Suomi ei ole aina helppo kieli.", en: "Finnish isn't always an easy language." },
    B2: {
      fi: "Helpoin tapa oppia on käyttää kieltä joka päivä.",
      en: "The easiest way to learn is to use the language every day.",
    },
  },
  updatedAt: "2026-06-04",
};

export default helppo;
