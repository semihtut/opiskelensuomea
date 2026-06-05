import type { Word } from "@/lib/content-types";

import talo from "./talo";
import olla from "./olla";
import tehda from "./tehdä";
import voida from "./voida";
import saada from "./saada";
import aika from "./aika";
import paiva from "./päivä";
import henkilo from "./henkilö";
import hyva from "./hyvä";
import huono from "./huono";
import nyt from "./nyt";
import ja from "./ja";
import heiMitaKuuluu from "./hei-mitä-kuuluu";
// Week 1 · Day 2 — Ihmiset ja perhe
import perhe from "./perhe";
import aiti from "./äiti";
import isa from "./isä";
import lapsi from "./lapsi";
import nainen from "./nainen";
import mies from "./mies";
import ystava from "./ystävä";
import kaveri from "./kaveri";
import nimi from "./nimi";
import vanha from "./vanha";
import nuori from "./nuori";
import asua from "./asua";
// Week 1 · Day 3 — Koti ja arki
import koti from "./koti";
import huone from "./huone";
import ovi from "./ovi";
import ikkuna from "./ikkuna";
import poyta from "./pöytä";
import sanky from "./sänky";
import keittio from "./keittiö";
import avain from "./avain";
import nukkua from "./nukkua";
import herata from "./herätä";
import siivota from "./siivota";
import arki from "./arki";
// Week 1 · Day 4 — Ruoka ja juoma
import ruoka from "./ruoka";
import syoda from "./syödä";
import juoda from "./juoda";
import leipa from "./leipä";
import maito from "./maito";
import vesi from "./vesi";
import kahvi from "./kahvi";
import omena from "./omena";
import liha from "./liha";
import kala from "./kala";
import juusto from "./juusto";
import peruna from "./peruna";
// Week 1 · Day 5 — Aika ja viikonpäivät
import viikko from "./viikko";
import kuukausi from "./kuukausi";
import vuosi from "./vuosi";
import tunti from "./tunti";
import aamu from "./aamu";
import ilta from "./ilta";
import yo from "./yö";
import viikonloppu from "./viikonloppu";
import maanantai from "./maanantai";
import lauantai from "./lauantai";
import tanaan from "./tänään";
import huomenna from "./huomenna";
// Week 1 · Day 6 — Asiointi ja kohteliaisuus
import kauppa from "./kauppa";
import raha from "./raha";
import hinta from "./hinta";
import ostaa from "./ostaa";
import maksaa from "./maksaa";
import kysya from "./kysyä";
import auttaa from "./auttaa";
import tarvita from "./tarvita";
import kallis from "./kallis";
import kiitos from "./kiitos";
import anteeksi from "./anteeksi";
import oleHyva from "./ole-hyvä";
// Week 2 · Day 1 — Liikkuminen ja paikat
import menna from "./mennä";
import tulla from "./tulla";
import kavella from "./kävellä";
import ajaa from "./ajaa";
import lahtea from "./lähteä";
import kaupunki from "./kaupunki";
import katu from "./katu";
import tie from "./tie";
import auto from "./auto";
import juna from "./juna";
import asema from "./asema";
import matka from "./matka";
// Week 2 · Day 2 — Työ ja opiskelu
import tyo from "./työ";
import opiskella from "./opiskella";
import oppia from "./oppia";
import lukea from "./lukea";
import kirjoittaa from "./kirjoittaa";
import koulu from "./koulu";
import opettaja from "./opettaja";
import oppilas from "./oppilas";
import kirja from "./kirja";
import kysymys from "./kysymys";
import vastaus from "./vastaus";
import tietaa from "./tietää";
// Week 2 · Day 3 — Keho ja terveys
import paa from "./pää";
import kasi from "./käsi";
import silma from "./silmä";
import jalka from "./jalka";
import suu from "./suu";
import korva from "./korva";
import sydan from "./sydän";
import terve from "./terve";
import sairas from "./sairas";
import kipu from "./kipu";
import laakari from "./lääkäri";
import terveys from "./terveys";
// Week 2 · Day 4 — Vaatteet ja värit
import vaate from "./vaate";
import paita from "./paita";
import housut from "./housut";
import kenka from "./kenkä";
import takki from "./takki";
import vari from "./väri";
import valkoinen from "./valkoinen";
import musta from "./musta";
import punainen from "./punainen";
import sininen from "./sininen";
import keltainen from "./keltainen";
import vihrea from "./vihreä";
// Week 2 · Day 5 — Sää ja luonto
import saa from "./sää";
import ilma from "./ilma";
import sade from "./sade";
import lumi from "./lumi";
import aurinko from "./aurinko";
import tuuli from "./tuuli";
import taivas from "./taivas";
import metsa from "./metsä";
import jarvi from "./järvi";
import meri from "./meri";
import puu from "./puu";
import kylma from "./kylmä";
// Week 2 · Day 6 — Tunteet ja kuvailu
import iloinen from "./iloinen";
import surullinen from "./surullinen";
import vasynyt from "./väsynyt";
import vihainen from "./vihainen";
import iso from "./iso";
import pieni from "./pieni";
import kaunis from "./kaunis";
import ruma from "./ruma";
import uusi from "./uusi";
import helppo from "./helppo";
import vaikea from "./vaikea";
import tarkea from "./tärkeä";
// Week 3 · Day 1 — Pronominit ja kysymyssanat
import mina from "./minä";
import sina from "./sinä";
import han from "./hän";
import me from "./me";
import te from "./te";
import he from "./he";
import tama from "./tämä";
import tuo from "./tuo";
import se from "./se";
import kuka from "./kuka";
import mika from "./mikä";
import milloin from "./milloin";
// Week 3 · Day 2 — Yleiset verbit I: havainnot ja viestintä
import sanoa from "./sanoa";
import puhua from "./puhua";
import kuulla from "./kuulla";
import kuunnella from "./kuunnella";
import nahda from "./nähdä";
import katsoa from "./katsoa";
import antaa from "./antaa";
import ottaa from "./ottaa";
import pitaa from "./pitää";
import soittaa from "./soittaa";
import nayttaa from "./näyttää";
import kertoa from "./kertoa";
// Week 3 · Day 3 — Yleiset verbit II: toiminta ja muutos
import alkaa from "./alkaa";
import loppua from "./loppua";
import jaada from "./jäädä";
import kayda from "./käydä";
import paasta from "./päästä";
import loytaa from "./löytää";
import etsia from "./etsiä";
import muistaa from "./muistaa";
import unohtaa from "./unohtaa";
import ymmartaa from "./ymmärtää";
import ajatella from "./ajatella";
import haluta from "./haluta";
// Week 3 · Day 4 — Kaupunki ja palvelut
import pankki from "./pankki";
import posti from "./posti";
import ravintola from "./ravintola";
import hotelli from "./hotelli";
import kirjasto from "./kirjasto";
import museo from "./museo";
import apteekki from "./apteekki";
import tori from "./tori";
import kahvila from "./kahvila";
import puisto from "./puisto";
import kirkko from "./kirkko";
import sairaala from "./sairaala";
// Week 3 · Day 5 — Koti ja esineet
import tuoli from "./tuoli";
import peili from "./peili";
import lamppu from "./lamppu";
import seina from "./seinä";
import lattia from "./lattia";
import katto from "./katto";
import kaappi from "./kaappi";
import sohva from "./sohva";
import televisio from "./televisio";
import puhelin from "./puhelin";
import tietokone from "./tietokone";
import kello from "./kello";
// Week 3 · Day 6 — Koko ja määrä
import pitka from "./pitkä";
import lyhyt from "./lyhyt";
import korkea from "./korkea";
import matala from "./matala";
import nopea from "./nopea";
import hidas from "./hidas";
import raskas from "./raskas";
import kevyt from "./kevyt";
import paljon from "./paljon";
import vahan from "./vähän";
import kaikki from "./kaikki";
import moni from "./moni";
// Week 4 · Day 1 — Yleiset verbit III: arjen toiminnot
import istua from "./istua";
import seisoa from "./seisoa";
import nousta from "./nousta";
import avata from "./avata";
import sulkea from "./sulkea";
import laittaa from "./laittaa";
import pesta from "./pestä";
import odottaa from "./odottaa";
import yrittaa from "./yrittää";
import osata from "./osata";
import korjata from "./korjata";
import kayttaa from "./käyttää";
// Week 4 · Day 2 — Elämä ja ihmissuhteet
import elaa from "./elää";
import kuolla from "./kuolla";
import syntya from "./syntyä";
import kasvaa from "./kasvaa";
import rakastaa from "./rakastaa";
import tavata from "./tavata";
import tuntea from "./tuntea";
import muuttaa from "./muuttaa";
import naapuri from "./naapuri";
import suku from "./suku";
import mukava from "./mukava";
import yksin from "./yksin";

