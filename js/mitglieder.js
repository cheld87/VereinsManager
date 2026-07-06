// ===================================
// VereinsManager
// mitglieder.js
// Version 0.6.0 Alpha
// Mitgliederkonten
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


    if(mitglieder.length === 0){

        html += `
        <p>Noch keine Mitglieder angelegt.</p>
        `;

    }else{

        mitglieder.forEach(m=>{

            html += `

            <div class="lagerCard">

                <h3>${m.name}</h3>

                <p>
                Kontostand:
                <b>${m.konto.toFixed(2)} €</b>
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