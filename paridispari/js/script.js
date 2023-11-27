// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// scelte utente
const choice = prompt("Scegli tra paro e disparo");
console.log(choice);

const numUser = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Il numero da te scelto è: " + numUser);

// numero random pc
const numPc = generateRandom();

console.log("Il numero scelto dal pc è: " + numPc);




// funzione che genera un numero random
function generateRandom() {
    const num = Math.floor(Math.random() * 5 ) + 1;
    return num;
}


