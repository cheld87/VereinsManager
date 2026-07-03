// ===================================
// VereinsManager
// settings.js
// Version 0.3.0 Alpha
// ===================================

let artikelIndex = -1;
let neuerArtikel = false;
let zeigeInaktive = false;

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

    html += `
<label style="display:flex;align-items:center;gap:8px;margin-bottom:15px;">
    <input
        type="checkbox"
        ${zeigeInaktive ? "checked" : ""}
        onchange="toggleInaktive(this.checked)">
    Inaktive Artikel anzeigen
</label>
`;
    artikel
        .filter(a => zeigeInaktive || a.aktiv !== false)
        onclick="artikelBearbeiten(${a.id})"
          
            console.log(a.name, a.aktiv);
            
            html += `

<div class="settingArtikel">

    <div class="settingName">

        <strong>${a.emoji} ${a.name}</strong><br>

        <small>${a.preis.toFixed(2)} €</small>

    </div>

    <div class="buttonGruppe">

    ${
        a.aktiv === false
        ? `
        <button
            class="editButton"
           onclick="artikelAktivieren(${a.id})"
            ♻️
        </button>
        `
        : `
        <button
            class="editButton"
            onclick="artikelBearbeiten(${a.id})"
            ✏️
        </button>

        <button
            class="deleteButton"
            onclick="artikelDeaktivieren(${a.id})"
            🗑️
        </button>
        `
    }

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

function artikelBearbeiten(id){
    
    neuerArtikel = false;

document.getElementById("dialogTitel").innerText =
    "✏️ Artikel bearbeiten";
   
    artikelIndex = id;

    document.getElementById("editEmoji").value =
      artikelNachId(id).emoji;

    document.getElementById("editName").value =
        artikelNachId(id).name;

    document.getElementById("editPreis").value =
        artikelNachId(id).preis;

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
   
        artikelNachId(artikelIndex).emoji =
        document.getElementById("editEmoji").value;

    artikelNachId(artikelIndex).name =
        document.getElementById("editName").value;

    artikelNachId(artikelIndex).preis =
        parseFloat(
            document.getElementById("editPreis").value
        );
}
    
    datenSpeichern();

    renderGetraenke();

    renderSettings();

    dialogSchliessen();

}

function artikelDeaktivieren(id){
    
    const a = artikelNachId(id);

if(!confirm(`"${a.name}" wirklich deaktivieren?`)) return;

a.aktiv = false;

datenSpeichern();

renderGetraenke();

renderSettings();

}

function toggleInaktive(status){

    zeigeInaktive = status;

    renderSettings();

}

function artikelAktivieren(id){

    const a = artikelNachId(id);

    a.aktiv = true;

    datenSpeichern();

    renderGetraenke();

    renderSettings();

}

function artikelNachId(id){

    return artikel.find(a => a.id === id);

}
