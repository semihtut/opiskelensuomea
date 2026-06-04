import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: REGULAR comparison huono → huonompi → huonoin
// (contrast with the suppletive hyvä). Partitive sg huonoa, partitive pl huonoja.
const huono: Word = {
  fi: "huono",
  slug: "huono",
  pos: "adjektiivi",
  posClass: "adjektiivi",
  level: "A1",
  en: "bad, poor",
  selitys:
    "Kielteistä laatua ilmaiseva adjektiivi, hyvän vastakohta. Vertailu on säännöllinen: huono – huonompi – huonoin.",
  kuva: { emoji: "👎", alt: "huono – peukku alas" },

  kielioppi: {
    tyyppi: "adjektiivi; säännöllinen vertailu huono – huonompi – huonoin",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "huonoa", merkitys: "bad (partitive)" },
      { sija: "komparatiivi", muoto: "huonompi", merkitys: "worse" },
      { sija: "superlatiivi", muoto: "huonoin", merkitys: "worst" },
    ],
    huom:
      "Säännöllinen vertailu (vrt. hyvä, joka on epäsäännöllinen). Partitiivi huonoa, monikon partitiivi huonoja; superlatiivin genetiivi huonoimman.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "huono" },
          { label: "Partitiivi", form: "huonoa" },
          { label: "Genetiivi", form: "huonon" },
          { label: "Inessiivi", form: "huonossa" },
          { label: "Illatiivi", form: "huonoon" },
          { label: "Adessiivi", form: "huonolla" },
          { label: "Essiivi", form: "huonona" },
          { label: "Translatiivi", form: "huonoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "huonot" },
          { label: "Partitiivi", form: "huonoja" },
          { label: "Genetiivi", form: "huonojen" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "huonompi" },
          { label: "Komparatiivi (gen.)", form: "huonomman" },
          { label: "Komparatiivi (part.)", form: "huonompaa" },
          { label: "Superlatiivi (nom.)", form: "huonoin" },
          { label: "Superlatiivi (gen.)", form: "huonoimman" },
          { label: "Superlatiivi (part.)", form: "huonointa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "huonosti",
      en: "badly, poorly",
      taso: "A2",
      esim: { fi: "Nukuin huonosti viime yönä.", en: "I slept badly last night." },
    },
    {
      fi: "huonokuntoinen",
      en: "in poor condition / shape",
      taso: "B1",
      esim: { fi: "Tie oli huonokuntoinen.", en: "The road was in poor condition." },
    },
    {
      fi: "huonontua",
      en: "to deteriorate, get worse",
      taso: "B2",
      esim: { fi: "Tilanne huononi nopeasti.", en: "The situation worsened quickly." },
    },
  ],
  synonyymit: [
    { fi: "kehno", en: "poor, lousy" },
    { fi: "heikko", en: "weak, poor" },
  ],
  esimerkit: {
    A2: { fi: "Sää on tänään huono.", en: "The weather is bad today." },
    B1: { fi: "Minulla on huono muisti.", en: "I have a bad memory." },
    B2: {
      fi: "Tämä on huonoin elokuva, jonka olen nähnyt.",
      en: "This is the worst movie I've seen.",
    },
  },
  updatedAt: "2026-06-04",
};

export default huono;
