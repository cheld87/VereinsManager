// ===================================
// VereinsManager
// statistik.js
// Version 0.4.0 Alpha
// ===================================

let statistik = {};

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
