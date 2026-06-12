import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, nt:nn gradation, stem lintu- ~ linnu-.
// Genitive linnun, partitive lintua, partitive pl lintuja.
const lintu: Word = {
  fi: "lintu",
  slug: "lintu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "bird",
  selitys:
    "Höyhenpeitteinen eläin, joka yleensä lentää: 'lintu laulaa'. Tyyppi 1/valo, astevaihtelu nt:nn (lintu → linnun). Vrt. lentää, muuttolintu, eläin.",
  kuva: { alt: "lintu – höyhenpeitteinen eläin joka yleensä lentää" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nt:nn (lintu ~ linnu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "linnun", merkitys: "of the bird" },
      { sija: "partitiivi (yks.)", muoto: "lintua", merkitys: "bird (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lintuja", merkitys: "birds (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu nt:nn: vahva lintu (nominatiivi, partitiivi lintua), heikko linnu- (linnun, linnussa). Muuttolintu = migratory bird, laululintu = songbird. Vrt. lentää.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lintu" },
          { label: "Partitiivi", form: "lintua" },
          { label: "Genetiivi", form: "linnun" },
          { label: "Inessiivi", form: "linnussa" },
          { label: "Elatiivi", form: "linnusta" },
          { label: "Illatiivi", form: "lintuun" },
          { label: "Adessiivi", form: "linnulla" },
          { label: "Ablatiivi", form: "linnulta" },
          { label: "Allatiivi", form: "linnulle" },
          { label: "Essiivi", form: "lintuna" },
          { label: "Translatiivi", form: "linnuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "linnut" },
          { label: "Partitiivi", form: "lintuja" },
          { label: "Genetiivi", form: "lintujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "muuttolintu",
      en: "migratory bird",
      taso: "B1",
      esim: { fi: "Muuttolinnut lähtevät syksyllä.", en: "Migratory birds leave in the autumn." },
    },
    {
      fi: "lintulauta",
      en: "bird feeder",
      taso: "B1",
      esim: { fi: "Linnut käyvät lintulaudalla.", en: "The birds visit the bird feeder." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Lintu laulaa puussa.", en: "A bird is singing in the tree." },
    B1: { fi: "Keväällä linnut palaavat etelästä.", en: "In spring the birds return from the south." },
    B2: {
      fi: "Monet linnut lentävät talveksi lämpimämpiin maihin.",
      en: "Many birds fly to warmer countries for the winter.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lintu;
