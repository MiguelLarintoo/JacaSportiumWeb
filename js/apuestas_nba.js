document.addEventListener('DOMContentLoaded', () => {
    const bettingButtons = document.querySelectorAll('.betting-options button');
    const modal = document.getElementById('betModal');
    const closeModal = document.getElementById('closeModal');
    const calculateButton = document.getElementById('calculateButton');
    const betAmountInput = document.getElementById('betAmount');
    const resultDiv = document.getElementById('result');
    const bettingOption = document.getElementById('bettingOption');
    const placeBetButton = document.getElementById('placeBetButton');
    const betSummaryDiv = document.getElementById('betSummary');
    let bets = [];

    // Abre el modal al hacer clic en cualquier botón de apuesta
    bettingButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            bettingOption.textContent = `Apuesta en ${buttonText}`;
            modal.style.display = 'block';
        });
    });

    // Cierra el modal cuando se hace clic en el botón de cierre
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Calcula la ganancia basada en la apuesta y las probabilidades
    calculateButton.addEventListener('click', () => {
        const betAmount = parseFloat(betAmountInput.value);
        const oddsText = bettingOption.textContent.split(' - ')[1];
        const odds = parseFloat(oddsText);

        if (isNaN(betAmount) || betAmount <= 0) {
            resultDiv.textContent = "Por favor, ingrese un monto válido.";
        } else {
            const winnings = betAmount * odds;
            resultDiv.textContent = `Si apuesta $${betAmount.toFixed(2)}, ganará $${winnings.toFixed(2)}.`;
        }
    });

    // Realiza la apuesta y muestra el resumen
    placeBetButton.addEventListener('click', () => {
        const betAmount = parseFloat(betAmountInput.value);
        const oddsText = bettingOption.textContent.split(' - ')[1];
        const odds = parseFloat(oddsText);

        if (isNaN(betAmount) || betAmount <= 0) {
            resultDiv.textContent = "Por favor, ingrese un monto válido.";
        } else {
            const winnings = betAmount * odds;
            resultDiv.textContent = `Si apuesta $${betAmount.toFixed(2)}, ganará $${winnings.toFixed(2)}.`;
            bets.push({ option: bettingOption.textContent, amount: betAmount, winnings: winnings });
            modal.style.display = 'none';
        }
    });

    // Función para mostrar el resumen de las apuestas
    function mostrarResumen() {
        var modal = document.getElementById("resumenModal");
        var span = document.getElementById("closeResumenModal");

        // Calcular el total apostado
        var totalApostado = 0;
        bets.forEach(function (bet) {
            totalApostado += bet.amount;
        });
        document.getElementById("totalApostado").innerText = totalApostado.toFixed(2);

        // Mostrar el modal
        modal.style.display = "block";

        // Cerrar el modal al hacer clic en la 'x'
        span.onclick = function() {
            modal.style.display = "none";
        };

        // Cerrar el modal al hacer clic fuera del contenido
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

        // Mostrar las apuestas en el resumen
        var apuestasResumen = document.getElementById("apuestasResumen");
        apuestasResumen.innerHTML = "";
        bets.forEach(function (bet, index) {
            var apuesta = document.createElement("p");
            apuesta.innerText = `${bet.option}: $${bet.amount.toFixed(2)}`;
            apuestasResumen.appendChild(apuesta);
        });
    }

    // Asociar la función mostrarResumen al botón
    document.getElementById("resumenButton").addEventListener("click", mostrarResumen);
});





