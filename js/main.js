/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// Variabile container
const contenitore = document.getElementById('container');
// H2 dove verranno visualizzati i numeri
const numVisualizzati = document.getElementById('number');
// H2 del timer
const timerPagina = document.getElementById('timer');

// Setta i secondi a 30
let seconds = 30;
// Countdown ad intervallo di 1 sec
let timer = setInterval(countdown, 1000);
let numeri = [];

while (numeri.length < 5){
  // Richiama funzione numeri casuali
  const numeriCasuali = numRandom(1, 100);
  if (!numeri.includes(numeriCasuali)){
    numeri.push(numeriCasuali);
  }
}
numVisualizzati.innerHTML = numeri;

// Funzione per far partire il countdown in pagina
function countdown() {
  // Se arriva a -1 il timer si ferma e il contenitore si svuota
  if (seconds == -1){
    clearInterval(timer);
    timerPagina.innerHTML = '';
  }
  // Se il timer parte da 30sec, va a diminuire fino a quando non arriva a -1 (vedi sopra)
  else {
    timerPagina.innerHTML = seconds + ' secondi rimanenti';
    seconds --;
  }
}

// FUNZIONI--------------------------------------
// GENERARE NUMERO RANDOM
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}