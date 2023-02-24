const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];
let indexScelta = 0;
let scelta = [];
let rispEsatta = [];

let punteggio = {
    corrette: 0,
    sbagliate: 0,
}

let random = questions
random = random.sort(() => Math.random() - 0.5);

let start = document.querySelector('.bottone');
let cont = document.querySelector('#container');
let spunta = document.querySelector('.css_checkbox');


function checked() {
    spunta.addEventListener('click', checked);
    if (spunta.checked == true) {



        start.addEventListener('click', () => {

            newQuestion(random[indice]);
            start.style.display = 'none';
            cont.style.display = 'none';

        })
    }
}
checked()



let indice = 0;

function newQuestion(questionObj) {

    let target = document.querySelector('#target');
    let html = document.querySelector('#template .slide').cloneNode(true)
    target.innerHTML = '';

    //seleziono gli elementi
    let questionDOM = html.querySelector('.question')
    let answersDOM = html.querySelector('.answers')
    let contoDOM = html.querySelector('.conteggio')

    //inserisco contenuto
    questionDOM.textContent = questionObj.question
    let rispTot = []
    for (let elem of questionObj.incorrect_answers) {
        rispTot.push(elem)
    }

    rispTot.push(questionObj.correct_answer);
    rispTot.sort(() => Math.random() - 0.5);

    for (let risp of rispTot) {
        let optionClone = html.querySelector('.answers .option').cloneNode()
        optionClone.textContent = risp;

        answersDOM.append(optionClone);
    }

    contoDOM.textContent = "domanda " + ((punteggio.corrette + punteggio.sbagliate) + 1) + " di 10"
    html.querySelector('.answers .option').remove()//rimuovo la prima riga
    target.append(html)
    console.log(punteggio)

}

function calcolaPunteggio(obj) {
    let str = obj.textContent

    scelta.push(str)
    rispEsatta.push(random[indice].correct_answer)

    if (str == random[indice].correct_answer) {
        punteggio.corrette++
    }

    for (let answ of random[indice].incorrect_answers) {
        if (str == answ) {
            punteggio.sbagliate++
        }
    }

    indice++

    if (indice < 10) {
        newQuestion(random[indice])
    }
    else {
        risultati()
    }
}

function risultati() {
    let target = document.querySelector('#target');
    target.textContent = '';

    let html = document.querySelector('#templateResult .prova').cloneNode(true)
    let correctDOM = html.querySelector('.correct')
    let primoFratelloCorrect = correctDOM.nextElementSibling;
    let incorrectDOM = html.querySelector('.incorrect')
    let primoFratelloIncorrect = incorrectDOM.nextElementSibling;
    let contenutoDOM = html.querySelector('#punt')

    target.append(html)

    correctDOM.textContent = punteggio.corrette + "0%"
    primoFratelloCorrect.textContent += punteggio.corrette + "/10 domande"
    incorrectDOM.textContent = punteggio.sbagliate + "0%"
    primoFratelloIncorrect.textContent += punteggio.sbagliate + "/10 domande"
    
    if (punteggio.corrette >= 6) {
        contenutoDOM.textContent = "punteggio " + correctDOM.textContent + ". Congratulazioni, hai superato l'esame. Ti invieremo un certificato in pochi minuti. Controlla la tua email (incluse promozioni e cartella spam) "
    } else {
        contenutoDOM.textContent = "punteggio " + correctDOM.textContent + ". Mi dispiace dovrai ripetere l'esame."
    }
}

function valutaci() {
    let target = document.querySelector('#target');
    target.textContent = '';
    let html = document.querySelector('#templateRate .todo').cloneNode(true)
    target.append(html)
    addStarEvents();
}

function informazioni() {
    let target = document.querySelector('#target');
    target.textContent = '';
    let html = document.querySelector('#templateRecap .page').cloneNode(true)

    for (let i = 0; i < 10; i++) {
        let row = html.querySelector('.riga').cloneNode()

        let optionCella1 = html.querySelector(".riga .cella1").cloneNode()
        optionCella1.textContent = questions[indexScelta].question
        row.append(optionCella1)


        let optionCella2 = html.querySelector(".riga .cella2").cloneNode()
        optionCella2.textContent = questions[indexScelta].correct_answer
        row.append(optionCella2)

        let optionCella3 = html.querySelector(".riga .cella3").cloneNode()
        optionCella3.textContent = scelta[indexScelta]
        row.append(optionCella3)

        html.append(row)

        indexScelta++
    }
    html.querySelector('.riga').remove()//rimuovo la prima option
    target.append(html)
}


function addStarEvents() {
    let stelline = document.querySelectorAll(".stellina");
    let clickedStarIndex;

    stelline.forEach(function (stellina, index) {
        stellina.addEventListener("mouseover", function () {
            stelline.forEach((s, i) => s.style.opacity = i <= index ? "1" : "0.2");
        });

        stellina.addEventListener("mouseout", function () {
            stelline.forEach((s, i) => s.style.opacity = i <= clickedStarIndex ? "1" : "0.2");
        });

        stellina.addEventListener("click", function () {
            clickedStarIndex = index;
            stelline.forEach((s, i) => s.style.opacity = i <= index ? "1" : "0.2");
        });
    });
}