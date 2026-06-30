const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxhsbkkfUKRYlbd_00HIegKbEhPUTy14Pl_Zv10hFXEHd0HV_sMMLdd4GkXt0EbKXqWGQ/exec";

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
