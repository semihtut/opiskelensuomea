import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem vapaude-.
// Genitive vapauden, partitive vapautta, partitive pl vapauksia.
const vapaus: Word = {
  fi: "vapaus",
  slug: "vapaus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "freedom, liberty",
  selitys:
    "Tila, jossa voi toimia ilman pakkoa tai rajoituksia: 'sananvapaus'. Tyyppi 40/kalleus, astevaihtelu t:d (vapaus → vapauden). Johdettu sanasta vapaa. Vrt. vapaa, vapauttaa, sananvapaus.",
  kuva: { alt: "vapaus – tila ilman pakkoa tai rajoituksia" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (vartalo vapaude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vapauden", merkitys: "of freedom" },
      { sija: "partitiivi (yks.)", muoto: "vapautta", merkitys: "freedom (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vapauksia", merkitys: "freedoms (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40 (-aus): genetiivi -uden, partitiivi -utta, partitiivin monikko -uksia. Johdettu sanasta vapaa. 'Sananvapaus' = freedom of speech. Vrt. vapaa = free, vapauttaa = to free.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vapaus" },
          { label: "Partitiivi", form: "vapautta" },
          { label: "Genetiivi", form: "vapauden" },
          { label: "Inessiivi", form: "vapaudessa" },
          { label: "Elatiivi", form: "vapaudesta" },
          { label: "Illatiivi", form: "vapauteen" },
          { label: "Adessiivi", form: "vapaudella" },
          { label: "Ablatiivi", form: "vapaudelta" },
          { label: "Allatiivi", form: "vapaudelle" },
          { label: "Essiivi", form: "vapautena" },
          { label: "Translatiivi", form: "vapaudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vapaudet" },
          { label: "Partitiivi", form: "vapauksia" },
          { label: "Genetiivi", form: "vapauksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vapaa",
      en: "free, vacant",
      taso: "A2",
      esim: { fi: "Onko tämä paikka vapaa?", en: "Is this seat free?" },
    },
    {
      fi: "sananvapaus",
      en: "freedom of speech",
      taso: "B2",
      esim: { fi: "Sananvapaus on perusoikeus.", en: "Freedom of speech is a basic right." },
    },
    {
      fi: "vapauttaa",
      en: "to free, release",
      taso: "B2",
      esim: { fi: "Vanki vapautettiin.", en: "The prisoner was released." },
    },
  ],
  synonyymit: [
    { fi: "riippumattomuus", en: "independence" },
    { fi: "vapaa tahto", en: "free will" },
  ],
  esimerkit: {
    A2: { fi: "Arvostan vapautta.", en: "I value freedom." },
    B1: { fi: "Hänellä on vapaus valita itse.", en: "She has the freedom to choose herself." },
    B2: {
      fi: "Vapauteen liittyy aina myös vastuu omista valinnoista.",
      en: "Freedom always comes with responsibility for one's own choices.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vapaus;
