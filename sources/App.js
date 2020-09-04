import template from "./modules/Template.js";
import {
  genCards,
  showModal
} from "./modules/RenderTemplate.js";
import {
  hiddenshowCards,
  minInput,
  plusInput,
  numNigths,
  Total,
} from "./modules/BtnsFuntional.js";
import Guest from "./modules/Guest.js";

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

const name = document.getElementById("form-name");
const lastname = document.getElementById("form-lastname");
const email = document.getElementById("form-email");
const phone = document.getElementById("form-numphone");
let datestart = document.getElementById("form-datestart");
let dateend = document.getElementById("form-dateend");
const numroom = document.getElementById("form-rooms");
const reservebtn = document.getElementById("reserve");
const exitbtn = document.getElementById("exitbtn");

btnAgreeRoom.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    showModal(nArray, numNigths, Total);
    console.log(getdate(numNigths));
  });
});

reservebtn.addEventListener("click", () => {
  verifiedField(
    name.value,
    lastname.value,
    email.value,
    phone.value,
    datestart.value,
    dateend.value,
    numroom.value
  );
});

exitbtn.addEventListener("click", () => {
  document.getElementById("modalReserved").classList.add("hidden");
});

const verifiedField = (
  name,
  lastname,
  email,
  phone,
  datestart,
  dateend,
  numrooms
) => {
  if (!(
      name === "" ||
      lastname === "" ||
      email === "" ||
      phone === "" ||
      datestart === "" ||
      dateend === "" ||
      numroom === ""
    )) {
    let user = new Guest(
      name,
      lastname,
      email,
      phone,
      datestart,
      dateend,
      numrooms
    );
    console.log(user.dataGuest);
  } else {
    alert("No puedes dejar campos vacios");
  }
};

const addZero = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const getdate = (numNigths) => {
  let date = new Date();
  let dd
  if (numNigths) {
    dd = date.getDate() + numNigths;
  } else {
    dd = date.getDate();
  }

  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  dd = addZero(dd);
  mm = addZero(mm);

  return yyyy + "-" + mm + "-" + dd;
};
console.log(getdate());
