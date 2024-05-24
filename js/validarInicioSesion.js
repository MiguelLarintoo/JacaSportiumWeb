function validarFormulario() {
    var usuario = document.getElementById('Nombre').value;
    var contrasena = document.getElementById('Contra').value;
    var terminos = document.getElementById('terms').checked;

    var errores = [];

    if (usuario === '') {
      document.getElementById('errorNombre').innerHTML = 'Por favor, ingresa tu usuario.';
    } else {
      document.getElementById('errorNombre').innerHTML = '';
    }

    if (contrasena === '') {
      document.getElementById('errorContrasena').innerHTML = 'Por favor, ingresa tu contraseña.';
    } else {
      document.getElementById('errorContrasena').innerHTML = '';
    }

    if (!terminos) {
      errores.push('Por favor, acepta los términos y condiciones.');
    }

    if (errores.length > 0) {
      var mensajeError = '';
      for (var i = 0; i < errores.length; i++) {
        mensajeError += '<p>' + errores[i] + '</p>';
      }
      document.getElementById('errores').innerHTML = mensajeError;
      return false;
    }

    return true;
}
