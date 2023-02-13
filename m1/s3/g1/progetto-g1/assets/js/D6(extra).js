// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(n) {
    let arrContenitore = giveMeRandom(n)
    let sum = 0;
    for (let i = 0; i < arrContenitore.length; i++) {
        if (arrContenitore[i] > 5) {
            console.log(arrContenitore[i] + " è maggiore di 5");
            sum += arrContenitore[i];
        } else {
            console.log(arrContenitore[i] + " è minore o uguale a 5");
        }
    }
    return 'la loro somma è ' + sum;
}
console.log(checkArray(6));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

function shoppingCartTotal(shoppingCart) {
    let totale = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        totale += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return totale;
}


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

let shoppingCart = [];

function addToShoppingCart(nuovoOggetto) {
    shoppingCart.push(nuovoOggetto);
    return shoppingCart.length;
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart) {
    let prezzoMagg = 0;
    let oggettoMagg = {};

    for (let i = 0; i < shoppingCart.length; i++) {
        let questoPrezzo = shoppingCart[i].price * shoppingCart[i].quantity;
        if (questoPrezzo > prezzoMagg) {
            prezzoMagg = questoPrezzo;
            oggettoMagg = shoppingCart[i];
        }
    }

    return oggettoMagg;
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1];
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(n) {
    if (n >=0 && n <=9){
        let conto = 0;
        let numeroRandom;
    
        while (conto < 3) {
            numeroRandom = Math.floor(Math.random() * 10);
            console.log(numeroRandom);

            if (numeroRandom > n) {
                conto++;
            } else {
            conto = 0;
            }
        }
    console.log("Il numero casuale " + numeroRandom + " maggiore di " + n + " è stato generato 3 volte consecutive.");
    }
}

loopUntil(3);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(array) {
    let numeri = array.filter(function(elemento) {
        return typeof elemento === 'number';
    });
    let somma = numeri.reduce(function(a, b) {
        return a + b;
    });
    return somma / numeri.length;
}
console.log(average([2,6,8,4,'ciao',7,'no']))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
