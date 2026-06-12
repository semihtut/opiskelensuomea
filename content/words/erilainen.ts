import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem erilaise-.
// Genitive erilaisen, partitive erilaista, partitive pl erilaisia.
const erilainen: Word = {
  fi: "erilainen",
  slug: "erilainen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A2",
  en: "different, of a different kind",
  selitys:
    "Toisesta poikkeava, ei samanlainen: 'aivan erilainen ratkaisu'. Tyyppi 38/nainen, ei astevaihtelua. Yhdyssana eri + -lainen. Vastakohta samanlainen. Hallitsee elatiivia: 'erilainen kuin' tai 'erilainen jostakin'. Vrt. erilaisuus, erota.",
  kuva: { alt: "erilainen – toisesta poikkeava, ei samanlainen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo erilaise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "erilaisen", merkitys: "of different" },
      { sija: "partitiivi (yks.)", muoto: "erilaista", merkitys: "different (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "erilaisia", merkitys: "different (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo erilaise-, partitiivi erilaista, monikon partitiivi erilaisia. Vastakohta samanlainen. 'Erilainen kuin' = different from. Komparatiivi erilaisempi = more different (käytetään melko harvoin).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "erilainen" },
          { label: "Partitiivi", form: "erilaista" },
          { label: "Genetiivi", form: "erilaisen" },
          { label: "Inessiivi", form: "erilaisessa" },
          { label: "Elatiivi", form: "erilaisesta" },
          { label: "Illatiivi", form: "erilaiseen" },
          { label: "Adessiivi", form: "erilaisella" },
          { label: "Ablatiivi", form: "erilaiselta" },
          { label: "Allatiivi", form: "erilaiselle" },
          { label: "Essiivi", form: "erilaisena" },
          { label: "Translatiivi", form: "erilaiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "erilaiset" },
          { label: "Partitiivi", form: "erilaisia" },
          { label: "Genetiivi", form: "erilaisten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "erilaisuus",
      en: "difference, diversity",
      taso: "B2",
      esim: { fi: "Erilaisuus on rikkaus.", en: "Diversity is a richness." },
    },
    {
      fi: "eri",
      en: "different, various (indeclinable)",
      taso: "A2",
      esim: { fi: "Puhuimme eri asioista.", en: "We talked about different things." },
    },
  ],
  synonyymit: [
    { fi: "toisenlainen", en: "of another kind" },
    { fi: "poikkeava", en: "deviant, divergent" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on aivan erilainen.", en: "This is completely different." },
    B1: { fi: "Kokeile erilaista lähestymistapaa.", en: "Try a different approach." },
    B2: {
      fi: "Ryhmässä oli ihmisiä hyvin erilaisista taustoista.",
      en: "The group had people from very different backgrounds.",
    },
  },
  updatedAt: "2026-06-07",
};

export default erilainen;
