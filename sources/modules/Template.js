import { Room, bedroomdata } from "./Rooms.js";

const room1 = new Room(
  "habitacion1",
  "Habitacion Individual",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti officia minus praesentium sapiente non dignissi",
  "./sources/habitacion1.jpg",
  45,
  1,
  1,
  ["wifi", "air-conditioner", "shower", "tv"],
  ["Wifi", "Aire acondicionado", "Ducha agua helada/caliente", "Televisor"],
  19
);

const room2 = new Room(
  "habitacion2",
  "Habitacion Doble",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti officia minus praesentium sapiente non dignissi",
  "./sources/habitacion2.jpg",
  75,
  2,
  2,
  ["wifi", "air-conditioner", "shower", "tv"],
  ["Wifi", "Aire acondicionado", "Ducha agua helada/caliente", "Televisor"],
  90
);
const room3 = new Room(
  "habitacion3",
  "Habitacion Familiar",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti officia minus praesentium sapiente non dignissi",
  "./sources/habitacion3.jpg",
  95,
  3,
  6,
  ["wifi", "air-conditioner", "shower", "tv"],
  ["Wifi", "Aire acondicionado", "Ducha agua helada/caliente", "Televisor"],
  10
);
const room4 = new Room(
  "habitacion4",
  "Habitacion Gold",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti officia minus praesentium sapiente non dignissi",
  "./sources/habitacion4.jpg",
  120,
  2,
  2,
  ["wifi", "air-conditioner", "utensils", "shower", "bath", "tv"],
  [
    "Wifi",
    "Aire acondicionado",
    "Desayuno",
    "Ducha agua caliente/helada",
    "Bañera",
    "Television",
  ],
  20
);
const room5 = new Room(
  "habitacion5",
  "Habitacion VIP",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti officia minus praesentium sapiente non dignissi",
  "./sources/habitacion5.jpg",
  150,
  2,
  2,
  ["wifi", "air-conditioner", "utensils", "shower", "bath", "tv", "hot-tub"],
  [
    "Wifi",
    "Aire acondicionado",
    "Desayuno",
    "Ducha agua helada/caliente",
    "Bañera",
    "Televisor",
    "Jacuzzi",
  ],
  10
);
let template = bedroomdata.bedroomsdata();

export default template;
