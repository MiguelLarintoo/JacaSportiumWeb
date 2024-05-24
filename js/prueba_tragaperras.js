document.addEventListener("DOMContentLoaded", () => {
    const spinButton = document.getElementById("spinButton");
    const wheel1 = document.getElementById("wheel1");
    const wheel2 = document.getElementById("wheel2");
    const wheel3 = document.getElementById("wheel3");
    const resultDiv = document.getElementById("result");
    const creditsDiv = document.getElementById("credits");
    const creditInput = document.getElementById("creditInput");
    const addCreditsButton = document.getElementById("addCreditsButton");
  
    const symbols = ["🍒", "🔔", "🍋", "🍉", "⭐", "🎰"]; // Símbolos para las ruedas
    let credits = 10;
  
    const spin = () => {
      if (credits > 0) {
        credits--; // Restar un crédito al girar
        creditsDiv.textContent = `Créditos: ${credits}`;
  
        const symbol1 = symbols[Math.floor(Math.random() * symbols.length)];
        const symbol2 = symbols[Math.floor(Math.random() * symbols.length)];
        const symbol3 = symbols[Math.floor(Math.random() * symbols.length)];
  
        wheel1.textContent = symbol1;
        wheel2.textContent = symbol2;
        wheel3.textContent = symbol3;
  
        // Aplicar clase para la animación de rotación
        wheel1.classList.add("wheel-spin");
        wheel2.classList.add("wheel-spin");
        wheel3.classList.add("wheel-spin");
  
        setTimeout(() => {
          wheel1.classList.remove("wheel-spin");
          wheel2.classList.remove("wheel-spin");
          wheel3.classList.remove("wheel-spin");
  
          if (symbol1 === symbol2 && symbol2 === symbol3) {
            credits += 10;
            resultDiv.textContent = `¡Ganaste! +10 créditos`;
            // Aumentar el tamaño del mensaje de "¡Ganaste! +10 créditos"
            resultDiv.style.fontSize = "36px";
  
            // Mostrar contenedor de confeti
            const confettiContainer = document.querySelector(
              ".confetti-container"
            );
            confettiContainer.innerHTML = ""; // Limpiar confeti anterior si lo hay
            confettiContainer.style.display = "block"; // Mostrar contenedor de confeti
  
            // Generar confeti
            for (let i = 0; i < 100; i++) {
              const confetti = document.createElement("div");
              confetti.classList.add("confetti");
              confetti.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en la pantalla
              confetti.style.backgroundColor = getRandomColor(); // Color aleatorio
              confetti.style.animationDelay = Math.random() * 6 + "s"; // Retraso aleatorio para la animación
              confettiContainer.appendChild(confetti);
            }
  
            // Ocultar contenedor de confeti después de un tiempo
            setTimeout(() => {
              confettiContainer.style.display = "none"; // Ocultar contenedor de confeti
            }, 6000); // Tiempo de duración de la animación de confeti (6 segundos)
          } else {
            resultDiv.textContent = "Sigue intentando";
            // Restablecer el tamaño del mensaje si no ganó
            resultDiv.style.fontSize = "24px";
          }
  
          creditsDiv.textContent = `Créditos: ${credits}`;
        }, 1000); // Ajusta el tiempo para que coincida con la duración de la animación CSS
      } else {
        resultDiv.textContent = "Sin créditos. Agrega más para girar.";
        // Restablecer el tamaño del mensaje si no hay créditos
        resultDiv.style.fontSize = "24px";
      }
    };
  
    // Función para obtener un color aleatorio en formato hexadecimal
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
  
    // Evento para girar
    spinButton.addEventListener("click", spin);
  
    // Evento para agregar créditos
    addCreditsButton.addEventListener("click", () => {
      const additionalCredits = parseInt(creditInput.value, 10);
      if (isNaN(additionalCredits) || additionalCredits <= 0) {
        resultDiv.textContent = "Ingresa un valor válido para agregar créditos.";
      } else {
        credits += additionalCredits;
        creditsDiv.textContent = `Créditos: ${credits}`;
        creditInput.value = ""; // Limpiar el campo
      }
    });
  });
  
  
