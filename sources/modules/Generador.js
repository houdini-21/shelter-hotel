import template from "./template.js";
let tempHabitacionesRenderizado = "";

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

const generarTemplate = (habitacion) => {
  let iconos = generarIconos(habitacion.icons);
  let habitacionTemp = `
		<article id="${habitacion.id}" class="card">
    	<div class="card-habitacion">
        <div class="imagenes-habitacion">
          <img class="img" src="${habitacion.img}" />
        </div>
      <div class="contenedor-icon-data">
        <div class="cantidad">
          <div class="number-icon">
            <p>${habitacion.cantCamas}</p>
              <i class="far fa-bed-alt"></i>
          </div>
            <p class="tittle-icon">Cama(s)</p>
          </div>
        <div class="cantidad">
          <div class="number-icon">
            <p>${habitacion.cantPersonas}</p>
            <i class="far fa-users"></i>
          </div>
          <p class="tittle-icon">Persona(s)</p>
				</div>
      </div>
    	<div class="datos-habitacion">
      	<h2 class="nombre-habitacion">${habitacion.name}</h2>
          <p class='disponible-tag'>${habitacion.disponible} Disponibles</p>
            <p class="descripcion-habitacion">
              ${habitacion.description}
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
      	<h2 class="precio" id="${habitacion.price}">$${habitacion.price}</h2>
          <p class="subtittle">Por Noche(s)</p>
        <button type="button" class="btn-aceptar">Aceptar</button>
      	</div>
      </div>
    </article>`;

  tempHabitacionesRenderizado += habitacionTemp;
  document.getElementById(
    "habitaciones"
  ).innerHTML = tempHabitacionesRenderizado;
};

const generarModal = (nArray, cantNoches, precioTotal) => {
  let temModalRenderizado = "";
  let modalData = template[nArray];
  let labelIcon = generarDescripcionIconos(modalData.icons, modalData.incluido);
  let modalTemp = ` 
  <article class="modal-container">
    <div class="exit-btn">
      <i class="far fa-times" id="cerrar"></i>
    </div>
    <div class="container-reservacion-form" id="reservacion-container">
      <div class="tittle">
        <h2 class="titulo-modal">Detalles Habitacion</h2>
      </div>
      <div class="container-habitacion-detalles-img">
        <div class="imagen-habitacion-modal" id="imagen-modal"><img class='img-habitacion-modal' src="${
          modalData.img
        }"></div>
        <div class="detalles-habitacion-modal">
          <p class="detalles-habitacion-p">
            Habitacion:
            <span
              class="detalles-habitacion-p-content"
              id="name-modal"
            >${modalData.name}</span>
          </p>
          <p class="detalles-habitacion-p">
            Descripcion:
            <span
              class="detalles-habitacion-p-content"
              id="description-modal"
            >${modalData.description}</span>
          </p>
          <p class="detalles-habitacion-p">
            Precio:
            <span
              class="detalles-habitacion-p-content"
              id="precio-modal"
            >$${modalData.price}</span>
          </p>
          <p class="detalles-habitacion-p">
            Estadia:
            <span
              class="detalles-habitacion-p-content"
              id="noches-modal"
            >${cantNoches} Noche(s)</span>
          </p>
          <p class="detalles-habitacion-p">
            Total:
            <span
              class="detalles-habitacion-p-content"
              id="total-modal"
            >$${
              precioTotal > 0 ? precioTotal : modalData.price
            } Por Noche</span>
          </p>
        </div>
        <div class="incluye-habitacion">
          <p class="detalles-habitacion-p">Incluye:</p>
          <div class="iconos-incluye" id="iconos-modal">
          ${labelIcon}
          </div>
        </div>
      </div>

      <div class="tittle">
        <h2 class="titulo-modal-formulario">Formulario</h2>
      </div>
      <div class="formulario-habitacion-modal">
        <form class="formulario-reserva">
          <div class="form">
            <input
              type="text"
              name="name"
              autocomplete="off"
              required
              id="form-nombre"
            />
            <label for="name" class="label-name">
              <span class="content-name">Nombre</span>
            </label>
          </div>

          <div class="form">
            <input
              type="text"
              name="apellido"
              autocomplete="off"
              required
              id="form-apellido"
            />
            <label for="apellido" class="label-name">
              <span class="content-name">Apellido</span>
            </label>
          </div>
          <div class="form">
            <input
              type="email"
              name="mail"
              autocomplete="off"
              required
              id="form-email"
            />
            <label for="mail" class="label-name">
              <span class="content-name">Email</span>
            </label>
          </div>

          <div class="form">
            <input
              type="number"
              name="telefono"
              autocomplete="off"
              required
              id="form-telefono"
            />
            <label for="telefono" class="label-name">
              <span class="content-name">Telefono</span>
            </label>
          </div>
          <div class="form-date">
            <input
              type="date"
              name="fecha"
              autocomplete="off"
              required
              id="form-fecha"
            />
            <label for="fecha" class="label-name">
              <span class="content-name">Fecha inicio</span>
            </label>
          </div>
          <div class="form">
            <input
              type="number"
              name="personas"
              autocomplete="off"
              required
              id="form-people"
            />
            <label for="personas" class="label-name">
              <span class="content-name">Cantidad personas</span>
            </label>
          </div>
        </form>
      </div>
      <div class="box-btn">
        <button type="submit" id="reservado" class="btn-reservacion">
          Aceptar
        </button>
      </div>
    </div>
    <div class="container-success hidden" id="reservacion-terminada">
      <div class="tittle">
        <h2 class="titulo-modal">
          Tu reserva fue finalizada con exito
        </h2>
      </div>
      <div class="container-success-reservacion">
        <img class="success-img" src="./sources/success.svg" />
      </div>
    </div>
  </article>`;

  temModalRenderizado = modalTemp;
  let modalid = document.getElementById("myModal");
  modalid.classList.remove("hidden");
  modalid.innerHTML = temModalRenderizado;

  const btnreservado = document.getElementById("reservado");
  const btncerrar = document.getElementById("cerrar");
  const containerReservacion = document.getElementById("reservacion-container");
  const containerReservacionFinalizada = document.getElementById(
    "reservacion-terminada"
  );

  btncerrar.addEventListener("click", () => {
    modalid.classList.add("hidden");
    limpiarcampos();
  });

  btnreservado.addEventListener("click", () => {
    const nombre = document.getElementById("form-nombre");
    const apellido = document.getElementById("form-apellido");
    const email = document.getElementById("form-email");
    const telefono = document.getElementById("form-telefono");
    const fecha = document.getElementById("form-fecha");
    const cantpersonas = document.getElementById("form-people");
    if (
      nombre.value === "" ||
      apellido.value === "" ||
      email.value === "" ||
      telefono.value === "" ||
      fecha.value === "" ||
      cantpersonas.value === ""
    ) {
      alert("Ningun campo puede quedar vacio");
    } else {
      containerReservacion.classList.add("hidden");
      containerReservacionFinalizada.classList.replace("hidden", "fadeIn");
      limpiarcampos(nombre, apellido, email, telefono, fecha, cantpersonas);
    }
  });
};

const limpiarcampos = (
  nombre,
  apellido,
  email,
  telefono,
  fecha,
  cantpersonas
) => {
  (nombre.value = ""),
    (apellido.value = ""),
    (email.value = ""),
    (telefono.value = ""),
    (fecha.value = ""),
    (cantpersonas.value = "");
};

export { generarTemplate, generarModal };
