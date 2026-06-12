import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, tt:t gradation (strong grade in
// the inflectional stem vaattee-). Genitive vaatteen, partitive vaatetta,
// illative vaatteeseen, partitive pl vaatteita. Plural vaatteet = "clothes".
const vaate: Word = {
  fi: "vaate",
  slug: "vaate",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "A2",
  en: "garment; (pl.) clothes",
  selitys:
    "Päällä pidettävä kappale; monikko vaatteet = clothes. Tyyppi 48, astevaihtelu tt:t (vahva aste taivutusvartalossa: vaatteen). Käytetään usein monikossa.",
  kuva: { alt: "vaate – vaatekappale" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu tt:t",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vaatteen", merkitys: "of the garment" },
      { sija: "partitiivi (yks.)", muoto: "vaatetta", merkitys: "garment (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vaatteita", merkitys: "clothes (partitive pl.)" },
    ],
    huom:
      "Nominatiivi vaate (heikko aste, yksi t), mutta taivutusvartalo vaattee- (vahva aste, kaksi t:tä): vaatteen, vaatteeseen. Arjessa yleensä monikko: vaatteet.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vaate" },
          { label: "Partitiivi", form: "vaatetta" },
          { label: "Genetiivi", form: "vaatteen" },
          { label: "Inessiivi", form: "vaatteessa" },
          { label: "Elatiivi", form: "vaatteesta" },
          { label: "Illatiivi", form: "vaatteeseen" },
          { label: "Adessiivi", form: "vaatteella" },
          { label: "Ablatiivi", form: "vaatteelta" },
          { label: "Allatiivi", form: "vaatteelle" },
          { label: "Essiivi", form: "vaatteena" },
          { label: "Translatiivi", form: "vaatteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vaatteet" },
          { label: "Partitiivi", form: "vaatteita" },
          { label: "Genetiivi", form: "vaatteiden" },
          { label: "Inessiivi", form: "vaatteissa" },
          { label: "Illatiivi", form: "vaatteisiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaatekaappi",
      en: "wardrobe, closet",
      taso: "A2",
      esim: { fi: "Vaatekaappi on täynnä.", en: "The wardrobe is full." },
    },
    {
      fi: "vaatettaa",
      en: "to clothe, dress",
      taso: "B2",
      esim: { fi: "Vanhemmat vaatettavat lapset.", en: "The parents clothe the children." },
    },
    {
      fi: "ulkovaatteet",
      en: "outdoor clothes",
      taso: "B1",
      esim: { fi: "Riisu ulkovaatteet eteisessä.", en: "Take off your outdoor clothes in the hall." },
    },
  ],
  synonyymit: [
    { fi: "vaatekappale", en: "item of clothing" },
    { fi: "asu", en: "outfit" },
  ],
  esimerkit: {
    A2: { fi: "Ostin uudet vaatteet.", en: "I bought new clothes." },
    B1: { fi: "Tämä vaate on liian pieni.", en: "This garment is too small." },
    B2: {
      fi: "Pakkasin lämpimät vaatteet, koska matka suuntautui pohjoiseen.",
      en: "I packed warm clothes because the trip was headed north.",
    },
  },
  updatedAt: "2026-06-04",
};

export default vaate;
