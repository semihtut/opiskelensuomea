import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 24/uni, no gradation, consonant stem.
// Genitive meren, partitive merta (back vowel!), illative mereen, partitive pl meriä.
const meri: Word = {
  fi: "meri",
  slug: "meri",
  pos: "substantiivi (tyyppi 24/uni)",
  posClass: "substantiivi",
  level: "A1",
  en: "sea",
  selitys:
    "Suuri suolainen vesistö. Tyyppi 24, ei astevaihtelua, konsonanttivartalo. Poikkeus: partitiivi merta käyttää takavokaalia (ei *mertä).",
  kuva: { emoji: "🌊", alt: "meri – aaltoileva meri" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 24/uni; ei astevaihtelua, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "meren", merkitys: "of the sea" },
      { sija: "partitiivi (yks.)", muoto: "merta", merkitys: "sea (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "meriä", merkitys: "seas (partitive pl.)" },
    ],
    huom:
      "Partitiivi on poikkeuksellisesti takavokaalinen: merta (ei *mertä), vaikka muut muodot ovat etuvokaalisia (meressä, mereen). Konsonanttivartalo: mer- + -ta.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "meri" },
          { label: "Partitiivi", form: "merta" },
          { label: "Genetiivi", form: "meren" },
          { label: "Inessiivi", form: "meressä" },
          { label: "Elatiivi", form: "merestä" },
          { label: "Illatiivi", form: "mereen" },
          { label: "Adessiivi", form: "merellä" },
          { label: "Ablatiivi", form: "mereltä" },
          { label: "Allatiivi", form: "merelle" },
          { label: "Essiivi", form: "merenä" },
          { label: "Translatiivi", form: "mereksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "meret" },
          { label: "Partitiivi", form: "meriä" },
          { label: "Genetiivi", form: "merien" },
          { label: "Inessiivi", form: "merissä" },
          { label: "Illatiivi", form: "meriin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "merenranta",
      en: "seashore, coast",
      taso: "B1",
      esim: { fi: "Kävelimme merenrantaa pitkin.", en: "We walked along the seashore." },
    },
    {
      fi: "merellinen",
      en: "maritime, marine",
      taso: "B2",
      esim: { fi: "Kaupungilla on merellinen ilmapiiri.", en: "The city has a maritime atmosphere." },
    },
    {
      fi: "merimies",
      en: "sailor, seaman",
      taso: "B1",
      esim: { fi: "Hänen isänsä oli merimies.", en: "His father was a sailor." },
    },
  ],
  synonyymit: [
    { fi: "valtameri", en: "ocean" },
    { fi: "ulappa", en: "open sea" },
  ],
  esimerkit: {
    A2: { fi: "Meri on tyyni tänään.", en: "The sea is calm today." },
    B1: { fi: "Katsoimme merta kalliolta.", en: "We looked at the sea from the cliff." },
    B2: {
      fi: "Myrsky nosti meren aallot korkeiksi.",
      en: "The storm raised the sea's waves high.",
    },
  },
  updatedAt: "2026-06-04",
};

export default meri;
