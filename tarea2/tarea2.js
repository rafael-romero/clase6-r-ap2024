let cantidadDeCampos = 0;

function borrarCalculos() {
  document.querySelector("#resultado").textContent = "";
}

const $btnAgregarCampo = document.querySelector("#btn-agregar-campo");
$btnAgregarCampo.onclick = function () {
  cantidadDeCampos++;
  const nodoCampo = document.createElement("fieldset");
  nodoCampo.innerHTML = `<label for="salario-integrante${cantidadDeCampos}">
        El salario anual del integrante #${cantidadDeCampos} es:
        <input type="number" id="salario-integrante${cantidadDeCampos}" class='salario'>
      </label>`;
  document.querySelector("#campos").appendChild(nodoCampo);
  borrarCalculos();
};

const $btnQuitarCampo = document.querySelector("#btn-quitar-campo");
$btnQuitarCampo.onclick = function () {
  if (cantidadDeCampos > 0) {
    const $formIdCampos = document.querySelector("#campos");
    $formIdCampos.removeChild($formIdCampos.lastChild);
    cantidadDeCampos--;
  }
  borrarCalculos();
};

function obtenerSalarios() {
  const nodeListSalarios = document.querySelectorAll(".salario");
  const longitudSalario = nodeListSalarios.length;
  const salarios = [];
  for (let i = 0; i < longitudSalario; i++) {
    if (nodeListSalarios[i].value !== "") {
      salarios.push(Number(nodeListSalarios[i].value));
    }
  }
  return salarios;
}

function obtenerSalarioMayor(salarios) {
  let salarioMayor = salarios[0];
  const longitudSalarios = salarios.length;
  for (let i = 1; i < longitudSalarios; i++) {
    if (salarioMayor < salarios[i]) {
      salarioMayor = salarios[i];
    }
  }
  return salarioMayor;
}

function obtenerSalarioMenor(salarios) {
  let salarioMenor = salarios[0];
  const longitudSalarios = salarios.length;
  for (let i = 1; i < longitudSalarios; i++) {
    if (salarioMenor > salarios[i]) {
      salarioMenor = salarios[i];
    }
  }
  return salarioMenor;
}

function obtenerSalarioAnualPromedio(salarios) {
  let acumulador = 0;
  const longitudSalarios = salarios.length;
  for (let i = 0; i < longitudSalarios; i++) {
    acumulador += salarios[i];
  }
  return acumulador / longitudSalarios;
}

function obtenerSalarioMensualPromedio(salarioAnualPromedio) {
  const mesesEnUnAnio = 12;
  return salarioAnualPromedio / mesesEnUnAnio;
}

function mostrarCalculos(
  salarioMayor,
  salarioMenor,
  salarioAnualPromedio,
  salarioMensualPromedio
) {
  document.querySelector(
    "#resultado"
  ).textContent = `El salario mayor es de: ${salarioMayor.toString()}$, el salario menor es de: ${salarioMenor.toString()}$, el salario anual promedio es de: ${salarioAnualPromedio
    .toFixed(2)
    .toString()}$, y el salario mensual promedio es de: ${salarioMensualPromedio
    .toFixed(2)
    .toString()}$`;
}

const $btnCalcular = document.querySelector("#btn-calcular");
$btnCalcular.onclick = function () {
  const salarios = obtenerSalarios();
  const salarioMayor = obtenerSalarioMayor(salarios);
  const salarioMenor = obtenerSalarioMenor(salarios);
  const salarioAnualPromedio = obtenerSalarioAnualPromedio(salarios);
  const salarioMensualPromedio =
    obtenerSalarioMensualPromedio(salarioAnualPromedio);
  mostrarCalculos(
    salarioMayor,
    salarioMenor,
    salarioAnualPromedio,
    salarioMensualPromedio
  );
};
