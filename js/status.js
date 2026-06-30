// Beispielwert
// Später kommt dieser Wert automatisch aus Google Sheets

const maxTeilnehmer = 120;

const angemeldet = 84;

const frei = maxTeilnehmer - angemeldet;

const prozent = angemeldet / maxTeilnehmer * 100;

document.getElementById("progressBar").style.width = prozent + "%";

document.getElementById("statusText").innerHTML =
`${angemeldet} von ${maxTeilnehmer} Plätzen vergeben<br>Noch ${frei} Plätze frei`;
