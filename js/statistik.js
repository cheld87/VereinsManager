// ===================================
// VereinsManager
// statistik.js
// Version 0.4.0 Alpha
// ===================================

function verkaufRegistrieren(id){


    const a =
        artikel.find(x => x.id === id);


    if(!a) return;


    // alte Statistik weiterführen
    if(!statistik[id]){

        statistik[id] = {

            verkauft: 0

        };

    }


    statistik[id].verkauft++;


    // neue Monatsstatistik
    if(!statistik.verlauf){

        statistik.verlauf = [];

    }


    statistik.verlauf.push({

        datum:
        new Date().toISOString(),

        id:
        id,

        name:
        a.name,

        emoji:
        a.emoji,

        preis:
        a.preis

    });


}

function getTopSeller(){

    let top = null;

    artikel.forEach(a=>{

        const anzahl = statistik[a.id]?.verkauft || 0;

        if(!top || anzahl > top.verkauft){

            top = {

                name: a.name,

                verkauft: anzahl

            };

        }

    });

    return top;

}

function getTop5(){

    return artikel
        .map(a => ({

            emoji: a.emoji,

            name: a.name,

            verkauft: statistik[a.id]?.verkauft || 0

        }))

        .filter(a => a.verkauft > 0)

        .sort((a,b) => b.verkauft - a.verkauft)

        .slice(0,5);

}

function showStatistik(){

    const top5 = getTop5();

    let html = "<h2>🏆 Top 5 Verkäufe</h2>";

    if(top5.length === 0){

        html += "<p>Noch keine Verkäufe vorhanden.</p>";

    }else{

        top5.forEach((a,index)=>{

            html += `
                <div class="lagerCard">

                    <div class="lagerTitel">

                        <span>${index+1}. ${a.emoji} ${a.name}</span>

                        <span>${a.verkauft} verkauft</span>

                    </div>

                </div>
            `;

        });

    }

    document.getElementById("lagerDialogInhalt").innerHTML = html;

    document.getElementById("lagerDialog").style.display = "flex";

}
