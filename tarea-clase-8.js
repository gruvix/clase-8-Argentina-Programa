const $botones = document.querySelectorAll(".botones")
for(let i = 0; i< $botones.length; i++){
  //agrega la funcion de la tarea de cada boton, de esta manera se pueden agregar X tareas y botones sin tener que inicializar cada uno
  $botones[i].addEventListener("click", function() {habilitarTarea(i+1)}) 
}

//Funcion Habilitar tarea
function habilitarTarea(numeroBoton){
  console.log('numero boton == '+numeroBoton)
  window.location = `tarea${numeroBoton}.html`

}
/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias.

TIP: Las edades no pueden tener decimales.
*/
