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

        artikel,

        statistik,

        abschluesse,
        
        mitglieder
        
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
    
statistik = daten.statistik || {};

abschluesse = daten.abschluesse || []; 

mitglieder = daten.mitglieder || [];

    mitglieder.forEach(m=>{

    if(!m.strichliste){

        m.strichliste = [];

    }

});

 // Lager reparieren
artikel.forEach(a=>{

    if(a.lager){

        if(
    a.lager.flaschen === null ||
    a.lager.flaschen === undefined ||
    isNaN(a.lager.flaschen)
){

    a.lager.flaschen = 0;

}


        if(
    a.lager.kaesten === null ||
    a.lager.kaesten === undefined ||
    isNaN(a.lager.kaesten)
){


        if(!a.lager.flaschenProKasten){

            a.lager.flaschenProKasten = 24;

        }

    }

});           

window.datenLaden = function(){

    datenLaden();

};


window.datenSpeichern = function(){

    datenSpeichern();

};

console.log("✅ STORAGE GELADEN");
console.log(window.datenLaden);