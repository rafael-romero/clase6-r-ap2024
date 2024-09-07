function validarObtenerSalarioMayor(salariosDeEjemplo) {
  console.assert(
    obtenerSalarioMayor(salariosDeEjemplo) === 2400,
    "Validar obtener salario mayor no funciono de forma correcta"
  );
}

function validarObtenerSalarioMenor(salariosDeEjemplo) {
  console.assert(
    obtenerSalarioMenor(salariosDeEjemplo) === 600,
    "Validar obtener salario menor no funciono de forma correcta"
  );
}

function validarObtenerSalarioAnualPromedio(salariosDeEjemplo) {
  console.assert(
    obtenerSalarioAnualPromedio(salariosDeEjemplo) === 1400.0,
    "Validar obtener salario anual promedio no funciono de forma correcta"
  );
}

function validarObtenerSalarioMensualPromedio(salarioAnualPromedio) {
  console.assert(
    obtenerSalarioMensualPromedio(salarioAnualPromedio) === 116.67,
    "Validar obtener salario mensual promedio no funciono de forma correcta"
  );
}

function probarValidarNumeroIngresado() {
  console.assert(
    validarNumeroIngresado(0) === "El numero ingresado debe ser mayor a cero!",
    "Validar cantidad de integrantes no funciono con el numero 0"
  );
  console.assert(
    validarNumeroIngresado(-5) === "El numero ingresado debe ser mayor a cero!",
    "Validar cantidad de integrantes no funciono con un numero negativo"
  );

  console.assert(
    validarNumeroIngresado(2.6) ===
      "No se aceptan decimales, solo se aceptan numeros enteros positivos!",
    "Validar cantidad de integrantes fallo con un numero decimal"
  );

  console.assert(
    validarNumeroIngresado(7) === "",
    "Validar cantidad de integrantes no funciono con un numero valido"
  );
}

const salariosDeEjemplo = [1200, 2400, 600];
validarObtenerSalarioMayor(salariosDeEjemplo);
validarObtenerSalarioMenor(salariosDeEjemplo);
validarObtenerSalarioAnualPromedio(salariosDeEjemplo);
validarObtenerSalarioMensualPromedio(
  obtenerSalarioAnualPromedio(salariosDeEjemplo)
);
probarValidarNumeroIngresado();