/**
 * Registry of all word entries. Order is the canonical learning sequence used
 * for prev/next navigation (Week 1 Day 1 order; talo is the demo word, last).
 * Add a word: create content/words/<slug>.ts and import it here.
 */
export const words: Word[] = [
  olla,
  tehda,
  voida,
  saada,
  aika,
  paiva,
  henkilo,
  hyva,
  huono,
  nyt,
  ja,
  heiMitaKuuluu,
  // Day 2 — Ihmiset ja perhe
  perhe,
  aiti,
  isa,
  lapsi,
  nainen,
  mies,
  ystava,
  kaveri,
  nimi,
  vanha,
  nuori,
  asua,
  // Day 3 — Koti ja arki
  koti,
  huone,
  ovi,
  ikkuna,
  poyta,
  sanky,
  keittio,
  avain,
  nukkua,
  herata,
  siivota,
  arki,
  // Day 4 — Ruoka ja juoma
  ruoka,
  syoda,
  juoda,
  leipa,
  maito,
  vesi,
  kahvi,
  omena,
  liha,
  kala,
  juusto,
  peruna,
  // Day 5 — Aika ja viikonpäivät
  viikko,
  kuukausi,
  vuosi,
  tunti,
  aamu,
  ilta,
  yo,
  viikonloppu,
  maanantai,
  lauantai,
  tanaan,
  huomenna,
  // Day 6 — Asiointi ja kohteliaisuus
  kauppa,
  raha,
  hinta,
  ostaa,
  maksaa,
  kysya,
  auttaa,
  tarvita,
  kallis,
  kiitos,
  anteeksi,
  oleHyva,
  // Week 2 · Day 1 — Liikkuminen ja paikat
  menna,
  tulla,
  kavella,
  ajaa,
  lahtea,
  kaupunki,
  katu,
  tie,
  auto,
  juna,
  asema,
  matka,
  // Week 2 · Day 2 — Työ ja opiskelu
  tyo,
  opiskella,
  oppia,
  lukea,
  kirjoittaa,
  koulu,
  opettaja,
  oppilas,
  kirja,
  kysymys,
  vastaus,
  tietaa,
  // Week 2 · Day 3 — Keho ja terveys
  paa,
  kasi,
  silma,
  jalka,
  suu,
  korva,
  sydan,
  terve,
  sairas,
  kipu,
  laakari,
  terveys,
  // Week 2 · Day 4 — Vaatteet ja värit
  vaate,
  paita,
  housut,
  kenka,
  takki,
  vari,
  valkoinen,
  musta,
  punainen,
  sininen,
  keltainen,
  vihrea,
  // Week 2 · Day 5 — Sää ja luonto
  saa,
  ilma,
  sade,
  lumi,
  aurinko,
  tuuli,
  taivas,
  metsa,
  jarvi,
  meri,
  puu,
  kylma,
  // Week 2 · Day 6 — Tunteet ja kuvailu
  iloinen,
  surullinen,
  vasynyt,
  vihainen,
  iso,
  pieni,
  kaunis,
  ruma,
  uusi,
  helppo,
  vaikea,
  tarkea,
  // Week 3 · Day 1 — Pronominit ja kysymyssanat
  mina,
  sina,
  han,
  me,
  te,
  he,
  tama,
  tuo,
  se,
  kuka,
  mika,
  milloin,
  // Week 3 · Day 2 — Yleiset verbit I: havainnot ja viestintä
  sanoa,
  puhua,
  kuulla,
  kuunnella,
  nahda,
  katsoa,
  antaa,
  ottaa,
  pitaa,
  soittaa,
  nayttaa,
  kertoa,
  // Week 3 · Day 3 — Yleiset verbit II: toiminta ja muutos
  alkaa,
  loppua,
  jaada,
  kayda,
  paasta,
  loytaa,
  etsia,
  muistaa,
  unohtaa,
  ymmartaa,
  ajatella,
  haluta,
  // Week 3 · Day 4 — Kaupunki ja palvelut
  pankki,
  posti,
  ravintola,
  hotelli,
  kirjasto,
  museo,
  apteekki,
  tori,
  kahvila,
  puisto,
  kirkko,
  sairaala,
  // Week 3 · Day 5 — Koti ja esineet
  tuoli,
  peili,
  lamppu,
  seina,
  lattia,
  katto,
  kaappi,
  sohva,
  televisio,
  puhelin,
  tietokone,
  kello,
  // Week 3 · Day 6 — Koko ja määrä
  pitka,
  lyhyt,
  korkea,
  matala,
  nopea,
  hidas,
  raskas,
  kevyt,
  paljon,
  vahan,
  kaikki,
  moni,
  // Week 4 · Day 1 — Yleiset verbit III: arjen toiminnot
  istua,
  seisoa,
  nousta,
  avata,
  sulkea,
  laittaa,
  pesta,
  odottaa,
  yrittaa,
  osata,
  korjata,
  kayttaa,
  // Week 4 · Day 2 — Elämä ja ihmissuhteet
  elaa,
  kuolla,
  syntya,
  kasvaa,
  rakastaa,
  tavata,
  tuntea,
  muuttaa,
  naapuri,
  suku,
  mukava,
  yksin,
  talo,
];
