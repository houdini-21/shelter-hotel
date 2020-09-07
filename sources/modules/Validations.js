import Guest from "./Guest.js";
import { getdate } from "./Dates.js";
import {NewReserve} from "./Reserves.js";

const resetField = (
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

const verifiedField = (
  name,
  lastname,
  email,
  phone,
  datestart,
  dateend,
  address,
  dataRoom
) => {
  if (
    !(
      name === "" ||
      lastname === "" ||
      email === "" ||
      phone === "" ||
      datestart === "" ||
      dateend === "" ||
      address === ""
    )
  ) {
    let id = generateId(name, lastname, phone, dataRoom.name);
    let dateReserve = getdate();
    let user = new Guest(
      name,
      lastname,
      email,
      phone,
      datestart,
      dateend,
      address,
      dataRoom
    );
    new NewReserve(id, dateReserve, user.name+' '+user.lastname, dataRoom.name, user.datestart, user.phone, user.email);
  } else {
    alert("No puedes dejar campos vacios");
  }
};

const generateId = (name, lastname, phone, rooms) => {
  let idname = name.slice(0, 1);
  let idlastname = lastname.slice(0, 1);
  let idphone = phone.slice(4, 8);
  let idroom = rooms.slice(11, 14);

  return idname + idlastname + idphone + "-" + idroom;
};

export { resetField, verifiedField };
