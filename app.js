// ===================================
// VereinsManager v1.0 Alpha
// ===================================

// Vereinsdaten
const app = {
    version: "1.0.0 Alpha",
    verein: "FV Matzenberg",
    startKasse: 150
};
let umsatz = 0;
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

    const ausgabe = document.getElementById("warenkorb");
    const gesamt = document.getElementById("gesamt");

    if(warenkorb.length === 0){

        ausgabe.innerHTML = "Noch keine Artikel";
        gesamt.innerText = "0,00 €";
        return;

    }

    let gruppiert = {};

    warenkorb.forEach(a=>{

        if(!gruppiert[a.name]){

            gruppiert[a.name]={
                ...a,
                menge:0
            };

        }

        gruppiert[a.name].menge++;

    });

    let html="";
    let summe=0;

    Object.values(gruppiert).forEach(a=>{

        let zeilenSumme = a.menge * a.preis;

        summe += zeilenSumme;

       
        html += `

<div class="warenkorbZeile">

    <div class="warenkorbInfo">

        <div class="warenkorbName">

            ${a.emoji} ${a.name}

        </div>

        <div class="warenkorbPreis">

            ${a.menge} × ${a.preis.toFixed(2)} €
            =
            <strong>${zeilenSumme.toFixed(2)} €</strong>

        </div>

    </div>

    <div class="warenkorbButtons">

        <button onclick="artikelMinus('${a.name}')">−</button>

        <span>${a.menge}</span>

        <button onclick="artikelKlicken('${a.name}')">+</button>

    </div>

</div>

`;
    });

    ausgabe.innerHTML = html;

    gesamt.innerText = summe.toFixed(2)+" €";

}
function artikelMinus(name){

    const index =
        warenkorb.findIndex(a=>a.name===name);

    if(index>-1){

        warenkorb.splice(index,1);

    }

    renderWarenkorb();

}
function setBezahlt(betrag){

    document.getElementById("bezahlt").value = betrag;

    berechneRueckgeld();

}
function berechneRueckgeld(){

    let bezahlt =
        parseFloat(
            document.getElementById("bezahlt").value
        ) || 0;

    let rueckgeld = bezahlt - berechneGesamt();

    document.getElementById("rueckgeld").innerText =
        rueckgeld.toFixed(2) + " €";

}
function berechneGesamt(){

    return warenkorb.reduce(
        (summe,a)=>summe+a.preis,
        0
    );

}
function verkaufAbschliessen(){

    if(warenkorb.length===0){

        alert("Warenkorb ist leer.");

        return;

    }

    let bezahlt =
        parseFloat(
            document.getElementById("bezahlt").value
        ) || 0;

    let gesamt =
        berechneGesamt();

    if(bezahlt<gesamt){

        alert("Zu wenig Geld erhalten.");

        return;

    }

    umsatz += gesamt;

    document.getElementById("umsatz").innerText =
        umsatz.toFixed(2)+" €";

    document.getElementById("kasse").innerText =
        (app.startKasse+umsatz).toFixed(2)+" €";

    document.getElementById("entnahme").innerText =
        umsatz.toFixed(2)+" €";

    warenkorb=[];

    renderWarenkorb();

    document.getElementById("bezahlt").value="";

    document.getElementById("rueckgeld").innerText="0,00 €";

    alert("✅ Verkauf erfolgreich abgeschlossen.");

}
function verkaufLoeschen(){

    if(warenkorb.length===0){
        return;
    }

    if(!confirm("Aktuellen Verkauf wirklich löschen?")){
        return;
    }

    warenkorb=[];

    renderWarenkorb();

    document.getElementById("bezahlt").value="";

    document.getElementById("rueckgeld").innerText="0,00 €";

}

function toggleSettings(){

const fenster =
document.getElementById("settings");

if(fenster.style.display==="block"){

fenster.style.display="none";

}
else{

fenster.style.display="block";

renderSettings();

}

}
function renderSettings(){

let html="";

artikel.forEach((a,index)=>{

html+=`

<div style="margin-bottom:15px;">

<strong>${a.emoji} ${a.name}</strong>

<br><br>

<input
id="preis${index}"
type="number"
step="0.01"
value="${a.preis}">

</div>

`;

});

document.getElementById(
"settingsGetraenke"
).innerHTML=html;

}

function speichern(){

artikel.forEach((a,index)=>{

a.preis=
parseFloat(
document.getElementById(
"preis"+index
).value
);

});

renderGetraenke();

renderWarenkorb();

toggleSettings();

}
