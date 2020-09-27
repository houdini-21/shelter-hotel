import { readDataLocalStorage } from "./readSaveLocalstorage.js";
import { Room, Bedrooms } from "./Rooms.js";
import { minusBtn, plusBtn, Total } from "./BtnsFuntional.js";
import { numNigths } from "./BtnsFuntional.js";

const room1 = new Room(
  "room1",
  "Habitacion Individual",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, auctor pharetra, euismod pulvinar. Ipsum vestibulum amet suspendisse aliquam. Lacus et sit mauris dictum et sagittis gravida.",
  "./sources/habitacion1.jpg",
  45,
  1,
  1,
  ["wifi", "air-conditioner", "shower", "tv"],
  ["Wifi", "Aire acondicionado", "Ducha agua helada/caliente", "Televisor"],
  19
);

const room2 = new Room(
  "room2",
  "Habitacion Doble",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, auctor pharetra, euismod pulvinar. Ipsum vestibulum amet suspendisse aliquam. Lacus et sit mauris dictum et sagittis gravida.",
  "./sources/habitacion2.jpg",
  75,
  2,
  2,
  ["wifi", "air-conditioner", "shower", "tv"],
  ["Wifi", "Aire acondicionado", "Ducha agua helada/caliente", "Televisor"],
  5
);
const room3 = new Room(
  "room3",
  "Habitacion Familiar",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, auctor pharetra, euismod pulvinar. Ipsum vestibulum amet suspendisse aliquam. Lacus et sit mauris dictum et sagittis gravida.",
  "./sources/habitacion3.jpg",
  95,
  3,
  6,
  ["wifi", "air-conditioner", "shower", "tv"],
  ["Wifi", "Aire acondicionado", "Ducha agua helada/caliente", "Televisor"],
  10
);
const room4 = new Room(
  "room4",
  "Habitacion Gold",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, auctor pharetra, euismod pulvinar. Ipsum vestibulum amet suspendisse aliquam. Lacus et sit mauris dictum et sagittis gravida.",
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
  "room5",
  "Habitacion VIP",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, auctor pharetra, euismod pulvinar. Ipsum vestibulum amet suspendisse aliquam. Lacus et sit mauris dictum et sagittis gravida.",
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
  1
);

new Bedrooms().addRooms(room1.dataRoom);
new Bedrooms().addRooms(room2.dataRoom);
new Bedrooms().addRooms(room3.dataRoom);
new Bedrooms().addRooms(room4.dataRoom);
new Bedrooms().addRooms(room5.dataRoom);

let modalData = "";

const renderCards = () => {
  let cardsData = readDataLocalStorage("rooms-data");
  cardsData.forEach((rooms) => {
    genCards(rooms);
  });
};

const cleardiv = () => {
  let div = document.getElementById("roomsSection");
  Array.from(div.childNodes).forEach((child) => {
    div.removeChild(child);
  });
};

const genIcons = (icons, type, label) => {
  let iconsgen = "";
  if (type === "just-icons") {
    icons.forEach((icon) => {
      iconsgen += `<i class='far fa-${icon}'></i>`;
    });
  } else if (type === "icons-label") {
    icons.forEach((icon, nArray) => {
      iconsgen += `<i class="far fa-${icon}">
      <span class="incluide-room-p-bold"
        >${label[nArray]}</span
      ></i
    >`;
    });
  }

  return iconsgen;
};

