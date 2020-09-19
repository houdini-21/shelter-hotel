import { showModal, modalData, renderCards } from "./modules/RenderTemplate.js";
import {
  hiddenandshowCards,
  minusBtn,
  plusBtn,
  numNigths,
  Total,
  hiddendiv,
} from "./modules/BtnsFuntional.js";
import { getdate, updateDateEnd, addEndReserve } from "./modules/Dates.js";
import { cleanFields, verifiedField } from "./modules/Validations.js";

renderCards();

const selector = document.getElementById("selector");
selector.addEventListener("change", () => {
  hiddenandshowCards(selector.value);
});

const btnAddDays = document.querySelectorAll("#plus");
const btnMinDays = document.querySelectorAll("#minus");
const btnAgreeRoom = document.querySelectorAll(".btn-agree");

btnAddDays.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    plusBtn(nArray);
  });
});

btnMinDays.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    minusBtn(nArray);
  });
});

const name = document.getElementById("form-name");
const lastname = document.getElementById("form-lastname");
const email = document.getElementById("form-email");
const phone = document.getElementById("form-numphone");
const datestart = document.getElementById("form-datestart");
const dateend = document.getElementById("form-dateend");
const address = document.getElementById("form-address");
const reservebtn = document.querySelector(".btn-reserve");
const exitbtn = document.getElementById("exitbtn");
const itemsnavbar = document.querySelectorAll(".nav-item");
let numberArray = 0

itemsnavbar.forEach((btn) => {
  btn.addEventListener("click", () => {
    hiddendiv(btn.id);
  });
});

datestart.min = getdate();

btnAgreeRoom.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    numberArray = nArray
    let sucessdiv = document.getElementById("reserve-sucess");
    let reservesdiv = document.getElementById("reserves-data");

    sucessdiv.classList.add("hidden");
    reservesdiv.classList.remove("hidden");
    showModal(numberArray, numNigths, Total);
  });
});

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
    modalData,
    numberArray
  );
});

exitbtn.addEventListener("click", () => {
  cleanFields(name, lastname, email, phone, datestart, dateend, address);
  document.getElementById("modalReserved").classList.add("hidden");
});
