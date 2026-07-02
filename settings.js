// ===================================
// VereinsManager
// settings.js
// Version 0.3.0 Alpha
// ===================================

let artikelIndex = -1;
let neuerArtikel = false;

function toggleSettings() {

    const fenster = document.getElementById("settings");

    if (fenster.style.display === "block") {

        fenster.style.display = "none";
        return;

    }

    fenster.style.display = "block";

    renderSettings();

}

function renderSettings() {

    const container =
        document.getElementById("settingsGetraenke");

    let html = "";

    artikel
        .filter(a => a.aktiv !== false)
        .forEach((a, index) => {

            html += `

<div class="settingArtikel">

    <div class="settingName">

        <strong>${a.emoji} ${a.name}</strong><br>

        <small>${a.preis.toFixed(2)} €</small>

    </div>

    <div class="buttonGruppe">

        <button
            class="editButton"
            onclick="artikelBearbeiten(${index})">

            ✏️

        </button>

        <button
            class="deleteButton"
            onclick="artikelDeaktivieren(${index})">

            🗑️

        </button>

    </div>

</div>

`;

        });

    html += `

<button
    class="neuButton"
    onclick="neuesGetraenk()">

    ➕ Neuer Artikel

</button>

`;

    container.innerHTML = html;

}


function preisSpeichern() {

    artikel.forEach((a, index) => {

        const feld =
            document.getElementById("preis" + index);

        a.preis =
            parseFloat(feld.value) || a.preis;

    });

    datenSpeichern();

    renderGetraenke();

    renderWarenkorb();

    toggleSettings();

}

function neuesGetraenk(){

    neuerArtikel = true;

    artikelIndex = -1;

    document.getElementById("dialogTitel").innerText =
        "➕ Neuer Artikel";

    document.getElementById("editEmoji").value = "🥤";
    document.getElementById("editName").value = "";
    document.getElementById("editPreis").value = "";

    document.getElementById("artikelDialog").style.display =
        "flex";

}

function artikelBearbeiten(index){

    neuerArtikel = false;

document.getElementById("dialogTitel").innerText =
    "✏️ Artikel bearbeiten";
   
    artikelIndex = index;

    document.getElementById("editEmoji").value =
        artikel[index].emoji;

    document.getElementById("editName").value =
        artikel[index].name;

    document.getElementById("editPreis").value =
        artikel[index].preis;

    document.getElementById("artikelDialog").style.display =
        "flex";

}

function dialogSchliessen(){

    document.getElementById("artikelDialog").style.display =
        "none";

}

function artikelSpeichern(){

    if(neuerArtikel){

    artikel.push({

    emoji: document.getElementById("editEmoji").value,

    name: document.getElementById("editName").value,

    preis: parseFloat(
        document.getElementById("editPreis").value
    ) || 0,

    aktiv: true

});

}else{
   
        artikel[artikelIndex].emoji =
        document.getElementById("editEmoji").value;

    artikel[artikelIndex].name =
        document.getElementById("editName").value;

    artikel[artikelIndex].preis =
        parseFloat(
            document.getElementById("editPreis").value
        );
}
    
    datenSpeichern();

    renderGetraenke();

    renderSettings();

    dialogSchliessen();

}

function artikelDeaktivieren(index) {

    const artikelName = artikel[index].name;

    if (!confirm(`"${artikelName}" wirklich deaktivieren?`)) {
        return;
    }

    artikel[index].aktiv = false;

    datenSpeichern();

    renderGetraenke();

    renderSettings();

}
