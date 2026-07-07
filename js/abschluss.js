// ===================================
// VereinsManager
// abschluss.js
// Version 0.4.0 Alpha
// ===================================
function showKassenabschluss(){

    const soll =
        app.startKasse + umsatz;

    let html = `

<h2>💰 Kassenabschluss</h2>

<div class="lagerCard">

    <div class="lagerTitel">

        <span>Startkasse</span>

        <strong>${app.startKasse.toFixed(2)} €</strong>

    </div>

    <div class="lagerTitel">

        <span>Umsatz</span>

        <strong>${umsatz.toFixed(2)} €</strong>

    </div>

    <div class="lagerTitel">

        <span>Sollbestand</span>

        <strong>${soll.toFixed(2)} €</strong>

    </div>

</div>

<div class="lagerCard">

<label>Notiz</label>

<input
    id="abschlussNotiz"
    placeholder="z.B. Training / Spieltag">

    <label>Istbestand</label>

    <input
        id="istbestand"
        type="number"
        step="0.01"
        oninput="berechneDifferenz()">

    <h3 id="differenz">

        0,00 €

    </h3>

</div>

<button
class="neuButton"
onclick="abschlussSpeichern()">

💾 Abschluss

</button>

`;

    document.getElementById("lagerDialogInhalt").innerHTML =
        html;

    document.getElementById("lagerDialog").style.display =
        "flex";

}

function berechneDifferenz(){

    const soll = app.startKasse + umsatz;

    const ist = parseFloat(
        document.getElementById("istbestand").value
    ) || 0;
    
    const notiz =
    document.getElementById("abschlussNotiz").value
    ||
    "";

    const diff = ist - soll;

    const feld = document.getElementById("differenz");

    if(diff === 0){

        feld.innerHTML = "🟢 Kasse stimmt";

    }else if(diff < 0){

        feld.innerHTML =
            `🔴 Es fehlen ${Math.abs(diff).toFixed(2)} €`;

    }else{

        feld.innerHTML =
            `🟡 ${diff.toFixed(2)} € Überschuss`;

    }

}

function abschlussSpeichern(){

    if(!confirm("Kassenabschluss wirklich durchführen?")){

        return;

    }

    const soll = app.startKasse + umsatz;

    const ist =
        parseFloat(
            document.getElementById("istbestand").value
        ) || 0;
        
        const entnahme =
        ist - 150;
        
        const notiz =
        document.getElementById("abschlussNotiz").value
        ||
        "";

    abschluesse.push({

        datum: new Date().toLocaleString(),

        startkasse: app.startKasse,

        umsatz: umsatz,

        soll: soll,

        ist: ist,
        
        entnahme: entnahme,

        differenz: ist - soll,
        
        notiz: notiz

    });

        umsatz = 0;

    app.startKasse = 150;

    warenkorb = [];


    datenSpeichern();


    refreshUI();


    document.getElementById("lagerDialog").style.display =
        "none";


    alert("✅ Kassenabschluss gespeichert.");

}


function showAbschlussHistorie(){

    let html = `
    
    <h2>📚 Abschlusshistorie</h2>
    
    `;

    if(abschluesse.length === 0){

        html += `
        <p>Noch keine Abschlüsse vorhanden.</p>
        `;

    }else{

        abschluesse
        .slice()
        .reverse()
        .forEach(a=>{

            html += `

            <div class="lagerCard">

                <h3>${a.datum}</h3>
                
                <p>
                📝 ${a.notiz || ""}
                </p>

                <p>
                Umsatz:
                <b>${a.umsatz.toFixed(2)} €</b>
                </p>

                <p>
                Soll:
                <b>${a.soll.toFixed(2)} €</b>
                </p>

                <p>
                Ist:
                <b>${a.ist.toFixed(2)} €</b>
                </p>
                
                <p>
                💶 Entnahme:
                <b>${(a.entnahme || 0).toFixed(2)} €</b>
                </p>

                <p>
                Differenz:
                <b>${a.differenz.toFixed(2)} €</b>
                </p>

            </div>

            `;

        });

    }


    document.getElementById("lagerDialogInhalt").innerHTML =
        html;

    document.getElementById("lagerDialog").style.display =
        "flex";

}
