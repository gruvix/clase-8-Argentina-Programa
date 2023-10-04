document.querySelector("#agregar-salario").addEventListener("click", function (){
     agregarSalario(indice); 
     if(indice == 0) {habilitarBotonQuitarSalario()};
     indice++;
    ocultarValores();
    mostrarBotonCalculo();
})
document.querySelector("#quitar-salario").addEventListener("click", function(){
    quitarSalario();
    ocultarValores();
    indice--;
    if(indice === 0) {reiniciar()}
})
document.querySelector("#calcular").addEventListener("click", function(){
    datos = calcular()
    imprimirValores(datos)
})
document.querySelector("#reiniciar").addEventListener("click", function (){ indice = reiniciar()})

let indice = 0
let datos = {
    cantidad: 0,
    salarioMaximo: 0,
    salarioMinimo: 0,
    promedioAnual: 0,
    promedioMensual: 0
}

//oculta los valores
function ocultarValores(){
    document.querySelector("#valores-salarios").className = "oculto"
}

//actualiza los valores y los muestra
function imprimirValores(datosSalarios){
    document.querySelector("#cantidad").textContent = `${datosSalarios.cantidad}`
    document.querySelector("#mayor-salario").textContent = `$${datosSalarios.salarioMaximo}`
    document.querySelector("#menor-salario").textContent = `$${datosSalarios.salarioMinimo}`
    document.querySelector("#promedio-anual").textContent = `$${datosSalarios.promedioAnual}`
    document.querySelector("#promedio-mensual").textContent = `$${datosSalarios.promedioMensual}`
    document.querySelector("#valores-salarios").className = ""

}

function habilitarBotonQuitarSalario(){
    document.querySelector("#quitar-salario").removeAttribute("disabled")
}

//Calcula maximo, minimo y promedios
function calcular(){
    let maximo = 0
    let minimo = 0
    let promedioAnual = 0
    let promedioMensual = 0
    let contador = 0
    let salarios = document.querySelectorAll(".salario input")

    maximo = Number(salarios[0].value)
    minimo = Number(salarios[0].value)
    let suma = 0

    salarios.forEach(salario => {
        valor = Number(salario.value)
        //evita las operaciones si el input está vacío
        if(valor == "") {
            return
        }
        if(valor > maximo){
            maximo = valor
        }
        if(valor < minimo){
            minimo = valor
        }
        contador++
        suma += valor
    });
    //retorna 0s si todos los inputs están vacíos
    if (contador === 0) {
        return  {
            cantidad: 0,
            salarioMaximo: 0,
            salarioMinimo: 0,
            promedioAnual: 0,
            promedioMensual: 0
        }
    }
    promedioAnual = suma/contador
    promedioMensual = promedioAnual/12

    return  {
        cantidad: contador,
        salarioMaximo: maximo,
        salarioMinimo: minimo,
        promedioAnual: promedioAnual.toFixed(2),
        promedioMensual: promedioMensual.toFixed(2)
    }
}

function mostrarBotonCalculo(){
  document.querySelector('#calcular').className = '';
}

function reiniciar(){
    document.querySelector("#quitar-salario").setAttribute("disabled", "disabled")
    ocultarValores()
    document.querySelector('#calcular').className = 'oculto';
    salarios = document.querySelectorAll(".salario")
    salarios.forEach(salario => {
        salario.remove()
    });  
    return 0;
}

function quitarSalario(){
    salarios = document.querySelectorAll(".salario")
    salario = salarios[salarios.length-1]
    salario.remove()
}

function agregarSalario(){
    const $div = document.createElement('div');
    $div.className = 'salario';
    
    const $label = document.createElement('label');
    $label.textContent = `Salario # ${(indice + 1)} ` ;
    const $input = document.createElement('input');
    $input.type = 'number';
    
    $div.appendChild($label);
    $div.appendChild($input);
    
    const $salarios = document.querySelector('#salarios');
    $salarios.appendChild($div);
}






//funcion con boton de volver a menu de seleccion
const $botonVolverASelector = document.querySelector("#volver-a-selector")
$botonVolverASelector.addEventListener("click", volverASelector) 
function volverASelector(){
    window.location = "index.html"
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/