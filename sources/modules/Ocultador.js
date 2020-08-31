const ocultaryMostrarCards = (optionselect) => {
  let cardHabitacion = document.querySelectorAll(".card");
  let btnEstadia = document.querySelectorAll(".container-total-estadia");
  for (let i = 0; i < cardHabitacion.length; i++) {
    const divHabitacion = cardHabitacion[i];
    const btnControlEstadia = btnEstadia[i];
    reset(i);
    optionselect === "0"
      ? (mostrarElementos(divHabitacion), ocultarElementos(btnControlEstadia))
      : optionselect === divHabitacion.id
      ? (mostrarElementos(divHabitacion), mostrarElementos(btnControlEstadia))
      : (ocultarElementos(divHabitacion), ocultarElementos(btnControlEstadia));
  }
};

const ocultarElementos = (div) => {
  div.classList.add("hidden");
};

const mostrarElementos = (div) => {
  div.classList.remove("hidden");
};

const reset = (nArray) => {
  const inputValue = document.querySelectorAll(".noches-input");
  const subtituloCantNoches = document.querySelectorAll(".subtittle");
  const precioHabitacion = document.querySelectorAll(".precio");
  let cantNoches = 1;
  inputValue[nArray].value = cantNoches;
  subtituloCantNoches[nArray].innerText = `Por Noche(s)`;
  let precioReiniciado = precioHabitacion[nArray].id;
  precioHabitacion[nArray].innerText = `$${precioReiniciado}`;
};

export { ocultaryMostrarCards };
