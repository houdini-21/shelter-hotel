const generateId = (name, lastname, phone, rooms) => {
  let idname = name.slice(0, 1);
  let idlastname = lastname.slice(0, 1);
  let idphone = phone.slice(4, 8);
  let idroom = rooms.slice(11);

  console.log(idname + idlastname + idphone +"-"+ idroom);
};

generateId("Fernando", "Marinero", "71932997", "Habitacion VIP");
