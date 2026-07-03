// ===================================
// VereinsManager
// lager.js
// Version 0.4.0 Alpha
// ===================================

function lagerPlus(id, feld){

    const a = artikelNachId(id);

    if(!a || !a.lager) return;

    if(feld === "kaesten"){

        a.lager.kaesten++;
        a.lager.flaschen += a.lager.flaschenProKasten;

    }else{

        a.lager.flaschen++;

    }

    datenSpeichern();

    refreshUI();

}

function lagerMinus(id, feld){

    const a = artikelNachId(id);

    if(!a || !a.lager) return;

    if(feld === "kaesten"){

        if(a.lager.kaesten > 0){

            a.lager.kaesten--;

            a.lager.flaschen = Math.max(
                0,
                a.lager.flaschen - a.lager.flaschenProKasten
            );

        }

    }else{

        if(a.lager.flaschen > 0){

            a.lager.flaschen--;

        }

    }

    datenSpeichern();

    refreshUI();
}

function renderLagerStatus(){

    let html = "";

    const leer = artikel.filter(a =>
        a.lagerartikel &&
        a.lager.flaschen <= 0
    );

    const knapp = artikel.filter(a =>
        a.lagerartikel &&
        a.lager.flaschen > 0 &&
        a.lager.flaschen <= a.lager.mindestbestand
    );

    html += "<h2>📦 Lagerstatus</h2>";

    html += "<h3>🔴 Leer</h3>";

    if(leer.length === 0){

        html += "<p>Keine Artikel leer.</p>";

    }else{

        leer.forEach(a=>{

            html += `
<div class="lagerCard">

    <div class="lagerTitel">

        <span>${a.emoji} ${a.name}</span>

        <span class="lagerBadge statusRot">
            LEER
        </span>

    </div>

    <div class="lagerBestand">

        Bestand:
        📦 ${a.lager.kaesten}
        |
        🍾 ${a.lager.flaschen}

    </div>

    <div class="lagerButtons">

        <button
            onclick="lagerPlus(${a.id},'kaesten')">

            + Kiste

        </button>

    </div>

</div>
`;

        });

    }

    html += "<h3>🟡 Knapp</h3>";

    if(knapp.length === 0){

        html += "<p>Keine Artikel knapp.</p>";

    }else{

       knapp.forEach(a => {

    html += `
<div class="lagerCard">

    <div class="lagerTitel">
        <span>${a.emoji} ${a.name}</span>

        <span class="lagerBadge statusGelb">
            KNAPP
        </span>
    </div>

    <div class="lagerBestand">
        Bestand:
        📦 ${a.lager.kaesten} |
        🍾 ${a.lager.flaschen}
    </div>

    <div class="lagerButtons">
        <button onclick="lagerPlus(${a.id},'kaesten')">
            + Kiste
        </button>
    </div>

</div>
`;

});
        
    }

    document.getElementById("lagerDialogInhalt").innerHTML =
        html;

}

function showLagerStatus(){

    renderLagerStatus();

    document.getElementById("lagerDialog").style.display =
        "flex";

}
