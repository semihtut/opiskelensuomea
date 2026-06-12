import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem julkise-.
// Genitive julkisen, partitive julkista, partitive pl julkisia.
const julkinen: Word = {
  fi: "julkinen",
  slug: "julkinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "public",
  selitys:
    "Kaikille avoin tai kaikkia koskeva, ei yksityinen: 'julkinen liikenne', 'julkinen tila'. Tyyppi 38/nainen, ei astevaihtelua. Vastakohta yksityinen. Vrt. julkisuus, julkaista, julki.",
  kuva: { alt: "julkinen – kaikille avoin, ei yksityinen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo julkise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "julkisen", merkitys: "of public" },
      { sija: "partitiivi (yks.)", muoto: "julkista", merkitys: "public (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "julkisia", merkitys: "public (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo julkise-, partitiivi julkista, monikon partitiivi julkisia. Vastakohta yksityinen. 'Julkinen sektori' = public sector; 'julkinen liikenne' = public transport. Vrt. julkisuus = publicity.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "julkinen" },
          { label: "Partitiivi", form: "julkista" },
          { label: "Genetiivi", form: "julkisen" },
          { label: "Inessiivi", form: "julkisessa" },
          { label: "Elatiivi", form: "julkisesta" },
          { label: "Illatiivi", form: "julkiseen" },
          { label: "Adessiivi", form: "julkisella" },
          { label: "Allatiivi", form: "julkiselle" },
          { label: "Translatiivi", form: "julkiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "julkiset" },
          { label: "Partitiivi", form: "julkisia" },
          { label: "Genetiivi", form: "julkisten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "julkinen" },
          { label: "Komparatiivi", form: "julkisempi" },
          { label: "Superlatiivi", form: "julkisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "julkisuus",
      en: "publicity, the public eye",
      taso: "B2",
      esim: { fi: "Hän välttää julkisuutta.", en: "He avoids publicity." },
    },
    {
      fi: "julkaista",
      en: "to publish",
      taso: "B1",
      esim: { fi: "Kirja julkaistiin keväällä.", en: "The book was published in spring." },
    },
    {
      fi: "julkisesti",
      en: "publicly",
      taso: "B2",
      esim: { fi: "Hän pyysi julkisesti anteeksi.", en: "He apologized publicly." },
    },
  ],
  synonyymit: [
    { fi: "yleinen", en: "general, public" },
    { fi: "avoin", en: "open" },
  ],
  esimerkit: {
    A2: { fi: "Käytän julkista liikennettä.", en: "I use public transport." },
    B1: { fi: "Tieto on julkista.", en: "The information is public." },
    B2: {
      fi: "Julkisen ja yksityisen sektorin yhteistyö on hankkeessa keskeistä.",
      en: "Cooperation between the public and private sectors is central to the project.",
    },
  },
  updatedAt: "2026-06-07",
};

export default julkinen;
