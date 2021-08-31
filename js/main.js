// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


var parola = prompt("inserisci una parola per verificare se è palindroma")

var palindroma = '';
for(i=parola.length-1; i>-1; i--){
    palindroma += parola[i];
}

function pali(){
    if (palindroma == parola){
        return  "sì è una parola palindroma";
    } return "no non è una parola palindroma";
}

console.log(pali(palindroma , parola))