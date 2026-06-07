import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, tt:t gradation, stem maahanmuutto- ~ maahanmuuto-.
// Genitive maahanmuuton, partitive maahanmuuttoa, partitive pl maahanmuuttoja.
const maahanmuutto: Word = {
  fi: "maahanmuutto",
  slug: "maahanmuutto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B2",
  en: "immigration",
  selitys:
    "Muuttaminen toiseen maahan asumaan: 'maahanmuutto kasvaa', 'maahanmuuton hallinta'. Tyyppi 1/valo, astevaihtelu tt:t (maahanmuutto → maahanmuuton). Yhdyssana maahan (illatiivi) + muutto. Vastakohta maastamuutto. Vrt. muuttaa, maahanmuuttaja, maastamuutto.",
  kuva: { emoji: "🛬", alt: "maahanmuutto – muuttaminen toiseen maahan asumaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu tt:t (maahanmuutto ~ maahanmuuto-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "maahanmuuton", merkitys: "of immigration" },
      { sija: "partitiivi (yks.)", muoto: "maahanmuuttoa", merkitys: "immigration (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "maahanmuuttoja", merkitys: "immigrations (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva maahanmuutto (nominatiivi, partitiivi maahanmuuttoa), heikko maahanmuuto- (maahanmuuton, maahanmuutossa). Yhdyssana maahan + muutto. Yleensä yksikössä. Vrt. maastamuutto = emigration.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "maahanmuutto" },
          { label: "Partitiivi", form: "maahanmuuttoa" },
          { label: "Genetiivi", form: "maahanmuuton" },
          { label: "Inessiivi", form: "maahanmuutossa" },
          { label: "Elatiivi", form: "maahanmuutosta" },
          { label: "Illatiivi", form: "maahanmuuttoon" },
          { label: "Adessiivi", form: "maahanmuutolla" },
          { label: "Ablatiivi", form: "maahanmuutolta" },
          { label: "Allatiivi", form: "maahanmuutolle" },
          { label: "Essiivi", form: "maahanmuuttona" },
          { label: "Translatiivi", form: "maahanmuutoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "maahanmuutot" },
          { label: "Partitiivi", form: "maahanmuuttoja" },
          { label: "Genetiivi", form: "maahanmuuttojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "maahanmuuttaja",
      en: "immigrant",
      taso: "B1",
      esim: { fi: "Hän on toisen polven maahanmuuttaja.", en: "He is a second-generation immigrant." },
    },
    {
      fi: "maastamuutto",
      en: "emigration",
      taso: "B2",
      esim: { fi: "Maastamuutto kasvoi 1900-luvun alussa.", en: "Emigration grew in the early 20th century." },
    },
  ],
  synonyymit: [
    { fi: "immigraatio", en: "immigration (formal)" },
  ],
  esimerkit: {
    A2: { fi: "Maahanmuutto on lisääntynyt.", en: "Immigration has increased." },
    B1: { fi: "Maahanmuutto tuo työvoimaa.", en: "Immigration brings labour." },
    B2: {
      fi: "Onnistunut maahanmuutto edellyttää sekä kielen oppimista että työllistymistä.",
      en: "Successful immigration requires both learning the language and finding employment.",
    },
  },
  updatedAt: "2026-06-07",
};

export default maahanmuutto;
