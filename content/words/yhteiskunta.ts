import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, nt:nn gradation, stem yhteiskunta- ~ yhteiskunna-.
// Genitive yhteiskunnan, partitive yhteiskuntaa, illative yhteiskuntaan, partitive pl yhteiskuntia.
const yhteiskunta: Word = {
  fi: "yhteiskunta",
  slug: "yhteiskunta",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "society",
  selitys:
    "Yhdessä elävien ihmisten kokonaisuus ja sen rakenteet: 'suomalainen yhteiskunta'. Tyyppi 10, astevaihtelu nt:nn (yhteiskunta → yhteiskunnan). Yhdyssana yhteis- + kunta. Vrt. yhteiskunnallinen (social, societal).",
  kuva: { alt: "yhteiskunta – yhdessä elävien ihmisten kokonaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; astevaihtelu nt:nn (yhteiskunta ↔ yhteiskunna-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "yhteiskunnan", merkitys: "of society" },
      { sija: "partitiivi (yks.)", muoto: "yhteiskuntaa", merkitys: "society (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "yhteiskuntia", merkitys: "societies (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa nt → nn: genetiivi yhteiskunnan, adessiivi yhteiskunnalla. Vahva aste nt säilyy partitiivissa yhteiskuntaa ja illatiivissa yhteiskuntaan. Vrt. kunta = municipality.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "yhteiskunta" },
          { label: "Partitiivi", form: "yhteiskuntaa" },
          { label: "Genetiivi", form: "yhteiskunnan" },
          { label: "Inessiivi", form: "yhteiskunnassa" },
          { label: "Elatiivi", form: "yhteiskunnasta" },
          { label: "Illatiivi", form: "yhteiskuntaan" },
          { label: "Adessiivi", form: "yhteiskunnalla" },
          { label: "Ablatiivi", form: "yhteiskunnalta" },
          { label: "Allatiivi", form: "yhteiskunnalle" },
          { label: "Essiivi", form: "yhteiskuntana" },
          { label: "Translatiivi", form: "yhteiskunnaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "yhteiskunnat" },
          { label: "Partitiivi", form: "yhteiskuntia" },
          { label: "Genetiivi", form: "yhteiskuntien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yhteiskunnallinen",
      en: "social, societal",
      taso: "B2",
      esim: { fi: "Hän on aktiivinen yhteiskunnallinen vaikuttaja.", en: "She is an active social influencer." },
    },
    {
      fi: "tietoyhteiskunta",
      en: "information society",
      taso: "B2",
      esim: { fi: "Elämme tietoyhteiskunnassa.", en: "We live in an information society." },
    },
    {
      fi: "yhteiskuntaluokka",
      en: "social class",
      taso: "B2",
      esim: { fi: "Erot yhteiskuntaluokkien välillä kasvavat.", en: "Differences between social classes are growing." },
    },
  ],
  synonyymit: [
    { fi: "yhteisö", en: "community" },
    { fi: "kansakunta", en: "nation" },
  ],
  esimerkit: {
    A2: { fi: "Yhteiskunta muuttuu nopeasti.", en: "Society changes fast." },
    B1: { fi: "Koulutus on tärkeä osa yhteiskuntaa.", en: "Education is an important part of society." },
    B2: {
      fi: "Tasa-arvoisessa yhteiskunnassa jokaisella on samat mahdollisuudet.",
      en: "In an equal society everyone has the same opportunities.",
    },
  },
  updatedAt: "2026-06-06",
};

export default yhteiskunta;
