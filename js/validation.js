$(document).ready(function() {
  // Declarando variables para seleccionar elementos del DOM
  $code = $('#inputCode');
  $btnReset = $('#button-reset');
  $btnNext = $('#button-next-val');
  // Declarando variables para validar codigo, tipo de datos boolean e inicializamos las variables
  var validateCode = false;
  var newCode = '';
  
  // console.log(localStorage.keyphone);

  // Controlador de evento del elemento button
  $btnReset.on('click', function(event) {
    newCode = codeGenerator();
    alert('LAB-' + newCode);
    event.preventDefault();
  });
  // Controlador de evento del elemento input codigo
  $code.on('input', function() {
    // Evalua si el dato ingresado es igual codigo o nuevo codigo
    if (($(this).val() === localStorage.keyphone) || ($(this).val() === newCode)) {
      // Modifica el valor de la variable y llama a la funcion habilita boton
      enabledButton();
      validateCode = true;
    }
    else {
      // Limpia el input
      $code.val = ' ';
    }
  });
  // Controlador de evento del elemento button
  $btnNext.on('click', function(event) {
    // Evalua si es verdadero 
    if (validateCode) {
      // Redirecciona a la siguiente pagina
      window.location.href = 'signup.html';
    } else {
      // Deshabilita boton
      disabledButton();
    }
  });

  // Funcion que habilita boton y agrega clase
  function enabledButton() {
    $btnNext.prop('disabled', false);
    $btnNext.addClass('grad-btn');
  }
  // Funcion que deshabilita boton
  function disabledButton() {
    $btnNext.prop('disabled', true);
  }
});