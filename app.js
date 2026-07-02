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

    document.getElementById("entnahme").innerText =
        umsatz.toFixed(2) + " €";

}

document.getElementById("version").innerText =
    `${app.verein} · Version ${app.version} · Build ${app.build}`;
