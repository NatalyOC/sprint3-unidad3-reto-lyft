$(document).ready(function() {
  // Declarando variables para seleccionar elementos del DOM
  $firstName = $('#inputFirstName');
  $lastName = $('#inputLastName');
  $email = $('#inputEmail');
  $checked = $('input[type="checkbox"]');
  $btnNextSign = $('#button-next-sign');

  var validateEmail = false;
  var validateFirstName = false; 
  var validateLastName = false;
  var validateChecked = false; 

  var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  
  $firstName.on('input', function(event) {
    $valueName = $(this).val();
    if ($valueName === '') {
      $firstName.focus().after('<span class="msj-error">Ingrese un nombre</span>');
      disabledButton();
    } else {
      validateFirstName = true;
      enabledButton();
    }
  });
  $lastName.on('input', function(event) {
    $valueName = $(this).val();
    if ($valueName.length > 0) {
      validateLastName = true;
      enabledButton();
    } else {
      disabledButton();
    }
  });
  $email.on('input', function() {
    console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      enabledButton(); 
    } else {
      disabledButton() ;
    }
  });
  $checked.on('click', function(event) {
    if (event.target.checked) {
      validateChecked = true;
      enabledButton(); 
      // console.log(validateFirstName,validateLastName,validateEmail,validateChecked);
    } else {
      disabledButton();
    }
  });
  $btnNextSign.on('click',function() {
    window.location.href = 'register.html';
  });
  // Funcion que habilita boton
  function enabledButton() {
    if (validateFirstName && validateLastName && validateEmail && validateChecked) {
      $btnNextSign.prop('disabled', false);
      $btnNextSign.addClass('grad-btn');
    }
  }
  // Funcion que deshabilita boton
  function disabledButton() {
    $btnNextSign.prop('disabled', true);
  }
  // console.log(validateFirstName,validateLastName,validateEmail,validateChecked);
});

