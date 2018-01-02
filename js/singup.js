$(document).ready(function() {
  // Declarando variables para seleccionar elementos del DOM
  var $flagSelect = $('li');
  var $phone = $('#inputPhone');
  var $next = $('#button-next');
  
  // Controlador de evento del elemento li
  $flagSelect.on('click', function() {
    // Variable que almacenara el valor del atributo data-code
    var $valueSelect = $(this).data('code');
    console.log($valueSelect);
    // Evalua si la condicion es cierta se ingresará el codigo Postal de acuerdo al pais
    if ($valueSelect === 'PER') {
      $('<img src="../assets/images/flags/per.png" class="img-country">').replaceAll($('#dropdownMenu1 :first-child'));
      $phone.val('51');
    } else if ($valueSelect === 'MEX') {
      $('<img src="../assets/images/flags/mex.png" class="img-country">').replaceAll($('#dropdownMenu1 :first-child'));
      $phone.val('52');
    } else if ($valueSelect === 'US') {
      $('<img src="../assets/images/flags/us.png" class="img-country">').replaceAll($('#dropdownMenu1 :first-child'));
      $phone.val('53');
    } else if ($valueSelect === 'BRA') {
      $('<img src="../assets/images/flags/brazil.png" class="img-country">').replaceAll($('#dropdownMenu1 :first-child'));
      $phone.val('50');
    }
  });

  // Controlador de evento del elemento input:phone
  $phone.on('input', function(event) {
    var $valueInput = $(this).val();
    // Evalua si la longitud del input es igual a 12 (10 digitos del telefóno + 2 codigo postal)
    if ($valueInput.length === 12) {
      // Habilita boton
      enabledButton();
    } else {
      // Deshabilita boton
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
    alert('Tu código es: LAB-' + code);
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
