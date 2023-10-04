//Indice de tareas - todas las tareas deben estar declaradas en este array
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

/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
