import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, lt:ll gradation, stem silta- ~ silla-.
// Genitive sillan, partitive siltaa, illative siltaan, partitive pl siltoja.
const silta: Word = {
  fi: "silta",
  slug: "silta",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "bridge",
  selitys:
    "Rakennelma, joka johtaa esimerkiksi joen tai tien yli: 'ylittää silta'. Tyyppi 9, astevaihtelu lt:ll (silta → sillan). Partitiivin monikko siltoja. Vrt. rautatiesilta, siltayhteys.",
  kuva: { emoji: "🌉", alt: "silta – rakennelma joen tai tien yli" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu lt:ll (silta ↔ silla-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sillan", merkitys: "of the bridge" },
      { sija: "partitiivi (yks.)", muoto: "siltaa", merkitys: "bridge (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "siltoja", merkitys: "bridges (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa lt → ll: genetiivi sillan, adessiivi sillalla. Vahva aste lt säilyy partitiivissa siltaa ja monikossa siltoja (a → o). 'Polttaa sillat' = to burn one's bridges.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "silta" },
          { label: "Partitiivi", form: "siltaa" },
          { label: "Genetiivi", form: "sillan" },
          { label: "Inessiivi", form: "sillassa" },
          { label: "Elatiivi", form: "sillasta" },
          { label: "Illatiivi", form: "siltaan" },
          { label: "Adessiivi", form: "sillalla" },
          { label: "Ablatiivi", form: "sillalta" },
          { label: "Allatiivi", form: "sillalle" },
          { label: "Essiivi", form: "siltana" },
          { label: "Translatiivi", form: "sillaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sillat" },
          { label: "Partitiivi", form: "siltoja" },
          { label: "Genetiivi", form: "siltojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rautatiesilta",
      en: "railway bridge",
      taso: "B2",
      esim: { fi: "Juna ylitti vanhan rautatiesillan.", en: "The train crossed the old railway bridge." },
    },
    {
      fi: "siltayhteys",
      en: "bridge connection, link",
      taso: "B2",
      esim: { fi: "Saarelle rakennettiin siltayhteys.", en: "A bridge connection was built to the island." },
    },
    {
      fi: "kävelysilta",
      en: "footbridge",
      taso: "B1",
      esim: { fi: "Kävelysilta vie joen yli.", en: "The footbridge goes over the river." },
    },
  ],
  synonyymit: [
    { fi: "ylikulkusilta", en: "overpass" },
    { fi: "maasilta", en: "viaduct" },
  ],
  esimerkit: {
    A2: { fi: "Kävelimme sillan yli.", en: "We walked across the bridge." },
    B1: { fi: "Uusi silta yhdistää kaksi kaupunginosaa.", en: "The new bridge connects two districts." },
    B2: {
      fi: "Vanha silta oli niin huonossa kunnossa, että se jouduttiin sulkemaan.",
      en: "The old bridge was in such bad condition that it had to be closed.",
    },
  },
  updatedAt: "2026-06-06",
};

export default silta;
