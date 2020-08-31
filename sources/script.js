import template from "./modules/template.js";
import { generarModal, generarTemplate } from "./modules/Generador.js";
import { ocultaryMostrarCards } from "./modules/Ocultador.js";
import {restarInput,sumarInput,cantNoches,precioTotal,} from "./modules/SumarRestarNoches.js";

const selector = document.getElementById("selector");

template.forEach((data) => {
  generarTemplate(data);
});

const btnSumarDias = document.querySelectorAll("#sumar");
const btnRestarDias = document.querySelectorAll("#restar");
const btnAceptarHabitacion = document.querySelectorAll(".btn-aceptar");

selector.addEventListener("change", () => {
  ocultaryMostrarCards(selector.value);
});

btnAceptarHabitacion.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    let cantnoches = cantNoches
    let preciototal = precioTotal
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
