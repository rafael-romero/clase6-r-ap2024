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

function probarObtenerEdadMayor(arregloDeEjemplo) {
  console.assert(
    obtenerEdadMayor(arregloDeEjemplo) === 9,
    "Obtener edad mayor no funciono correctamente"
  );
}

function probarObtenerEdadMenor(arregloDeEjemplo) {
  console.assert(
    obtenerEdadMenor(arregloDeEjemplo) === 2,
    "Obtener edad menor no funciono correctamente"
  );
}

function probarObtenerPromedioDeEdad(arregloDeEjemplo) {
  console.assert(
    obtenerPromedioDeEdad(arregloDeEjemplo) === 4.6,
    "Obtener promedio edad no funciono correctamente"
  );
}

probarValidarNumeroIngresado();
const arregloDeEjemplo = [2, 5, 9, 3, 4];
probarObtenerEdadMayor(arregloDeEjemplo);
probarObtenerEdadMenor(arregloDeEjemplo);
probarObtenerPromedioDeEdad(arregloDeEjemplo);
