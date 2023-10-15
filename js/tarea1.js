
document.querySelector("#siguiente").addEventListener("click", function () {
    const cantidadFamiliares = Number(document.querySelector("#cantidad-personas").value)
    let error = validarCantidadFamiliares(cantidadFamiliares)
    if(error){
        document.querySelector("#error-cantidad").textContent = error;
        return
    }
    else{
        ocultarErrorCantidad()
    }
    agregarInputs();
})
document.querySelector("#calcular").addEventListener("click", function () {
    const gente = document.querySelectorAll(".input-group-text")
    if(validarEdades(gente)){
        datos = calcularValores(gente)
        actualizarValores(datos)
    }
})

document.querySelector("#reiniciar").addEventListener("click", function () {
    reiniciarInputs()
})

let datos = {
    'mayor-edad': 0,
    'menor-edad': 0,
    'promedio-edad': 0
}

function ocultarErrorCantidad(){
    document.querySelector("#error-cantidad").textContent = ""
}

function validarCantidadFamiliares(input){
    if(input < 1){
        return "el valor debe ser igual o mayor a 1"
    }
    if(input >= 100){
        return "el valor debe ser menor de 100"
    }
    if(input % 1 != 0){
        return "el valor no debe tener decimales"
    }
}

//Agregar cuadros de entrada de edades del grupo familiar
function agregarInputs(){
    deshabilitarInputYSiguiente()
    const cantidadPersonas = document.querySelector("#cantidad-personas").value
    for (let i = 0; i < cantidadPersonas; i++) {
        const $persona = document.createElement("input")
        $persona.setAttribute("size", "12")
        $persona.setAttribute("type", "number")
        $persona.setAttribute("class", "input-group-text")
        $persona.setAttribute("placeholder", `Persona ${(i+1)}`)
        document.querySelector("#personas").appendChild($persona)
    }
    checkForEasterEgg(Number(cantidadPersonas))
    mostrarBotonCalcular()

}



function validarEdades(gente){
    let noHayErrores = true;
    for (let index = 0; index < gente.length; index++) {
        const errores = validarEdad(Number(gente[index].value))

        switch(errores){
            case "decimal":
                document.querySelector("#campos-decimales").className = ""
                noHayErrores = false;
                gente[index].classList.add("error")
                break;
            case "vacio":
                document.querySelector("#campos-incompletos").className = ""
                noHayErrores = false;
                gente[index].classList.add("error")
                break;
            case "":
                gente[index].classList.remove("error")

        }
    }
    if(noHayErrores){
        ocultarErroresEdades()
    }
    return noHayErrores
}

function validarEdad(persona){
    if(persona == ""){
        return "vacio"
    }
    if(persona % 1 != 0){
        return "decimal"
    }
    return ""
}

//Calcula maximo minimo y promedio
function calcularValores(gente){

    let maximo = 0;
    let minimo = 0;
    let promedio = 0;

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
        'mayor-edad': maximo,
        'menor-edad': minimo,
        'promedio-edad': promedio
    }
}

function actualizarValores(datosFuncion){
    Object.keys(datosFuncion).forEach(key => {
        document.querySelector(`#${key}`).innerText = datosFuncion[key]
    })
    ocultarErroresEdades()
    mostrarValores()
}

function checkForEasterEgg(valor){
    if(valor === 1) {
        mostrarEasterEgg()
    }
}

function mostrarEasterEgg(){
    document.querySelector("#easter-egg").classList.remove("oculto")
}

function ocultarEasterEgg(){
    document.querySelector("#easter-egg").classList.add("oculto")
}

function mostrarValores(){
    document.querySelector("#valores-edad").classList.remove("oculto")
}

function ocultarValoresEdad(){
    document.querySelector("#valores-edad").classList.add("oculto")
}

function ocultarErroresEdades(){
    document.querySelector("#campos-incompletos").className = "oculto"
    document.querySelector("#campos-decimales").className = "oculto"
}

function ocultarBotonCalcular(){
    document.querySelector("#calcular").classList.add("oculto")
}

function mostrarBotonCalcular(){
    document.querySelector("#calcular").classList.remove("oculto")
}

function habilitarInputYSiguiente(){
    document.querySelector("#siguiente").removeAttribute("disabled")
    document.querySelector("#cantidad-personas").removeAttribute("disabled")
}
function deshabilitarInputYSiguiente(){
    document.querySelector("#siguiente").setAttribute("disabled", "disabled")
    document.querySelector("#cantidad-personas").setAttribute("disabled", "disabled")
}

//reinicia el formulario de edades
function reiniciarInputs(){
    document.querySelectorAll(".input-group-text").forEach(persona => {
        persona.remove()
    });
    ocultarBotonCalcular()
    ocultarEasterEgg()
    habilitarInputYSiguiente()
    ocultarValoresEdad()
    ocultarErroresEdades();
    ocultarErrorCantidad();
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
