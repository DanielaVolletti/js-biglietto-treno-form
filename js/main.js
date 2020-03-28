/*
L’importante è usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
“Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input, e mi draà l’output in pagina, nel modo migliore possibile;
“Annulla” mi fa tornare allo stato iniziale con output pulito (o nascosto) e campi puliti (non vale fare refresh del browser :male-farmer:);

*/

// variabili per assegnazione valore
var valoreNome, valoreKm, output;

// input nome utente
var nomeUtente = document.getElementById('nome-utente');

// input km utente
var kmUtente = document.getElementById('km-utente');

// input bottone genera
var bottoneGenera = document.getElementById('bottone-genera');

// input bottone Annulla
var bottoneAnnulla = document.getElementById('bottone-annulla');

// rendo invisibile il biglietto all'apertura della pagina
document.getElementById('output-utente').style.opacity = "0";

// creo una transizione di due secondi per far poi apparire il biglietto
document.getElementById('output-utente').style.transition = "all 2s";

// salvo dati inseriti dall'utente al momento del click del bottone
bottoneGenera.addEventListener("click",
function () {

    // rendo visibile il biglietto al click
    document.getElementById('output-utente').style.opacity = "1";

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

    // creo variabile tipo di offerta per età
    var offerta;

    // sconto 20% minorenni e 40% età superiore ai 66 anni
    if (etaUtente == "oversessantacinque") {
      prezzoFinale = costoBiglietto - ((costoBiglietto * 40) / 100);
      offerta = "Offerta Silver";
    } else if (etaUtente == "minorenne"){
      offerta = "Offerta Young";
      prezzoFinale = costoBiglietto - ((costoBiglietto * 20) / 100);
    } else if (etaUtente == "maggiorenne") {
      offerta = "Biglietto standard";
      prezzoFinale = costoBiglietto;
    }

    // controllo il prezzo al netto degli sconti
    console.log("Il prezzo finale è " + prezzoFinale);

    // verifico che siano stati ricordati i valori inseriti
    console.log("Utente " + valoreNome + ", per km " + valoreKm + ", il prezzo del biglietto al netto degli sconti è " + prezzoFinale);


    // OUTPUT IN PAGINA------------------------------

    // nome del PASSEGGERO
    document.getElementById('nome-passeggero').innerHTML = valoreNome;

    // tipo di offerta del biglietto in base all'età
    document.getElementById('tipo-offerta').innerHTML = offerta;

    // carrozza assegnata
    document.getElementById('tipo-carrozza').innerHTML = Math.floor(Math.random()* 10) + 1;

    // codice del BIGLIETTO
    document.getElementById('codice-biglietto').innerHTML = Math.floor(Math.random()* 99000) + 1000;

    // prezzo del BIGLIETTO
    document.getElementById('prezzo-biglietto').innerHTML = prezzoFinale + " €";
  }

)

// cliccando annulla pulisco i campi inseriti
bottoneAnnulla.addEventListener("click",
function () {

    // pulisco campi parte superiore generazione biglietto utente
    nomeUtente.value = "";
    kmUtente.value = "";
    eta.value = "maggiorenne";

    // pulisco campi parte biglietto generato
    document.getElementById('nome-passeggero').innerHTML = "";
    document.getElementById('tipo-offerta').innerHTML = "";
    document.getElementById('tipo-carrozza').innerHTML = "";
    document.getElementById('codice-biglietto').innerHTML = "";
    document.getElementById('prezzo-biglietto').innerHTML = "";
  }

)
