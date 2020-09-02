import template from "./modules/Template.js";
import { genCards, showModal } from "./modules/GeneratorTemplates.js";
import {
  hiddenshowCards,
  minInput,
  plusInput,
  numNigths,
  Total,
} from "./modules/BtnsFuntional.js";

template.forEach((data) => {
  genCards(data);
});

const selector = document.getElementById("selector");
selector.addEventListener("change", () => {
  hiddenshowCards(selector.value);
});
const btnAddDays = document.querySelectorAll("#plus");
const btnMinDays = document.querySelectorAll("#min");
const btnAgreeRoom = document.querySelectorAll(".btn-agree");

btnAddDays.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    plusInput(nArray);
  });
});

btnMinDays.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    minInput(nArray);
  });
});

btnAgreeRoom.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    let nigths = numNigths;
    let total = Total;
    showModal(nArray, nigths, total);
  });
});
