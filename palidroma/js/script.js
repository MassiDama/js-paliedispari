// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let wordUser = prompt("Inserisci una parola:");

console.log(wordUser);

function isPalindrome(wordUser) { 
    var j = wordUser.length - 1 
    for(var i = 0; i < wordUser.length /2; i++){ 
        if(wordUser[i]!=wordUser[j]){ 
            return false; 
        } 
        j--; 
    } 
    return true; 
} 

console.log("La parola è polindroma: " + isPalindrome(wordUser));
