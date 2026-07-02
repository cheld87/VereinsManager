// ===================================
// VereinsManager
// storage.js
// Version 0.3.0 Alpha
// Speichern & Laden
// ===================================

function datenSpeichern() {

    const daten = {

        umsatz,

        warenkorb,

        artikel

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

    if (!daten) return;

    umsatz = daten.umsatz ?? 0;

    warenkorb = daten.warenkorb ?? [];

    if (Array.isArray(daten.artikel)) {

        artikel = daten.artikel.map((a, index) => ({

            id: a.id ?? index + 1,

            emoji: a.emoji ?? "❓",

            name: a.name ?? "Unbekannt",

            preis: a.preis ?? 0,

            kategorie: a.kategorie ?? "Sonstiges",

            lagerartikel: a.lagerartikel ?? false,

            lager: a.lager ?? null,

            aktiv: a.aktiv ?? true

        }));

    }

}
