/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

Number; //indica una variabile che contiene un valore numerico 
Boolean; //indica una variabile che può contenere due soli valori: true o false
String; //indica una variabile che contiene un singolo carattere o una sequenza finita di caratteri
Object;//indica una variabile che contiene tipi di dati ed altri elementi più complessi 
null; // segnala l'assenza intenzionale di un "oggetto", è diverso da 0 e nella logica booleana indica una condizione false 
undefined; //è una variabile non ha un valore assegnato o non definita

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = 'Simone';
console.log(nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12;
let b = 20;
let somma = a + b;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


nome = 'Sensini';
console.log(nome);

const NUM = 1;
//ABC = 2;     ERRORE: Uncaught TypeError: Assignment to constant variable.
console.log(NUM);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x = (4 - x); 
console.log(x); 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).*/


let name1 = 'john';
let name2 = 'John';

name1.toLowerCase() == name2.toLowerCase() ? alert('Errore i nomi inseriti sono uguali') : alert('I nomi sono stati inseriti correttamente');








