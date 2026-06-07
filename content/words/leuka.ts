import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, k:∅ gradation, stem leuka- ~ leua-.
// Genitive leuan, partitive leukaa, partitive pl leukoja.
const leuka: Word = {
  fi: "leuka",
  slug: "leuka",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "chin, jaw",
  selitys:
    "Kasvojen alaosa suun alapuolella; myös leukaluu: 'terävä leuka'. Tyyppi 9/kala, astevaihtelu k:∅ (leuka → leuan). Vrt. kasvot, suu, leukaluu.",
  kuva: { emoji: "🧔", alt: "leuka – kasvojen alaosa suun alapuolella" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu k:∅ (leuka ~ leua-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "leuan", merkitys: "of the chin" },
      { sija: "partitiivi (yks.)", muoto: "leukaa", merkitys: "chin (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "leukoja", merkitys: "chins (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu k:∅: vahva leuka (nominatiivi, partitiivi leukaa), heikko leua- (leuan, leualla). Partitiivin monikko leukoja (a → o). 'Leuanveto' = pull-up. Vrt. leukaluu, suu.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "leuka" },
          { label: "Partitiivi", form: "leukaa" },
          { label: "Genetiivi", form: "leuan" },
          { label: "Inessiivi", form: "leuassa" },
          { label: "Elatiivi", form: "leuasta" },
          { label: "Illatiivi", form: "leukaan" },
          { label: "Adessiivi", form: "leualla" },
          { label: "Ablatiivi", form: "leualta" },
          { label: "Allatiivi", form: "leualle" },
          { label: "Essiivi", form: "leukana" },
          { label: "Translatiivi", form: "leuaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "leuat" },
          { label: "Partitiivi", form: "leukoja" },
          { label: "Genetiivi", form: "leukojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "leukaluu",
      en: "jawbone",
      taso: "B2",
      esim: { fi: "Leukaluu on vahva.", en: "The jawbone is strong." },
    },
    {
      fi: "leuanveto",
      en: "pull-up (exercise)",
      taso: "B2",
      esim: { fi: "Hän tekee kymmenen leuanvetoa.", en: "He does ten pull-ups." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Hänellä on terävä leuka.", en: "She has a sharp chin." },
    B1: { fi: "Sain pallosta leukaan.", en: "I got hit on the chin by the ball." },
    B2: {
      fi: "Hän nyökkäsi leuallaan kohti ovea.",
      en: "He nodded with his chin toward the door.",
    },
  },
  updatedAt: "2026-06-07",
};

export default leuka;
