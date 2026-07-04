// ===================================
// VereinsManager
// backup.js
// Version 0.4.0 Alpha
// Datensicherung
// ===================================
function backupErstellen(){

    const daten = {

        version: app.version,

        datum: new Date().toLocaleString(),

        umsatz,

        warenkorb,

        artikel,

        statistik,

        abschluesse

    };


    const datei = new Blob(
        [
            JSON.stringify(daten,null,2)
        ],
        {
            type:"application/json"
        }
    );


    const link =
        document.createElement("a");


    link.href =
        URL.createObjectURL(datei);


    link.download =
        "vereinsmanager_backup.json";


    link.click();

}
