// ===================================
// VereinsManager
// settings.js
// Version 0.3.0
// ===================================
console.log("settings geladen");

let artikelId = null;
let neuerArtikel = false;
let zeigeInaktive = false;

function artikelNachId(id) {
    return artikel.find(a => a.id === id);
}

function toggleSettings(){

    const settings =
        document.getElementById("settings");

    if(settings.style.display === "none"){

        settings.style.display = "block";

        renderSettings();

    }else{

        settings.style.display = "none";

    }

}

function renderSettings() {

    const container =
        document.getElementById("settingsGetraenke");

    let html = `

<label style="display:flex;align-items:center;gap:8px;margin-bottom:15px;">

<input
type="checkbox"
${zeigeInaktive ? "checked" : ""}
onchange="toggleInaktive(this.checked)">

Inaktive Artikel anzeigen

</label>

`;

    artikel
        .filter(a => zeigeInaktive || a.aktiv)
        .forEach(a => {

            html += `

<div class="settingArtikel">

<div class="settingName">

<strong>${a.emoji} ${a.name}</strong><br>

<small>${a.preis.toFixed(2)} €</small>

${
a.lagerartikel
?
`
<div class="lagerEditor">

    <div class="lagerZeile">

        <span>📦</span>

        <button onclick="lagerMinus(${a.id},'kaesten')">−</button>

        <span>${a.lager.kaesten}</span>

        <button onclick="lagerPlus(${a.id},'kaesten')">+</button>

    </div>

    <div class="lagerZeile">

        <span>🍾</span>

        <button onclick="lagerMinus(${a.id},'flaschen')">−</button>

        <span>${a.lager.flaschen}</span>

        <button onclick="lagerPlus(${a.id},'flaschen')">+</button>

    </div>

</div>
`
:
""
}

</div>
<div class="buttonGruppe">

${a.aktiv ?

`

<button
class="editButton"
onclick="artikelBearbeiten(${a.id})">
✏️
</button>

<button
class="deleteButton"
onclick="artikelDeaktivieren(${a.id})">
🗑️
</button>

`

:

`

<button
class="editButton"
onclick="artikelAktivieren(${a.id})">
♻️
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

<button
class="neuButton"
onclick="showStatistik()">

📊 Statistik

</button>

<button
class="neuButton"
onclick="backupErstellen()">

💾 Backup erstellen

</button>

`;

container.innerHTML = html;
    
}

function toggleInaktive(status){

    zeigeInaktive = status;

    renderSettings();

}

function neuesGetraenk(){

    neuerArtikel = true;

    artikelId = null;

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

    artikelId = id;

    const a = artikelNachId(id);

    document.getElementById("dialogTitel").innerText =
        "✏️ Artikel bearbeiten";

    document.getElementById("editEmoji").value = a.emoji;
    document.getElementById("editName").value = a.name;
    document.getElementById("editPreis").value = a.preis;

    document.getElementById("artikelDialog").style.display =
        "flex";

}

function dialogSchliessen(){

    document.getElementById("artikelDialog").style.display =
        "none";

}

function artikelSpeichern(){

    if(neuerArtikel){

        const neueId =
            Math.max(...artikel.map(a => a.id),0)+1;

        artikel.push({

            id: neueId,

            emoji: document.getElementById("editEmoji").value,

            name: document.getElementById("editName").value,

            preis: parseFloat(
                document.getElementById("editPreis").value
            ) || 0,

            kategorie: "Sonstiges",

            lagerartikel: false,

            lager: null,

            aktiv: true

        });

    }else{

        const a = artikelNachId(artikelId);

        a.emoji =
            document.getElementById("editEmoji").value;

        a.name =
            document.getElementById("editName").value;

        a.preis =
            parseFloat(
                document.getElementById("editPreis").value
            ) || 0;

    }

    datenSpeichern();

    refreshUI();

}
function artikelDeaktivieren(id){

    const a = artikelNachId(id);

    if(!a) return;

    if(!confirm(`"${a.name}" wirklich deaktivieren?`))
        return;

    a.aktiv = false;

    datenSpeichern();

    refreshUI();

}

function artikelAktivieren(id){

    const a = artikelNachId(id);

    if(!a) return;

    a.aktiv = true;

    datenSpeichern();

    refreshUI();

}

function preisSpeichern(){

    datenSpeichern();

    renderGetraenke();

    renderWarenkorb();

    renderSettings();

}

