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

const salariosDeEjemplo = [1200, 2400, 600];
validarObtenerSalarioMayor(salariosDeEjemplo);
validarObtenerSalarioMenor(salariosDeEjemplo);
validarObtenerSalarioAnualPromedio(salariosDeEjemplo);
validarObtenerSalarioMensualPromedio(
  obtenerSalarioAnualPromedio(salariosDeEjemplo)
);
