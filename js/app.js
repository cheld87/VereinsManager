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

    // 👇 DIESE ZEILEN MÜSSEN HIER REIN

    const top = getTopSeller();

    document.getElementById("topseller").innerText =
        top ? `${top.name} (${top.verkauft})` : "-";

}

document.getElementById("version").innerText =
    `${app.verein} · Version ${app.version} · Build ${app.build}`;
