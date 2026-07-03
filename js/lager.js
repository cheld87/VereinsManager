// ===================================
// VereinsManager
// lager.js
// Version 0.4.0 Alpha
// ===================================

function lagerPlus(id, feld){

    const a = artikelNachId(id);

    if(!a || !a.lager) return;

    if(feld === "kaesten"){

        a.lager.kaesten++;
        a.lager.flaschen += a.lager.flaschenProKasten;

    }else{

        a.lager.flaschen++;

    }

    datenSpeichern();

    refreshUI();

}

function lagerMinus(id, feld){

    const a = artikelNachId(id);

    if(!a || !a.lager) return;

    if(feld === "kaesten"){

        if(a.lager.kaesten > 0){

            a.lager.kaesten--;

            a.lager.flaschen = Math.max(
                0,
                a.lager.flaschen - a.lager.flaschenProKasten
            );

        }

    }else{

        if(a.lager.flaschen > 0){

            a.lager.flaschen--;

        }

    }

    datenSpeichern();

    refreshUI();
}
