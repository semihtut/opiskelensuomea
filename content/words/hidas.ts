import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, t:d gradation, consonant stem.
// Genitive hitaan, partitive hidasta, partitive pl hitaita. Comp hitaampi, superl hitain.
const hidas: Word = {
  fi: "hidas",
  slug: "hidas",
  pos: "adjektiivi (tyyppi 41/vieras)",
  posClass: "adjektiivi",
  level: "A2",
  en: "slow",
  selitys:
    "Pienellä vauhdilla etenevä. Tyyppi 41, astevaihtelu t:d (hidas → hitaan), konsonanttivartalo (hidasta). Vastakohta nopea.",
  kuva: { alt: "hidas – etana hitaana" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 41/vieras; astevaihtelu t:d, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hitaan", merkitys: "of the slow" },
      { sija: "partitiivi (yks.)", muoto: "hidasta", merkitys: "slow (partitive)" },
      { sija: "komparatiivi", muoto: "hitaampi", merkitys: "slower" },
    ],
    huom:
      "Vokaalivartalo hitaa- (t:d-astevaihtelu): hitaan, hitaaseen, hitaita. Konsonanttivartalo näkyy partitiivissa hidasta. Adverbi hitaasti. Vertailu hitaampi/hitain.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "hidas" },
          { label: "Partitiivi", form: "hidasta" },
          { label: "Genetiivi", form: "hitaan" },
          { label: "Inessiivi", form: "hitaassa" },
          { label: "Illatiivi", form: "hitaaseen" },
          { label: "Adessiivi", form: "hitaalla" },
          { label: "Essiivi", form: "hitaana" },
          { label: "Translatiivi", form: "hitaaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hitaat" },
          { label: "Partitiivi", form: "hitaita" },
          { label: "Genetiivi", form: "hitaiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "hitaampi" },
          { label: "Komparatiivi (gen.)", form: "hitaamman" },
          { label: "Superlatiivi (nom.)", form: "hitain" },
          { label: "Superlatiivi (gen.)", form: "hitaimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hitaasti",
      en: "slowly (adverb)",
      taso: "A2",
      esim: { fi: "Puhu hitaasti, kiitos.", en: "Speak slowly, please." },
    },
    {
      fi: "hidastaa",
      en: "to slow down",
      taso: "B1",
      esim: { fi: "Auto hidasti vauhtia.", en: "The car slowed down." },
    },
    {
      fi: "hitaus",
      en: "slowness",
      taso: "B2",
      esim: { fi: "Palvelun hitaus ärsytti.", en: "The slowness of the service was annoying." },
    },
  ],
  synonyymit: [
    { fi: "verkkainen", en: "leisurely, unhurried" },
    { fi: "vitkasteleva", en: "dawdling" },
  ],
  esimerkit: {
    A2: { fi: "Internet on tänään hidas.", en: "The internet is slow today." },
    B1: { fi: "Tämä tie on hitaampi mutta kauniimpi.", en: "This road is slower but more beautiful." },
    B2: {
      fi: "Hitain juoksija pääsi silti maaliin.",
      en: "Even the slowest runner reached the finish.",
    },
  },
  updatedAt: "2026-06-05",
};

export default hidas;
