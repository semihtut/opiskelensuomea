import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, kk:k gradation. Genitive apteekin,
// partitive apteekkia, illative apteekkiin, partitive pl apteekkeja.
const apteekki: Word = {
  fi: "apteekki",
  slug: "apteekki",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "pharmacy, drugstore",
  selitys:
    "Liike, josta saa lääkkeitä. Tyyppi 5, astevaihtelu kk:k (apteekki → apteekin).",
  kuva: { alt: "apteekki – lääkkeitä apteekissa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu kk:k",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "apteekin", merkitys: "of the pharmacy" },
      { sija: "partitiivi (yks.)", muoto: "apteekkia", merkitys: "pharmacy (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "apteekkeja", merkitys: "pharmacies (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa kk → k: apteekin, apteekissa, apteekit. Vahva aste säilyy: apteekkia, apteekkiin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "apteekki" },
          { label: "Partitiivi", form: "apteekkia" },
          { label: "Genetiivi", form: "apteekin" },
          { label: "Inessiivi", form: "apteekissa" },
          { label: "Elatiivi", form: "apteekista" },
          { label: "Illatiivi", form: "apteekkiin" },
          { label: "Adessiivi", form: "apteekilla" },
          { label: "Ablatiivi", form: "apteekilta" },
          { label: "Allatiivi", form: "apteekille" },
          { label: "Essiivi", form: "apteekkina" },
          { label: "Translatiivi", form: "apteekiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "apteekit" },
          { label: "Partitiivi", form: "apteekkeja" },
          { label: "Genetiivi", form: "apteekkien" },
          { label: "Inessiivi", form: "apteekeissa" },
          { label: "Illatiivi", form: "apteekkeihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lääke",
      en: "medicine, drug",
      taso: "A2",
      esim: { fi: "Hain lääkkeen apteekista.", en: "I got the medicine from the pharmacy." },
    },
    {
      fi: "resepti",
      en: "prescription",
      taso: "B1",
      esim: { fi: "Lääke vaatii reseptin.", en: "The medicine requires a prescription." },
    },
    {
      fi: "apteekkari",
      en: "pharmacist (owner)",
      taso: "B2",
      esim: { fi: "Apteekkari neuvoi annostuksen.", en: "The pharmacist advised on the dosage." },
    },
  ],
  synonyymit: [
    { fi: "lääkekauppa", en: "drugstore" },
    { fi: "apoteekki", en: "pharmacy (older form)" },
  ],
  esimerkit: {
    A2: { fi: "Missä lähin apteekki on?", en: "Where is the nearest pharmacy?" },
    B1: { fi: "Apteekki on auki kello kymmeneen asti.", en: "The pharmacy is open until ten." },
    B2: {
      fi: "Hain apteekista lääkkeen, jonka lääkäri oli määrännyt.",
      en: "I got the medicine the doctor had prescribed from the pharmacy.",
    },
  },
  updatedAt: "2026-06-05",
};

export default apteekki;
