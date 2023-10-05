document.querySelector("#agregar-salario").addEventListener("click", function (){
     agregarSalario(indice); 
     if(indice == 0) {habilitarBotonQuitarSalario()};
     indice++;
    ocultarValores();
    mostrarBotonCalcular();
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
    let sumatoria = 0

    salarios.forEach(salario => {
        valor = Number(salario.value)
        console.log(valor)

        if(validarSalario(valor) !== ""){
            salario.classList.add("error")
        }
        else {
            salario.classList.remove("error")
            if(valor > maximo){
                maximo = valor
            }
            if(valor < minimo){
                minimo = valor
            }
            contador++
            sumatoria += valor
        }
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
    promedioAnual = sumatoria/contador
    promedioMensual = promedioAnual/12

    return  {
        cantidad: contador,
        salarioMaximo: maximo,
        salarioMinimo: minimo,
        promedioAnual: promedioAnual.toFixed(2),
        promedioMensual: promedioMensual.toFixed(2)
    }
}
function validarSalario(valor){
    if(valor <= 0){
        return "el salario debe ser mayor a 0"
    }
    if(!/^[0-9]+$/.test(valor)){
        return "el salario debe estar en numeros"
    }
    return ""
}
function reiniciar(){
    document.querySelector("#quitar-salario").setAttribute("disabled", "disabled")
    ocultarValores()
    ocultarBotonCalcular()
    salarios = document.querySelectorAll(".salario")
    salarios.forEach(salario => {
        salario.remove()
    });  
    return 0;
}
function ocultarValores(){
    document.querySelector("#valores-salarios").className = "oculto"
}

function ocultarBotonCalcular(){
    document.querySelector("#calcular").classList.add("oculto")
}
function mostrarBotonCalcular(){
    document.querySelector("#calcular").classList.remove("oculto")
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