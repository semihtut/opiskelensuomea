import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, lt:ll gradation, stem valta- ~ valla-.
// Genitive vallan, partitive valtaa, illative valtaan, partitive pl valtoja.
const valta: Word = {
  fi: "valta",
  slug: "valta",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "power, authority",
  selitys:
    "Kyky tai oikeus määrätä ja vaikuttaa: 'poliittinen valta'. Tyyppi 9, astevaihtelu lt:ll (valta → vallan). Partitiivin monikko valtoja. Vrt. valtio (state), vallata (to conquer), valtava (huge).",
  kuva: { alt: "valta – kyky määrätä ja vaikuttaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu lt:ll (valta ↔ valla-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vallan", merkitys: "of power" },
      { sija: "partitiivi (yks.)", muoto: "valtaa", merkitys: "power (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "valtoja", merkitys: "powers (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa lt → ll: genetiivi vallan, adessiivi vallalla. Vahva aste lt säilyy partitiivissa valtaa. 'Olla vallassa' = to be in power. Vrt. valtio = state, vallankumous = revolution.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "valta" },
          { label: "Partitiivi", form: "valtaa" },
          { label: "Genetiivi", form: "vallan" },
          { label: "Inessiivi", form: "vallassa" },
          { label: "Elatiivi", form: "vallasta" },
          { label: "Illatiivi", form: "valtaan" },
          { label: "Adessiivi", form: "vallalla" },
          { label: "Ablatiivi", form: "vallalta" },
          { label: "Allatiivi", form: "vallalle" },
          { label: "Essiivi", form: "valtana" },
          { label: "Translatiivi", form: "vallaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vallat" },
          { label: "Partitiivi", form: "valtoja" },
          { label: "Genetiivi", form: "valtojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vallata",
      en: "to conquer, seize, occupy",
      taso: "B2",
      esim: { fi: "Joukot valtasivat kaupungin.", en: "The troops seized the city." },
    },
    {
      fi: "vallankumous",
      en: "revolution",
      taso: "B2",
      esim: { fi: "Vallankumous muutti koko maan.", en: "The revolution changed the whole country." },
    },
    {
      fi: "valtava",
      en: "huge, enormous",
      taso: "B1",
      esim: { fi: "Sali oli valtava.", en: "The hall was huge." },
    },
  ],
  synonyymit: [
    { fi: "voima", en: "force, power" },
    { fi: "auktoriteetti", en: "authority" },
  ],
  esimerkit: {
    A2: { fi: "Presidentillä on paljon valtaa.", en: "The president has a lot of power." },
    B1: { fi: "Hän käytti valtaansa väärin.", en: "He misused his power." },
    B2: {
      fi: "Vallan jakaminen kolmeen osaan suojaa demokratiaa.",
      en: "Dividing power into three branches protects democracy.",
    },
  },
  updatedAt: "2026-06-06",
};

export default valta;
