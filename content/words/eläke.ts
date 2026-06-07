import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, kk:k gradation, stem eläkkee- ~ eläke.
// Genitive eläkkeen, partitive eläkettä, illative eläkkeeseen, partitive pl eläkkeitä.
const elake: Word = {
  fi: "eläke",
  slug: "eläke",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "pension",
  selitys:
    "Säännöllinen raha, jota maksetaan eläkkeelle jääneelle: 'jäädä eläkkeelle', 'saada eläkettä'. Tyyppi 48/hame, astevaihtelu kk:k (eläke → eläkkeen). Johdettu verbistä elää + -ke. Vrt. elää, eläkeläinen, eläkkeelle.",
  kuva: { emoji: "👵", alt: "eläke – raha jota maksetaan eläkkeelle jääneelle" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu kk:k (eläke ~ eläkkee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "eläkkeen", merkitys: "of the pension" },
      { sija: "partitiivi (yks.)", muoto: "eläkettä", merkitys: "pension (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "eläkkeeseen", merkitys: "into the pension" },
    ],
    huom:
      "Tyyppi 48/hame: nominatiivi eläke (heikko k), vartalo eläkkee- vahvistuu (eläkkeen, eläkkeellä). Partitiivi eläkettä, partitiivin monikko eläkkeitä. 'Jäädä eläkkeelle' = to retire. Vrt. elää, eläkeläinen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "eläke" },
          { label: "Partitiivi", form: "eläkettä" },
          { label: "Genetiivi", form: "eläkkeen" },
          { label: "Inessiivi", form: "eläkkeessä" },
          { label: "Elatiivi", form: "eläkkeestä" },
          { label: "Illatiivi", form: "eläkkeeseen" },
          { label: "Adessiivi", form: "eläkkeellä" },
          { label: "Ablatiivi", form: "eläkkeeltä" },
          { label: "Allatiivi", form: "eläkkeelle" },
          { label: "Essiivi", form: "eläkkeenä" },
          { label: "Translatiivi", form: "eläkkeeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "eläkkeet" },
          { label: "Partitiivi", form: "eläkkeitä" },
          { label: "Genetiivi", form: "eläkkeiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "eläkeläinen",
      en: "pensioner, retiree",
      taso: "B1",
      esim: { fi: "Naapurini on eläkeläinen.", en: "My neighbour is a pensioner." },
    },
    {
      fi: "eläkkeelle",
      en: "into retirement",
      taso: "B1",
      esim: { fi: "Hän jää ensi vuonna eläkkeelle.", en: "He will retire next year." },
    },
  ],
  synonyymit: [
    { fi: "vanhuuseläke", en: "old-age pension" },
  ],
  esimerkit: {
    A2: { fi: "Isoäiti saa eläkettä.", en: "Grandma receives a pension." },
    B1: { fi: "Hän jäi eläkkeelle 65-vuotiaana.", en: "She retired at the age of 65." },
    B2: {
      fi: "Eläkkeen suuruus riippuu siitä, kuinka kauan ja paljon on ollut töissä.",
      en: "The size of the pension depends on how long and how much one has worked.",
    },
  },
  updatedAt: "2026-06-07",
};

export default elake;
