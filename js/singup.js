$(document).ready(function() {
  // Declarando variables para seleccionar elementos del DOM
  var $flagSelect = $('#flags');
  var $phone = $('#inputPhone');
  var $next = $('#button-next');

  // Controlador de evento del elemento select
  $flagSelect.on('change', function(event) {
    // Variable que almacenara el valor del item seleccionado
    var $valueSelect = $(this).val();
    // Evalua si la condicion es cierta se ingresará el codigo Postal de acuerdo al pais
    if ($valueSelect === 'PER') {
      $phone.val('51');
    } else if ($valueSelect === 'MEX') {
      $phone.val('52');
    } else if ($valueSelect === 'EU') {
      $phone.val('53');
    } else if ($valueSelect === 'BRA') {
      $phone.val('50');
    }
  });
  // Controlador de evento del elemento input:phone
  $phone.on('input', function(event) {
    var $valueInput = $(this).val();
    /*  if (isNaN($valueInput)) {
      alert('El teléfono solo debe contener números'); 
      $(this).val('');
    } */
    // Evalua si la longitud del input es igual a 12 (10 digitos del telefóno + 2 codigo postal)
    if ($valueInput.length === 12) {
      //Habilita boton
      enabledButton();
    }
    else {
      //Deshabilita boton
      disabledButton();
    } 
  });
  // Controlador de evento del elemento button:next
  $next.on('click', function(event) {
    // Cancela la accion del evento
    event.preventDefault();
    // Declara variable que almacena el código aleatorio
    var code = codeGenerator();
    // Mensaje que contiene el código generado
    alert('LAB-'+ code);
    // Almacena los datos del código y valor del input
    localStorage.keyphone = code;
    localStorage.number = $phone.val();
    // Redirecciona a la siguiente página
    window.location.href = 'validation.html';
  });
  
  // Funcion que habilita boton
  function enabledButton() {
    $next.prop('disabled', false);
    $next.addClass('grad-btn');
  }
  // Funcion que deshabilita boton
  function disabledButton() {
    $next.prop('disabled', true);
  }
});
// Funcion que genera numero aleatorio
function codeGenerator() {
  var digiteOne = Math.floor(Math.random() * 9);
  var digiteTwo = Math.floor(Math.random() * 9);
  var digiteThree = Math.floor(Math.random() * 9);
  var randomNumber = '' + digiteOne + digiteTwo + digiteThree;
  return randomNumber;
}
