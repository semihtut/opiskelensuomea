import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, nt:nn gradation, stem syrjintä- ~ syrjinnä-.
// Genitive syrjinnän, partitive syrjintää, partitive pl syrjintöjä.
const syrjinta: Word = {
  fi: "syrjintä",
  slug: "syrjintä",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B2",
  en: "discrimination",
  selitys:
    "Ihmisen tai ryhmän epäoikeudenmukainen kohtelu esimerkiksi taustan vuoksi: 'kieltää syrjintä', 'sukupuolisyrjintä'. Tyyppi 9/kala, astevaihtelu nt:nn (syrjintä → syrjinnän). Johdettu verbistä syrjiä. Vrt. syrjiä, tasa-arvo, eriarvoisuus.",
  kuva: { emoji: "🚫", alt: "syrjintä – ihmisen tai ryhmän epäoikeudenmukainen kohtelu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu nt:nn (syrjintä ~ syrjinnä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "syrjinnän", merkitys: "of the discrimination" },
      { sija: "partitiivi (yks.)", muoto: "syrjintää", merkitys: "discrimination (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "syrjintöjä", merkitys: "discriminations (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu nt:nn: vahva syrjintä (nominatiivi, partitiivi syrjintää), heikko syrjinnä- (syrjinnän, syrjinnässä). Yleensä yksikössä. Johdettu verbistä syrjiä. Rotusyrjintä, ikäsyrjintä. Vrt. syrjiä, tasa-arvo.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "syrjintä" },
          { label: "Partitiivi", form: "syrjintää" },
          { label: "Genetiivi", form: "syrjinnän" },
          { label: "Inessiivi", form: "syrjinnässä" },
          { label: "Elatiivi", form: "syrjinnästä" },
          { label: "Illatiivi", form: "syrjintään" },
          { label: "Adessiivi", form: "syrjinnällä" },
          { label: "Ablatiivi", form: "syrjinnältä" },
          { label: "Allatiivi", form: "syrjinnälle" },
          { label: "Essiivi", form: "syrjintänä" },
          { label: "Translatiivi", form: "syrjinnäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "syrjinnät" },
          { label: "Partitiivi", form: "syrjintöjä" },
          { label: "Genetiivi", form: "syrjintöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "syrjiä",
      en: "to discriminate against",
      taso: "B2",
      esim: { fi: "Ketään ei saa syrjiä.", en: "No one may be discriminated against." },
    },
    {
      fi: "sukupuolisyrjintä",
      en: "gender discrimination",
      taso: "B2",
      esim: { fi: "Sukupuolisyrjintä on laitonta.", en: "Gender discrimination is illegal." },
    },
  ],
  synonyymit: [
    { fi: "eriarvoinen kohtelu", en: "unequal treatment" },
  ],
  esimerkit: {
    A2: { fi: "Syrjintä on kiellettyä.", en: "Discrimination is forbidden." },
    B1: { fi: "Hän koki syrjintää työpaikalla.", en: "She experienced discrimination at work." },
    B2: {
      fi: "Laki kieltää syrjinnän iän, sukupuolen tai alkuperän perusteella.",
      en: "The law prohibits discrimination on the basis of age, gender or origin.",
    },
  },
  updatedAt: "2026-06-07",
};

export default syrjinta;
