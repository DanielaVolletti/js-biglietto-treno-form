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

// input bottone
var bottoneGenera = document.getElementById('bottone-genera');




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

    console.log(costoBiglietto);


    var etaUtente = document.getElementById('eta');

    // opzione età Maggiorenne
    var maggiorenne = document.getElementById('maggiorenne');

    // opzione età Minorenne
    var minorenne = document.getElementById('minorenne');

    // opzione over 65
    var vecchio = document.getElementById('oversessantacinque');

    // sconto 20% minorenni e 40% età superiore ai 66 anni
    if (etaUtente = vecchio) {
      prezzoFinale = costoBiglietto - ((costoBiglietto * 40) / 100);
    } else if (etaUtente = minorenne){
      prezzoFinale = costoBiglietto - ((costoBiglietto * 20) / 100);
    } else if (etaUtente = maggiorenne) {
      prezzoFinale = costoBiglietto;
    }

    console.log(prezzoFinale);

    // verifico che siano stati ricordati i valori inseriti
    console.log(valoreNome, valoreKm, prezzoFinale);





  }

)
