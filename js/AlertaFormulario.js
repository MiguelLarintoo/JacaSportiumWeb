    function validarFormulario() {
        var nombre = document.getElementById("Nombre").value;
        var email = document.getElementById("Mail").value;
        var contrasenia = document.getElementById("Contra").value;
        var dni = document.getElementById("Dni").value;
        var dinero = document.getElementById("Dinero").value;

        // Validar que todos los campos estén llenos
        if (nombre == "" || email == "" || contrasenia == "" || dni == "" || dinero == "") {
            alert("Por favor, completa todos los campos del formulario.");
            return false; 
        }else{
        alert("El formulario ha sido enviado correctamente.");
        return true; 
        }
    }