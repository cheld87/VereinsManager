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

    }else{


        mitglieder.forEach(m => {


            html += `

            <div class="lagerCard">

                <h3>👤 ${m.name}</h3>

                <p>
                    Kontostand:
                    <b>${m.konto.toFixed(2)} €</b>
                </p>
                
                <button
class="deleteButton"
onclick="mitgliedLoeschen(${m.id})">

🗑 Löschen

</button>

            </div>

            `;


        });


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

function mitgliedLoeschen(id){

    if(!confirm("Mitglied wirklich löschen?")){
        return;
    }


    mitglieder =
        mitglieder.filter(
            m => m.id !== id
        );


    datenSpeichern();

    showMitglieder();

}


window.mitgliedLoeschen =
    mitgliedLoeschen;