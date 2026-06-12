import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, tt:t gradation, stem ammatti- ~ ammati-.
// Genitive ammatin, partitive ammattia, illative ammattiin, partitive pl ammatteja.
const ammatti: Word = {
  fi: "ammatti",
  slug: "ammatti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "profession, occupation, trade",
  selitys:
    "Työ, jota ihminen tekee elääkseen ja johon on usein koulutus: 'opettajan ammatti'. Tyyppi 5, astevaihtelu tt:t (ammatti → ammatin). Partitiivin monikko ammatteja. Vrt. ammattilainen (professional), ammattitaito (expertise).",
  kuva: { alt: "ammatti – työ, jota ihminen tekee elääkseen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu tt:t (ammatti ↔ ammati-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ammatin", merkitys: "of the profession" },
      { sija: "partitiivi (yks.)", muoto: "ammattia", merkitys: "profession (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ammatteja", merkitys: "professions (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa tt → t: genetiivi ammatin, adessiivi ammatilla. Vahva aste tt säilyy partitiivissa ammattia ja monikossa ammatteja. 'Mikä on ammattisi?' = What is your profession?",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ammatti" },
          { label: "Partitiivi", form: "ammattia" },
          { label: "Genetiivi", form: "ammatin" },
          { label: "Inessiivi", form: "ammatissa" },
          { label: "Elatiivi", form: "ammatista" },
          { label: "Illatiivi", form: "ammattiin" },
          { label: "Adessiivi", form: "ammatilla" },
          { label: "Ablatiivi", form: "ammatilta" },
          { label: "Allatiivi", form: "ammatille" },
          { label: "Essiivi", form: "ammattina" },
          { label: "Translatiivi", form: "ammatiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ammatit" },
          { label: "Partitiivi", form: "ammatteja" },
          { label: "Genetiivi", form: "ammattien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ammattilainen",
      en: "professional",
      taso: "B1",
      esim: { fi: "Hän on todellinen ammattilainen.", en: "He is a real professional." },
    },
    {
      fi: "ammattitaito",
      en: "professional skill, expertise",
      taso: "B2",
      esim: { fi: "Työ vaatii hyvää ammattitaitoa.", en: "The job requires good professional skill." },
    },
    {
      fi: "ammattikoulu",
      en: "vocational school",
      taso: "B1",
      esim: { fi: "Hän opiskelee ammattikoulussa.", en: "She studies at a vocational school." },
    },
  ],
  synonyymit: [
    { fi: "työ", en: "work, job" },
    { fi: "toimi", en: "post, position" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on ammattisi?", en: "What is your profession?" },
    B1: { fi: "Hän vaihtoi ammattia kolmekymppisenä.", en: "He changed profession in his thirties." },
    B2: {
      fi: "Monet vanhat ammatit katoavat, kun tekniikka kehittyy.",
      en: "Many old professions disappear as technology advances.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ammatti;
