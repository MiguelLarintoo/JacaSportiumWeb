document.addEventListener('DOMContentLoaded', function() {
    const closeFirstBet = document.getElementById('closeFirstBet');
    const closeNecro = document.getElementById('closeNecro');
    const bettingButtons = document.querySelectorAll('.betting-options button');
    const confirmarApuesta = document.getElementById('confirmar-apuesta');
    const verResumenNecroporra = document.getElementById('ver-resumen-necroporra');
    const summary = document.getElementById('resumen-necroporra');
    const modalButtons = document.querySelectorAll('.modal button');
    const closeModalButtons = document.querySelectorAll('.close-button');
    let apostadores = [];
    let buttonsClicked = 0;
    let selectedBet = '';

    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    function disableButton(button) {
        button.disabled = true;
    }

    function enableButton(button) {
        button.disabled = false;
    }

    function checkButtonsAvailability() {
        return buttonsClicked >= 3;
    }

    bettingButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (!checkButtonsAvailability()) {
                openModal('betModal' + button.getAttribute('data-modal'));
                selectedBet = button.innerText;
                document.getElementById('bettingOption' + button.getAttribute('data-modal')).innerText = `Opción seleccionada: ${selectedBet}`;
            }
        });
    });

    modalButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const modalId = button.parentNode.parentNode.id;
            const modalType = modalId.substr(-1); // Obtener el número del modal
            const betAmount = parseFloat(document.getElementById('betAmount' + modalType).value);

            if (button.id === 'calculateButton' + modalType) {
                const odds = selectedBet.includes('Sí') ? 1.25 : 8.50;
                if (!isNaN(betAmount)) {
                    const potentialWinnings = betAmount * odds;
                    document.getElementById('result' + modalType).innerText = `Ganancia potencial: €${potentialWinnings.toFixed(2)}`;
                } else {
                    document.getElementById('result' + modalType).innerText = 'Por favor ingrese una cantidad válida.';
                }
            } else if (button.id === 'placeBetButton' + modalType) {
                if (!isNaN(betAmount) && betAmount > 0) {
                    alert(`Apuesta realizada:\nOpción: ${selectedBet}\nCantidad: €${betAmount.toFixed(2)}`);
                    closeModal('betModal' + modalType);
                } else {
                    alert('Por favor ingrese una cantidad válida para apostar.');
                }
            }
        });
    });

    closeModalButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            closeModal(button.parentNode.parentNode.id);
        });
    });

    document.querySelectorAll('.persona-1, .persona-2, .persona-3').forEach(function(button) {
        button.addEventListener('click', function() {
            if (!checkButtonsAvailability()) {
                openModal('necroModal');
                disableButton(button);
                buttonsClicked++;
            }
        });
    });

    confirmarApuesta.addEventListener('click', function() {
        const nombrePerson = document.getElementById('nombre-persona').value.trim();
        if (nombrePerson && !checkButtonsAvailability()) {
            closeModal('necroModal');
            addApostador(nombrePerson);
        }
    });

    function addApostador(nombre) {
        apostadores.push(nombre);
    }

    function showSummary() {
        if (checkButtonsAvailability()) {
            let resumen = '';
            if (apostadores.length > 0) {
                apostadores.forEach((nombre, index) => {
                    resumen += `${index + 1}. ${nombre}<br>`;
                });
            } else {
                resumen = "No hay apostadores.";
            }
            summary.innerHTML = resumen;
        }
    }

    verResumenNecroporra.addEventListener('click', function() {
        showSummary();
    });

    showSummary();

    // Activar botones de las apuestas de Pedro Sánchez y la Tercera Guerra Mundial
    document.getElementById('yesButton1').addEventListener('click', function() {
        if (!checkButtonsAvailability()) {
            openModal('betModal1');
            selectedBet = 'Sí - 1.25';
            document.getElementById('bettingOption1').innerText = `Opción seleccionada: ${selectedBet}`;
        }
    });

    document.getElementById('noButton1').addEventListener('click', function() {
        if (!checkButtonsAvailability()) {
            openModal('betModal1');
            selectedBet = 'No - 8.50';
            document.getElementById('bettingOption1').innerText = `Opción seleccionada: ${selectedBet}`;
        }
    });

    document.getElementById('yesButton2').addEventListener('click', function() {
        if (!checkButtonsAvailability()) {
            openModal('betModal2');
            selectedBet = 'Sí - 25.50';
            document.getElementById('bettingOption2').innerText = `Opción seleccionada: ${selectedBet}`;
        }
    });

    document.getElementById('noButton2').addEventListener('click', function() {
        if (!checkButtonsAvailability()) {
            openModal('betModal2');
            selectedBet = 'No - 2.23';
            document.getElementById('bettingOption2').innerText = `Opción seleccionada: ${selectedBet}`;
        }
    });
});