const genCards = (data) => {
  let iconsRoom = genIcons(data.icons, "just-icons");
  const templateCardRoom = `        
    <div class="card-room flex-row flex-center" id="${data.id}">
    <div class="img-room">
      <div class="box-img">
        <img class="img" src="${data.img}" />
      </div>
    </div>
    <div class="icons-capacity flex-column flex-center">
      <div class="capacity">
        <div class="icon-capacity-room flex-row">
          <p class="capacity-icon">${data.numbeds}</p>
          <i class="far fa-bed-alt"></i>
        </div>
        <div class="title-icon">
          <p>Cama(s)</p>
        </div>
      </div>
        <div class="capacity">
          <div class="icon-capacity-room flex-row">
            <p class="capacity-icon">${data.numpeople}</p>
            <i class="far fa-users"></i>
          </div>
          <div class="title-icon">
            <p>Persona(s)</p>
          </div>
        </div>
    </div>
    <div class="tittle-description-room flex-column">
      <div class="tittle-room flex-row">
        <h2 class="name-room">${data.name}</h2>
        <p class="available-rooms">${data.avaiable} Disponibles</p>
      </div>
      <div class="description-room flex-column">
        <p class="about-room">
        ${data.description}
        </p>
        <div class="icons-room">
        ${iconsRoom}
        </div>
      </div>
    </div>
    <div class="flex-center hidden" id="nigths-btn">
    <div class="container-days-of-stay flex-column flex-center">
    <p class="title-input-nigths">Noches</p>
    <div class="btnplus-input-btnminus flex-row">
      <button class="btn-days minus" id="minus">
        <i class="far fa-minus"></i>
      </button>
      <input
        type="text"
        class="nigths-input"
        value="1"
        disabled="disabled"
      />
      <button class="btn-days plus" id="plus">
        <i class="far fa-plus"></i>
      </button>
    </div>
  </div></div>
    <div class="price-room flex-column flex-center">
      <h2 class="price-night" id="${data.price}">$${data.price}</h2>
      <p class="subtitle-night">Por Noche</p>
      <button class="btn-agree">Aceptar</button>
    </div>
    </div>`;

  document
    .getElementById("roomsSection")
    .insertAdjacentHTML("beforeend", templateCardRoom);

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

  btnAgreeRoom.forEach((btn, nArray) => {
    btn.addEventListener("click", () => {
      let sucessdiv = document.getElementById("reserve-sucess");
      let reservesdiv = document.getElementById("reserves-data");

      let reservebtn = document.querySelector(".btn-reserve");
      reservebtn.id = nArray;
      sucessdiv.classList.add("hidden");
      reservesdiv.classList.remove("hidden");
      showModal(numNigths, Total);
    });
  });
};

const showModal = (nArray, nigths, total) => {
  let template = readDataLocalStorage("rooms-data");
  modalData = template[nArray];
  let iconsRoom = genIcons(modalData.icons, "icons-label", modalData.include);
  const modalTemplate = `
  <div class="img-modal">
  <div class="box-img">
    <img class="container-img-modal" src="${modalData.img}" />
  </div>
</div>
<div class="description-modal flex-column">
  <p class="details-room-p">
    Habitacion:
    <span class="details-room-p-bold" id="name-modal"
      >${modalData.name}</span
    >
  </p>
  <p class="details-room-p">
    Descripcion:
    <span class="details-room-p-bold" id="description-modal"
      >${modalData.description}</span
    >
  </p>
  <p class="details-room-p">
    Precio:
    <span class="details-room-p-bold" id="precio-modal"
      >$${modalData.price} Por Noche</span
    >
  </p>
  <p class="details-room-p">
    Estadia:
    <span class="details-room-p-bold" id="noches-modal"
      >${nigths} Noche(s)</span
    >
  </p>
  <p class="details-room-p">
    Total:
    <span class="details-room-p-bold" id="total-modal"
      >$${total > 0 ? total : modalData.price} Por
      Noche</span
    >
  </p>
</div>
<div class="incluide-modal flex-column">
  <p class="details-room-p">Incluido:</p>
  <div class="icons-container flex-column">
${iconsRoom}
  </div>
</div>`;
  let modalid = document.getElementById("content-modal-id");
  document
    .getElementById("modalReserved")
    .classList.replace("hidden", "fadeIn");
  modalid.innerHTML = modalTemplate;
};

export { genCards, showModal, modalData, cleardiv, renderCards };
