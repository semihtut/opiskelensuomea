import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem maailma-.
// Genitive maailman, partitive maailmaa, illative maailmaan, partitive pl maailmoja.
const maailma: Word = {
  fi: "maailma",
  slug: "maailma",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "world",
  selitys:
    "Koko maapallo tai jokin kokonaisuus: 'koko maailma'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko maailmoja. Yhdyssana maa + ilma. Vrt. maailmankaikkeus (universe), maailmanlaajuinen (global).",
  kuva: { emoji: "🌍", alt: "maailma – koko maapallo" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "maailman", merkitys: "of the world" },
      { sija: "partitiivi (yks.)", muoto: "maailmaa", merkitys: "world (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "maailmoja", merkitys: "worlds (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikossa a → o: maailmoja. 'Koko maailma' = the whole world. Vrt. maailmankuva = worldview, maailmanmestari = world champion.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "maailma" },
          { label: "Partitiivi", form: "maailmaa" },
          { label: "Genetiivi", form: "maailman" },
          { label: "Inessiivi", form: "maailmassa" },
          { label: "Elatiivi", form: "maailmasta" },
          { label: "Illatiivi", form: "maailmaan" },
          { label: "Adessiivi", form: "maailmalla" },
          { label: "Ablatiivi", form: "maailmalta" },
          { label: "Allatiivi", form: "maailmalle" },
          { label: "Essiivi", form: "maailmana" },
          { label: "Translatiivi", form: "maailmaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "maailmat" },
          { label: "Partitiivi", form: "maailmoja" },
          { label: "Genetiivi", form: "maailmojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "maailmanlaajuinen",
      en: "global, worldwide",
      taso: "B2",
      esim: { fi: "Ilmiö on maailmanlaajuinen.", en: "The phenomenon is global." },
    },
    {
      fi: "maailmankuva",
      en: "worldview",
      taso: "B2",
      esim: { fi: "Matkustaminen laajensi maailmankuvaani.", en: "Travel broadened my worldview." },
    },
    {
      fi: "maailmankaikkeus",
      en: "universe",
      taso: "B2",
      esim: { fi: "Maailmankaikkeus on valtava.", en: "The universe is vast." },
    },
  ],
  synonyymit: [
    { fi: "maapallo", en: "the globe, Earth" },
    { fi: "maa", en: "world, earth" },
  ],
  esimerkit: {
    A2: { fi: "Haluan nähdä maailmaa.", en: "I want to see the world." },
    B1: { fi: "Internet yhdistää koko maailman.", en: "The internet connects the whole world." },
    B2: {
      fi: "Pienikin teko voi muuttaa maailmaa, jos moni tekee samoin.",
      en: "Even a small act can change the world if many do the same.",
    },
  },
  updatedAt: "2026-06-06",
};

export default maailma;
