const cardImages = [
    { src: "../img/BlackJack_2.png", value: 2 },
    { src: "../img/BlackJack_3.png", value: 3 },
    { src: "../img/BlackJack_4.png", value: 4 },
    { src: "../img/BlackJack_5.png", value: 5 },
    { src: "../img/BlackJack_6.png", value: 6 },
    { src: "../img/BlackJack_7.png", value: 7 },
    { src: "../img/BlackJack_8.png", value: 8 },
    { src: "../img/BlackJack_9.png", value: 9 },
    { src: "../img/BlackJack_10.png", value: 10 },
    { src: "../img/BlackJack_J.png", value: 10 },
    { src: "../img/BlackJack_Q.png", value: 10 },
    { src: "../img/BlackJack_K.png", value: 10 },
    { src: "../img/BlackJack_A.png", value: 11 }
];

let deck = [];
let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;

function createDeck() {
    deck = [];
    for (let card of cardImages) {
        deck.push({ ...card });
        deck.push({ ...card });
        deck.push({ ...card });
        deck.push({ ...card });
    }
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCard(hand) {
    const card = deck.pop();
    hand.push(card);
    return card;
}

function calculateScore(hand) {
    let score = 0;
    let aces = 0;
    for (let card of hand) {
        score += card.value;
        if (card.value === 11) aces++;
    }
    while (score > 21 && aces) {
        score -= 10;
        aces--;
    }
    return score;
}

function displayHand(hand, elementId) {
    const handDiv = document.getElementById(elementId);
    handDiv.innerHTML = '';
    for (let card of hand) {
        const cardImg = document.createElement('img');
        cardImg.src = card.src;
        cardImg.alt = 'Carta';
        cardImg.classList.add('card-image');
        handDiv.appendChild(cardImg);
    }
}

function updateScores() {
    playerScore = calculateScore(playerHand);
    dealerScore = calculateScore(dealerHand);
    document.getElementById('player-score').textContent = `Puntuación Total: ${playerScore}`;
    document.getElementById('dealer-score').textContent = `Puntuación: ${dealerScore}`;
}

function checkForBusts() {
    if (playerScore > 21) {
        endGame('¡El jugador se pasa! ¡Gana el crupier!');
    } else if (dealerScore > 21) {
        endGame('¡El crupier se pasa! ¡Gana el jugador!');
    }
}

function endGame(message) {
    document.getElementById('messages').textContent = message;
    document.getElementById('btn-hit').disabled = true;
    document.getElementById('btn-stand').disabled = true;
}

function dealerTurn() {
    while (dealerScore < 17) {
        dealCard(dealerHand);
        dealerScore = calculateScore(dealerHand);
        displayHand(dealerHand, 'dealer-hand');
    }
    updateScores();
    if (dealerScore > 21 || dealerScore < playerScore) {
        endGame('¡Gana el jugador!');
    } else if (dealerScore === playerScore) {
        endGame('¡Es un empate!');
    } else {
        endGame('¡Gana el crupier!');
    }
}

document.getElementById('btn-new-game').addEventListener('click', () => {
    playerHand = [];
    dealerHand = [];
    createDeck();
    shuffleDeck();

    dealCard(playerHand);
    dealCard(playerHand);
    dealCard(dealerHand);
    dealCard(dealerHand);

    displayHand(playerHand, 'player-hand');
    displayHand(dealerHand, 'dealer-hand');
    updateScores();

    document.getElementById('messages').textContent = '';
    document.getElementById('btn-hit').disabled = false;
    document.getElementById('btn-stand').disabled = false;
});

document.getElementById('btn-hit').addEventListener('click', () => {
    dealCard(playerHand);
    displayHand(playerHand, 'player-hand');
    updateScores();
    checkForBusts();
});

document.getElementById('btn-stand').addEventListener('click', () => {
    dealerTurn();
});
