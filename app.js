// ===================================
// VereinsManager
// app.js
// Start der Anwendung
// ===================================

// Laufende Daten
let umsatz = 0;
let warenkorb = [];

// ===================================
// Start
// ===================================

document.addEventListener("DOMContentLoaded", () => {

    // Gespeicherte Daten laden
    datenLaden();

    // Oberfläche aufbauen
    renderGetraenke();
    renderWarenkorb();
    updateDashboard();

});

// ===================================
// Dashboard aktualisieren
// ===================================

function updateDashboard(){

    document.getElementById("umsatz").innerText =
        umsatz.toFixed(2) + " €";

    document.getElementById("kasse").innerText =
        (app.startKasse + umsatz).toFixed(2) + " €";


    let ok = 0;
    let knapp = 0;
    let leer = 0;

    artikel.forEach(a => {

        if(!a.lagerartikel) return;

        if(a.lager.flaschen <= 0){

            leer++;

        }else if(a.lager.flaschen <= a.lager.mindestbestand){

            knapp++;

        }else{

            ok++;

        }

    });

    document.getElementById("lagerOk").innerText =
        ok + " OK";

    document.getElementById("lagerWarnung").innerText =
        knapp + " KNAPP • " + leer + " LEER";

}

document.getElementById("version").innerText =
    `${app.verein} · Version ${app.version} · Build ${app.build}`;

function renderLagerStatus(){

    let html = "";

    const leer = artikel.filter(a =>
        a.lagerartikel &&
        a.lager.flaschen <= 0
    );

    const knapp = artikel.filter(a =>
        a.lagerartikel &&
        a.lager.flaschen > 0 &&
        a.lager.flaschen <= a.lager.mindestbestand
    );

    html += "<h2>📦 Lagerstatus</h2>";

    html += "<h3>🔴 Leer</h3>";

    if(leer.length === 0){

        html += "<p>Keine Artikel leer.</p>";

    }else{

        leer.forEach(a=>{

            html += `
<div class="lagerCard">

    <div class="lagerTitel">

        <span>${a.emoji} ${a.name}</span>

        <span class="lagerBadge statusRot">
            LEER
        </span>

    </div>

    <div class="lagerBestand">

        Bestand:
        📦 ${a.lager.kaesten}
        |
        🍾 ${a.lager.flaschen}

    </div>

    <div class="lagerButtons">

        <button
            onclick="lagerPlus(${a.id},'kaesten')">

            + Kiste

        </button>

    </div>

</div>
`;

        });

    }

    html += "<h3>🟡 Knapp</h3>";

    if(knapp.length === 0){

        html += "<p>Keine Artikel knapp.</p>";

    }else{

       knapp.forEach(a => {

    html += `
<div class="lagerCard">

    <div class="lagerTitel">
        <span>${a.emoji} ${a.name}</span>

        <span class="lagerBadge statusGelb">
            KNAPP
        </span>
    </div>

    <div class="lagerBestand">
        Bestand:
        📦 ${a.lager.kaesten} |
        🍾 ${a.lager.flaschen}
    </div>

    <div class="lagerButtons">
        <button onclick="lagerPlus(${a.id},'kaesten')">
            + Kiste
        </button>
    </div>

</div>
`;

});
        
    }

    document.getElementById("lagerDialogInhalt").innerHTML =
        html;

}

function showLagerStatus(){

    renderLagerStatus();

    document.getElementById("lagerDialog").style.display =
        "flex";

}

function refreshUI(){

    renderGetraenke();
    renderWarenkorb();
    updateDashboard();

    if(document.getElementById("settings").style.display === "block"){
        renderSettings();
    }

    if(document.getElementById("lagerDialog").style.display === "flex"){
        renderLagerStatus();
    }

}
