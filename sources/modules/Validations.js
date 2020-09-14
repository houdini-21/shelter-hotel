import Guest from "./Guest.js";
import { NewReserve } from "./ReservesTable.js";

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

    let id = generateId(
      user.name,
      user.lastname,
      user.phone,
      dataRoom.name
    );

    new NewReserve(
      id,
      user.datestart,
      user.dateend,
      user.name + " " + user.lastname,
      user.room.name,
      user.phone,
      user.email
    );

    let sucessdiv = document.getElementById("reserve-sucess");
    let reservesdiv = document.getElementById("reserves-data");

    sucessdiv.classList.replace("hidden", "fadeIn");
    reservesdiv.classList.add("hidden");
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

export { cleanFields, verifiedField };
