// ===================================
// VereinsManager v1.0 Alpha
// ===================================

// Vereinsdaten
const app = {
    version: "1.0.0 Alpha",
    verein: "FV Matzenberg",
    startKasse: 150
};

// Getränke
const artikel = [
    { emoji:"🍺", name:"UrPils", preis:2.80 },
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

// Aktueller Verkauf
let warenkorb = [];

// ===================================
// Start
// ===================================

document.addEventListener("DOMContentLoaded", () => {

    renderGetraenke();

});
// ===================================
// Getränke anzeigen
// ===================================

function renderGetraenke(){

    const grid =
        document.getElementById("getraenkeGrid");

    grid.innerHTML = "";

    artikel.forEach(a=>{

        grid.innerHTML += `
        <div class="getraenk"
             onclick="artikelKlicken('${a.name}')">

            <div class="emoji">
                ${a.emoji}
            </div>

            <div class="name">
                ${a.name}
            </div>

            <div class="preis">
                ${a.preis.toFixed(2)} €
            </div>

        </div>
        `;

    });

}
// ===================================
// Getränk gewählt
// ===================================

function artikelKlicken(name){

    alert(name);

}
