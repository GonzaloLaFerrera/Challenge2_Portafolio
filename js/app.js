import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});


/* const mensajeTextArea = document.querySelector(".contacto__mensaje");

function validacionMensaje(){ 
  if (mensajeTextArea.value=="" || mensajeTextArea.length <= 50 ){
    alert("Campo Mensaje es obligatorio y debe contener máximo 50 carateres") 
    mensajeTextArea.focus()
  }
}; */