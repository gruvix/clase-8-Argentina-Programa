document.querySelector("#calcular").addEventListener("click", function () {
    console.assert(validarSalario(0) === "el salario debe ser mayor a 0", "validar salario no validó que el numero no sea igual o menor a 0")
    console.assert(validarSalario("asdf") === "el salario debe estar en numeros", "validar salario no validó que no sea un numero")
    console.assert(validarSalario(10) === "", "validar salario no validó un numero válido")
})
