// ===================================
// VereinsManager
// mitglieder.js
// Version 0.6.0 Alpha
// Mitgliederkonten
// ===================================
// ===================================
// VereinsManager
// mitglieder.js
// Version 0.6.0 Alpha
// ===================================


function showMitglieder(){

    let html = `
    
    <h2>👥 Mitgliederkonten</h2>

    <button
    class="neuButton"
    onclick="mitgliedNeu()">

    ➕ Mitglied hinzufügen

    </button>
    
    `;

    if(mitglieder.length === 0){

        html += `
        <p>Noch keine Mitglieder angelegt.</p>
        `;

    }

    document.getElementById("lagerDialogInhalt").innerHTML =
        html;

    document.getElementById("lagerDialog").style.display =
        "flex";

}


// WICHTIG:
// diese Funktion kommt NACH der letzten Klammer von showMitglieder

function mitgliedNeu(){

    const name =
        prompt("Name des Mitglieds:");

    if(!name) return;


    mitglieder.push({

        id: Date.now(),

        name: name,

        konto: 0,

        verlauf: []

    });


    datenSpeichern();

    showMitglieder();

}