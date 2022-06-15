let numCards;
let body = document.querySelector("body")

function askNumCards(){
    numCards = prompt("Com quantas cartas quer jogar?")
    while (numCards%2 == 1 || (numCards <2 || numCards > 14))
    numCards = prompt("Escolha um número par entre 2 e 14")
    startGame()
}

function startGame() {
    let container = document.querySelector(".cards-container")
    for(let i=1; i<=numCards; i++){
        container.innerHTML = container.innerHTML +
        `<div class="card${i} card" onclick="flipCard(this)">
        <div class="card-inner">
            <div class="card-front">
                <img class="parrot" src="/assets/front.png">
            </div>
            <div class="card-back">
                <img class="parrot" src="/assets/bobrossparrot.gif">
            </div>
        </div>
    </div>`
    }
}

function flipCard(card) {
    const cardInner = card.querySelector(".card-inner")
    cardInner.classList.toggle("turn")
}
askNumCards()
