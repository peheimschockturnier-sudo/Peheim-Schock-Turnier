const WEBAPP_URL = "https://script.google.com/macros/library/d/1xTEpuui5he7elMlSdXtDCbpjDIdU5Ow7aEc2rmSJHT1cejj7FUxUczZW/7";

const maxTeilnehmer = 30;

fetch(WEBAPP_URL)
.then(response => response.json())
.then(data => {

    console.log("Antwort:", data);

    const angemeldet = data.teilnehmer;

    const frei = maxTeilnehmer - angemeldet;

    const prozent = (angemeldet / maxTeilnehmer) * 25;

    document.getElementById("progressBar").style.width = prozent + "%";

    document.getElementById("statusText").innerHTML =
        `${angemeldet} von ${maxTeilnehmer} Plätzen vergeben<br>Noch ${frei} Plätze frei`;

})
.catch(error => {

    console.error(error);

    document.getElementById("statusText").innerHTML =
        "❌ Fehler beim Laden der Teilnehmerzahl.";

});
