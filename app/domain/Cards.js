'use strict';

let peanut = require('../assets/images/peanut.jpg');
let cactus = require('../assets/images/cactus.jpg');
let kite = require('../assets/images/kite.jpg');
let bat = require('../assets/images/bat.jpg');
let fireExtinguisher = require('../assets/images/fireextinguisher.jpg');
let americanWhitePelican = require('../assets/images/americanwhitepelican.jpg');
let clover = require('../assets/images/clover.jpg');
let harmonica = require('../assets/images/harmonica.jpg');
let cooler = require('../assets/images/cooler.jpg');
let candelabra = require('../assets/images/candelabra.jpg');
let acorn = require('../assets/images/acorn.jpg');
let syringe = require('../assets/images/syringe.jpg');
let leek = require('../assets/images/leek.jpg');
let pitchfork = require('../assets/images/pitchfork.jpg');
let oyster = require('../assets/images/oyster.jpg');
let drill = require('../assets/images/drill.jpg');
let dragonfly = require('../assets/images/dragonfly.jpg');
let accordion = require('../assets/images/accordion.jpg');
let turnip = require('../assets/images/turnip.jpg');
let sailboat = require('../assets/images/sailboat.jpg');
let panda = require('../assets/images/panda.jpg');
let wateringCan = require('../assets/images/wateringcan.jpg');
let peacock = require('../assets/images/peacock.jpg');
let fishingHook = require('../assets/images/fishinghook.jpg');
let pepper = require('../assets/images/pepper.jpg');
let hanger = require('../assets/images/hanger.jpg');
let fern = require('../assets/images/fern.jpg');
let trampoline = require('../assets/images/trampoline.jpg');
let fan = require('../assets/images/fan.jpg');
let ostrich = require('../assets/images/ostrich.jpg');

// Types d'erreurs
// Erreur Sémantique (ex. le sujet produit HIBOU au lieu de CHAUVE-SOURIS
// Erreur Phonologique (ex. le sujet produit CHAULE-SOURIS)
// Erreur visuelle (ex. le sujet produit CHAULE-SOURIS)

const Cards = [
    {position: 1, image: peanut, name: 'peanut'},
    {position: 2, image: cactus, name: 'cactus'},
    {position: 3, image: kite, name: 'kite'},
    {position: 4, image: bat, name: 'bat'},
    {position: 5, image: fireExtinguisher, name: 'fire extinguisher'},
    {position: 6, image: americanWhitePelican, name: 'american white pelican'},
    {position: 7, image: clover, name: 'clover'},
    {position: 8, image: harmonica, name: 'harmonica'},
    {position: 9, image: cooler, name: 'cooler'},
    {position: 10, image: candelabra, name: 'candelabra'},
    {position: 11, image: acorn, name: 'acorn'},
    {position: 12, image: syringe, name: 'syringe'},
    {position: 13, image: leek, name: 'leek'},
    {position: 14, image: pitchfork, name: 'pitchfork'},
    {position: 15, image: oyster, name: 'oyster'},
    {position: 16, image: drill, name: 'drill'},
    {position: 17, image: dragonfly, name: 'dragonfly'},
    {position: 18, image: accordion, name: 'accordion'},
    {position: 19, image: turnip, name: 'turnip'},
    {position: 20, image: sailboat, name: 'sailboat'},
    {position: 21, image: panda, name: 'panda'},
    {position: 22, image: wateringCan, name: 'watering can'},
    {position: 23, image: peacock, name: 'peacock'},
    {position: 24, image: fishingHook, name: 'fishing hook'},
    {position: 25, image: pepper, name: 'pepper'},
    {position: 26, image: hanger, name: 'hanger'},
    {position: 27, image: fern, name: 'fern'},
    {position: 28, image: trampoline, name: 'trampoline'},
    {position: 29, image: fan, name: 'fan'},
    {position: 30, image: ostrich, name: 'ostrich'}
];

export default Cards.map((card) => {
    card.semantic = false;
    card.phonological = false;
    card.visual = false;
    card.errorReported = false;
    card.hinted = false;
    card.hintOne = "Hello, I am hint one!";
    card.hintTwo = "Hello, I am hint two!";
    card.score = 0;
    return card;
});