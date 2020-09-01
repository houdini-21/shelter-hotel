import template from "./modules/template.js";
//import { generarModal } from "./modules/Generador.js";
import { ocultaryMostrarCards } from "./modules/Ocultador.js";
import Room from "./modules/Room.js";
import {
  restarInput,
  sumarInput,
  cantNoches,
  precioTotal,
} from "./modules/SumarRestarNoches.js";

const selector = document.getElementById("selector");
let ro = "";
template.forEach((data) => {
  let habitacion = new Room(
    data.id,
    data.name,
    data.description,
    data.img,
    data.price,
    data.cantCamas,
    data.cantPersonas,
    data.icons,
    data.incluido,
    data.disponible
  );
  habitacion.generarTemplate();
});

const btnSumarDias = document.querySelectorAll("#sumar");
const btnRestarDias = document.querySelectorAll("#restar");
const btnAceptarHabitacion = document.querySelectorAll(".btn-aceptar");

selector.addEventListener("change", () => {
  ocultaryMostrarCards(selector.value);
});

btnAceptarHabitacion.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    let cantnoches = cantNoches;
    let preciototal = precioTotal;
    generarModal(nArray, cantnoches, preciototal);
  });
});

btnSumarDias.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    sumarInput(nArray);
  });
});

btnRestarDias.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    restarInput(nArray);
  });
});
