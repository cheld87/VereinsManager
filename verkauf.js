// ===================================
// VereinsManager
// verkauf.js
// Verkauf & Warenkorb
// Version 0.2.0 Alpha
// ===================================

function renderGetraenke() {

    const grid = document.getElementById("getraenkeGrid");

    grid.innerHTML = "";

    artikel
        .filter(a => a.aktiv !== false)
        .forEach(a => {

            grid.innerHTML += `
                <div class="getraenk" onclick="artikelKlicken(${a.id})">

                    <div class="emoji">${a.emoji}</div>

                    <div class="name">${a.name}</div>

                   <div class="preis">${a.preis.toFixed(2)} €</div>

${
    a.lagerartikel
        ? `
        <div class="lagerInfo">
            📦 ${a.lager.kaesten} | 🍾 ${a.lager.flaschen}
        </div>
        `
        : ""
}

                </div>
            `;

        });

}

function artikelKlicken(id) {

    const artikelInfo =
    artikel.find(a => a.id === id);

    if (!artikelInfo) return;

    warenkorb.push({ ...artikelInfo });

    renderWarenkorb();

    datenSpeichern();

}

function artikelMinus(id) {

    const index =
    warenkorb.findIndex(a => a.id === id);

    if (index === -1) return;

    warenkorb.splice(index, 1);

    renderWarenkorb();

    datenSpeichern();

}

function berechneGesamt() {

    return warenkorb.reduce(
        (summe, artikel) => summe + artikel.preis,
        0
    );

}

function renderWarenkorb() {

    const ausgabe =
        document.getElementById("warenkorb");

    const gesamt =
        document.getElementById("gesamt");

    if (warenkorb.length === 0) {

        ausgabe.innerHTML = "Noch keine Artikel";

        gesamt.innerText = "0,00 €";

        return;

    }

    const gruppiert = {};

    warenkorb.forEach(a => {

       if (!gruppiert[a.id]) {

    gruppiert[a.id] = {
        ...a,
        menge: 0
    };

}

gruppiert[a.id].menge++;
    });

    let html = "";
    let summe = 0;

    Object.values(gruppiert).forEach(a => {

        const zeilenSumme =
            a.preis * a.menge;

        summe += zeilenSumme;

        html += `
<div class="warenkorbZeile">

    <div class="warenkorbInfo">

        <div class="warenkorbName">
            ${a.emoji} ${a.name}
        </div>

        <div class="warenkorbPreis">
            ${a.menge} × ${a.preis.toFixed(2)} €
            =
            <strong>${zeilenSumme.toFixed(2)} €</strong>
        </div>

    </div>

    <div class="warenkorbButtons">

        <button onclick="artikelMinus(${a.id})">−</button>

        <span>${a.menge}</span>

        <button onclick="artikelKlicken(${a.id})">+</button>

    </div>

</div>
`;

    });

    ausgabe.innerHTML = html;

    gesamt.innerText =
        summe.toFixed(2) + " €";

}

function setBezahlt(betrag) {

    document.getElementById("bezahlt").value = betrag;

    berechneRueckgeld();

}

function berechneRueckgeld() {

    const bezahlt =
        parseFloat(
            document.getElementById("bezahlt").value
        ) || 0;

    const rueckgeld =
        bezahlt - berechneGesamt();

    document.getElementById("rueckgeld").innerText =
        rueckgeld.toFixed(2) + " €";

}

function verkaufLoeschen() {

    if (warenkorb.length === 0) return;

    if (!confirm("Verkauf wirklich löschen?")) return;

    warenkorb = [];

    document.getElementById("bezahlt").value = "";

    document.getElementById("rueckgeld").innerText = "0,00 €";

    renderWarenkorb();

    datenSpeichern();

}

function verkaufAbschliessen() {

    if (warenkorb.length === 0) {

        alert("Warenkorb ist leer.");

        return;

    }

    const bezahlt =
        parseFloat(
            document.getElementById("bezahlt").value
        ) || 0;

    const gesamt =
        berechneGesamt();

    if (bezahlt < gesamt) {

        alert("Zu wenig Geld erhalten.");

        return;

    }

    umsatz += gesamt;

    warenkorb.forEach(a => {

    const artikelInfo = artikel.find(x => x.id === a.id);

    if (!artikelInfo) return;

    if (!artikelInfo.lagerartikel) return;

    artikelInfo.lager.flaschen--;

    if (artikelInfo.lager.flaschen < 0) {

        if (artikelInfo.lager.kaesten > 0) {

            artikelInfo.lager.kaesten--;

            artikelInfo.lager.flaschen =
                artikelInfo.lager.flaschenProKasten - 1;

        } else {

            artikelInfo.lager.flaschen = 0;

        }

    }

});
    warenkorb = [];

    document.getElementById("bezahlt").value = "";

    document.getElementById("rueckgeld").innerText = "0,00 €";

    renderWarenkorb();

    updateDashboard();

    datenSpeichern();

    alert("✅ Verkauf abgeschlossen.");

}
