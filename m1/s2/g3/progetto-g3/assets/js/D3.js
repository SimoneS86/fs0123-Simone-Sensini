/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function piùGrande(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num = 7;

if (num !== 5) {
  console.log(num + " è diverso da 5");
} else {
  console.log(num + " è uguale a 5");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num2 = 10;

if (num2 % 5 === 0) {
  console.log(num2 + " è perfettamente divisibile per 5");
} else {
  console.log(num2 + " non è perfettamente divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero1 = 5;
let numero2 = 3;

if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8 || numero2 - numero1 === 8) {
  console.log("Vero");
} else {
  console.log("Falso");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
let costi = 0;

if (totalShoppingCart <= 50) {
  costi = 10;
}

let totale = totalShoppingCart + costi;

console.log("Il totale del carrello è di: " + totalShoppingCart);
console.log("Il costo di spedizione è di: " + costi);
console.log("Il costo totale addebitato all'utente è di: " + totale);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 60;
let costi2 = 0;
let sconti = 0.2;

if (totalShoppingCart2 <= 50) {
  costi2 = 10;
}

let totale2 = (totalShoppingCart2 - totalShoppingCart2 * sconti) + costi2;

console.log("Il totale del carrello è di: " + totalShoppingCart2);
console.log("Lo sconto è di: " + totalShoppingCart2 * sconti);
console.log("Il costo di spedizione è di: " + costi2);
console.log("Il costo totale addebitato all'utente è di: " + totale2);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let xnum1 = 10;
let xnum2 = 30;
let xnum3 = 20;

if (xnum1 >= xnum2 && xnum1 >= xnum3) {
  if(xnum2 >= xnum3) {
    console.log(xnum1, xnum2, xnum3)
  }else {
  console.log(xnum1, xnum3, xnum2)
  }
} else if (xnum2 >= xnum1 && xnum2 >= xnum3) {
  if (xnum1 >= xnum2) {
    console.log(xnum2, xnum1, xnum3)
  }else {
    console.log(xnum2, xnum3, xnum1)
  }
} else if (xnum3 >= xnum1 && xnum3 >= xnum2) {
  if (xnum1 >= xnum2) {
    console.log(xnum3, xnum1, xnum2)
  }else {
    console.log(xnum3, xnum2, xnum1)
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let val = "5";

if (typeof val === "number") {
  console.log("Il valore fornito è un numero");
} else {
  console.log("Il valore fornito non è un numero");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let a = 7;

if (a % 2 === 0) {
  console.log(a + " è pari");
} else {
  console.log(a + " è dispari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

  let vul = 7
  if (vul < 10) {
      console.log("Meno di 10");
    } else if (vul < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
  */


    let vul = 7
    if (vul < 10 && vul >= 5) {
        console.log("Meno di 10");
      } else if (vul < 5) {
        console.log("Meno di 5");
      } else {
        console.log("Uguale a 10 o maggiore");
      }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


me.city = 'Toronto';

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills.pop

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = [];

for (let i = 1; i <= 10; i++) {
  array.push(i);
}

console.log(array);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[array.length - 1] = 100;
