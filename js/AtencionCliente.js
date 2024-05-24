function validarFormulario() {

    // BUSCAMOS Y GUARDAMOS LA INFORMACIÓN MEDIANTE DOM
    //Creamos una constante, luego hacemos referencia a document.getElementByid ponermos el nombre del campo y el valor
    const nombre = document.getElementById("Nombre").value;
    const Email = document.getElementById("Mail").value;
    const Contrasenia = document.getElementById("Contra").value;
    const dni = document.getElementById("Dni").value;
    const Cuadro = document.getElementById("CuadrodeTexto").value;




    //CREAMOS UN ARRAY PARA GUARDAR LOS ERORRES
    let errores = [];

    //2º COMPROBACIONES 

    //1.ESCRIBIMOS NOMBRE 
    if (nombre === "") {
        errores.push("Por favor, ingrese su nombre.");
    }

    //2. Email tiene que contener @
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
        errores.push("Por favor, ingresa una dirección de correo electrónico válida.");
    }

    //3. Contraseña contiene más de 8 caracteres
    if (Contrasenia < 8) {
        errores.push("por favor, ingrese una contraseña correcta con más de 8 caracteres")
    }


    //4. Verificar si el DNI tiene 8 dígitos
    if (!/^\d{8}[A-Za-z]$/.test(dni)) {
        errores.push("Por favor, ingresa un DNI válido de 8 dígitos seguidos de una letra.");
    }

    //6.Verificamos que la casilla de Cuadro de texto nunca esté vacía
    if (Cuadro === "") {
        errores.push('Rellena el cuadro de texto por favor.');
    }




    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    } else {
        alert("El formulario se ha enviado correctamente.");
        return true;
    }

    }

    function mostrarErrores(errores) {

        let divErrores = document.getElementById("errores");
        divErrores.innerHTML = "";
        let ul = document.createElement("ul");
        divErrores.style.display = "block";
        errores.forEach(function (error) {

            let li = document.createElement("li");
            li.textContent = error;

            ul.appendChild(li)

        });
        divErrores.appendChild(ul);
    }
