import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem unelma-.
// Genitive unelman, partitive unelmaa, illative unelmaan, partitive pl unelmia.
const unelma: Word = {
  fi: "unelma",
  slug: "unelma",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "dream (aspiration)",
  selitys:
    "Toive tai haave, jota ihminen tavoittelee: 'toteuttaa unelma'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko unelmia. Johdettu sanasta uni. HUOM: unelma = aspiration, uni = dream while asleep.",
  kuva: { emoji: "🌟", alt: "unelma – toive tai haave, jota tavoitellaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "unelman", merkitys: "of the dream" },
      { sija: "partitiivi (yks.)", muoto: "unelmaa", merkitys: "dream (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "unelmia", merkitys: "dreams (partitive pl.)" },
    ],
    huom:
      "Ero: unelma = tavoiteltava haave (aspiration); uni = unessa nähty uni (dream while asleep). Partitiivin monikko unelmia. 'Unelmien täyttymys' = a dream come true. Vrt. unelmoida = to daydream.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "unelma" },
          { label: "Partitiivi", form: "unelmaa" },
          { label: "Genetiivi", form: "unelman" },
          { label: "Inessiivi", form: "unelmassa" },
          { label: "Elatiivi", form: "unelmasta" },
          { label: "Illatiivi", form: "unelmaan" },
          { label: "Adessiivi", form: "unelmalla" },
          { label: "Ablatiivi", form: "unelmalta" },
          { label: "Allatiivi", form: "unelmalle" },
          { label: "Essiivi", form: "unelmana" },
          { label: "Translatiivi", form: "unelmaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "unelmat" },
          { label: "Partitiivi", form: "unelmia" },
          { label: "Genetiivi", form: "unelmien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "unelmoida",
      en: "to dream, daydream (of)",
      taso: "B2",
      esim: { fi: "Hän unelmoi omasta talosta.", en: "She dreams of her own house." },
    },
    {
      fi: "unelmatyö",
      en: "dream job",
      taso: "B2",
      esim: { fi: "Sain vihdoin unelmatyöni.", en: "I finally got my dream job." },
    },
    {
      fi: "unelmahäät",
      en: "dream wedding",
      taso: "B2",
      esim: { fi: "He viettivät unelmahäät rannalla.", en: "They had a dream wedding on the beach." },
    },
  ],
  synonyymit: [
    { fi: "haave", en: "dream, fancy" },
    { fi: "toive", en: "wish, hope" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on yksi suuri unelma.", en: "I have one big dream." },
    B1: { fi: "Hänen unelmansa toteutui.", en: "Her dream came true." },
    B2: {
      fi: "Älä koskaan luovu unelmistasi, vaikka tie olisi pitkä.",
      en: "Never give up on your dreams, even if the road is long.",
    },
  },
  updatedAt: "2026-06-06",
};

export default unelma;
