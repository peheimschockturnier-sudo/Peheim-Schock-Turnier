const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxhsbkkfUKRYlbd_00HIegKbEhPUTy14Pl_Zv10hFXEHd0HV_sMMLdd4GkXt0EbKXqWGQ/exec";

const formular = document.getElementById("anmeldungForm");

formular.addEventListener("submit", async function(e){

    e.preventDefault();

    const daten = Object.fromEntries(new FormData(formular));

    try{

        const antwort = await fetch(WEB_APP_URL,{

            method:"POST",

            body:JSON.stringify(daten)

        });

        if(antwort.ok){

            document.getElementById("meldung").innerHTML =
            "✅ Vielen Dank! Eure Anmeldung wurde erfolgreich gespeichert.";

            formular.reset();

        }else{

            document.getElementById("meldung").innerHTML =
            "❌ Fehler beim Speichern.";

        }

    }catch{

        document.getElementById("meldung").innerHTML =
        "❌ Verbindung zum Server fehlgeschlagen.";

    }

});