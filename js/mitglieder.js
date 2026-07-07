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

let offen = 0;
let guthaben = 0;


mitglieder.forEach(m=>{


    if(m.konto < 0){

        offen += m.konto;

    }


    if(m.konto > 0){

        guthaben += m.konto;

    }


});


html += `

<div class="lagerCard">

    <h3>📊 Übersicht</h3>

    <p>
    🔴 Offen:
    <b>${Math.abs(offen).toFixed(2)} €</b>
    </p>


    <p>
    🟢 Guthaben:
    <b>${guthaben.toFixed(2)} €</b>
    </p>

</div>

`;

    if(mitglieder.length === 0){

        html += `
        <p>Noch keine Mitglieder angelegt.</p>
        `;

    }else{


        mitglieder
.slice()
.sort((a,b)=>{

    return a.konto - b.konto;

})
.forEach(m=>{

let status = "⚪";

if(m.konto > 0){

    status = "🟢";

}else if(m.konto < 0){

    status = "🔴";

}

            html += `

            <div class="lagerCard">

                <h3>${status} ${m.name}</h3>

                <p>
                    Kontostand:
                    ${m.konto >= 0 ? "+" : ""}${m.konto.toFixed(2)} €
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

<button
class="neuButton"
onclick="mitgliedVerlauf(${m.id})">

📜 Verlauf

</button>

<button
class="neuButton"
onclick="zeigeStrichliste(${m.id})">

📋 Strichliste

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

    strichliste: [],

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


    // Geld kommt wirklich rein
    umsatz += betrag;


    // Mitgliedskonto erhöhen
    m.konto += betrag;


    m.verlauf.push({

        datum: new Date().toLocaleString(),

        text: "Einzahlung",

        betrag: betrag

    });


    datenSpeichern();


    refreshUI();


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

function verkaufAufMitglied(id){

    const m =
        mitglieder.find(x => x.id === id);


    if(!m) return;


    const gesamt =
        berechneGesamt();


    m.konto -= gesamt;


    m.verlauf.push({

    datum: new Date().toLocaleString(),

    text: "Getränke",

    betrag: -gesamt,

    artikel: warenkorb.map(a => ({

        name: a.name,

        menge: a.menge,

        preis: a.preis

    }))

});


    verkaufAbschliessenOhneZahlung();


    datenSpeichern();


    document.getElementById("lagerDialog").style.display =
        "none";


    alert(
        "Auf " +
        m.name +
        " gebucht.\n\nNeuer Stand: " +
        m.konto.toFixed(2) +
        " €"
    );

}

function mitgliedVerlauf(id){

    const m =
        mitglieder.find(x => x.id === id);


    if(!m) return;


    let html = `

    <h2>📜 ${m.name}</h2>

    <h3>
    Kontostand:
    ${m.konto.toFixed(2)} €
    </h3>

    `;


    if(m.verlauf.length === 0){

        html += `
        <p>Noch keine Bewegungen.</p>
        `;

    }else{


        m.verlauf
        .slice()
        .reverse()
        .forEach(v=>{


            html += `

            <div class="lagerCard">

            <b>${v.text}</b>

            <br>

            ${v.datum}

            <br>

            ${v.betrag.toFixed(2)} €

            </div>

            `;


        });

    }


    document.getElementById("lagerDialogInhalt").innerHTML =
        html;

}

function strichlisteAuswahl(){

    if(warenkorb.length === 0){

        alert("Warenkorb ist leer.");

        return;

    }


    let html = `

    <h2>📋 Strichliste wählen</h2>

    `;


    mitglieder.forEach(m=>{


        html += `

        <button
        class="neuButton"
        onclick="aufStrichliste(${m.id})">

        👤 ${m.name}

        </button>

        `;


    });


    document.getElementById("lagerDialogInhalt").innerHTML =
        html;


    document.getElementById("lagerDialog").style.display =
        "flex";

}

function aufStrichliste(id){

    const m =
        mitglieder.find(x => x.id === id);


    if(!m) return;


    warenkorb.forEach(w=>{


        m.strichliste.push({

            datum: new Date().toLocaleString(),

            name: w.name,

            preis: w.preis,

            menge: w.menge

        });


    });


    // Lager direkt reduzieren
    warenkorb.forEach(w=>{

        const a =
            artikel.find(x=>x.id === w.id);


        if(a && a.lagerartikel){

            a.lager.flaschen -= w.menge;

        }

    });


    warenkorb = [];


datenSpeichern();


refreshUI();


document.getElementById("lagerDialog").style.display =
    "none";


alert(
    "Auf Strichliste gespeichert"
);


}

function zeigeStrichliste(id){

    const m =
        mitglieder.find(x=>x.id === id);


    if(!m) return;


    let gesamt = 0;


    let html = `

    <h2>📋 ${m.name}</h2>

    `;


    if(m.strichliste.length === 0){

        html += `
        <p>Keine offenen Getränke.</p>
        `;

    }else{


        m.strichliste.forEach(s=>{


            const summe =
                s.preis * s.menge;


            gesamt += summe;


            html += `

            <div class="lagerCard">

                ${s.name}

                <br>

                ${s.menge}x

                <br>

                ${summe.toFixed(2)} €

            </div>

            `;


        });


        html += `

        <h3>
        Gesamt:
        ${gesamt.toFixed(2)} €
        </h3>

        `;


    }


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
window.verkaufAufMitglied = verkaufAufMitglied;
window.mitgliedVerlauf = mitgliedVerlauf;
window.strichlisteAuswahl = strichlisteAuswahl;
window.aufStrichliste = aufStrichliste;
window.zeigeStrichliste = zeigeStrichliste;