// ===================================
// VereinsManager
// Stammdaten
// Version 0.3.0 Alpha
// ===================================

alert("data.js geladen");

var app = {

    version: "0.5.1 Alpha",
    build: "2026.07.05",
    verein: "FV Matzenberg",
    startKasse: 150

};


let statistik = {};

let abschluesse = [];

let mitglieder = [];

let artikel = [

{   
    id: 1,
    emoji: "🍺",
    name: "UrPils",
    preis: 2.80,
    kategorie: "Bier",
    lagerartikel: true,
    lager: {
        kaesten: 5,
        flaschen: 12,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 2,
    emoji: "🍺",
    name: "Weizenbier",
    preis: 2.80,
    kategorie: "Bier",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 3,
    emoji: "🍺",
    name: "Pils alkoholfrei",
    preis: 2.80,
    kategorie: "Bier",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 4,
    emoji: "🍺",
    name: "Radler",
    preis: 2.80,
    kategorie: "Bier",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 5,
    emoji: "🍺",
    name: "Mixery Cola",
    preis: 2.80,
    kategorie: "Mixgetränk",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 6,
    emoji: "🍺",
    name: "Mixery Blue",
    preis: 2.80,
    kategorie: "Mixgetränk",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 7,
    emoji: "🍺",
    name: "Mixery Cola Orange",
    preis: 2.80,
    kategorie: "Mixgetränk",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 8,
    emoji: "🥤",
    name: "Coca-Cola",
    preis: 2.30,
    kategorie: "Softdrink",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 9,
    emoji: "🥤",
    name: "Fanta",
    preis: 2.30,
    kategorie: "Softdrink",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 10,
    emoji: "🥤",
    name: "Sprite",
    preis: 2.30,
    kategorie: "Softdrink",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 11,
    emoji: "💧",
    name: "Sprudel",
    preis: 1.80,
    kategorie: "Wasser",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 12,
        mindestbestand: 12
    },
    aktiv: true
},

{
    id: 12,
    emoji: "🍎",
    name: "Apfelschorle",
    preis: 1.80,
    kategorie: "Saft",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 12,
        mindestbestand: 12
    },
    aktiv: true
},

{
    id: 13,
    emoji: "🍏",
    name: "Gründels Fresh",
    preis: 2.30,
    kategorie: "Softdrink",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 14,
    emoji: "🥤",
    name: "Isogetränk",
    preis: 1.80,
    kategorie: "Softdrink",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 12,
        mindestbestand: 12
    },
    aktiv: true
},

{
    id: 15,
    emoji: "🧃",
    name: "Eistee Pfirsich",
    preis: 1.80,
    kategorie: "Softdrink",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 6,
        mindestbestand: 6
    },
    aktiv: true
},

{
    id: 16,
    emoji: "🧃",
    name: "Eistee Zitrone",
    preis: 1.80,
    kategorie: "Softdrink",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 6,
        mindestbestand: 6
    },
    aktiv: true
},

{
    id: 17,
    emoji: "⚡",
    name: "Energy",
    preis: 1.80,
    kategorie: "Energy",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 24,
        mindestbestand: 24
    },
    aktiv: true
},

{
    id: 18,
    emoji: "🧃",
    name: "Capri-Sonne",
    preis: 1.00,
    kategorie: "Saft",
    lagerartikel: true,
    lager: {
        kaesten: 0,
        flaschen: 0,
        flaschenProKasten: 10,
        mindestbestand: 10
    },
    aktiv: true
},

{
    id: 19,
    emoji: "☕",
    name: "Kaffee",
    preis: 1.50,
    kategorie: "Heißgetränk",
    lagerartikel: false,
    lager: null,
    aktiv: true
}

];
