// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// var parola = prompt("inserisci una parola per verificare se è palindroma")

// var palindroma = '';
// for(i=parola.length-1; i>-1; i--){
//     palindroma += parola[i];
// }

// function pali(){
//     if (palindroma == parola){
//         return  "sì è una parola palindroma";
//     } return "no non è una parola palindroma";
// }

// console.log(pali(palindroma , parola))






// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


var sceltaUtente = prompt("Scegli pari o dispari")
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5 "))


function randomNumber(){
    var numCPU = Math.floor((Math.random() * 5) + 1);
    return console.log(numCPU);
}

console.log(numeroUtente);
randomNumber();

// alert("questa è la scelta del cpu " + randomNumber())

var resultUtenteVsCPU = numeroUtente + randomNumber();
console.log(resultUtenteVsCPU);