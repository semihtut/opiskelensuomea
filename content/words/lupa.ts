import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, p:v gradation, stem lupa- ~ luva-.
// Genitive luvan, partitive lupaa, partitive pl lupia.
const lupa: Word = {
  fi: "lupa",
  slug: "lupa",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "permission, permit, licence",
  selitys:
    "Oikeus tehdä jotakin tai virallinen asiakirja, joka sallii sen: 'pyytää lupa', 'rakennuslupa'. Tyyppi 10/koira, astevaihtelu p:v (lupa → luvan). Vrt. luvata, sallia, ajolupa.",
  kuva: { alt: "lupa – oikeus tai virallinen asiakirja joka sallii jonkin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; astevaihtelu p:v (lupa ~ luva-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "luvan", merkitys: "of the permission" },
      { sija: "partitiivi (yks.)", muoto: "lupaa", merkitys: "permission (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lupia", merkitys: "permits (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu p:v: vahva lupa (nominatiivi, partitiivi lupaa), heikko luva- (luvan, luvalla). Partitiivin monikko lupia. 'Saada lupa tehdä jotakin' = to get permission to do something. Vrt. luvata, ajolupa, rakennuslupa.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lupa" },
          { label: "Partitiivi", form: "lupaa" },
          { label: "Genetiivi", form: "luvan" },
          { label: "Inessiivi", form: "luvassa" },
          { label: "Elatiivi", form: "luvasta" },
          { label: "Illatiivi", form: "lupaan" },
          { label: "Adessiivi", form: "luvalla" },
          { label: "Ablatiivi", form: "luvalta" },
          { label: "Allatiivi", form: "luvalle" },
          { label: "Essiivi", form: "lupana" },
          { label: "Translatiivi", form: "luvaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "luvat" },
          { label: "Partitiivi", form: "lupia" },
          { label: "Genetiivi", form: "lupien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luvata",
      en: "to promise; to allow",
      taso: "B1",
      esim: { fi: "Lupasin tulla ajoissa.", en: "I promised to come on time." },
    },
    {
      fi: "rakennuslupa",
      en: "building permit",
      taso: "B2",
      esim: { fi: "Talolle haettiin rakennuslupa.", en: "A building permit was applied for the house." },
    },
  ],
  synonyymit: [
    { fi: "valtuutus", en: "authorization" },
  ],
  esimerkit: {
    A2: { fi: "Saanko luvan lähteä?", en: "May I have permission to leave?" },
    B1: { fi: "Tähän työhön tarvitaan erityinen lupa.", en: "This work requires a special permit." },
    B2: {
      fi: "Ilman viranomaisen lupaa toiminta on laitonta.",
      en: "Without the authorities' permit, the activity is illegal.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lupa;
