$(document).ready(function() {
  // Declarando variables para seleccionar elementos del DOM
  $firstName = $('#inputFirstName');
  $lastName = $('#inputLastName');
  $email = $('#inputEmail');
  $checked = $('input[type="checkbox"]');
  $btnNextSign = $('#button-next-sign');

  // Declarando variables para validar campos del formulario, tipo de datos boolean e inicializamos las variables
  var validateEmail = false;
  var validateFirstName = false; 
  var validateLastName = false;
  var validateChecked = false; 

  // Declarando constante para validar campo email
  var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

  // Controlador de evento del elemento input:FirstName
  $firstName.on('input', function(event) {
    $valueName = $(this).val();
    if ($valueName === '') {
      /* $firstName.focus().after('<span class="msj-error">Ingrese un nombre</span>'); */
      // Caso contrario deshabilita el boton
      disabledButton();
    } else {
      // Modifica el valor de la variable y llama a la funcion habilita boton
      validateFirstName = true;
      enabledButton();
    }
  });

  // Controlador de evento del elemento input:LastName
  $lastName.on('input', function(event) {
    $valueName = $(this).val();
    // Evalua si input se encuentra vacio por medio de la longitud
    if ($valueName.length > 0) {
      // Modifica el valor de la variable y llama a la funcion habilita boton
      validateLastName = true;
      enabledButton();
    } else {
      disabledButton();
    }
  });

  // Controlador de evento del elemento input:Email
  $email.on('input', function() {
    /* console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val()); */
    // Evalua si se ingresaron los caracteres indicados en la constante
    if (REGEXEMAIL.test($(this).val())) {
      // Modifica el valor de la variable y llama a la funcion habilita boton
      validateEmail = true;
      enabledButton(); 
    } else {
      // Caso contrario deshabilita el boton
      disabledButton() ;
    }
  });

  // Controlador de evento del elemento checkbox
  $checked.on('click', function(event) {
    // Evalua si se activo el check 
    if (event.target.checked) {
      // Modifica el valor de la variable y llama a la funcion habilita boton
      validateChecked = true;
      enabledButton(); 
    } else {
      // Caso contrario deshabilita el boton
      disabledButton();
    }
  });

  // Controlador de evento del elemento button
  $btnNextSign.on('click',function() {
    window.location.href = 'register.html';
  });

  // Funcion que habilita boton
  function enabledButton() {
    // Evalua si las 4 variables son verdaderas
    if (validateFirstName && validateLastName && validateEmail && validateChecked) {
      // Habilita boton
      $btnNextSign.prop('disabled', false);
      // Agrega clase para estilo del boton
      $btnNextSign.addClass('grad-btn');
    }
  }

  // Funcion que deshabilita boton
  function disabledButton() {
    $btnNextSign.prop('disabled', true);
  }
});

