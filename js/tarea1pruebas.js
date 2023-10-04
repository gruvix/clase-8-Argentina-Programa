document.querySelector("#siguiente").addEventListener("click", function () {
    const cantidad = Number(document.querySelector("#cantidad-personas").value)
    console.assert(validarInputCantidad(0) === "el valor debe ser igual o mayor a 1", "validar input gente no validó que el numero sea mayor a 0")
    console.assert(validarInputCantidad(101) === "el valor debe ser menor de 100", "validar input gente no validó que sea menor a 50")
    console.assert(validarInputCantidad(1.5) === "el valor no debe tener decimales", "validar input gente no validó que que no haya decimales")
})

document.querySelector("#calcular").addEventListener("click", function () {
    console.assert(validarEdad("") === "vacio", "validar input edad no validó que el numero sea mayor a 0")
    console.assert(validarEdad(1.5) === "decimal", "validar input edad no validó que el numero no tenga decimales")
})
