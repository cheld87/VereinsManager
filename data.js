// ===================================
// VereinsManager
// Stammdaten
// ===================================

const app = {
    version: "0.1.0",
    build: "0001",
    verein: "FV Matzenberg",
    startKasse: 150
};

const artikel = [

{
    id: 1,
    emoji: "🍺",
    name: "UrPils",
    preis: 2.80,

    kategorie: "Bier",

    kaesten: 5,
    flaschen: 12,
    flaschenProKasten: 24,

    mindestbestand: 24,

    aktiv: true
},
    { emoji:"📦", name:"Bierkasten", preis:35.00 },

    { emoji:"🍺", name:"Weizenbier", preis:2.80 },
    { emoji:"🍺", name:"Pils alkoholfrei", preis:2.80 },
    { emoji:"🍺", name:"Radler", preis:2.80 },

    { emoji:"🍺", name:"Mixery Cola", preis:2.80 },
    { emoji:"🍺", name:"Mixery Blue", preis:2.80 },
    { emoji:"🍺", name:"Mixery Cola Orange", preis:2.80 },

    { emoji:"🥤", name:"Coca-Cola", preis:2.30 },
    { emoji:"🥤", name:"Fanta", preis:2.30 },
    { emoji:"🥤", name:"Sprite", preis:2.30 },

    { emoji:"💧", name:"Sprudel", preis:1.80 },
    { emoji:"🍎", name:"Apfelschorle", preis:1.80 },
    { emoji:"🍏", name:"Gründels Fresh", preis:2.30 },

    { emoji:"🥤", name:"Isogetränk", preis:1.80 },
    { emoji:"🧃", name:"Eistee Pfirsich", preis:1.80 },
    { emoji:"🧃", name:"Eistee Zitrone", preis:1.80 },

    { emoji:"⚡", name:"Energy", preis:1.80 },
    { emoji:"🧃", name:"Capri-Sonne", preis:1.00 },

    { emoji:"☕", name:"Kaffee", preis:1.50 }

];

<button class="neuButton" onclick="neuesGetraenk()">
    ➕ Neues Getränk
</button>
