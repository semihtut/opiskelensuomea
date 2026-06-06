import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 56/kaivaa, t:d gradation, stem sata- ~ sada-.
// Impersonal: present sataa, connegative (ei) sada, imperfect satoi, NUT satanut.
const sataa: Word = {
  fi: "sataa",
  slug: "sataa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to rain; to fall (of precipitation)",
  selitys:
    "Kun vettä, lunta tai rakeita tulee taivaalta: 'ulkona sataa'. Tyyppi 1 (-aa), tyyppi 56, astevaihtelu t:d (sataa ~ ei sada). Persoonaton, käytetään 3. persoonassa. Sama verbi kaikelle sateelle: sataa lunta = to snow.",
  kuva: { emoji: "🌧️", alt: "sataa – vettä tai lunta tulee taivaalta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 56; astevaihtelu t:d (sataa ↔ sada); persoonaton",
    muodot: [
      { sija: "preesens (se)", muoto: "sataa", merkitys: "it rains" },
      { sija: "preesens · kielto", muoto: "ei sada", merkitys: "it doesn't rain" },
      { sija: "imperfekti (se)", muoto: "satoi", merkitys: "it rained" },
    ],
    huom:
      "Persoonaton verbi (käytetään 3. persoonassa). Vahva aste sataa, heikko aste sada kiellossa (ei sada). Imperfektissä a → o: satoi. Tarkennukset: 'sataa lunta' = to snow, 'sataa rakeita' = to hail.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens (persoonaton)",
        rows: [
          { label: "se sataa", form: "sataa" },
          { label: "ne sataa", form: "sataa" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "se", form: "ei sada" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se satoi", form: "satoi" },
          { label: "kielto", form: "ei satanut" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se", form: "on satanut" },
          { label: "kielto", form: "ei ole satanut" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sade",
      en: "rain",
      taso: "A2",
      esim: { fi: "Sade alkoi iltapäivällä.", en: "The rain started in the afternoon." },
    },
    {
      fi: "sateinen",
      en: "rainy",
      taso: "B1",
      esim: { fi: "Päivä oli harmaa ja sateinen.", en: "The day was grey and rainy." },
    },
    {
      fi: "sademäärä",
      en: "amount of rainfall",
      taso: "B2",
      esim: { fi: "Sademäärä oli ennätyksellinen.", en: "The rainfall was record-breaking." },
    },
  ],
  synonyymit: [
    { fi: "tihkua", en: "to drizzle" },
    { fi: "kuuroja", en: "showers (related)" },
  ],
  esimerkit: {
    A2: { fi: "Ulkona sataa vettä.", en: "It's raining outside." },
    B1: { fi: "Eilen satoi koko päivän.", en: "Yesterday it rained all day." },
    B2: {
      fi: "Jos huomenna sataa, siirrämme retken toiseen päivään.",
      en: "If it rains tomorrow, we'll move the trip to another day.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sataa;
