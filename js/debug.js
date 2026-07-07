// ===================================
// VereinsManager
// debug.js
// Version 0.5.0 Alpha
// Fehleranzeige
// ===================================


window.onerror = function(msg, url, line){

    alert(
        "⚠️ Fehler erkannt\n\n" +

        msg +

        "\n\nDatei:\n" +
        url +

        "\n\nZeile: " +
        line
    );

};


console.log("Debug aktiv");


function testDebug(){

    alert("Debug läuft");

}