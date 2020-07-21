const selector = document.getElementById("selector");
let habitacionTemp = "";
let result = "";
let input = 1;
let total;

selector.addEventListener("change", valor);

template.forEach((card, n) => {
  generadorTemplate(card, n);
});


function generadorTemplate(cards) {
  let iconos = iconosgenerador(cards.icons);
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
      <h2 class="precio" id="${cards.price}">$${cards.price}</h2>
      <p class="subtittle">Por Noche(s)</p>
      <button type="button" class="btn-aceptar">Aceptar</button>
    </div>
  </div>
</article>`;

  result += habitacionTemp;
  document.getElementById("habitaciones").innerHTML = result;
}

const inputnoches = document.querySelectorAll(".noches-input");
const precio = document.querySelectorAll(".precio");
const numeronoches = document.querySelectorAll(".subtittle");


const reservado = document.getElementById("reservado");
nombre = document.getElementById("form-nombre");
apellido = document.getElementById("form-apellido");
email = document.getElementById("form-email");
telefono = document.getElementById("form-telefono");
fecha = document.getElementById("form-fecha");
cantpersonas = document.getElementById("form-people");

reservado.addEventListener("click", () => {
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
    alert("reservacion hecha con exito");
    limpiarcampos();
  }
});

const btnAceptar = document.querySelectorAll(".btn-aceptar");
btnAceptar.forEach((btnaceptar, n) => {
  btnaceptar.addEventListener("click", () => {
    mostrarmodal(n);
  });
});

const btnRestar = document.querySelectorAll("#restar");
btnRestar.forEach((btnres, n) => {
  btnres.addEventListener("click", () => {
    resta(n);
  });
});

const btnSumar = document.querySelectorAll("#sumar");
btnSumar.forEach((btnsum, n) => {
  btnsum.addEventListener("click", () => {
    suma(n);
  });
});

const cerrar = document.getElementById("cerrar");
const modal = document.getElementById("myModal");
cerrar.addEventListener("click", () => {
  modal.classList.add("hidden");
  limpiarcampos();
});

function resta(n) {
  input--;
  if (input < 1) {
    input = 1;
  }
  inputnoches[n].value = input;
  numeronoches[n].innerText = `Por ${input} Noche(s)`;

  calcularPrecio(input, n);
}
function reset(n) {
  input = 1;
  inputnoches[n].value = input;
  numeronoches[n].innerText = `Por Noche`;
  let resetprecio = precio[n].id;
  precio[n].innerText = `$${resetprecio}`;
}

function suma(n) {
  input++;
  inputnoches[n].value = input;
  numeronoches[n].innerText = `Por ${input} Noche(s)`;
  calcularPrecio(input, n);
}

function calcularPrecio(noches, n) {
  let precioHabitacion = precio[n].id;
  total = noches * precioHabitacion;
  precio[n].innerText = `$${total}`;
}

function mostrarmodal(n) {
  const modaltemp = template[n];
  imagenModal = document.getElementById("imagen-modal");
  nombreModal = document.getElementById("name-modal");
  descripcionModal = document.getElementById("description-modal");
  precioModal = document.getElementById("precio-modal");
  estadiaModal = document.getElementById("noches-modal");
  totalModal = document.getElementById("total-modal");
  iconosModal = document.getElementById("iconos-modal");

  let iconos = generadorlabelIco(modaltemp.icons, modaltemp.incluido);

  modal.classList.remove("hidden");

  imagenModal.innerHTML = `<img class='img-habitacion-modal' src="${modaltemp.img}">`;
  nombreModal.innerText = `${modaltemp.name}`;
  descripcionModal.innerText = `${modaltemp.description}`;
  precioModal.innerText = `$${modaltemp.price}`;
  iconosModal.innerHTML = `${iconos}`;
  if (input != 1) {
    estadiaModal.innerText = `${input} Noches`;
    totalModal.innerText = `$${total} Por ${input} noches`;
  } else {
    estadiaModal.innerText = `1 Noche`;
    totalModal.innerText = `$${modaltemp.price} Por Noche`;
  }
}

function iconosgenerador(ico) {
  let iconos = "";
  ico.forEach((icon) => {
    iconos += `<i class='far fa-${icon}'></i>`;
  });
  return iconos;
}
function generadorlabelIco(label, ico) {
  let descripcion = "";
  label.forEach((lab, n) => {
    descripcion += `<i class="far fa-${lab}"> <span class="incluye-habitacion-p-content">${ico[n]}</span></i
  >`;
  });
  return descripcion;
}

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


function limpiarcampos() {
  (nombre.value = ""),
    (apellido.value = ""),
    (email.value = ""),
    (telefono.value = ""),
    (fecha.value = ""),
    (cantpersonas.value = "");
}
