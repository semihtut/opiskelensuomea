import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem muutokse-.
// Genitive muutoksen, partitive muutosta, illative muutokseen, partitive pl muutoksia.
const muutos: Word = {
  fi: "muutos",
  slug: "muutos",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "change, alteration",
  selitys:
    "Se, kun jokin muuttuu toisenlaiseksi: 'suuri muutos'. Tyyppi 39, ei astevaihtelua; vartalo muutokse-. Partitiivin monikko muutoksia. Johdettu verbistä muuttua. Vrt. ilmastonmuutos.",
  kuva: { emoji: "🔄", alt: "muutos – se, kun jokin muuttuu toisenlaiseksi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua; vartalo muutokse-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "muutoksen", merkitys: "of the change" },
      { sija: "partitiivi (yks.)", muoto: "muutosta", merkitys: "change (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "muutoksia", merkitys: "changes (partitive pl.)" },
    ],
    huom:
      "Verbijohdos muuttua → -os; vartalo muutokse- (genetiivi muutoksen). 'Tehdä muutos' = to make a change; 'muutos parempaan' = a change for the better. Vrt. muuttaa, muuttua.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "muutos" },
          { label: "Partitiivi", form: "muutosta" },
          { label: "Genetiivi", form: "muutoksen" },
          { label: "Inessiivi", form: "muutoksessa" },
          { label: "Elatiivi", form: "muutoksesta" },
          { label: "Illatiivi", form: "muutokseen" },
          { label: "Adessiivi", form: "muutoksella" },
          { label: "Ablatiivi", form: "muutokselta" },
          { label: "Allatiivi", form: "muutokselle" },
          { label: "Essiivi", form: "muutoksena" },
          { label: "Translatiivi", form: "muutokseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "muutokset" },
          { label: "Partitiivi", form: "muutoksia" },
          { label: "Genetiivi", form: "muutosten / muutoksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "muuttua",
      en: "to change (intransitive)",
      taso: "B1",
      esim: { fi: "Sää muuttui nopeasti.", en: "The weather changed quickly." },
    },
    {
      fi: "ilmastonmuutos",
      en: "climate change",
      taso: "B2",
      esim: { fi: "Ilmastonmuutos on globaali ongelma.", en: "Climate change is a global problem." },
    },
    {
      fi: "muutoshakuinen",
      en: "change-oriented",
      taso: "B2",
      esim: { fi: "Hän on muutoshakuinen johtaja.", en: "She is a change-oriented leader." },
    },
  ],
  synonyymit: [
    { fi: "muuntuminen", en: "transformation" },
    { fi: "vaihdos", en: "switch, changeover" },
  ],
  esimerkit: {
    A2: { fi: "Elämässäni tapahtui suuri muutos.", en: "A big change happened in my life." },
    B1: { fi: "Pienikin muutos voi auttaa.", en: "Even a small change can help." },
    B2: {
      fi: "Muutos tuntuu aluksi vaikealta, mutta siihen tottuu nopeasti.",
      en: "Change feels difficult at first, but you get used to it quickly.",
    },
  },
  updatedAt: "2026-06-06",
};

export default muutos;
