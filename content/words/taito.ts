import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, t:d gradation, stem taito- ~ taido-.
// Genitive taidon, partitive taitoa, illative taitoon, partitive pl taitoja.
const taito: Word = {
  fi: "taito",
  slug: "taito",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "skill, ability",
  selitys:
    "Kyky tehdä jotakin hyvin, opittu osaaminen: 'kielitaito'. Tyyppi 1, astevaihtelu t:d (taito → taidon). Partitiivin monikko taitoja. Vrt. taitava (skilful), taitaa (to know how / be able).",
  kuva: { alt: "taito – kyky tehdä jotakin hyvin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu t:d (taito ↔ taido-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "taidon", merkitys: "of the skill" },
      { sija: "partitiivi (yks.)", muoto: "taitoa", merkitys: "skill (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "taitoja", merkitys: "skills (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa t → d: genetiivi taidon, adessiivi taidolla. Vahva aste t säilyy partitiivissa taitoa ja monikossa taitoja. Vrt. kielitaito = language skills, taitava = skilful.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "taito" },
          { label: "Partitiivi", form: "taitoa" },
          { label: "Genetiivi", form: "taidon" },
          { label: "Inessiivi", form: "taidossa" },
          { label: "Elatiivi", form: "taidosta" },
          { label: "Illatiivi", form: "taitoon" },
          { label: "Adessiivi", form: "taidolla" },
          { label: "Ablatiivi", form: "taidolta" },
          { label: "Allatiivi", form: "taidolle" },
          { label: "Essiivi", form: "taitona" },
          { label: "Translatiivi", form: "taidoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "taidot" },
          { label: "Partitiivi", form: "taitoja" },
          { label: "Genetiivi", form: "taitojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "taitava",
      en: "skilful, skilled",
      taso: "B1",
      esim: { fi: "Hän on taitava kokki.", en: "He is a skilful cook." },
    },
    {
      fi: "kielitaito",
      en: "language skills",
      taso: "B1",
      esim: { fi: "Hyvä kielitaito auttaa työnhaussa.", en: "Good language skills help in job hunting." },
    },
    {
      fi: "taidokas",
      en: "skilful, masterful",
      taso: "B2",
      esim: { fi: "Maalaus oli taidokas.", en: "The painting was masterful." },
    },
  ],
  synonyymit: [
    { fi: "osaaminen", en: "competence, know-how" },
    { fi: "kyky", en: "ability" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on hyvä kielitaito.", en: "She has good language skills." },
    B1: { fi: "Uimataidon oppii vain harjoittelemalla.", en: "You learn to swim only by practising." },
    B2: {
      fi: "Työssä tarvitaan sekä teknisiä taitoja että hyviä vuorovaikutustaitoja.",
      en: "The job requires both technical skills and good interpersonal skills.",
    },
  },
  updatedAt: "2026-06-06",
};

export default taito;
