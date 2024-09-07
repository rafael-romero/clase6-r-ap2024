let cantidadDeCampos = 0;

function borrarCalculos() {
  document.querySelector("#resultado").textContent = "";
}

const $btnAgregarCampo = document.querySelector("#btn-agregar-campo");
$btnAgregarCampo.onclick = function () {
  cantidadDeCampos++;
  const nodoCampo = document.createElement("fieldset");
  nodoCampo.id = `contenedor-salario-integrante${cantidadDeCampos}`;
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
  return Number((acumulador / longitudSalarios).toFixed(2));
}

function obtenerSalarioMensualPromedio(salarioAnualPromedio) {
  const mesesEnUnAnio = 12;
  return Number((salarioAnualPromedio / mesesEnUnAnio).toFixed(2));
}

function mostrarCalculos(
  salarioMayor,
  salarioMenor,
  salarioAnualPromedio,
  salarioMensualPromedio
) {
  document.querySelector(
    "#resultado"
  ).textContent = `El salario mayor es de: ${salarioMayor.toString()}$, el salario menor es de: ${salarioMenor.toString()}$, el salario anual promedio es de: ${salarioAnualPromedio.toString()}$, y el salario mensual promedio es de: ${salarioMensualPromedio.toString()}$`;
}

function validarNumeroIngresado(salario) {
  const patron = /^[1-9]\d{0,7}$/;
  if (salario === 0 || salario < 0) {
    return "El numero ingresado debe ser mayor a cero!";
  } else if (salario % 1 !== 0) {
    return "No se aceptan decimales, solo se aceptan numeros enteros positivos!";
  } else if (!patron.test(salario.toString())) {
    return "Solo se aceptan numeros enteros positivos!";
  }
  return "";
}

function marcarError(elemento) {
  document.querySelector(`#${elemento}`).classList.add("error");
}

function crearElementoError(texto, id) {
  const $error = document.createElement("span");
  $error.textContent = texto;
  $error.id = id;
  return $error;
}

function agregarCampoMensajeDeError(padre, hijo) {
  const nodoPadre = document.querySelector(`#${padre}`);
  nodoPadre.appendChild(hijo);
}

function asignarMensajeAElemento(texto, elemento) {
  document.querySelector(`#${elemento}`).textContent = texto;
}

function desmarcarError(elemento) {
  document.querySelector(`#${elemento}`).classList.remove("error");
}

function eliminarCampoMensajeDeError(elemento) {
  if (document.querySelector(`#${elemento}`) !== null) {
    document.querySelector(`#${elemento}`).remove();
  }
}

function validarSalarios(salarios) {
  let cantidadDeErrores = 0;
  salarios.forEach((salario, index) => {
    const errorSalario = validarNumeroIngresado(salario);
    const $campoMsjError = document.querySelector(
      `#campoError${index + 1}`
    );
    if (errorSalario) {
      cantidadDeErrores++;
      marcarError(`salario-integrante${index + 1}`);
      if ($campoMsjError === null) {
        const elementoError = crearElementoError(
          errorSalario,
          `campoError${index + 1}`
        );
        agregarCampoMensajeDeError(
          `contenedor-salario-integrante${index + 1}`,
          elementoError
        );
      } else {
        asignarMensajeAElemento(errorSalario, `campoError${index + 1}`);
      }
    } else {
      desmarcarError(`salario-integrante${index + 1}`);
      eliminarCampoMensajeDeError(`campoError${index + 1}`);
    }
  });
  return cantidadDeErrores;
}

const $btnCalcular = document.querySelector("#btn-calcular");
$btnCalcular.onclick = function () {
  const salarios = obtenerSalarios();
  const sonValidos = validarSalarios(salarios) === 0;
  if (sonValidos) {
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
  }
};
