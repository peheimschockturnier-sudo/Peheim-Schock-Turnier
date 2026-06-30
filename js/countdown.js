// Datum des Turniers
const eventDate = new Date("2026-10-10T14:00:00").getTime();

const timer = document.getElementById("timer");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {

        timer.innerHTML = "🎉 Das Turnier läuft!";
        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    timer.innerHTML = `
        <div class="countdown-grid">
            <div class="count-box">
                <span>${days}</span>
                <small>Tage</small>
            </div>

            <div class="count-box">
                <span>${hours}</span>
                <small>Std.</small>
            </div>

            <div class="count-box">
                <span>${minutes}</span>
                <small>Min.</small>
            </div>

            <div class="count-box">
                <span>${seconds}</span>
                <small>Sek.</small>
            </div>
        </div>
    `;

}

updateCountdown();

setInterval(updateCountdown,1000);