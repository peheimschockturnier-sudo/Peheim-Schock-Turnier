const WEBAPP_URL = "https://script.google.com/macros/library/d/1xTEpuui5he7elMlSdXtDCbpjDIdU5Ow7aEc2rmSJHT1cejj7FUxUczZW/5";

const maxTeilnehmer = 120;

fetch(WEBAPP_URL)
.then(response => response.json())
.then(data => {

    const angemeldet = data.teilnehmer;

    const frei = maxTeilnehmer - angemeldet;

    const prozent = (angemeldet / maxTeilnehmer) * 100;

    document.getElementById("progressBar").style.width = prozent + "%";

    if (angemeldet >= maxTeilnehmer) {

        document.getElementById("statusText").innerHTML =
        "🔴 Das Turnier ist ausgebucht!";

    } else {

        document.getElementById("statusText").innerHTML =
        `${angemeldet} von ${maxTeilnehmer} Plätzen vergeben<br>Noch ${frei} Plätze frei`;

    }

});
