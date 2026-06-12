import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, t:tt gradation, stem laite ~ laittee-.
// Genitive laitteen, partitive laitetta, illative laitteeseen, partitive pl laitteita.
const laite: Word = {
  fi: "laite",
  slug: "laite",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "device, appliance; (pl.) equipment",
  selitys:
    "Tekninen väline, joka tekee jotakin: 'älykäs laite'. Tyyppi 48, astevaihtelu t:tt (laite → laitteen). Partitiivin monikko laitteita. Johdettu verbistä laittaa. Vrt. kone, väline, laitteisto.",
  kuva: { alt: "laite – tekninen väline" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu t:tt (laite ↔ laittee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "laitteen", merkitys: "of the device" },
      { sija: "partitiivi (yks.)", muoto: "laitetta", merkitys: "device (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "laitteita", merkitys: "devices (partitive pl.)" },
    ],
    huom:
      "Nominatiivi laite (t, heikko aste), vahva aste tt obliikvimuodoissa (laitteen, laitteessa). Partitiivi laitetta. Monikko laitteet = equipment. Vrt. laittaa = to put/prepare.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "laite" },
          { label: "Partitiivi", form: "laitetta" },
          { label: "Genetiivi", form: "laitteen" },
          { label: "Inessiivi", form: "laitteessa" },
          { label: "Elatiivi", form: "laitteesta" },
          { label: "Illatiivi", form: "laitteeseen" },
          { label: "Adessiivi", form: "laitteella" },
          { label: "Ablatiivi", form: "laitteelta" },
          { label: "Allatiivi", form: "laitteelle" },
          { label: "Essiivi", form: "laitteena" },
          { label: "Translatiivi", form: "laitteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "laitteet" },
          { label: "Partitiivi", form: "laitteita" },
          { label: "Genetiivi", form: "laitteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laitteisto",
      en: "hardware, equipment set",
      taso: "B2",
      esim: { fi: "Studion laitteisto on uusi.", en: "The studio's equipment is new." },
    },
    {
      fi: "sähkölaite",
      en: "electrical device",
      taso: "B1",
      esim: { fi: "Sammuta sähkölaitteet yöksi.", en: "Turn off the electrical devices for the night." },
    },
    {
      fi: "älylaite",
      en: "smart device",
      taso: "B2",
      esim: { fi: "Koti on täynnä älylaitteita.", en: "The home is full of smart devices." },
    },
  ],
  synonyymit: [
    { fi: "kone", en: "machine" },
    { fi: "väline", en: "tool, instrument" },
  ],
  esimerkit: {
    A2: { fi: "Tämä laite ei toimi.", en: "This device doesn't work." },
    B1: { fi: "Lataan laitteen joka ilta.", en: "I charge the device every evening." },
    B2: {
      fi: "Uusi laite osaa yhdistyä automaattisesti verkkoon.",
      en: "The new device can connect to the network automatically.",
    },
  },
  updatedAt: "2026-06-07",
};

export default laite;
