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
        "\n\nZeile: " + line
    );

};