document.addEventListener("DOMContentLoaded", function(event) {
    // Añadir eventos a los botones de aceptar y negar cookies
    document.getElementById('accept-cookies').addEventListener('click', function() {
        document.getElementById('cookie-popup').style.display = 'none'; // Ocultar el pop-up si se aceptan las cookies
    });

    document.getElementById('deny-cookies').addEventListener('click', function() {
        document.getElementById('cookie-popup').style.display = 'none'; // Ocultar el pop-up si se niegan las cookies
    });
});