document.addEventListener('DOMContentLoaded', () => {
  const bettingButtons = document.querySelectorAll('.betting-options button');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-button');
  const calculateButtons = document.querySelectorAll('[id^="calculateButton"]');
  const betAmountInputs = document.querySelectorAll('[id^="betAmount"]');
  const resultDivs = document.querySelectorAll('[id^="result"]');
  const bettingOptions = document.querySelectorAll('[id^="bettingOption"]');
  const placeBetButtons = document.querySelectorAll('[id^="placeBetButton"]');
  const resumenButton = document.getElementById('resumenButton');
  const resumenModal = document.getElementById('resumenFutbolModal');
  const closeResumenModal = document.getElementById('closeResumenFutbolModal');
  const apuestasResumen = document.getElementById('apuestasFutbolResumen');
  const totalApostado = document.getElementById('totalApostadoFutbol');
  let bets = [];

  // Abre el modal al hacer clic en cualquier botón de apuesta
  bettingButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          const buttonText = button.textContent;
          const modalId = button.closest('.football-match').querySelector('.modal').id;
          const modal = document.getElementById(modalId);
          const bettingOption = modal.querySelector('[id^="bettingOption"]');
          bettingOption.textContent = `Apuesta en ${buttonText}`;
          modal.style.display = 'block';
      });
  });

  // Cierra el modal cuando se hace clic en el botón de cierre
  closeButtons.forEach(button => {
      button.addEventListener('click', () => {
          button.closest('.modal').style.display = 'none';
      });
  });

  // Calcula la ganancia basada en la apuesta y las probabilidades
  calculateButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          const betAmount = parseFloat(betAmountInputs[index].value);
          const oddsText = bettingOptions[index].textContent.split(' - ')[1];
          const odds = parseFloat(oddsText);

          if (isNaN(betAmount) || betAmount <= 0) {
              resultDivs[index].textContent = "Por favor, ingrese un monto válido.";
          } else {
              const winnings = betAmount * odds;
              resultDivs[index].textContent = `Si apuesta $${betAmount.toFixed(2)}, ganará $${winnings.toFixed(2)}.`;
          }
      });
  });

  // Realiza la apuesta y muestra el resumen
  placeBetButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          const betAmount = parseFloat(betAmountInputs[index].value);
          const oddsText = bettingOptions[index].textContent.split(' - ')[1];
          const odds = parseFloat(oddsText);

          if (isNaN(betAmount) || betAmount <= 0) {
              resultDivs[index].textContent = "Por favor, ingrese un monto válido.";
          } else {
              const winnings = betAmount * odds;
              bets.push({ option: bettingOptions[index].textContent, amount: betAmount, winnings: winnings });
              resultDivs[index].textContent = `Si apuesta $${betAmount.toFixed(2)}, ganará $${winnings.toFixed(2)}.`;
              button.closest('.modal').style.display = 'none';
          }
      });
  });

  // Función para mostrar el resumen de las apuestas
  function mostrarResumen() {
      let totalBet = 0;
      apuestasResumen.innerHTML = "";
      bets.forEach(bet => {
          totalBet += bet.amount;
          const apuesta = document.createElement("p");
          apuesta.innerText = `${bet.option}: $${bet.amount.toFixed(2)}`;
          apuestasResumen.appendChild(apuesta);
      });
      totalApostado.innerText = totalBet.toFixed(2);
      resumenModal.style.display = 'block';
  }

  // Asocia la función mostrarResumen al botón de resumen
  resumenButton.addEventListener('click', mostrarResumen);

  // Cierra el modal de resumen cuando se hace clic en el botón de cierre
  closeResumenModal.addEventListener('click', () => {
      resumenModal.style.display = 'none';
  });

  // Cierra el modal al hacer clic fuera del contenido
  window.addEventListener('click', (event) => {
      if (event.target === resumenModal) {
          resumenModal.style.display = 'none';
      }
      modals.forEach(modal => {
          if (event.target === modal) {
              modal.style.display = 'none';
          }
      });
  });
});


  
