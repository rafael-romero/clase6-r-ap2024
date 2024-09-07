function obtenerCantidadDeIntegrantes() {
  const cantidadDeIntegrantes = Number(
    document.querySelector("#cantidad-de-integrantes").value
  );
  return cantidadDeIntegrantes;
}

function validarNumeroIngresado(cantidadDeIntegrantes) {
  const patron = /^[1-9]\d{0,2}$/;
  if (cantidadDeIntegrantes === 0 || cantidadDeIntegrantes < 0) {
    return "El numero ingresado debe ser mayor a cero!";
  } else if (cantidadDeIntegrantes % 1 !== 0) {
    return "No se aceptan decimales, solo se aceptan numeros enteros positivos!";
  } else if (!patron.test(cantidadDeIntegrantes.toString())) {
    return "Solo se aceptan numeros enteros positivos!";
  }
  return "";
}

function crearCamposInputs(cantidadDeIntegrantes) {
  for (let i = 0; i < cantidadDeIntegrantes; i++) {
    const nodoIntegrantes = document.createElement("div");
    nodoIntegrantes.id = `contenedor-integrante${i + 1}`;
    nodoIntegrantes.innerHTML = `<label for="integrante${
      i + 1
    }">Edad del integrante numero ${i + 1}:
        <input type="number" id="integrante${i + 1}" class="familiares">
      </label>`;
    document.querySelector("#integrantes").append(nodoIntegrantes);
  }
}

function deshabilitarElemento(elemento) {
  document.querySelector(`#${elemento}`).disabled = true;
}

function mostrarElemento(elemento) {
  document.querySelector(`#${elemento}`).hidden = false;
}

function quitarError(elemento) {
  document.querySelector(`#${elemento}`).classList.remove("error");
}

function eliminarCampoMensajeDeError(elemento) {
  if (document.querySelector(`#${elemento}`) !== null) {
    document.querySelector(`#${elemento}`).remove();
  }
}

function marcarError(elemento) {
  document.querySelector(`#${elemento}`).classList.add("error");
}

function crearElementoError(texto, id) {
  const $error = document.createElement("span");
  $error.textContent = texto;
  $error.id = `${id}`;
  return $error;
}

function agregarCampoMensajeDeError(padre, hijo) {
  const $contenedorPadre = document.querySelector(`#${padre}`);
  $contenedorPadre.appendChild(hijo);
}

function asignarMensajeAElemento(elemento, mensaje) {
  document.querySelector(`#${elemento}`).textContent = mensaje;
}

const $btnOk = document.querySelector("#btn-ok");
$btnOk.onclick = function (e) {
  const cantidadDeIntegrantes = obtenerCantidadDeIntegrantes();
  const errorCantidadIntegrantes = validarNumeroIngresado(
    cantidadDeIntegrantes
  );
  if (errorCantidadIntegrantes === "") {
    quitarError("cantidad-de-integrantes");
    eliminarCampoMensajeDeError("mensajeDeError");
    crearCamposInputs(cantidadDeIntegrantes);
    deshabilitarElemento("btn-ok");
    deshabilitarElemento("cantidad-de-integrantes");
    mostrarElemento("btn-calcular");
    mostrarElemento("btn-reset");
  } else {
    marcarError("cantidad-de-integrantes");
    const elementoError = crearElementoError(
      errorCantidadIntegrantes,
      "mensajeDeError"
    );
    if (document.querySelector("#mensajeDeError") === null) {
      agregarCampoMensajeDeError(
        "contenedor-cantidad-de-integrantes",
        elementoError
      );
    } else {
      asignarMensajeAElemento("mensajeDeError", errorCantidadIntegrantes);
    }
  }
};

function obtenerEdades() {
  const edades = [];
  const $edadesIntegrantes = document.querySelectorAll(".familiares");
  for (let i = 0; i < $edadesIntegrantes.length; i++) {
    edades.push(Number($edadesIntegrantes[i].value));
  }
  return edades;
}

function validarEdades(edades) {
  let cantidadDeErrores = 0;

  edades.forEach(function (edad, indice) {
    const error = validarNumeroIngresado(edad);
    const campoMsjError = document.querySelector(`#campo-error${indice + 1}`);
    if (error) {
      cantidadDeErrores++;
      marcarError(`integrante${indice + 1}`);
      if (campoMsjError === null) {
        const elementoError = crearElementoError(
          error,
          `campo-error${indice + 1}`
        );
        agregarCampoMensajeDeError(
          `contenedor-integrante${indice + 1}`,
          elementoError
        );
      } else {
        asignarMensajeAElemento(`campo-error${indice + 1}`, error);
      }
    } else {
      quitarError(`integrante${indice + 1}`);
      eliminarCampoMensajeDeError(`campo-error${indice + 1}`);
    }
  });
  return cantidadDeErrores;
}

function obtenerEdadMayor(edades) {
  let edadMayor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edadMayor < edades[i]) {
      edadMayor = edades[i];
    }
  }
  return edadMayor;
}

function obtenerEdadMenor(edades) {
  let edadMenor = edades[0];
  for (let i = 1; i < edades.length; i++) {
    if (edadMenor > edades[i]) {
      edadMenor = edades[i];
    }
  }
  return edadMenor;
}

function obtenerPromedioDeEdad(edades) {
  let acumulador = 0;
  const longitudEdades = edades.length;
  for (let i = 0; i < longitudEdades; i++) {
    acumulador += edades[i];
  }
  return acumulador / longitudEdades;
}

function mostrarCalculos(edadMayor, edadMenor, edadPromedio) {
  document.querySelector(
    "#resultado"
  ).textContent = `La edad mayor es: ${edadMayor.toString()} años, la edad menor es ${edadMenor.toString()} años, y el promedio del grupo familiar es ${edadPromedio
    .toFixed(2)
    .toString()} años.`;
}

function ocultarElemento(elemento) {
  document.querySelector(`#${elemento}`).hidden = true;
}

const $btnCalcular = document.querySelector("#btn-calcular");
$btnCalcular.onclick = function () {
  const edades = obtenerEdades();
  const sonValidas = validarEdades(edades) === 0;
  if (sonValidas) {
    const edadMayor = obtenerEdadMayor(edades);
    const edadMenor = obtenerEdadMenor(edades);
    const edadPromedio = obtenerPromedioDeEdad(edades);
    mostrarCalculos(edadMayor, edadMenor, edadPromedio);
    ocultarElemento("btn-calcular");
  }
};

function borrarCamposInputs() {
  const $integrantes = document.querySelector("#integrantes");
  while ($integrantes.firstChild) {
    $integrantes.removeChild($integrantes.firstChild);
  }
}

function habilitarElemento(elemento) {
  document.querySelector(`#${elemento}`).disabled = false;
}

function eliminarCalculos() {
  document.querySelector("#resultado").textContent = "";
}

const $btnReset = document.querySelector("#btn-reset");
$btnReset.onclick = function () {
  borrarCamposInputs();
  ocultarElemento("btn-reset");
  ocultarElemento("btn-calcular");
  habilitarElemento("btn-ok");
  habilitarElemento("cantidad-de-integrantes");
  eliminarCalculos();
};
