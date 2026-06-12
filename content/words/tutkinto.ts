import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, nt:nn gradation, stem tutkinto- ~ tutkinno-.
// Genitive tutkinnon, partitive tutkintoa, illative tutkintoon, partitive pl tutkintoja.
const tutkinto: Word = {
  fi: "tutkinto",
  slug: "tutkinto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "degree, qualification, examination",
  selitys:
    "Loppututkinto tai virallinen pätevyys, joka suoritetaan opiskelemalla: 'korkeakoulututkinto'. Tyyppi 1, astevaihtelu nt:nn (tutkinto → tutkinnon). Partitiivin monikko tutkintoja. Johdettu verbistä tutkia.",
  kuva: { alt: "tutkinto – virallinen pätevyys tai loppututkinto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nt:nn (tutkinto ↔ tutkinno-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tutkinnon", merkitys: "of the degree" },
      { sija: "partitiivi (yks.)", muoto: "tutkintoa", merkitys: "degree (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tutkintoja", merkitys: "degrees (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa nt → nn: genetiivi tutkinnon, inessiivi tutkinnossa. Vahva aste nt säilyy partitiivissa tutkintoa ja monikossa tutkintoja. 'Suorittaa tutkinto' = to complete a degree.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tutkinto" },
          { label: "Partitiivi", form: "tutkintoa" },
          { label: "Genetiivi", form: "tutkinnon" },
          { label: "Inessiivi", form: "tutkinnossa" },
          { label: "Elatiivi", form: "tutkinnosta" },
          { label: "Illatiivi", form: "tutkintoon" },
          { label: "Adessiivi", form: "tutkinnolla" },
          { label: "Ablatiivi", form: "tutkinnolta" },
          { label: "Allatiivi", form: "tutkinnolle" },
          { label: "Essiivi", form: "tutkintona" },
          { label: "Translatiivi", form: "tutkinnoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tutkinnot" },
          { label: "Partitiivi", form: "tutkintoja" },
          { label: "Genetiivi", form: "tutkintojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "korkeakoulututkinto",
      en: "higher-education degree",
      taso: "B2",
      esim: { fi: "Työ vaatii korkeakoulututkinnon.", en: "The job requires a higher-education degree." },
    },
    {
      fi: "tutkintotodistus",
      en: "diploma, degree certificate",
      taso: "B2",
      esim: { fi: "Sain tutkintotodistuksen juhlassa.", en: "I received my diploma at the ceremony." },
    },
    {
      fi: "tutkia",
      en: "to research, examine",
      taso: "B1",
      esim: { fi: "Tutkija tutkii uusia lääkkeitä.", en: "The researcher studies new medicines." },
    },
  ],
  synonyymit: [
    { fi: "loppututkinto", en: "final degree" },
    { fi: "pätevyys", en: "qualification" },
  ],
  esimerkit: {
    A2: { fi: "Hän suoritti tutkinnon kolmessa vuodessa.", en: "She completed the degree in three years." },
    B1: { fi: "Mihin tutkinto antaa pätevyyden?", en: "What does the degree qualify you for?" },
    B2: {
      fi: "Ulkomailla suoritettu tutkinto pitää joskus tunnustaa erikseen.",
      en: "A degree obtained abroad sometimes has to be recognised separately.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tutkinto;
