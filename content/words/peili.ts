import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation. Genitive peilin,
// partitive peiliä, illative peiliin, partitive pl peilejä.
const peili: Word = {
  fi: "peili",
  slug: "peili",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "mirror",
  selitys:
    "Heijastava pinta, josta näkee oman kuvansa. Tyyppi 5, ei astevaihtelua.",
  kuva: { emoji: "🪞", alt: "peili – seinäpeili" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "peilin", merkitys: "of the mirror" },
      { sija: "partitiivi (yks.)", muoto: "peiliä", merkitys: "mirror (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "peilejä", merkitys: "mirrors (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. 'Katsoa peiliin' = look in the mirror. Verbi peilata = to mirror, reflect.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "peili" },
          { label: "Partitiivi", form: "peiliä" },
          { label: "Genetiivi", form: "peilin" },
          { label: "Inessiivi", form: "peilissä" },
          { label: "Elatiivi", form: "peilistä" },
          { label: "Illatiivi", form: "peiliin" },
          { label: "Adessiivi", form: "peilillä" },
          { label: "Ablatiivi", form: "peililtä" },
          { label: "Allatiivi", form: "peilille" },
          { label: "Essiivi", form: "peilinä" },
          { label: "Translatiivi", form: "peiliksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "peilit" },
          { label: "Partitiivi", form: "peilejä" },
          { label: "Genetiivi", form: "peilien" },
          { label: "Inessiivi", form: "peileissä" },
          { label: "Illatiivi", form: "peileihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "peilata",
      en: "to mirror, reflect",
      taso: "B2",
      esim: { fi: "Järvi peilasi taivasta.", en: "The lake mirrored the sky." },
    },
    {
      fi: "taustapeili",
      en: "rearview mirror",
      taso: "B2",
      esim: { fi: "Katso taustapeiliin ennen kääntymistä.", en: "Check the rearview mirror before turning." },
    },
    {
      fi: "peilikuva",
      en: "mirror image",
      taso: "B2",
      esim: { fi: "Teksti näkyi peilikuvana.", en: "The text appeared as a mirror image." },
    },
  ],
  synonyymit: [
    { fi: "kuvastin", en: "looking glass (literary)" },
    { fi: "heijastin", en: "reflector" },
  ],
  esimerkit: {
    A2: { fi: "Katson itseäni peilistä.", en: "I look at myself in the mirror." },
    B1: { fi: "Kylpyhuoneessa on iso peili.", en: "There's a big mirror in the bathroom." },
    B2: {
      fi: "Hän tarkisti hiuksensa peilistä ennen lähtöä.",
      en: "She checked her hair in the mirror before leaving.",
    },
  },
  updatedAt: "2026-06-05",
};

export default peili;
