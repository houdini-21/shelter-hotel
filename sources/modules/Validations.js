import Guest from "./Guest.js";
import { NewReserve } from "./ReservesTable.js";
import { cleardiv, renderCards } from "./RenderTemplate.js";
import {
  saveDataLocalStorage,
  readDataLocalStorage,
} from "./readSaveLocalstorage.js";

// numero de tarjeta para testing 5344176632440170
const checkAvaiableRooms = (numArray, avaiable) => {
  let dataLocalstorage = readDataLocalStorage("rooms-data");
  let avaiableRoomsUpdated = avaiable;
  if (avaiableRoomsUpdated <= 0) {
    return false;
  } else {
    avaiableRoomsUpdated--;
    dataLocalstorage[numArray].avaiable = avaiableRoomsUpdated;
    saveDataLocalStorage("rooms-data", dataLocalstorage);
    cleardiv();
    renderCards();
    return true;
  }
};

const callToast = (messages) => {
  const toast = document.getElementById("toast");
  const messageid = document.getElementById("message");
  messageid.innerText = messages;
  toast.classList.add("showtoast");
  setTimeout(() => {
    toast.classList.remove("showtoast");
  }, 2000);
};

const checkCreditcard = (num) => {
  let array = num.toString().split("");
  array.reverse();
  array.map((x) => parseInt(x));
  let lastnumber = array.splice(0, 1)[0];
  let plusnumber = array.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
    0
  );
  plusnumber += lastnumber;
  return plusnumber % 10 === 0;
};

const cleanFields = (
  name,
  lastname,
  email,
  phone,
  datestart,
  dateend,
  address,
  creditcard
) => {
  (name.value = ""),
    (lastname.value = ""),
    (email.value = ""),
    (phone.value = ""),
    (datestart.value = ""),
    (dateend.value = ""),
    (address.value = ""),
    (creditcard.value = "");
};

const validationEmail = (email) => {
  let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let emailtested = emailRegex.test(email);
  return emailtested;
};

const validationFields = (
  name,
  lastname,
  email,
  phone,
  datestart,
  dateend,
  address,
  creditcard
) => {
  if (
    name === "" ||
    lastname === "" ||
    email === "" ||
    phone === "" ||
    datestart === "" ||
    dateend === "" ||
    address === "" ||
    creditcard === ""
  ) {
    callToast("Ningun campo puede quedar vacio");
    return false;
  } else if (!validationEmail(email)) {
    callToast("Email invalido");
    return false;
  } else if (!checkCreditcard(creditcard)) {
    callToast("Numero de tarjeta Invalido");
    return false;
  } else {
    return true;
  }
};

const createUserReserve = (
  dataRoom,
  name,
  lastname,
  email,
  phone,
  datestart,
  dateend,
  address
) => {
  let roomGuest = {
    id: dataRoom.id,
    name: dataRoom.name,
    description: dataRoom.description,
    img: dataRoom.img,
    price: dataRoom.price,
    numbeds: dataRoom.numbeds,
    address: dataRoom.address,
    icons: dataRoom.icons,
    include: dataRoom.include,
  };

  let user = new Guest(
    name,
    lastname,
    email,
    phone,
    datestart,
    dateend,
    address,
    roomGuest
  );

  let id = generateId(user.name, user.lastname, user.phone, dataRoom.name);
  new NewReserve(
    id,
    user.datestart,
    user.dateend,
    user.name + " " + user.lastname,
    user.room.name,
    user.phone,
    user.email
  );
};

const verifiedField = (
  name,
  lastname,
  email,
  phone,
  datestart,
  dateend,
  address,
  creditcard,
  dataRoom,
  numArray
) => {
  if (
    validationFields(
      name,
      lastname,
      email,
      phone,
      datestart,
      dateend,
      address,
      creditcard
    )
  ) {
    if (checkAvaiableRooms(numArray, dataRoom.avaiable)) {
      let sucessdiv = document.getElementById("reserve-sucess");
      let reservesdiv = document.getElementById("reserves-data");
      createUserReserve(
        dataRoom,
        name,
        lastname,
        email,
        phone,
        datestart,
        dateend,
        address
      );
      sucessdiv.classList.replace("hidden", "fadeIn");
      reservesdiv.classList.add("hidden");
    } else {
      alert("no hay habitaciones");
    }
  }
};

const generateId = (name, lastname, phone, rooms) => {
  let idname = name.slice(0, 1);
  let idlastname = lastname.slice(0, 1);
  let idphone = phone.slice(4, 8);
  let idroom = rooms.slice(11, 14);

  return idname + idlastname + idphone + "-" + idroom;
};

export { cleanFields, verifiedField };
