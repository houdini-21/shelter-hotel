import template from "./Template.js";

let templategenerated = "";

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

  templategenerated += templateCardRoom;
  document.getElementById("roomsSection").innerHTML = templategenerated;
};

const showModal = (nArray, nigths, total) => {
  let modalData = template[nArray];
  let iconsRoom = genIcons(modalData.icons, "icons-label", modalData.include);
  const modalTemplate = `
  <div class="img-modal">
  <div class="box-img">
    <img class="img-modal" src="${modalData.img}" />
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
  document.getElementById("modalReserved").classList.remove("hidden");
  modalid.innerHTML = modalTemplate;
};

export { genCards, showModal };
