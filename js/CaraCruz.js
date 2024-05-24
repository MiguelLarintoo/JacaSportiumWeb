var totalBets = 0;
var totalWins = 0;
var totalLosses = 0;

function playGame(choice) {
    var bet = parseInt(document.getElementById('bet').value);
    if (isNaN(bet) || bet <= 0) {
        alert("Por favor, introduce una apuesta válida.");
        return;
    }

    var result = Math.random() < 0.5 ? 'cara' : 'cruz';
    var outcome = result === choice ? 'win' : 'lose';

    var resultDisplay = document.getElementById('result');
    var coinImage = document.getElementById('coinImage');

    coinImage.classList.add('spin');
    setTimeout(function () {
        coinImage.classList.remove('spin');
        if (result === 'cara') {
            coinImage.src = "../img/coin_cara.png"; // Imagen para "cara"
        } else {
            coinImage.src = "../img/coin_cruz.png"; // Imagen para "cruz"
        }

        if (outcome === 'win') {
            resultDisplay.innerHTML = "¡Has ganado! Has duplicado tu apuesta.";
            resultDisplay.style.color = "green";
            showConfetti(); // Mostrar confeti al ganar
            totalWins++;
        } else {
            resultDisplay.innerHTML = "¡Has perdido! Pierdes tu apuesta.";
            resultDisplay.style.color = "red";
            totalLosses++;
            updateBetSummary(bet, outcome); // Mostrar resumen de apuestas solo si se pierde
        }

        totalBets++;
    }, 2000);
}

function showConfetti() {
    const confettiContainer = document.querySelector(".confetti-container");
    confettiContainer.innerHTML = ""; // Limpiar confeti anterior si lo hay
    confettiContainer.style.display = "block"; // Mostrar contenedor de confeti

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en la pantalla
        confetti.style.backgroundColor = getRandomColor(); // Color aleatorio
        confetti.style.animationDelay = Math.random() * 4 + "s"; // Retraso aleatorio para la animación
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.style.display = "none"; // Ocultar contenedor de confeti después de un tiempo
    }, 7000); // Duración de la animación del confeti (en milisegundos)
}

function getRandomColor() {
    const colors = ['#ff0a0a', '#0aff0a', '#0a0aff', '#ff0aeb', '#0affeb', '#ffeb0a'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function updateBetSummary(bet, outcome) {
    const credits = document.getElementById('credits');
    const betSummary = document.getElementById('betSummary');

    credits.innerHTML = `Apuesta: ${bet}`;

    betSummary.innerHTML = `
        <p>Total de apuestas: ${totalBets}</p>
        <p>Total de victorias: ${totalWins}</p>
        <p>Total de derrotas: ${totalLosses}</p>
    `;
}

