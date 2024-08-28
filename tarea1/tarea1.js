function obtenerCantidadDeIntegrantes() {
  const $cantidadDeIntegrantes = Number(
    document.querySelector("#cantidad-de-integrantes").value
  );
  return $cantidadDeIntegrantes;
}

function crearCamposInputs(cantidadDeIntegrantes) {
  for (let i = 0; i < cantidadDeIntegrantes; i++) {
    const nodoIntegrantes = document.createElement("div");
    nodoIntegrantes.innerHTML = `<label for="integrante${
      i + 1
    }">Edad del integrante numero ${i + 1}:
        <input type="number" id="integrante${i + 1}" class="familiares">
      </label>`;
    document.querySelector("#integrantes").append(nodoIntegrantes);
  }
}

function deshabilitarBotonOk() {
  document.querySelector("#btn-ok").disabled = true;
}

function mostrarElemento(elemento) {
  document.querySelector(`#${elemento}`).hidden = false;
}

const $btnOk = document.querySelector("#btn-ok");
$btnOk.onclick = function (e) {
  const cantidadDeIntegrantes = obtenerCantidadDeIntegrantes();
  if (cantidadDeIntegrantes > 0) {
    crearCamposInputs(cantidadDeIntegrantes);
    deshabilitarBotonOk();
    mostrarElemento("btn-calcular");
    mostrarElemento("btn-reset");
  }
}

function obtenerEdades() {
  const edades = [];
  const $edadesIntegrantes = document.querySelectorAll(".familiares");
  for (let i = 0; i < $edadesIntegrantes.length; i++) {
    edades.push(Number($edadesIntegrantes[i].value));
  }
  return edades;
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
  const edadMayor = obtenerEdadMayor(edades);
  const edadMenor = obtenerEdadMenor(edades);
  const edadPromedio = obtenerPromedioDeEdad(edades);
  mostrarCalculos(edadMayor, edadMenor, edadPromedio);
  ocultarElemento("btn-calcular");
}

function borrarCamposInputs() {
  const $integrantes = document.querySelector("#integrantes");
  while ($integrantes.firstChild) {
    $integrantes.removeChild($integrantes.firstChild);
  }
}

function habilitarBotonOk() {
  document.querySelector("#btn-ok").disabled = false;
}

function eliminarCalculos() {
  document.querySelector("#resultado").textContent = "";
}

const $btnReset = document.querySelector("#btn-reset");
$btnReset.onclick = function () {
  borrarCamposInputs();
  ocultarElemento("btn-reset");
  ocultarElemento("btn-calcular");
  habilitarBotonOk();
  eliminarCalculos();
}
