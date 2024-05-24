document.addEventListener("DOMContentLoaded", function(event) {
    let respuesta = confirm("¿Tienes más de 18 años?");
    if (respuesta == true) {
        // Permitir acceso a la página
        alert("Bienvenido a nuestra página.");
    } else {
        // Redirigir a buscar gatos en Google
        window.location.href = "https://www.google.com/search?q=gatos";
    }
});