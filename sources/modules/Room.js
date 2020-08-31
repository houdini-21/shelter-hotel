import template from "./template.js";

let tempHabitacionesRenderizado = "";
export default class Room {
  constructor(
    id,
    name,
    description,
    img,
    price,
    numbeds,
    numpeople,
    icons,
    include,
    avaiable
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._img = img;
    this._price = price;
    this._numbeds = numbeds;
    this._numpeople = numpeople;
    this._icons = icons;
    this._include = include;
    this._avaiable = avaiable;
  }

  generarTemplate() {
    let iconos = generarIconos(this._icons);
    let habitacionTemp = `
          <article id="${this._id}" class="card">
          <div class="card-habitacion">
          <div class="imagenes-habitacion">
            <img class="img" src="${this._img}" />
          </div>
        <div class="contenedor-icon-data">
          <div class="cantidad">
            <div class="number-icon">
              <p>${this._numbeds}</p>
                <i class="far fa-bed-alt"></i>
            </div>
              <p class="tittle-icon">Cama(s)</p>
            </div>
          <div class="cantidad">
            <div class="number-icon">
              <p>${this._numpeople}</p>
              <i class="far fa-users"></i>
            </div>
            <p class="tittle-icon">Persona(s)</p>
                  </div>
        </div>
          <div class="datos-habitacion">
            <h2 class="nombre-habitacion">${this._name}</h2>
            <p class='disponible-tag'>${this._avaiable} Disponibles</p>
              <p class="descripcion-habitacion">
                ${this._description}
              </p>
            <div class="iconos-box" id='box-icon'>
                 ${iconos}
            </div>
        </div>
        <div class="container-total-estadia hidden">
          <p class="noches-text">Noches</p>
            <div class="plus-minus">
                 <button class="btn-estadia" id="restar">
                     <i class="far fa-minus"></i>
                </button>
                <input type="number" class="noches-input" value='1' disabled="disabled"/>
                    <button class="btn-estadia" id="sumar">
                  <i class="far fa-plus"></i>
                </button>
            </div>
        </div>
        <div class="precio-habitacion">
            <h2 class="precio" id="${this._price}">$${this._price}</h2>
            <p class="subtittle">Por Noche(s)</p>
          <button type="button" class="btn-aceptar">Aceptar</button>
            </div>
        </div>
      </article>`;

    tempHabitacionesRenderizado += habitacionTemp;
    document.getElementById(
      "habitaciones"
    ).innerHTML = tempHabitacionesRenderizado;
  }


  generarModal(nArray, cantNoches, precioTotal) {
    let modalData = template[nArray];
    let labelIcon = generarDescripcionIconos(
      modalData.icons,
      modalData.incluido
    );
    let modalTemp = ` 
	<div class="tittle">
	<h2 class="titulo-modal">Detalles Habitacion</h2>
</div>
<div class="container-habitacion-detalles-img">
	<div class="imagen-habitacion-modal" id="imagen-modal">
		<img
			class="img-habitacion-modal"
			src="${modalData.img}"
		/>
	</div>
	<div class="detalles-habitacion-modal">
		<p class="detalles-habitacion-p">
			Habitacion:
			<span class="detalles-habitacion-p-content" id="name-modal"
				>${modalData.name}</span
			>
		</p>
		<p class="detalles-habitacion-p">
			Descripcion:
			<span
				class="detalles-habitacion-p-content"
				id="description-modal"
				>${modalData.description}</span
			>
		</p>
		<p class="detalles-habitacion-p">
			Precio:
			<span
				class="detalles-habitacion-p-content"
				id="precio-modal"
				>$${modalData.price}</span
			>
		</p>
		<p class="detalles-habitacion-p">
			Estadia:
			<span
				class="detalles-habitacion-p-content"
				id="noches-modal"
				>${cantNoches} Noche(s)</span
			>
		</p>
		<p class="detalles-habitacion-p">
			Total:
			<span class="detalles-habitacion-p-content" id="total-modal"
				>$${precioTotal > 0 ? precioTotal : modalData.price} Por
				Noche</span
			>
		</p>
		<p class="detalles-habitacion-p">
			Disponibles:
			<span
				class="detalles-habitacion-p-content"
				id="disponible-modal"
				>${modalData.disponible} Habitaciones</span
			>
		</p>
	</div>
	<div class="incluye-habitacion">
		<p class="detalles-habitacion-p">Incluye:</p>
		<div class="iconos-incluye" id="iconos-modal">
			${labelIcon}
		</div>
	</div>
</div>`;

    let modalid = document.getElementById("details");
    document.getElementById('myModal').classList.remove("hidden");
    modalid.innerHTML = modalTemp;
  }
}

const generarIconos = (ico) => {
  let iconos = "";
  ico.forEach((icon) => {
    iconos += `<i class='far fa-${icon}'></i>`;
  });
  return iconos;
};

const generarDescripcionIconos = (icons, label) => {
  let descripcionyicono = "";
  icons.forEach((icon, nArray) => {
    descripcionyicono += `<i class="far fa-${icon}"> 
        <span class="incluye-habitacion-p-content">${label[nArray]}</span></i>`;
  });
  return descripcionyicono;
};
