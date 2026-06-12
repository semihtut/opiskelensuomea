import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, rt:rr gradation, stem murte- ~ murre.
// Genitive murteen, partitive murretta, partitive pl murteita.
const murre: Word = {
  fi: "murre",
  slug: "murre",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B2",
  en: "dialect",
  selitys:
    "Kielen alueellinen muoto, joka eroaa yleiskielestä: 'savon murre', 'puhua murretta'. Tyyppi 48/hame, astevaihtelu rt:rr (vartalo murte-, nominatiivi murre). Vrt. kieli, yleiskieli, puhekieli.",
  kuva: { alt: "murre – kielen alueellinen muoto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu rt:rr (murte- ~ murre)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "murteen", merkitys: "of the dialect" },
      { sija: "partitiivi (yks.)", muoto: "murretta", merkitys: "dialect (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "murteita", merkitys: "dialects (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48/hame: vahva vartalo murte- (murteen, murteella, murteita), heikko nominatiivissa murre ja partitiivissa murretta. 'Puhua murretta' = to speak dialect. Vrt. yleiskieli, puhekieli, slangi.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "murre" },
          { label: "Partitiivi", form: "murretta" },
          { label: "Genetiivi", form: "murteen" },
          { label: "Inessiivi", form: "murteessa" },
          { label: "Elatiivi", form: "murteesta" },
          { label: "Illatiivi", form: "murteeseen" },
          { label: "Adessiivi", form: "murteella" },
          { label: "Ablatiivi", form: "murteelta" },
          { label: "Allatiivi", form: "murteelle" },
          { label: "Essiivi", form: "murteena" },
          { label: "Translatiivi", form: "murteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "murteet" },
          { label: "Partitiivi", form: "murteita" },
          { label: "Genetiivi", form: "murteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yleiskieli",
      en: "standard language",
      taso: "B2",
      esim: { fi: "Uutiset luetaan yleiskielellä.", en: "The news is read in standard language." },
    },
    {
      fi: "puhekieli",
      en: "spoken / colloquial language",
      taso: "B1",
      esim: { fi: "Puhekieli eroaa kirjakielestä.", en: "Spoken language differs from written language." },
    },
  ],
  synonyymit: [
    { fi: "paikallinen kielimuoto", en: "local language variety" },
  ],
  esimerkit: {
    A2: { fi: "Hän puhuu murretta.", en: "He speaks a dialect." },
    B1: { fi: "Suomessa on monta murretta.", en: "There are many dialects in Finland." },
    B2: {
      fi: "Murteet rikastuttavat kieltä, vaikka ne voivat aluksi hämmentää oppijaa.",
      en: "Dialects enrich the language, even though they can confuse a learner at first.",
    },
  },
  updatedAt: "2026-06-07",
};

export default murre;
