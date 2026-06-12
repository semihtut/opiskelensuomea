import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, kk:k gradation. Singular genitive
// kaiken, partitive kaikkea; plural kaikki/kaikkien/kaikkia.
const kaikki: Word = {
  fi: "kaikki",
  slug: "kaikki",
  pos: "pronomini (kvanttoripronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "all; everything; everyone",
  selitys:
    "Koko määrä; jokainen. Tyyppi 7, astevaihtelu kk:k. Yksikkö 'kaikki/kaiken/kaikkea' = everything; monikko 'kaikki/kaikkien/kaikkia' = everyone/all.",
  kuva: { alt: "kaikki – kokonaisuus, kaikki yhdessä" },

  kielioppi: {
    tyyppi: "kvanttoripronomini, tyyppi 7/ovi; astevaihtelu kk:k",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kaiken", merkitys: "of everything" },
      { sija: "partitiivi (yks.)", muoto: "kaikkea", merkitys: "everything (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kaikkia", merkitys: "all (partitive pl.)" },
    ],
    huom:
      "Yksikkö viittaa asioihin (kaikki = everything): kaiken, kaikkea. Monikko ihmisiin/laskettaviin (kaikki = everyone/all): kaikkien, kaikkia. Heikko aste kk → k: kaiken.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (everything)",
        rows: [
          { label: "Nominatiivi", form: "kaikki" },
          { label: "Partitiivi", form: "kaikkea" },
          { label: "Genetiivi", form: "kaiken" },
          { label: "Inessiivi", form: "kaikessa" },
          { label: "Elatiivi", form: "kaikesta" },
          { label: "Illatiivi", form: "kaikkeen" },
          { label: "Adessiivi", form: "kaikella" },
          { label: "Translatiivi", form: "kaikeksi" },
        ],
      },
      {
        title: "Monikko (everyone / all)",
        rows: [
          { label: "Nominatiivi", form: "kaikki" },
          { label: "Partitiivi", form: "kaikkia" },
          { label: "Genetiivi", form: "kaikkien" },
          { label: "Inessiivi", form: "kaikissa" },
          { label: "Illatiivi", form: "kaikkiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kaikkialla",
      en: "everywhere",
      taso: "B1",
      esim: { fi: "Lunta oli kaikkialla.", en: "There was snow everywhere." },
    },
    {
      fi: "kaikenlainen",
      en: "all kinds of",
      taso: "B1",
      esim: { fi: "Kaupassa oli kaikenlaista tavaraa.", en: "The shop had all kinds of goods." },
    },
    {
      fi: "kaikkiaan",
      en: "in total, altogether",
      taso: "B2",
      esim: { fi: "Meitä oli kaikkiaan kymmenen.", en: "There were ten of us in total." },
    },
  ],
  synonyymit: [
    { fi: "jokainen", en: "each, everyone" },
    { fi: "koko", en: "the whole" },
  ],
  esimerkit: {
    A2: { fi: "Kaikki ovat täällä.", en: "Everyone is here." },
    B1: { fi: "Söin kaiken lautaselta.", en: "I ate everything off the plate." },
    B2: {
      fi: "Hän oli valmis tekemään kaikkensa onnistuakseen.",
      en: "She was ready to do her utmost to succeed.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kaikki;
