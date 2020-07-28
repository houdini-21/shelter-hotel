let tempHabitacionesRenderizado = "";
let temModalRenderizado = "";
let cantNoches = 1;
let precioTotal = 0;

class GeneradorTemplates {
  generarTemplate(habitacion) {
    let iconos = this.generarIconos(habitacion.icons);
    let habitacionTemp = `<article id="${habitacion.id}" class="card">
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
  }

  generarIconos(ico) {
    let iconos = "";
    ico.forEach((icon) => {
      iconos += `<i class='far fa-${icon}'></i>`;
    });
    return iconos;
  }

  generarModal(nArray) {
    let modalData = template[nArray];
    let labelIcon = this.generarLabelIcon(modalData.icons, modalData.incluido);
    let modalTemp = ` <article class="modal-container">
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
    document.getElementById("myModal").innerHTML = temModalRenderizado;
    document.querySelector(".modal").classList.replace("hidden", "fadeIn");

    const btncerrar = document.getElementById("cerrar");
    const nombre = document.getElementById("form-nombre");
    const apellido = document.getElementById("form-apellido");
    const email = document.getElementById("form-email");
    const telefono = document.getElementById("form-telefono");
    const fecha = document.getElementById("form-fecha");
    const cantpersonas = document.getElementById("form-people");
    const btnreservado = document.getElementById("reservado");
    const containerReservacion = document.getElementById(
      "reservacion-container"
    );
    const containerReservacionFinalizada = document.getElementById(
      "reservacion-terminada"
    );

    btnreservado.addEventListener("click", () => {
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
      }
    });

    btncerrar.addEventListener("click", () => {
      modal.classList.add("hidden");
      botones.limpiarcampos(
        nombre,
        apellido,
        email,
        telefono,
        fecha,
        cantpersonas
      );
    });
  }

  generarLabelIcon(icons, label) {
    let descripcion = "";
    icons.forEach((icon, nArray) => {
      descripcion += `<i class="far fa-${icon}"> 
      <span class="incluye-habitacion-p-content">${label[nArray]}</span></i>`;
    });
    return descripcion;
  }
}

class FuncionalidadesBtns {
  ocultaryMostrarCards(optionselect) {
    let cardHabitacion = document.querySelectorAll(".card");
    let btnEstadia = document.querySelectorAll(".container-total-estadia");

    for (let i = 0; i < cardHabitacion.length; i++) {
      const divHabitacion = cardHabitacion[i];
      const btnControlEstadia = btnEstadia[i];
      this.reset(i);
      optionselect === "0"
        ? (this.mostrarHabitacion(divHabitacion),
          this.ocultarBtnsEstadia(btnControlEstadia))
        : optionselect === divHabitacion.id
        ? (this.mostrarHabitacion(divHabitacion),
          this.mostrarHabitacion(btnControlEstadia))
        : (this.ocultarHabitacion(divHabitacion),
          this.ocultarBtnsEstadia(btnControlEstadia));
    }
  }
  ocultarHabitacion(div) {
    div.classList.add("hidden");
  }
  mostrarHabitacion(div) {
    div.classList.remove("hidden");
  }
  ocultarBtnsEstadia(div) {
    div.classList.add("hidden");
  }
  mostrarBtnsEstadia(div) {
    div.classList.remove("hidden");
  }

  restarInput(nArray) {
    cantNoches--;
    if (cantNoches < 1) {
      cantNoches = 1;
    }
    this.calcularPrecio(cantNoches, nArray);
    inputValue[nArray].value = cantNoches;
    subtituloCantNoches[nArray].innerText = `Por ${cantNoches} Noche(s)`;
  }

  sumarInput(nArray) {
    cantNoches++;
    this.calcularPrecio(cantNoches, nArray);
    inputValue[nArray].value = cantNoches;
    subtituloCantNoches[nArray].innerText = `Por ${cantNoches} Noche(s)`;
  }

  calcularPrecio(noches, nArray) {
    let price = precioHabitacion[nArray].id;
    precioTotal = noches * price;
    precioHabitacion[nArray].innerText = `$${precioTotal}`;
  }

  reset(nArray) {
    cantNoches = 1;
    inputValue[nArray].value = cantNoches;
    subtituloCantNoches[nArray].innerText = `Por Noche(s)`;
    let precioReiniciado = precioHabitacion[nArray].id;
    precioHabitacion[nArray].innerText = `$${precioReiniciado}`;
  }
  
  limpiarcampos(nombre, apellido, email, telefono, fecha, cantpersonas) {
    (nombre.value = ""),
      (apellido.value = ""),
      (email.value = ""),
      (telefono.value = ""),
      (fecha.value = ""),
      (cantpersonas.value = "");
  }
}

const selector = document.getElementById("selector");
const ui = new GeneradorTemplates();
const botones = new FuncionalidadesBtns();

template.forEach((card) => {
  ui.generarTemplate(card);
});

selector.addEventListener("change", () => {
  const selectedOption = selector.value;
  botones.ocultaryMostrarCards(selectedOption);
});

const btnSumarDias = document.querySelectorAll("#sumar");
const btnRestarDias = document.querySelectorAll("#restar");
const inputValue = document.querySelectorAll(".noches-input");
const subtituloCantNoches = document.querySelectorAll(".subtittle");
const precioHabitacion = document.querySelectorAll(".precio");
const btnAceptarHabitacion = document.querySelectorAll(".btn-aceptar");
const modal = document.querySelector(".modal");

btnSumarDias.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    botones.sumarInput(nArray);
  });
});

btnAceptarHabitacion.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    ui.generarModal(nArray);
  });
});

btnRestarDias.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    botones.restarInput(nArray);
  });
});
