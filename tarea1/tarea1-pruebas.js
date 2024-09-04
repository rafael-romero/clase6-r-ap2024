function probarValidarCantidadDeIntegrantes() {
  console.assert(
    validarCantidadDeIntegrantes(0) ===
      "El numero ingresado debe ser mayor a cero!",
    "Validar cantidad de integrantes no funciono con el numero 0"
  );

  console.assert(
    validarCantidadDeIntegrantes(-5) ===
      "El numero ingresado debe ser mayor a cero!",
    "Validar cantidad de integrantes no funciono con un numero negativo"
  );

  console.assert(
    validarCantidadDeIntegrantes("perro") ===
      "Solo se aceptan numeros enteros positivos!",
    "Validar cantidad de integrantes no valido que el valor sea NaN"
  );

  console.assert(
    validarCantidadDeIntegrantes(2.6) === "No se aceptan decimales, solo se aceptan numeros enteros positivos!",
    "Validar cantidad de integrantes fallo con un numero decimal"
  )

  console.assert(
    validarCantidadDeIntegrantes(7) === "",
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

function probarObtenerPromedioDeEdad(arregloDeEjemplo){
  console.assert(obtenerPromedioDeEdad(arregloDeEjemplo) === 4.6,
  "Obtener promedio edad no funciono correctamente");
}

probarValidarCantidadDeIntegrantes();
const arregloDeEjemplo = [2, 5, 9, 3, 4];
probarObtenerEdadMayor(arregloDeEjemplo);
probarObtenerEdadMenor(arregloDeEjemplo);
probarObtenerPromedioDeEdad(arregloDeEjemplo);
