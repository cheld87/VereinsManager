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

<button
class="neuButton"
onclick="mitgliedEinzahlung(${m.id})">

💵 Einzahlung

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
    
    function mitgliedEinzahlung(id){

    const m =
        mitglieder.find(x => x.id === id);


    if(!m) return;


    const betrag =
        parseFloat(
            prompt("Einzahlung Betrag:")
        );


    if(!betrag) return;


    m.konto += betrag;


    m.verlauf.push({

        datum: new Date().toLocaleString(),

        text: "Einzahlung",

        betrag: betrag

    });


    datenSpeichern();


    showMitglieder();

}


window.mitgliedEinzahlung =
    mitgliedEinzahlung;
    
function mitgliedAuswahl(){

    if(warenkorb.length === 0){

        alert("Warenkorb ist leer.");

        return;

    }


    let html = `

    <h2>👥 Mitglied auswählen</h2>

    `;


    mitglieder.forEach(m=>{

        html += `

        <button
        class="neuButton"
        onclick="verkaufAufMitglied(${m.id})">

        👤 ${m.name}
        (${m.konto.toFixed(2)} €)

        </button>

        `;

    });


    document.getElementById("lagerDialogInhalt").innerHTML =
        html;


    document.getElementById("lagerDialog").style.display =
        "flex";

}


window.showMitglieder = showMitglieder;
window.mitgliedNeu = mitgliedNeu;
window.mitgliedLoeschen = mitgliedLoeschen;
window.mitgliedEinzahlung = mitgliedEinzahlung;
window.mitgliedAuswahl = mitgliedAuswahl;