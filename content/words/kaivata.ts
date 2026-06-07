import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, p:v gradation, stem kaipaa- ~ kaiva-.
// Present minä kaipaan, hän kaipaa; imperfect minä kaipasin; NUT kaivannut. Partitive object.
const kaivata: Word = {
  fi: "kaivata",
  slug: "kaivata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to miss, long for, yearn for; to need",
  selitys:
    "Tuntea ikävää tai tarvetta jotakin kohtaan: 'kaipaan sinua'. Tyyppi 4 (-ata), Kotus 73/salata, astevaihtelu p:v (kaipaan vahva, kaivata/kaivannut heikko). Objekti partitiivissa. Vrt. ikävä, kaipuu, tarvita.",
  kuva: { emoji: "🥺", alt: "kaivata – tuntea ikävää tai tarvetta jotakin kohtaan" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata), Kotus 73/salata; astevaihtelu p:v (kaipaa- ~ kaiva-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kaipaan", merkitys: "I miss" },
      { sija: "imperfekti (minä)", muoto: "kaipasin", merkitys: "I missed" },
      { sija: "NUT-partisiippi", muoto: "kaivannut", merkitys: "(have) missed" },
    ],
    huom:
      "Astevaihtelu p:v: vahva kaipaa- (kaipaan, kaipasin), heikko infinitiivissä ja NUT-muodossa (kaivata, kaivannut). Objekti partitiivissa: 'kaivata jotakuta/jotakin'. Vrt. ikävä = longing, kaipuu = yearning.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kaipaan" },
          { label: "sinä", form: "kaipaat" },
          { label: "hän", form: "kaipaa" },
          { label: "me", form: "kaipaamme" },
          { label: "te", form: "kaipaatte" },
          { label: "he", form: "kaipaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kaipaa" },
          { label: "hän", form: "ei kaipaa" },
          { label: "he", form: "eivät kaipaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kaipasin" },
          { label: "sinä", form: "kaipasit" },
          { label: "hän", form: "kaipasi" },
          { label: "me", form: "kaipasimme" },
          { label: "te", form: "kaipasitte" },
          { label: "he", form: "kaipasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kaivannut" },
          { label: "hän", form: "on kaivannut" },
          { label: "he", form: "ovat kaivanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kaipaa!" },
          { label: "te", form: "kaivatkaa!" },
          { label: "kielto (sinä)", form: "älä kaipaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ikävä",
      en: "longing; miss",
      taso: "B1",
      esim: { fi: "Minulla on ikävä sinua.", en: "I miss you." },
    },
    {
      fi: "kaipuu",
      en: "yearning, longing",
      taso: "B2",
      esim: { fi: "Häntä vaivasi koti-ikävä ja kaipuu.", en: "He was troubled by homesickness and longing." },
    },
  ],
  synonyymit: [
    { fi: "ikävöidä", en: "to long for" },
    { fi: "tarvita", en: "to need" },
  ],
  esimerkit: {
    A2: { fi: "Kaipaan kesää.", en: "I miss summer." },
    B1: { fi: "Hän kaipasi vanhoja ystäviään.", en: "She missed her old friends." },
    B2: {
      fi: "Suunnitelma kaipaa vielä hieman tarkennusta ennen toteutusta.",
      en: "The plan still needs a little clarification before implementation.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kaivata;
