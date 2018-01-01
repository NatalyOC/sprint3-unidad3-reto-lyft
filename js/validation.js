$(document).ready(function() {
  // Declarando variables para seleccionar elementos del DOM
  $code = $('#inputCode');
  $btnReset = $('#button-reset');
  $btnNext = $('#button-next-val');

  var validateCode = false;
  var newCode = '';
  
  console.log(localStorage.keyphone);
  $btnReset.on('click', function(event) {
    newCode = codeGenerator();
    alert('LAB-' + newCode);
    event.preventDefault();
  });

  $code.on('input', function() {
    if (($(this).val() === localStorage.keyphone) || ($(this).val() === newCode)) {
      enabledButton();
      validateCode = true;
    }
    else {
      $code.val = ' ';
    }
  });

  $btnNext.on('click', function(event) {
    
    if (validateCode) {
      window.location.href = 'signup.html';
    } else {
      disabledButton();
    }
  });
  // Funcion que habilita boton
  function enabledButton() {
    $btnNext.prop('disabled', false);
    $btnNext.addClass('grad-btn');
  }
  // Funcion que deshabilita boton
  function disabledButton() {
    $btnNext.prop('disabled', true);
  }
});