function validarFormulario() {
  var nombre = document.getElementById('Nombre').value;
  var correo = document.getElementById('Mail').value;
  var contrasena = document.getElementById('Contra').value;
  var dni = document.getElementById('Dni').value;
  var terminos = document.getElementById('terms').checked;

  var errores = [];

  // Validación del nombre
  if (nombre === '') {
    document.getElementById('errorNombre').innerHTML = 'Por favor, ingresa tu nombre.';
  } else {
    document.getElementById('errorNombre').innerHTML = '';
  }

  // Validación del correo con expresión regular
  var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo === '') {
    document.getElementById('errorCorreo').innerHTML = 'Por favor, ingresa tu correo electrónico.';
  } else if (!correoRegex.test(correo)) {
    document.getElementById('errorCorreo').innerHTML = 'Por favor, ingresa un correo electrónico válido.';
  } else {
    document.getElementById('errorCorreo').innerHTML = '';
  }

  // Validación de la contraseña (mínimo 8 caracteres, al menos una letra y un número)
  var contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (contrasena === '') {
    document.getElementById('errorContrasena').innerHTML = 'Por favor, ingresa tu contraseña.';
  } else if (!contrasenaRegex.test(contrasena)) {
    document.getElementById('errorContrasena').innerHTML = 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra y un número.';
  } else {
    document.getElementById('errorContrasena').innerHTML = '';
  }

  // Validación del DNI (asumiendo que debe ser numérico y tener entre 7 y 8 dígitos)
  var dniRegex = /^\d{7,8}$/;
  if (dni === '') {
    document.getElementById('errorDni').innerHTML = 'Por favor, ingresa tu DNI.';
  } else if (!dniRegex.test(dni)) {
    document.getElementById('errorDni').innerHTML = 'Por favor, ingresa un DNI válido (7 u 8 dígitos).';
  } else {
    document.getElementById('errorDni').innerHTML = '';
  }

  // Validación de aceptación de términos y condiciones
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
