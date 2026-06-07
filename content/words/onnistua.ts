import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem onnistu-.
// Present minä onnistun, hän onnistuu; imperfect minä onnistuin; NUT onnistunut.
const onnistua: Word = {
  fi: "onnistua",
  slug: "onnistua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to succeed, manage",
  selitys:
    "Saada jokin tehtyä hyvin tai päästä tavoitteeseen: 'onnistua kokeessa'. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Asiassa inessiivi ('onnistua jossakin') tai 3. infinitiivin illatiivi ('onnistua tekemään'). Vastakohta epäonnistua.",
  kuva: { emoji: "🎉", alt: "onnistua – saada jokin tehtyä hyvin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo onnistu-",
    muodot: [
      { sija: "preesens (minä)", muoto: "onnistun", merkitys: "I succeed" },
      { sija: "imperfekti (minä)", muoto: "onnistuin", merkitys: "I succeeded" },
      { sija: "NUT-partisiippi", muoto: "onnistunut", merkitys: "(have) succeeded" },
    ],
    huom:
      "Asiassa inessiivi: 'onnistua kokeessa, työssä'. 3. infinitiivin illatiivi: 'onnistuin avaamaan oven'. Ei astevaihtelua. Vastakohta epäonnistua. Vrt. onni, onnistunut = successful.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "onnistun" },
          { label: "sinä", form: "onnistut" },
          { label: "hän", form: "onnistuu" },
          { label: "me", form: "onnistumme" },
          { label: "te", form: "onnistutte" },
          { label: "he", form: "onnistuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en onnistu" },
          { label: "hän", form: "ei onnistu" },
          { label: "he", form: "eivät onnistu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "onnistuin" },
          { label: "sinä", form: "onnistuit" },
          { label: "hän", form: "onnistui" },
          { label: "me", form: "onnistuimme" },
          { label: "te", form: "onnistuitte" },
          { label: "he", form: "onnistuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen onnistunut" },
          { label: "hän", form: "on onnistunut" },
          { label: "he", form: "ovat onnistuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "onnistu!" },
          { label: "te", form: "onnistukaa!" },
          { label: "kielto (sinä)", form: "älä onnistu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "onnistunut",
      en: "successful",
      taso: "B1",
      esim: { fi: "Juhlat olivat onnistuneet.", en: "The party was a success." },
    },
    {
      fi: "onnistuminen",
      en: "success, succeeding",
      taso: "B2",
      esim: { fi: "Onnistuminen vaatii harjoittelua.", en: "Success requires practice." },
    },
    {
      fi: "onni",
      en: "luck, happiness",
      taso: "A2",
      esim: { fi: "Hyvää onnea!", en: "Good luck!" },
    },
  ],
  synonyymit: [
    { fi: "menestyä", en: "to be successful, thrive" },
    { fi: "selvitä", en: "to manage, get through" },
  ],
  esimerkit: {
    A2: { fi: "Onnistuin kokeessa!", en: "I succeeded in the exam!" },
    B1: { fi: "Onnistuimme avaamaan oven ilman avainta.", en: "We managed to open the door without a key." },
    B2: {
      fi: "Hanke onnistui hyvin, vaikka aikataulu oli erittäin tiukka.",
      en: "The project succeeded well, even though the schedule was very tight.",
    },
  },
  updatedAt: "2026-06-07",
};

export default onnistua;
