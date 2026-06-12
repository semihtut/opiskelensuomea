import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, kk:k gradation. Genitive pankin,
// partitive pankkia, illative pankkiin, partitive pl pankkeja.
const pankki: Word = {
  fi: "pankki",
  slug: "pankki",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "bank",
  selitys:
    "Rahalaitos, jossa hoidetaan tilejä ja lainoja. Tyyppi 5, astevaihtelu kk:k (pankki → pankin).",
  kuva: { alt: "pankki – pankkirakennus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu kk:k",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pankin", merkitys: "of the bank" },
      { sija: "partitiivi (yks.)", muoto: "pankkia", merkitys: "bank (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pankkeja", merkitys: "banks (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa kk → k: pankin, pankissa, pankit. Vahva aste säilyy: pankkia, pankkiin, pankkeja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pankki" },
          { label: "Partitiivi", form: "pankkia" },
          { label: "Genetiivi", form: "pankin" },
          { label: "Inessiivi", form: "pankissa" },
          { label: "Elatiivi", form: "pankista" },
          { label: "Illatiivi", form: "pankkiin" },
          { label: "Adessiivi", form: "pankilla" },
          { label: "Ablatiivi", form: "pankilta" },
          { label: "Allatiivi", form: "pankille" },
          { label: "Essiivi", form: "pankkina" },
          { label: "Translatiivi", form: "pankiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pankit" },
          { label: "Partitiivi", form: "pankkeja" },
          { label: "Genetiivi", form: "pankkien" },
          { label: "Inessiivi", form: "pankeissa" },
          { label: "Illatiivi", form: "pankkeihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pankkitili",
      en: "bank account",
      taso: "A2",
      esim: { fi: "Avasin uuden pankkitilin.", en: "I opened a new bank account." },
    },
    {
      fi: "pankkikortti",
      en: "bank card",
      taso: "A2",
      esim: { fi: "Maksoin pankkikortilla.", en: "I paid with a bank card." },
    },
    {
      fi: "säästöpankki",
      en: "savings bank",
      taso: "B2",
      esim: { fi: "Hän talletti rahat säästöpankkiin.", en: "He deposited the money in a savings bank." },
    },
  ],
  synonyymit: [
    { fi: "rahalaitos", en: "financial institution" },
    { fi: "luottolaitos", en: "credit institution" },
  ],
  esimerkit: {
    A2: { fi: "Menen pankkiin maksamaan laskun.", en: "I'm going to the bank to pay a bill." },
    B1: { fi: "Pankki on auki yhdeksästä neljään.", en: "The bank is open from nine to four." },
    B2: {
      fi: "Hain pankista lainaa asunnon ostoa varten.",
      en: "I applied for a loan at the bank to buy an apartment.",
    },
  },
  updatedAt: "2026-06-05",
};

export default pankki;
