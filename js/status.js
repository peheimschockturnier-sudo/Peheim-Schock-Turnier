const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxhsbkkfUKRYlbd_00HIegKbEhPUTy14Pl_Zv10hFXEHd0HV_sMMLdd4GkXt0EbKXqWGQ/exec";

const maxTeilnehmer = 30;
function animateCounter(endValue, maxTeilnehmer) {

    let startValue = 0;

    const duration = 1800;

    const stepTime = Math.max(10, duration / Math.max(endValue, 1));

    const counter = document.getElementById("teilnehmerzahl");
    const progressBar = document.getElementById("progressBar");
    const progressCircle = document.getElementById("progressCircle");

    const umfang = 471;

    const timer = setInterval(() => {

        startValue++;

        counter.innerHTML = startValue;

        const prozent = (startValue / maxTeilnehmer) * 100;

        progressBar.style.width = prozent + "%";

        const offset = umfang - (umfang * prozent / 100);

        progressCircle.style.strokeDashoffset = offset;

        if (startValue >= endValue) {
            clearInterval(timer);
        }

    }, stepTime);

}
fetch(WEBAPP_URL)
.then(response => response.json())
.then(data => {

    console.log("Antwort:", data);

    const angemeldet = Number(data.teilnehmer || 0);

animateCounter(angemeldet, maxTeilnehmer);

const frei = maxTeilnehmer - angemeldet;

    const prozent = (angemeldet / maxTeilnehmer) * 25;

    document.getElementById("progressBar").style.width = prozent + "%";

    document.getElementById("statusText").innerHTML =
        `${angemeldet} von ${maxTeilnehmer} Plätzen vergeben<br>Noch ${frei} Plätze frei`;

    setTimeout(() => {

    document.getElementById("statusText")
        .classList.add("show");

}, 1800);
})
.catch(error => {

    console.error(error);

    document.getElementById("statusText").innerHTML =
        "❌ Fehler beim Laden der Teilnehmerzahl.";

});
