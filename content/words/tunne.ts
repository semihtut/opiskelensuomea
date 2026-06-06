import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, nt–nn gradation, stem tuntee-/tunne-.
// Genitive tunteen, partitive tunnetta, illative tunteeseen, partitive pl tunteita.
const tunne: Word = {
  fi: "tunne",
  slug: "tunne",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "feeling, emotion",
  selitys:
    "Mielen sisäinen kokemus, kuten ilo tai pelko: 'vahva tunne'. Tyyppi 48, astevaihtelu nt:nn (tunne → tunteen). Vrt. tuntea (to feel), tunnistaa (recognize).",
  kuva: { emoji: "❤️", alt: "tunne – mielen sisäinen kokemus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu nt:nn",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tunteen", merkitys: "of the feeling" },
      { sija: "partitiivi (yks.)", muoto: "tunnetta", merkitys: "feeling (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tunteita", merkitys: "feelings (partitive pl.)" },
    ],
    huom:
      "Loppu -e, vartalo pitenee: tunne → tunteen. Astevaihtelu nt:nn: nominatiivi tunne ja partitiivi tunnetta (nn), muu taivutus tuntee- (nt). Vrt. tuntea = to feel.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tunne" },
          { label: "Partitiivi", form: "tunnetta" },
          { label: "Genetiivi", form: "tunteen" },
          { label: "Inessiivi", form: "tunteessa" },
          { label: "Elatiivi", form: "tunteesta" },
          { label: "Illatiivi", form: "tunteeseen" },
          { label: "Adessiivi", form: "tunteella" },
          { label: "Ablatiivi", form: "tunteelta" },
          { label: "Allatiivi", form: "tunteelle" },
          { label: "Essiivi", form: "tunteena" },
          { label: "Translatiivi", form: "tunteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tunteet" },
          { label: "Partitiivi", form: "tunteita" },
          { label: "Genetiivi", form: "tunteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tunteellinen",
      en: "emotional, sentimental",
      taso: "B2",
      esim: { fi: "Hän on hyvin tunteellinen ihminen.", en: "He is a very emotional person." },
    },
    {
      fi: "tunnelma",
      en: "atmosphere, mood",
      taso: "B1",
      esim: { fi: "Juhlissa oli hyvä tunnelma.", en: "There was a good atmosphere at the party." },
    },
    {
      fi: "tuntea",
      en: "to feel; to know (a person)",
      taso: "A2",
      esim: { fi: "Tunnen oloni hyväksi.", en: "I feel good." },
    },
  ],
  synonyymit: [
    { fi: "tuntemus", en: "sensation, feeling" },
    { fi: "emootio", en: "emotion" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on hyvä tunne tästä.", en: "I have a good feeling about this." },
    B1: { fi: "Hän ei osannut piilottaa tunteitaan.", en: "She couldn't hide her feelings." },
    B2: {
      fi: "Päätös perustui enemmän tunteeseen kuin järkeen.",
      en: "The decision was based more on feeling than on reason.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tunne;
