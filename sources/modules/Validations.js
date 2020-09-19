import Guest from "./Guest.js";
import { NewReserve } from "./ReservesTable.js";
import { cleardiv, renderCards } from "./RenderTemplate.js";
import {
  saveDataLocalStorage,
  readDataLocalStorage,
} from "./readSaveLocalstorage.js";

const updateAvaiableRooms = (numArray, avaiable) => {
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

const cleanFields = (
  name,
  lastname,
  email,
  phone,
  datestart,
  dateend,
  address
) => {
  (name.value = ""),
    (lastname.value = ""),
    (email.value = ""),
    (phone.value = ""),
    (datestart.value = ""),
    (dateend.value = ""),
    (address.value = "");
};

const validationEmail = (email) => {
  console.log(email);
  let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let emailtested = emailRegex.test(email);
  return emailtested;
};

console.log(validationEmail("marub@ls.com"));
const validationFields = (
  name,
  lastname,
  email,
  phone,
  datestart,
  dateend,
  address
) => {
  if (
    (name === "",
    lastname === "",
    email === "",
    phone === "",
    datestart === "",
    dateend === "",
    address === "")
  ) {
    callToast("Ningun campo puede quedar vacio");
    return false;
  } else if (!validationEmail(email)) {
    callToast("Email invalido");
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
  dataRoom,
  numArray
) => {
  if (
    validationFields(name, lastname, email, phone, datestart, dateend, address)
  ) {
    if (updateAvaiableRooms(numArray, dataRoom.avaiable)) {
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
