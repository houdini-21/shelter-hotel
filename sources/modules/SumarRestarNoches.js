let cantNoches = 1;
let precioTotal = 0;

const calcularPrecio = (noches, nArray) => {
  const precioHabitacion = document.querySelectorAll(".precio");
  let price = precioHabitacion[nArray].id;
  precioTotal = noches * price;
  precioHabitacion[nArray].innerText = `$${precioTotal}`;
};

const restarInput = (nArray) => {
  const inputValue = document.querySelectorAll(".noches-input");
  const subtituloCantNoches = document.querySelectorAll(".subtittle");
  cantNoches--;
  if (cantNoches < 1) {
    cantNoches = 1;
  }
  calcularPrecio(cantNoches, nArray);
  inputValue[nArray].value = cantNoches;
  subtituloCantNoches[nArray].innerText = `Por ${cantNoches} Noche(s)`;
};

const sumarInput = (nArray) => {
  const inputValue = document.querySelectorAll(".noches-input");
  const subtituloCantNoches = document.querySelectorAll(".subtittle");
  cantNoches++;
  calcularPrecio(cantNoches, nArray);
  inputValue[nArray].value = cantNoches;
  subtituloCantNoches[nArray].innerText = `Por ${cantNoches} Noche(s)`;
};

export { restarInput, sumarInput, cantNoches, precioTotal };
