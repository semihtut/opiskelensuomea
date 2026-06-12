import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation.
// Partitive pl ikkunoita, genitive pl ikkunoiden (also ikkunoitten).
const ikkuna: Word = {
  fi: "ikkuna",
  slug: "ikkuna",
  pos: "substantiivi (tyyppi: kulkija)",
  posClass: "substantiivi",
  level: "A1",
  en: "window",
  selitys:
    "Seinän lasiaukko, joka päästää valoa sisään. Ei astevaihtelua; monikossa ikkunoita, ikkunoiden.",
  kuva: { alt: "ikkuna – seinän lasiaukko" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "ikkunaa", merkitys: "window (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "ikkunan", merkitys: "of the window" },
      { sija: "partitiivi (mon.)", muoto: "ikkunoita", merkitys: "windows (partitive pl.)" },
    ],
    huom:
      "Monikon vartalo ikkuno-: partitiivi ikkunoita, genetiivi ikkunoiden (myös ikkunoitten), illatiivi ikkunoihin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ikkuna" },
          { label: "Partitiivi", form: "ikkunaa" },
          { label: "Genetiivi", form: "ikkunan" },
          { label: "Inessiivi", form: "ikkunassa" },
          { label: "Elatiivi", form: "ikkunasta" },
          { label: "Illatiivi", form: "ikkunaan" },
          { label: "Adessiivi", form: "ikkunalla" },
          { label: "Ablatiivi", form: "ikkunalta" },
          { label: "Allatiivi", form: "ikkunalle" },
          { label: "Essiivi", form: "ikkunana" },
          { label: "Translatiivi", form: "ikkunaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ikkunat" },
          { label: "Partitiivi", form: "ikkunoita" },
          { label: "Genetiivi", form: "ikkunoiden" },
          { label: "Illatiivi", form: "ikkunoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ikkunalauta",
      en: "windowsill",
      taso: "B1",
      esim: { fi: "Kukat ovat ikkunalaudalla.", en: "The flowers are on the windowsill." },
    },
    {
      fi: "näyteikkuna",
      en: "display window, shop window",
      taso: "B2",
      esim: { fi: "Katselin kauppojen näyteikkunoita.", en: "I looked at the shops' display windows." },
    },
    {
      fi: "ikkunaluukku",
      en: "shutter",
      taso: "B2",
      esim: { fi: "Suljimme ikkunaluukut myrskyn takia.", en: "We closed the shutters because of the storm." },
    },
  ],
  synonyymit: [
    { fi: "akkuna", en: "window (dialectal variant)" },
    { fi: "lasiruutu", en: "glass pane" },
  ],
  esimerkit: {
    A2: { fi: "Avaan ikkunan, koska on kuuma.", en: "I'll open the window because it's hot." },
    B1: { fi: "Lapsi katseli ulos ikkunasta.", en: "The child looked out the window." },
    B2: {
      fi: "Vanhan talon ikkunat vaihdettiin energiatehokkaisiin.",
      en: "The old house's windows were replaced with energy-efficient ones.",
    },
  },
  updatedAt: "2026-06-04",
};

export default ikkuna;
