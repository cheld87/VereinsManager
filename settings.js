// ===================================
// VereinsManager
// settings.js
// Einstellungen
// Version 0.2.0 Alpha
// ===================================
let artikelIndex = -1;

function toggleSettings() {

    const fenster = document.getElementById("settings");

    if (fenster.style.display === "block") {

        fenster.style.display = "none";

    } else {

        fenster.style.display = "block";

        renderSettings();

    }

}

function renderSettings() {

    const container =
        document.getElementById("settingsGetraenke");

    let html = "";

    artikel.forEach((a, index) => {

        html += `
<div class="settingArtikel">

    <div class="settingName">
        ${a.emoji} ${a.name}
        <br>
        <small>${a.preis.toFixed(2)} €</small>
    </div>

    <button
        class="editButton"
        onclick="artikelBearbeiten(${index})">
        ✏️
    </button>

</div>
`;

    });

    html += `
<button class="neuButton" onclick="neuesGetraenk()">
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

    alert("Getränkeverwaltung kommt im nächsten Schritt 😊");

}

function artikelBearbeiten(index){

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

    artikel[artikelIndex].emoji =
        document.getElementById("editEmoji").value;

    artikel[artikelIndex].name =
        document.getElementById("editName").value;

    artikel[artikelIndex].preis =
        parseFloat(
            document.getElementById("editPreis").value
        );

    datenSpeichern();

    renderGetraenke();

    renderSettings();

    dialogSchliessen();

}
