import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem sairaute- ~ sairaude-.
// Genitive sairauden, partitive sairautta, illative sairauteen, partitive pl sairauksia.
const sairaus: Word = {
  fi: "sairaus",
  slug: "sairaus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "illness, disease, sickness",
  selitys:
    "Terveyden häiriö tai tauti: 'vakava sairaus'. Tyyppi 40, astevaihtelu t:d (sairaute- → sairaude-). Johdettu sanasta sairas. Vrt. sairastua (to fall ill), sairaala (hospital).",
  kuva: { emoji: "🤒", alt: "sairaus – terveyden häiriö" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (sairaute- ↔ sairaude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sairauden", merkitys: "of the disease" },
      { sija: "partitiivi (yks.)", muoto: "sairautta", merkitys: "disease (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sairauksia", merkitys: "diseases (partitive pl.)" },
    ],
    huom:
      "Genetiivissä -ude- (sairauden), partitiivissa -utta (sairautta), monikossa -uksi- (sairauksia, sairauksien). Vrt. sairas = sick, sairastaa = to suffer from, terveys = health.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sairaus" },
          { label: "Partitiivi", form: "sairautta" },
          { label: "Genetiivi", form: "sairauden" },
          { label: "Inessiivi", form: "sairaudessa" },
          { label: "Elatiivi", form: "sairaudesta" },
          { label: "Illatiivi", form: "sairauteen" },
          { label: "Adessiivi", form: "sairaudella" },
          { label: "Ablatiivi", form: "sairaudelta" },
          { label: "Allatiivi", form: "sairaudelle" },
          { label: "Essiivi", form: "sairautena" },
          { label: "Translatiivi", form: "sairaudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sairaudet" },
          { label: "Partitiivi", form: "sairauksia" },
          { label: "Genetiivi", form: "sairauksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sairastua",
      en: "to fall ill, get sick",
      taso: "B1",
      esim: { fi: "Sairastuin flunssaan.", en: "I caught the flu." },
    },
    {
      fi: "sairausloma",
      en: "sick leave",
      taso: "B1",
      esim: { fi: "Hän on sairauslomalla.", en: "She is on sick leave." },
    },
    {
      fi: "kansansairaus",
      en: "common (widespread) disease",
      taso: "B2",
      esim: { fi: "Diabetes on yleinen kansansairaus.", en: "Diabetes is a common widespread disease." },
    },
  ],
  synonyymit: [
    { fi: "tauti", en: "disease" },
    { fi: "vaiva", en: "ailment, trouble" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on vakava sairaus.", en: "He has a serious illness." },
    B1: { fi: "Sairaus pakotti hänet jäämään kotiin.", en: "The illness forced him to stay home." },
    B2: {
      fi: "Monet sairaudet voidaan ehkäistä terveellisillä elämäntavoilla.",
      en: "Many diseases can be prevented with a healthy lifestyle.",
    },
  },
  updatedAt: "2026-06-06",
};

export default sairaus;
