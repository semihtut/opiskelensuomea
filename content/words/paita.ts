import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, t:d gradation. Genitive paidan,
// partitive paitaa, illative paitaan, partitive pl paitoja.
const paita: Word = {
  fi: "paita",
  slug: "paita",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "shirt",
  selitys:
    "Ylävartalon vaate. Tyyppi 9, astevaihtelu t:d (paita → paidan). Yhdyssanat: t-paita, yöpaita, kauluspaita.",
  kuva: { alt: "paita – paita" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu t:d",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "paidan", merkitys: "of the shirt" },
      { sija: "partitiivi (yks.)", muoto: "paitaa", merkitys: "shirt (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "paitoja", merkitys: "shirts (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa t → d: paidan, paidassa. Vahva aste säilyy: paitaa, paitaan, paitoja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "paita" },
          { label: "Partitiivi", form: "paitaa" },
          { label: "Genetiivi", form: "paidan" },
          { label: "Inessiivi", form: "paidassa" },
          { label: "Elatiivi", form: "paidasta" },
          { label: "Illatiivi", form: "paitaan" },
          { label: "Adessiivi", form: "paidalla" },
          { label: "Ablatiivi", form: "paidalta" },
          { label: "Allatiivi", form: "paidalle" },
          { label: "Essiivi", form: "paitana" },
          { label: "Translatiivi", form: "paidaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "paidat" },
          { label: "Partitiivi", form: "paitoja" },
          { label: "Genetiivi", form: "paitojen" },
          { label: "Inessiivi", form: "paidoissa" },
          { label: "Illatiivi", form: "paitoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "t-paita",
      en: "T-shirt",
      taso: "A1",
      esim: { fi: "Kesällä pukeudun t-paitaan.", en: "In summer I wear a T-shirt." },
    },
    {
      fi: "yöpaita",
      en: "nightshirt, nightgown",
      taso: "B1",
      esim: { fi: "Lapsi nukkuu yöpaidassa.", en: "The child sleeps in a nightshirt." },
    },
    {
      fi: "kauluspaita",
      en: "collared/dress shirt",
      taso: "B1",
      esim: { fi: "Hän pukeutui kauluspaitaan.", en: "He put on a dress shirt." },
    },
  ],
  synonyymit: [
    { fi: "pusero", en: "blouse, top" },
    { fi: "toppi", en: "top, tank top" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on sininen paita.", en: "I have a blue shirt." },
    B1: { fi: "Vaihdoin paidan, koska se oli likainen.", en: "I changed the shirt because it was dirty." },
    B2: {
      fi: "Hän silitti paidan huolellisesti ennen haastattelua.",
      en: "He ironed the shirt carefully before the interview.",
    },
  },
  updatedAt: "2026-06-04",
};

export default paita;
