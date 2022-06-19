let numCards;
let gameCards = [];
let selectedCars = [];

let cards = ['bobrossparrot', 
'explodyparrot', 
'fiestaparrot',
'metalparrot',
'revertitparrot',
'tripletsparrot',
'unicornparrot']

function shuffle() { 
    return Math.random() - 0.5; 
}

function loadGame(){
    cards.sort(shuffle)
    numCards = prompt("Com quantas cartas quer jogar?")
    while (numCards%2 == 1 || (numCards <2 || numCards > 14)) {
        numCards = prompt("Escolha um número par entre 2 e 14")
    }

    for (let i = 0; i < numCards/2; i++){
        gameCards[i] = cards[i]
    }
    gameCards.push(...gameCards)
    gameCards.sort(shuffle)
    startGame(gameCards)
}

function startGame(arr) {
    let container = document.querySelector(".cards-container")
    for(let i=0; i<arr.length; i++){
        container.innerHTML  +=
        `<div class="card ${arr[i]}" onclick="flipCard(this)">
            <div class="card-inner">
                <div class="card-front">
                    <img class="parrot" src="/assets/front.png">
                </div>
                <div class="card-back">
                    <img class="parrot" src="/assets/${arr[i]}.gif">
                </div>
            </div>
        </div>`
    }
}

function flipCard(card) {
    let cardInner = card.querySelector(".card-inner")
    cardInner.classList.add("turn")

    if (selected) {
        // let all = document.querySelectorAll(".turn")
        // all[0].classList.remove("turn")
        // all[1].classList.remove("turn")
    }
}


loadGame()
