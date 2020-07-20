const selector = document.getElementById("selector");

selector.addEventListener("change", valor);
let habitacionTemp = "";
let result = "";
let input = 1;
let resultadoico = "";
let modalcard = "";

function valor() {
  const options = selector.value;
  let cards = document.querySelectorAll(".card");
  let estadiabox = document.querySelectorAll(".container-total-estadia");
  for (i = 0; i < cards.length; i++) {
    const div = cards[i];
    const estadia = estadiabox[i];
    options === "0"
      ? (div.classList.remove("hidden"),
        estadia.classList.add("hidden"),
        reset(i))
      : div.id === options
      ? (div.classList.remove("hidden"),
        estadia.classList.remove("hidden"),
        reset(i))
      : (div.classList.add("hidden"),
        estadia.classList.add("hidden"),
        reset(i));
  }
}

template.forEach((card, l) => {
  generadorTemplate(card, l);
});

function generadorTemplate(cards) {
  habitacionTemp = `<article id="${cards.id}" class="card">
  <div class="card-habitacion">
    <div class="imagenes-habitacion">
      <img class="img" src="${cards.img}" />
    </div>
    <div class="contenedor-icon-data">
      <div class="cantidad">
        <div class="number-icon">
          <p>${cards.cantCamas}</p>
          <i class="far fa-bed-alt"></i>
        </div>
        <p class="tittle-icon">Cama(s)</p>
      </div>
      <div class="cantidad">
        <div class="number-icon">
          <p>${cards.cantPersonas}</p>
          <i class="far fa-users"></i>
        </div>
        <p class="tittle-icon">Persona(s)</p>
      </div>
    </div>
    <div class="datos-habitacion">
      <h2 class="nombre-habitacion">${cards.name}</h2>
      <p class='disponible-tag'>${cards.disponible} Disponibles</p>
      <p class="descripcion-habitacion">
        ${cards.description}
      </p>
      <div class="iconos-box" id='box-icon'>
      ${cards.icons}
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
      <h2 class="precio" id="${cards.price}">$${cards.price}</h2>
      <p class="subtittle">Por Noche(s)</p>
      <button type="button" class="btn-aceptar">Aceptar</button>
    </div>
  </div>
</article>`;

  result += habitacionTemp;
  document.getElementById("habitaciones").innerHTML = result;
}

const btnSumar = document.querySelectorAll("#sumar");
btnRestar = document.querySelectorAll("#restar");
inputnoches = document.querySelectorAll(".noches-input");
precio = document.querySelectorAll(".precio");
numeronoches = document.querySelectorAll(".subtittle");

btnAceptar = document.querySelectorAll(".btn-aceptar");

btnAceptar.forEach((btnaceptar, j) => {
  btnaceptar.addEventListener("click", () => {
    mostrarmodal(j);
  });
});
function mostrarmodal(j) {
  const modalcardsdata = template[j];

  modalcard = `<div id="myModal" class="modal">
  <div class="modal-container">
    <div class="exit-btn">
      <i class='far fa-times' id='cerrar'></i>
    </div>
    <div class="tittle">
      <h2 class="titulo-modal">Detalles Habitacion</h2>
    </div>
    <div class="container-habitacion-detalles-img">
      <div class="imagen-habitacion-modal">
        <img
          class="img-habitacion-modal"
          src="${modalcardsdata.img}"
        />
      </div>
      <div class="detalles-habitacion-modal">
        <p class="detalles-habitacion-p">
          Habitacion:
          <span class="detalles-habitacion-p-content">Individual</span>
        </p>
        <p class="detalles-habitacion-p">
          Descripcion:
          <span class="detalles-habitacion-p-content"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti, architecto consequatur.</span
          >
        </p>
        <p class="detalles-habitacion-p">
          Precio:
          <span class="detalles-habitacion-p-content">$45 Por Noche</span>
        </p>
        <p class="detalles-habitacion-p">
          Estadia:
          <span class="detalles-habitacion-p-content">5 Noches</span>
        </p>
        <p class="detalles-habitacion-p">
          Total:
          <span class="detalles-habitacion-p-content"
            >$225 Por 5 Noches</span
          >
        </p>
      </div>
      <div class="incluye-habitacion">
        <p class="detalles-habitacion-p">Incluye:</p>
        <div class="iconos-incluye">
          <i class="far fa-wifi" id="incluido-icon">
            <span class="incluye-habitacion-p-content">Wi-fi</span></i
          >
          <i class="far fa-air-conditioner" id="incluido-icon">
            <span class="incluye-habitacion-p-content"
              >Aire Acondicionado</span
            ></i
          >
          <i class="far fa-shower" id="incluido-icon">
            <span class="incluye-habitacion-p-content"
              >Ducha agua caliente/helado</span
            ></i
          >
        </div>
      </div>
    </div>
    <div class="tittle">
      <h2 class="titulo-modal-formulario">Formulario</h2>
    </div>
    <div class="formulario-habitacion-modal">
      <form class="formulario-reserva">
        <div class="form">
          <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Nombre</span>
          </label>
        </div>

        <div class="form">
          <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Apellido</span>
          </label>
        </div>
        <div class="form">
          <input type="email" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Email</span>
          </label>
        </div>

        <div class="form">
          <input type="number" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Telefono</span>
          </label>
        </div>
        <div class="form-date">
          <input type="date" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Fecha inicio</span>
          </label>
        </div>
        <div class="form">
          <input type="number" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
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
</div>
`;
  document.body.innerHTML = modalcard;
}
cerrar = document.getElementById("cerrar");
modal = document.getElementById("myModal");

btnRestar.forEach((btnres, u) => {
  btnres.addEventListener("click", () => {
    resta(u);
  });
});

cerrar.addEventListener("click", () => {
  modal.classList.add("hidden");
});

btnSumar.forEach((btnsum, u) => {
  btnsum.addEventListener("click", () => {
    suma(u);
  });
});

function resta(d) {
  input--;
  if (input < 1) {
    input = 1;
  }
  inputnoches[d].value = input;
  numeronoches[d].innerText = `Por ${input} Noche(s)`;

  calcularPrecio(input, d);
}
function reset(i) {
  input = 1;
  inputnoches[i].value = input;
  numeronoches[i].innerText = `Por Noche`;
  let resetprecio = precio[i].id;
  precio[i].innerText = `$${resetprecio}`;
}

function suma(o) {
  input++;
  inputnoches[o].value = input;
  numeronoches[o].innerText = `Por ${input} Noche(s)`;
  calcularPrecio(input, o);
}

function calcularPrecio(noches, uid) {
  let precioHabitacion = precio[uid].id;
  let total = noches * precioHabitacion;
  precio[uid].innerText = `$${total}`;
}
