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
