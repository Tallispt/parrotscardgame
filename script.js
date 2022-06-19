let numCards;
let points;
let moves;
let gameCards = [];
let selectedCards = [];
let selectedInnerCards = [];
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
    points = 0;
    moves = 0;
    gameCards = [];
    
    numCards = prompt("Com quantas cartas quer jogar?")
    while (numCards%2 == 1 || (numCards <2 || numCards > 14)) {
        numCards = prompt("Escolha um número par entre 2 e 14")
    }
    cards.sort(shuffle)
    for (let i = 0; i < numCards/2; i++){
        gameCards[i] = cards[i]
    }
    gameCards.push(...gameCards)
    gameCards.sort(shuffle)
    startGame(gameCards)
}

function startGame(arr) {
    let container = document.querySelector(".cards-container");
    container.innerHTML = "";
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
    if(!card.classList.contains("selected")){
        card.classList.add("selected");
        selectedCards.push(card);
        let cardInner = card.querySelector(".card-inner");
        cardInner.classList.add("turn");
        selectedInnerCards.push(cardInner);
        if(selectedInnerCards.length == 2){
            moves++;
            compareCard();
        } 
    }
}

function compareCard(){
    if(selectedCards[0].classList[1] == selectedCards[1].classList[1]){
        points++;
        selectedCards = [];
        selectedInnerCards = [];
    } else {
        setTimeout(deselectCard, 1000);
    }
    didIWin()
}

function deselectCard(){
    for(let i = 0; i < 2; i++){
        selectedCards[i].classList.remove("selected");
        selectedInnerCards[i].classList.remove("turn");
    }
    selectedCards = [];
    selectedInnerCards = [];
}

function didIWin(){
    if(points == Number(numCards)/2) {
        alert(`Parabéns! Você ganhou em ${moves*2} jogadas.`)
        let value = prompt("Você quer jogar novamente? (Digite sim ou não)")
        if(value == "sim") {
            loadGame();
        }
    }
}

loadGame();

