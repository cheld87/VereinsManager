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

    const artikelInfo =
        artikel.find(a => a.name === name);

    warenkorb.push(artikelInfo);

    renderWarenkorb();

}
// ===================================
// Warenkorb anzeigen
// ===================================

function renderWarenkorb(){

    const ausgabe =
        document.getElementById("warenkorb");

    const gesamt =
        document.getElementById("gesamt");

    if(warenkorb.length === 0){

        ausgabe.innerHTML =
            "Noch keine Artikel";

        gesamt.innerText =
            "0,00 €";

        return;

    }

    let html = "";
    let summe = 0;

    warenkorb.forEach((artikel)=>{

        html += `
        <div style="
            display:flex;
            justify-content:space-between;
            margin:8px 0;
        ">

            <span>${artikel.emoji} ${artikel.name}</span>

            <strong>${artikel.preis.toFixed(2)} €</strong>

        </div>
        `;

        summe += artikel.preis;

    });

    ausgabe.innerHTML = html;

    gesamt.innerText =
        summe.toFixed(2) + " €";

}
