// ===================================
// VereinsManager
// storage.js
// Speichern & Laden
// ===================================

function datenSpeichern() {

    const daten = {
        umsatz: umsatz,
        warenkorb: warenkorb,
        artikel: artikel
    };

    localStorage.setItem(
        "vereinsmanager",
        JSON.stringify(daten)
    );

}

function datenLaden() {

    const daten = JSON.parse(
        localStorage.getItem("vereinsmanager")
    );

    if (!daten) {
        return;
    }

    umsatz = daten.umsatz || 0;
    warenkorb = daten.warenkorb || [];

    if (daten.artikel) {

        artikel = daten.artikel;

    }

}
