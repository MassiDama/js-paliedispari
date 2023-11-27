// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


// funzione che genera un numero random
function generateRandom() {
    const num = Math.floor(Math.random() * 5 ) + 1;
    return num;
}

// funzione che stabilisce se il numero è pari o disparo
function pariDisparo(sumNum) {

    let result;

    if (sumNum % 2 === 0 ){

        result = "paro";

    } else {

        result = "disparo";
    }

    return result;
}


// scelte utente
const choice = prompt("Scegli tra paro e disparo");
console.log(choice);

const numUser = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Il numero da te scelto è: " + numUser);

// numero random pc
const numPc = generateRandom();

console.log("Il numero scelto dal pc è: " + numPc);

// sommiamo i due numeri 
const sumNum = numPc + numUser;

console.log("La somma dei due numeri è: " + sumNum);

// definisco la variabile result 
let result = pariDisparo(sumNum)
console.log("La somma dei numeri è: " + result);

// andiamo a decretare il vincitore
if (choice === result) {

    console.log("HAI VINTO TU!");

} else {

    console.log("MI DISPIACE HAI PERSO!");

}



