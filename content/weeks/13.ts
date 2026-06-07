import type { Week } from "@/lib/content-types";

// Week 13 — the FINAL week of the Sujuvuus phase (weeks 9–13) and of the whole Suomi 90 program.
// It rounds out high-frequency everyday vocabulary across six concrete domains: the body & health,
// animals & nature, food & the kitchen, everyday verbs, quantity & parts, and life & celebrations.
// The reading text uses only words that already exist in the corpus (Weeks 1–13).
const week13: Week = {
  week: 13,
  phase: "Sujuvuus",
  theme: "Ihminen, luonto ja elämä",
  days: [
    {
      day: 1,
      theme: "Keho ja terveys",
      wordSlugs: [
        "nenä",
        "kasvot",
        "iho",
        "luu",
        "lihas",
        "polvi",
        "olkapää",
        "nilkka",
        "leuka",
        "otsa",
        "poski",
        "kaula",
      ],
    },
    {
      day: 2,
      theme: "Eläimet ja luonto",
      wordSlugs: [
        "koira",
        "kissa",
        "lintu",
        "hevonen",
        "lehmä",
        "karhu",
        "susi",
        "kettu",
        "jänis",
        "hirvi",
        "hyttynen",
        "mehiläinen",
      ],
    },
    {
      day: 3,
      theme: "Ruoka ja keittiö",
      wordSlugs: [
        "voi",
        "muna",
        "kerma",
        "makkara",
        "jäätelö",
        "mauste",
        "pippuri",
        "hunaja",
        "jauho",
        "öljy",
        "kakku",
        "jogurtti",
      ],
    },
    {
      day: 4,
      theme: "Arjen verbit",
      wordSlugs: [
        "tuoda",
        "viedä",
        "joutua",
        "ehtiä",
        "huolehtia",
        "pärjätä",
        "viihtyä",
        "totella",
        "kieltäytyä",
        "suositella",
        "väsyä",
        "kiirehtiä",
      ],
    },
    {
      day: 5,
      theme: "Määrä ja osat",
      wordSlugs: [
        "osa",
        "puoli",
        "pari",
        "joukko",
        "ryhmä",
        "laatu",
        "taso",
        "yksilö",
        "kokonaisuus",
        "vähemmistö",
        "lukumäärä",
        "keskiarvo",
      ],
    },
    {
      day: 6,
      theme: "Elämä ja juhlat",
      wordSlugs: [
        "syntymä",
        "lapsuus",
        "nuoruus",
        "aikuinen",
        "vanhuus",
        "kuolema",
        "avioliitto",
        "häät",
        "hautajaiset",
        "sukupolvi",
        "perinne",
        "juhlia",
      ],
    },
  ],
  teksti: {
    title: "Suvun juhla",
    level: "B1",
    topic:
      "Kolme sukupolvea kokoontuu kesämökille juhlimaan häitä. Ruokaa laitetaan yhdessä, eläimet pyörivät pihalla, ja juhlassa muistetaan koko elämän kaari lapsuudesta vanhuuteen.",
    paragraph:
      "Liisan ja Matin [[häät]] olivat kesän kohokohta. Koko [[suku]] oli kutsuttu, ja saman katon alle mahtui kolme [[sukupolvea]]. Vanhin [[osa]] vieraista muisteli omaa [[nuoruuttaan]], kun taas nuorin [[joukko]] juoksi pihalla [[koiran]] ja [[kissan]] perässä. " +
      "Keittiössä [[aikuiset]] [[huolehtivat]] ruoasta. Pöytään [[tuotiin]] [[makkaraa]], tuoretta [[kakkua]] ja keitettyjä [[munia]]. Liisan äiti vatkasi [[kermaa]] ja lisäsi joukkoon [[hunajaa]]. Kukaan ei oikein [[ehtinyt]] istua alas, mutta kukaan ei silti [[väsynyt]]. " +
      "Pihalla [[linnut]] lauloivat puissa ja kesäilta oli lämmin. Samir, perheen vanha ystävä ja [[maahanmuuttaja]], oli [[pärjännyt]] Suomessa hyvin ja [[viihtyi]] juhlassa. Hän kertoi omasta [[lapsuudestaan]] kaukaisessa maassa ja siitä, miten erilaiset tavat voivat silti tuntua tutuilta. " +
      "Illan tullen vieraat [[juhlivat]] myöhään. Vanha [[perinne]] eli yhä: jokainen [[sukupolvi]] toi juhlaan oman [[osansa]] – tarinat, laulut ja ruoat. [[Syntymä]], [[avioliitto]] ja jopa [[kuolema]] kuuluvat samaan elämän kaareen, ja niitä kaikkia muistettiin sinä iltana yhdessä, kiitollisina siitä, että saatiin olla saman pöydän ääressä.",
    translation:
      "Liisa and Matti's wedding was the highlight of the summer. The whole family had been invited, and three generations fit under the same roof. The oldest part of the guests reminisced about their own youth, while the youngest group ran around the yard chasing the dog and the cat. " +
      "In the kitchen the adults took care of the food. Sausage, fresh cake and boiled eggs were brought to the table. Liisa's mother whipped cream and added honey to it. No one really had time to sit down, but no one got tired either. " +
      "Outside the birds sang in the trees and the summer evening was warm. Samir, an old friend of the family and an immigrant, had managed well in Finland and was enjoying the celebration. He told about his own childhood in a faraway country and about how different customs can still feel familiar. " +
      "As evening came, the guests celebrated late. An old tradition still lived on: each generation brought its own part to the celebration — the stories, the songs and the food. Birth, marriage and even death belong to the same arc of life, and that evening all of them were remembered together, grateful to be able to sit at the same table.",
    targets: [
      "häät",
      "suku",
      "sukupolvi",
      "osa",
      "nuoruus",
      "joukko",
      "koira",
      "kissa",
      "aikuinen",
      "huolehtia",
      "tuoda",
      "makkara",
      "kakku",
      "muna",
      "kerma",
      "hunaja",
      "ehtiä",
      "väsyä",
      "lintu",
      "maahanmuuttaja",
      "pärjätä",
      "viihtyä",
      "lapsuus",
      "juhlia",
      "perinne",
      "syntymä",
      "avioliitto",
      "kuolema",
    ],
  },
};

export default week13;
