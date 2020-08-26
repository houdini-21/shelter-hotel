let cantNoches = 1;
let precioTotal = 0;

const ocultaryMostrarCards = (optionselect) => {
  let cardHabitacion = document.querySelectorAll(".card");
  let btnEstadia = document.querySelectorAll(".container-total-estadia");
  for (let i = 0; i < cardHabitacion.length; i++) {
    const divHabitacion = cardHabitacion[i];
    const btnControlEstadia = btnEstadia[i];
    reset(i);
    optionselect === "0"
      ? (mostrarElementos(divHabitacion),
        ocultarElementos(btnControlEstadia))
      : optionselect === divHabitacion.id
      ? (mostrarElementos(divHabitacion),
        mostrarElementos(btnControlEstadia))
      : (ocultarElementos(divHabitacion),
        ocultarElementos(btnControlEstadia));
  }
};

const ocultarElementos = (div) => {
  div.classList.add("hidden");
};

const mostrarElementos = (div) => {
  div.classList.remove("hidden");
};

const restarInput = (nArray) => {
  cantNoches--;
  if (cantNoches < 1) {
    cantNoches = 1;
  }
  calcularPrecio(cantNoches, nArray);
  inputValue[nArray].value = cantNoches;
  subtituloCantNoches[nArray].innerText = `Por ${cantNoches} Noche(s)`;
};

const sumarInput = (nArray) => {
  cantNoches++;
  calcularPrecio(cantNoches, nArray);
  inputValue[nArray].value = cantNoches;
  subtituloCantNoches[nArray].innerText = `Por ${cantNoches} Noche(s)`;
};

const calcularPrecio = (noches, nArray) => {
  let price = precioHabitacion[nArray].id;
  precioTotal = noches * price;
  precioHabitacion[nArray].innerText = `$${precioTotal}`;
};

const reset = (nArray) => {
  cantNoches = 1;
  inputValue[nArray].value = cantNoches;
  subtituloCantNoches[nArray].innerText = `Por Noche(s)`;
  let precioReiniciado = precioHabitacion[nArray].id;
  precioHabitacion[nArray].innerText = `$${precioReiniciado}`;
};

const limpiarcampos = (
  nombre,
  apellido,
  email,
  telefono,
  fecha,
  cantpersonas
) => {
  (nombre.value = ""),
    (apellido.value = ""),
    (email.value = ""),
    (telefono.value = ""),
    (fecha.value = ""),
    (cantpersonas.value = "");
};

const selector = document.getElementById("selector");
const ui = new GeneradorTemplates();
const botones = new FuncionalidadesBtns();

template.forEach((card) => {
  ui.generarTemplate(card);
});

selector.addEventListener("change", () => {
  const selectedOption = selector.value;
  botones.ocultaryMostrarCards(selectedOption);
});

const btnSumarDias = document.querySelectorAll("#sumar");
const btnRestarDias = document.querySelectorAll("#restar");
const inputValue = document.querySelectorAll(".noches-input");
const subtituloCantNoches = document.querySelectorAll(".subtittle");
const precioHabitacion = document.querySelectorAll(".precio");
const btnAceptarHabitacion = document.querySelectorAll(".btn-aceptar");
const modal = document.querySelector(".modal");

btnSumarDias.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    botones.sumarInput(nArray);
  });
});

btnAceptarHabitacion.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    ui.generarModal(nArray);
  });
});

btnRestarDias.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    botones.restarInput(nArray);
  });
});
