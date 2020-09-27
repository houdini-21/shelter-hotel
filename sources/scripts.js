import { modalData, renderCards } from "./modules/RenderTemplate.js";
import {
  hiddenandshowCards,
  numNigths,
  hiddendiv,
} from "./modules/BtnsFuntional.js";
import { getdate, updateDateEnd, addEndReserve } from "./modules/Dates.js";
import { cleanFields, verifiedField } from "./modules/Validations.js";

renderCards();

const selector = document.getElementById("selector");
selector.addEventListener("change", () => {
  hiddenandshowCards(selector.value);
});

const name = document.getElementById("form-name");
const lastname = document.getElementById("form-lastname");
const email = document.getElementById("form-email");
const phone = document.getElementById("form-numphone");
const datestart = document.getElementById("form-datestart");
const dateend = document.getElementById("form-dateend");
const address = document.getElementById("form-address");
const reservebtn = document.querySelector(".btn-reserve");
const creditcard = document.getElementById("form-creditcard");
const exitbtn = document.getElementById("exitbtn");
const itemsnavbar = document.querySelectorAll(".nav-item");

itemsnavbar.forEach((btn) => {
  btn.addEventListener("click", () => {
    hiddendiv(btn.id);
  });
});

datestart.min = getdate();

datestart.addEventListener("change", () => {
  let endReserve = addEndReserve(datestart.value, numNigths);
  updateDateEnd(endReserve);
});

reservebtn.addEventListener("click", () => {
  verifiedField(
    name.value,
    lastname.value,
    email.value,
    phone.value,
    datestart.value,
    dateend.value,
    address.value,
    creditcard.value,
    modalData
  );
});

exitbtn.addEventListener("click", () => {
  cleanFields(
    name,
    lastname,
    email,
    phone,
    datestart,
    dateend,
    address,
    creditcard
  );
  document.getElementById("modalReserved").classList.add("hidden");
});
