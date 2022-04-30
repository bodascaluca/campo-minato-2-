// **Consegna**
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// ****
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// 1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// **2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// ****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
// **Consigli del giorno:** :party_wizard:
// ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


//-1 Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    //I numeri nella lista delle bombe non possono essere duplicati.

let points = 0;
const orderNumbers = theNumbers(1, 100);
const bombs = theBombs(1, 100, 16);
const gridContainer = document.querySelector('.grid-container');
const start = document.querySelector('#start').addEventListener('click', function() {
    startGame();
});

console.log(bombs);

function startGame() {
    // 2. Genero le card 
    generateCards(orderNumbers);
}

//Generare 100 numeri
function theBombs(min, max, limit) {

    let numbers = [];
    for (let i = 1 ; i <= limit; i++) {
        const random = Math.floor(Math.random() * (max - min + 1) ) + min;
        numbers.push(random); 
    }

    return numbers;
}

function theNumbers(min, max) {

    let numbers = [];
    for (let i = 1 ; i <= 100; i++) {
        numbers.push(i); 
    }

    return numbers;
}

//Generare 100 numeri
function generateCards(quantityCards) {
    for (let i = 0; i < quantityCards.length; i++ ) {
        let card = document.createElement("div");
        card.classList.add("grid-item");
        card.innerHTML = `<span>${quantityCards[i]}<span>`;

        card.addEventListener('click', function() {
            console.log(i);
            let index = i + 1;
            if (bombs.includes(index)) {
                card.classList.add('bomb');
                alert('Hai perso, punteggio di ' + points);
            } else {
                card.classList.add('click');
                points++;
            }
        });

        gridContainer.append(card);
    }
}

