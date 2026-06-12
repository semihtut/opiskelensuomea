import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, kk:k gradation, stem lääkkee- ~ lääke.
// Genitive lääkkeen, partitive lääkettä, illative lääkkeeseen, partitive pl lääkkeitä.
const laake: Word = {
  fi: "lääke",
  slug: "lääke",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "A2",
  en: "medicine, medication, drug",
  selitys:
    "Aine, joka hoitaa sairautta: 'ottaa lääke'. Tyyppi 48, astevaihtelu kk:k (lääke → lääkkeen). Nominatiivissa heikko aste (lääke), vartalossa vahva (lääkkee-). Vrt. lääkäri (doctor), lääkitä (to medicate).",
  kuva: { alt: "lääke – sairautta hoitava aine" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu kk:k (lääke ↔ lääkkee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lääkkeen", merkitys: "of the medicine" },
      { sija: "partitiivi (yks.)", muoto: "lääkettä", merkitys: "medicine (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lääkkeitä", merkitys: "medicines (partitive pl.)" },
    ],
    huom:
      "Nominatiivissa heikko aste lääke (yksi k), mutta vartalossa vahva lääkkee- (kaksi k): genetiivi lääkkeen, monikon nominatiivi lääkkeet. Partitiivi lääkettä. Vrt. särkylääke = painkiller.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lääke" },
          { label: "Partitiivi", form: "lääkettä" },
          { label: "Genetiivi", form: "lääkkeen" },
          { label: "Inessiivi", form: "lääkkeessä" },
          { label: "Elatiivi", form: "lääkkeestä" },
          { label: "Illatiivi", form: "lääkkeeseen" },
          { label: "Adessiivi", form: "lääkkeellä" },
          { label: "Ablatiivi", form: "lääkkeeltä" },
          { label: "Allatiivi", form: "lääkkeelle" },
          { label: "Essiivi", form: "lääkkeenä" },
          { label: "Translatiivi", form: "lääkkeeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lääkkeet" },
          { label: "Partitiivi", form: "lääkkeitä" },
          { label: "Genetiivi", form: "lääkkeiden / lääkkeitten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "särkylääke",
      en: "painkiller",
      taso: "B1",
      esim: { fi: "Otin särkylääkkeen päänsärkyyn.", en: "I took a painkiller for the headache." },
    },
    {
      fi: "lääkitys",
      en: "medication (treatment)",
      taso: "B2",
      esim: { fi: "Lääkäri muutti lääkitystäni.", en: "The doctor changed my medication." },
    },
    {
      fi: "reseptilääke",
      en: "prescription drug",
      taso: "B2",
      esim: { fi: "Tämä on reseptilääke.", en: "This is a prescription drug." },
    },
  ],
  synonyymit: [
    { fi: "lääkeaine", en: "medicinal substance" },
    { fi: "rohto", en: "remedy (archaic/herbal)" },
  ],
  esimerkit: {
    A2: { fi: "Otan lääkettä joka aamu.", en: "I take medicine every morning." },
    B1: { fi: "Lääke auttoi nopeasti.", en: "The medicine helped quickly." },
    B2: {
      fi: "Lääkettä ei saa ottaa tyhjään vatsaan.",
      en: "The medicine must not be taken on an empty stomach.",
    },
  },
  updatedAt: "2026-06-06",
};

export default laake;
