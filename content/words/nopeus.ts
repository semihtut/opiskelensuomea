import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem nopeute- ~ nopeude-.
// Genitive nopeuden, partitive nopeutta, illative nopeuteen, partitive pl nopeuksia.
const nopeus: Word = {
  fi: "nopeus",
  slug: "nopeus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "speed, velocity",
  selitys:
    "Liikkeen tai toiminnan vauhti: 'suuri nopeus'. Tyyppi 40, astevaihtelu t:d (nopeute- → nopeude-). Johdettu sanasta nopea. Vrt. nopeusrajoitus (speed limit), nopea (fast).",
  kuva: { emoji: "🏎️", alt: "nopeus – liikkeen vauhti" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (nopeute- ↔ nopeude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "nopeuden", merkitys: "of the speed" },
      { sija: "partitiivi (yks.)", muoto: "nopeutta", merkitys: "speed (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "nopeuksia", merkitys: "speeds (partitive pl.)" },
    ],
    huom:
      "Genetiivissä -ude- (nopeuden), partitiivissa -utta (nopeutta), monikossa -uksi- (nopeuksia). 'Suurella nopeudella' = at high speed. Vrt. nopea = fast, nopeasti = quickly.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "nopeus" },
          { label: "Partitiivi", form: "nopeutta" },
          { label: "Genetiivi", form: "nopeuden" },
          { label: "Inessiivi", form: "nopeudessa" },
          { label: "Elatiivi", form: "nopeudesta" },
          { label: "Illatiivi", form: "nopeuteen" },
          { label: "Adessiivi", form: "nopeudella" },
          { label: "Ablatiivi", form: "nopeudelta" },
          { label: "Allatiivi", form: "nopeudelle" },
          { label: "Essiivi", form: "nopeutena" },
          { label: "Translatiivi", form: "nopeudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "nopeudet" },
          { label: "Partitiivi", form: "nopeuksia" },
          { label: "Genetiivi", form: "nopeuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nopeusrajoitus",
      en: "speed limit",
      taso: "B1",
      esim: { fi: "Nopeusrajoitus on 80 kilometriä tunnissa.", en: "The speed limit is 80 km/h." },
    },
    {
      fi: "huippunopeus",
      en: "top speed",
      taso: "B2",
      esim: { fi: "Auton huippunopeus on korkea.", en: "The car's top speed is high." },
    },
    {
      fi: "ylinopeus",
      en: "speeding, excess speed",
      taso: "B2",
      esim: { fi: "Hän sai sakon ylinopeudesta.", en: "He got a fine for speeding." },
    },
  ],
  synonyymit: [
    { fi: "vauhti", en: "pace, speed" },
    { fi: "kiire", en: "haste" },
  ],
  esimerkit: {
    A2: { fi: "Juna kulkee suurella nopeudella.", en: "The train travels at high speed." },
    B1: { fi: "Hidasta nopeutta koulun lähellä.", en: "Reduce your speed near the school." },
    B2: {
      fi: "Tiedon leviämisen nopeus on kasvanut valtavasti internetin myötä.",
      en: "The speed at which information spreads has grown enormously with the internet.",
    },
  },
  updatedAt: "2026-06-06",
};

export default nopeus;
