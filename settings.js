// ===================================
// VereinsManager
// settings.js
// Einstellungen
// Version 0.2.0 Alpha
// ===================================

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

    </div>

    <input
        id="preis${index}"
        type="number"
        step="0.01"
        value="${a.preis.toFixed(2)}">

</div>

`;

    });

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
