/*
L’importante è usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
“Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input, e mi draà l’output in pagina, nel modo migliore possibile;
“Annulla” mi fa tornare allo stato iniziale con output pulito (o nascosto) e campi puliti (non vale fare refresh del browser :male-farmer:);

*/

// variabili per assegnazione valore
var valoreNome, valoreKm;

// input nome utente
var nomeUtente = document.getElementById('nome-utente');

// input km utente
var kmUtente = document.getElementById('km-utente');

// input bottone genera
var bottoneGenera = document.getElementById('bottone-genera');

// input bottone Annulla
var bottoneAnnulla = document.getElementById('bottone-annulla');


// salvo dati inseriti dall'utente al momento del click del bottone
bottoneGenera.addEventListener("click",
function () {
    // catturo dati inseriti utente
    valoreNome = nomeUtente.value;
    valoreKm = kmUtente.value;

    // var prezzo Biglietto
    var prezzoFinale;

    // var prezzo Biglietto
    var costoBiglietto = parseInt(valoreKm * 0.21);

    // verifico il prezzo del biglietto
    console.log("Il prezzo del biglietto intero è: " + costoBiglietto);

    // creo variabile per l'età dell'utente
    var eta = document.getElementById('eta');

    // creo variabile valore inserito età utente
    etaUtente = eta.value;

    // controllo se cliccando sull'età, questa corrisponde all'età inserita
    console.log("L'età inserita dall'utente è: " + etaUtente);

    // sconto 20% minorenni e 40% età superiore ai 66 anni
    if (etaUtente == "oversessantacinque") {
      prezzoFinale = costoBiglietto - ((costoBiglietto * 40) / 100);
    } else if (etaUtente == "minorenne"){
      prezzoFinale = costoBiglietto - ((costoBiglietto * 20) / 100);
    } else if (etaUtente == "maggiorenne") {
      prezzoFinale = costoBiglietto;
    }

    // controllo il prezzo al netto degli sconti
    console.log("Il prezzo finale è " + prezzoFinale);

    // verifico che siano stati ricordati i valori inseriti
    console.log("Utente " + valoreNome + ", per km " + valoreKm + ", il prezzo del biglietto al netto degli sconti è " + prezzoFinale);
  }
)

// cliccando annulla pulisco i campi inseriti
bottoneAnnulla.addEventListener("click",
function () {
    nomeUtente.value = "";
    kmUtente.value = "";
    eta.value = "maggiorenne";
  }
)
