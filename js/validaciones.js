export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
      
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
};   


const tipoDeErrores = [
"valueMissing",
"typeMismatch",
"customError",
];


const mensajesDeError = {
    nombre: {
        valueMissing: "El campo 'Nombre' no puede estar vacío",
        customError: "El campo debe tener como máximo 50 caracteres"
    },
    email: {
        valueMissing: "El campo 'Correo' no puede estar vacío",
        typeMismatch: "El correo no es válido. Debe contener el caracter especial @ seguido de un dominio o proveedor seguido de un punto. Por ejemplo: contacto@cv.com"
    },
    asunto: {
        valueMissing: "Este campo 'Asunto' no puede estar vacío",
        customError: "El campo debe tener como máximo 50 caracteres"
    },
    mensaje: {
      valueMissing: "Este campo 'Asunto' no puede estar vacío",
      customError: "El campo debe tener como máximo 300 caracteres"
    }
};


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
};


/* Quizás la solucion al mensaje de error customizado sea esta "set custom validity" y no lo que estamos haciendo con objetos y arrays */
/* function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
      mensaje = "Debes tener al menos 18 años de edad";
    }
  
    input.setCustomValidity(mensaje);
  } */