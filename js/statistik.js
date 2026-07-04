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
