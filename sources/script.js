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

const btnSumarDias = document.querySelectorAll("#sumar");
const btnRestarDias = document.querySelectorAll("#restar");
const btnAgreeRoom = document.querySelectorAll(".btn-agree");

selector.addEventListener("change", () => {
  ocultaryMostrarCards(selector.value);
});

btnAgreeRoom.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    let numNigths = cantNoches;
    let total = precioTotal;
    showModal(nArray, numNigths, total);
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
