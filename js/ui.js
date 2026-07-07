// ===================================
// VereinsManager
// ui.js
// Version 0.4.0 Alpha
// ===================================

function refreshUI(){

    renderGetraenke();
    renderWarenkorb();
    updateDashboard();

    if(document.getElementById("settings").style.display === "block"){
        renderSettings();
    }

    if(document.getElementById("lagerDialog").style.display === "flex"){
        renderLagerStatus();
    }

}

function zeigeVersion(){

    document.getElementById("version").innerText =
        `${app.verein} · Version ${app.version} · Build ${app.build}`;

}

window.zeigeVersion = zeigeVersion;