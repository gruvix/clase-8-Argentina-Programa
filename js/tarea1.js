
document.querySelector("#siguiente").addEventListener("click", function () {
    let resultado = validarInputCantidad(Number(document.querySelector("#cantidad-personas").value))
    if(resultado != ""){
        alert(resultado)
        return
    }
    agregarInputs();
})

document.querySelector("#calcular").addEventListener("click", function () {
    if(validarInputsEdades(document.querySelectorAll(".persona"))) {
        datos = calcularValores()
        actualizarValores(datos)
}
})

document.querySelector("#reiniciar").addEventListener("click", function () {reiniciarInputs()})

let datos = {
    maximo: 0,
    minimo: 0,
    promedio: 0
}

function validarInputCantidad(input){
    if(input < 1){
        return "el valor debe ser igual o mayor a 1"
    }
    if(input >= 100){
        return "el valor debe ser menor de 100"
    }
    if(input % 1 != 0){
        return "el valor no debe tener decimales"
    }
    if(input == ""){
        return "el valor no puede estar vacío" 
    }
    return ""
}

//Agregar cuadros de entrada de edades del grupo familiar
function agregarInputs(){
    document.querySelector("#siguiente").setAttribute("disabled", "disabled")
    document.querySelector("#cantidad-personas").setAttribute("disabled", "disabled")
    let cantidadPersonas = document.querySelector("#cantidad-personas").value
    for (let i = 0; i < cantidadPersonas; i++) {
        document.querySelector("#personas").innerHTML += `<input size="12" type="number" class="persona" placeholder="Persona ${(i+1)}"/><br>`
        //Hay otra manera mas correcta con nodos pero me pareció interesante solucionarlo así
    }
  document.querySelector('#calcular').className = '';

}

function validarInputsEdades(gente){
    let todoOk = true
    for (let i = 0; i < gente.length; i++) {    
        if (Number(gente[i].value) == ""){
            document.querySelector("#campos-incompletos").className = ""
            todoOk = false
        }
        if (Number(gente[i].value) % 1 != 0){
            document.querySelector("#campos-decimales").className = ""
            todoOk = false
        }
    }
    return todoOk
}

//Calcula maximo minimo y promedio
function calcularValores(){

    let maximo = 0
    let minimo = 0
    let promedio = 0
    let gente = document.querySelectorAll(".persona")

    maximo = Number(gente[0].value)
    minimo = Number(gente[0].value)
    let suma = 0
    gente.forEach(persona => {
        valor = Number(persona.value)
        if(persona.value > maximo){
            maximo = valor
        }
        if(persona.value < minimo){
            minimo = valor
        }
        suma += valor
    });
    promedio = suma/gente.length

    return  {
        maximo: maximo,
        minimo: minimo,
        promedio: promedio
    }
}

function ocultarErroresEdades(){
    document.querySelector("#campos-incompletos").className = "oculto"
    document.querySelector("#campos-decimales").className = "oculto"
}

//Actualiza los valores en pantalla
function actualizarValores(datosFuncion){
    document.querySelector("#mayor-edad").innerText = datosFuncion.maximo
    document.querySelector("#menor-edad").innerText = datosFuncion.minimo
    document.querySelector("#promedio-edad").innerText = datosFuncion.promedio
    document.querySelector("#valores-edad").className = ""
    ocultarErroresEdades()
}

//reinicia el formulario de edades
function reiniciarInputs(){
    document.querySelector("#valores-edad").className = "oculto"
    document.querySelector("#calcular").className = "oculto"
    document.querySelector("#personas").innerHTML = ""
    document.querySelector("#siguiente").removeAttribute("disabled")
    document.querySelector("#cantidad-personas").removeAttribute("disabled")
    ocultarErroresEdades()
}


//funcion con boton de volver a menu de seleccion
const $botonVolverASelector = document.querySelector("#volver-a-selector")
$botonVolverASelector.addEventListener("click", volverASelector) 
function volverASelector(){
    window.location = "index.html"
}


/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
