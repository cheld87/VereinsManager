// ===================================
// VereinsManager
// statistik.js
// Version 0.4.0 Alpha
// ===================================

function verkaufRegistrieren(id){

    if(!statistik[id]){

        statistik[id] = {

            verkauft: 0

        };

    }

    statistik[id].verkauft++;

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
