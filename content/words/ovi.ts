import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation, stem ove- (i → e).
// Partitive sg ovea, partitive pl ovia, genitive pl ovien.
const ovi: Word = {
  fi: "ovi",
  slug: "ovi",
  pos: "substantiivi (tyyppi: ovi)",
  posClass: "substantiivi",
  level: "A1",
  en: "door",
  selitys:
    "Aukko seinässä, josta kuljetaan sisään ja ulos, sekä sen sulkeva levy. Vartalossa i → e: oven. Ei astevaihtelua.",
  kuva: { emoji: "🚪", alt: "ovi – oviaukko" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua (vartalo ove-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "ovea", merkitys: "door (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "oven", merkitys: "of the door" },
      { sija: "partitiivi (mon.)", muoto: "ovia", merkitys: "doors (partitive pl.)" },
    ],
    huom: "Lemman i muuttuu vartalossa e:ksi: ovi → oven, ovea. Monikon genetiivi ovien.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ovi" },
          { label: "Partitiivi", form: "ovea" },
          { label: "Genetiivi", form: "oven" },
          { label: "Inessiivi", form: "ovessa" },
          { label: "Elatiivi", form: "ovesta" },
          { label: "Illatiivi", form: "oveen" },
          { label: "Adessiivi", form: "ovella" },
          { label: "Ablatiivi", form: "ovelta" },
          { label: "Allatiivi", form: "ovelle" },
          { label: "Essiivi", form: "ovena" },
          { label: "Translatiivi", form: "oveksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ovet" },
          { label: "Partitiivi", form: "ovia" },
          { label: "Genetiivi", form: "ovien" },
          { label: "Illatiivi", form: "oviin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "etuovi",
      en: "front door",
      taso: "A2",
      esim: { fi: "Etuovi on lukossa.", en: "The front door is locked." },
    },
    {
      fi: "ovikello",
      en: "doorbell",
      taso: "B1",
      esim: { fi: "Joku soitti ovikelloa.", en: "Someone rang the doorbell." },
    },
    {
      fi: "oviaukko",
      en: "doorway",
      taso: "B2",
      esim: { fi: "Hän seisoi oviaukossa.", en: "He stood in the doorway." },
    },
  ],
  synonyymit: [
    { fi: "portti", en: "gate" },
    { fi: "luukku", en: "hatch" },
  ],
  esimerkit: {
    A2: { fi: "Avaa ovi, ole hyvä.", en: "Open the door, please." },
    B1: { fi: "Ovi oli lukossa, joten soitin ovikelloa.", en: "The door was locked, so I rang the doorbell." },
    B2: {
      fi: "Hän sulki oven hiljaa lähtiessään.",
      en: "He closed the door quietly as he left.",
    },
  },
  updatedAt: "2026-06-04",
};

export default ovi;
