document.addEventListener('DOMContentLoaded', () => {
    const bettingButtons = document.querySelectorAll('.betting-options button');
    const modal = document.getElementById('betModal');
    const closeModal = document.getElementById('closeModal');
    const calculateButton = document.getElementById('calculateButton');
    const betAmountInput = document.getElementById('betAmount');
    const resultDiv = document.getElementById('result');
    const bettingOption = document.getElementById('bettingOption');
    const placeBetButton = document.getElementById('placeBetButton');
    const resumenButton = document.getElementById('resumenButton');
    const resumenModal = document.getElementById('resumenModal');
    const closeResumenModal = document.getElementById('closeResumenModal');
    const totalApostadoSpan = document.getElementById('totalApostado');
    const apuestasResumenDiv = document.getElementById('apuestasResumen');
    let bets = [];
  
    // Muestra el modal al hacer clic en un botón de apuesta
    bettingButtons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonText = button.textContent;
        bettingOption.textContent = `Apuesta en ${buttonText}`;
        modal.style.display = 'block'; // Muestra el modal
      });
    });
  
    // Cierra el modal
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none'; // Oculta el modal
    });
  
    // Calcula la ganancia
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
  
    // Muestra el resumen de las apuestas
    resumenButton.addEventListener('click', () => {
      mostrarResumen();
    });
  
    // Función para mostrar el resumen de las apuestas
    function mostrarResumen() {
      // Calcular el total apostado
      let totalApostado = 0;
      bets.forEach(function (bet) {
        totalApostado += bet.amount;
      });
      totalApostadoSpan.innerText = totalApostado.toFixed(2);
  
      // Mostrar el modal
      resumenModal.style.display = "block";
      
      // Cerrar el modal al hacer clic en la 'x'
      closeResumenModal.onclick = function() {
        resumenModal.style.display = "none";
      };
  
      // Cerrar el modal al hacer clic fuera del contenido
      window.onclick = function(event) {
        if (event.target == resumenModal) {
          resumenModal.style.display = "none";
        }
      };
  
      // Mostrar las apuestas en el resumen
      apuestasResumenDiv.innerHTML = "";
      bets.forEach(function (bet, index) {
        const apuesta = document.createElement("p");
        apuesta.innerText = `${bet.option}: $${bet.amount.toFixed(2)}`;
        apuestasResumenDiv.appendChild(apuesta);
      });
    }
  });
  