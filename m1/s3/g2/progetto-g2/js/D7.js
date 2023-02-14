/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concat(stringa1, stringa2) {
  let inizio = stringa1.slice(0, 2);
  let fine = stringa2.slice(-3);
  let risultato = (inizio + fine).toUpperCase();
  console.log(risultato);
}

concat('calcolatrice', 'ricerca');

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */

function dispari() {
  let array = [];
  for (let i = 1; i <= 100; i+=2) {
    array.push(i);
  }
  return array;
}

console.log(dispari());

/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */

function multipli5() {
  let array = [];
  for (let i = 5; i <= 100; i+=5) {
    array.push(i);
  }
  return array;
}
  
console.log(multipli5());

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

function creaArrayCasuale() {
  let arrayCasuale = [];
  for (let i = 0; i < 10; i++) {
    arrayCasuale.push(Math.floor(Math.random() * 101));
  }
  return arrayCasuale;
}

console.log(creaArrayCasuale());

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

function filtraPari(arrayDiNumeri) {
    return arrayDiNumeri.filter(numero => numero % 2 === 0);
  }

  console.log(filtraPari([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

function sommaTotale(arrayDiNumeri) {
  return arrayDiNumeri.reduce((accumulatore, numero) => accumulatore += numero);
} 
console.log(sommaTotale([1, 2, 3, 4, 5]));

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

function incrementa1(arrayDiNumeri) {
  return arrayDiNumeri.map(numero => numero = numero + 1);
} 
console.log(incrementa1([1, 2, 3, 4, 5]));

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function sostituisci(arrayDiStringhe){
  return arrayDiStringhe.map(stringa => stringa = stringa.length);
}

console.log(sostituisci(['EPICODE', 'is', 'great']));

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

function eliminaPari(arrayDiNumeri) {
return arrayDiNumeri.filter(numero => numero % 2 !== 0)
}

console.log(eliminaPari([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

function creaArrayCasualeSenzaCopie() {
  let array = [];
  while (array.length < 10) {
    let numero = Math.floor(Math.random() * 11);
    if (!array.includes(numero)) {
      array.push(numero);
    }
  }
  return array;
}

console.log(creaArrayCasualeSenzaCopie());

/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

function inverti(array) {
  return array.reverse();
}

console.log(inverti([1, 3, 5]));

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function trovaFilmPiùVecchio(arrayDiOggetti) {
  let vecchio = [arrayDiOggetti[0]];
  for (let i = 1 ; i < arrayDiOggetti.length ; i++) {
    if (arrayDiOggetti[i].Year < vecchio[0].Year) {
      vecchio = [arrayDiOggetti[i]];
    } else if (arrayDiOggetti[i].Year === vecchio[0].Year) {
      vecchio.push(arrayDiOggetti[i]);
    }
  }
  return vecchio;
}

console.log(trovaFilmPiùVecchio(movies));

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function quantiFilm(arrayDiOggetti) {
  return arrayDiOggetti.length;
}

console.log(quantiFilm(movies));

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function titoliFilm(arrayDiOggetti) {
  let titoli = [];
  for (let i = 0 ; i < arrayDiOggetti.length ; i++) {
    titoli.push(arrayDiOggetti[i].Title);
  }
  return titoli;
}

console.log(titoliFilm(movies));

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function duemila(arrayDiOggetti){
  let filmDuemila = [];
  for (let i = 0 ; i < arrayDiOggetti.length ; i++){
    if (arrayDiOggetti[i].Year > 1999){
      filmDuemila.push(arrayDiOggetti[i]);
    }
  }
  return filmDuemila;
}

console.log(duemila(movies));

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function ottieniArray(parametroImdbID){
  let film = 0;
  for (let i = 0 ; i < movies.length ; i++) {
    if (movies[i].imdbID === parametroImdbID) {
      film = movies[i];
    }
  }
  return film;
}

console.log(ottieniArray('tt2395427'));

/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function sommaTotaleAnni(arrayDiOggetti) {
  let somma = 0;
  for(let i = 0 ; i < arrayDiOggetti.length ; i++){
    somma += parseInt(arrayDiOggetti[i].Year)
  } 
  return somma;
}

console.log(sommaTotaleAnni(movies));

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
