const selector = document.getElementById("selector");
let habitacionTemp = "";
let result = "";
let input = 1;
let total;

selector.addEventListener("change", btnselector);

template.forEach((card, nArray) => {
  generadorTemplate(card, nArray);
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
precio = document.querySelectorAll(".precio");
numeronoches = document.querySelectorAll(".subtittle");
btnreservado = document.getElementById("reservado");
btnRestar = document.querySelectorAll("#restar");
btnSumar = document.querySelectorAll("#sumar");
nombre = document.getElementById("form-nombre");
apellido = document.getElementById("form-apellido");
email = document.getElementById("form-email");
telefono = document.getElementById("form-telefono");
fecha = document.getElementById("form-fecha");
cantpersonas = document.getElementById("form-people");
containerReservacion = document.getElementById("reservacion-container");
containerReservacionFinalizada = document.getElementById(
  "reservacion-terminada"
);
imagenModal = document.getElementById("imagen-modal");
nombreModal = document.getElementById("name-modal");
descripcionModal = document.getElementById("description-modal");
precioModal = document.getElementById("precio-modal");
estadiaModal = document.getElementById("noches-modal");
totalModal = document.getElementById("total-modal");
iconosModal = document.getElementById("iconos-modal");
btnAceptar = document.querySelectorAll(".btn-aceptar");
btncerrar = document.getElementById("cerrar");
modal = document.getElementById("myModal");

btnAceptar.forEach((btnaceptar, nArray) => {
  btnaceptar.addEventListener("click", () => {
    containerReservacion.classList.remove("hidden");
    containerReservacionFinalizada.classList.add("hidden");
    mostrarmodal(nArray);
  });
});

btnRestar.forEach((btnres, nArray) => {
  btnres.addEventListener("click", () => {
    resta(nArray);
  });
});

btnSumar.forEach((btnsum, nArray) => {
  btnsum.addEventListener("click", () => {
    suma(nArray);
  });
});

btncerrar.addEventListener("click", () => {
  modal.classList.add("hidden");
  limpiarcampos();
});

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
    limpiarcampos();
  }
});

function resta(nArray) {
  input--;
  if (input < 1) {
    input = 1;
  }
  inputnoches[nArray].value = input;
  numeronoches[nArray].innerText = `Por ${input} Noche(s)`;

  calcularPrecio(input, nArray);
}

function reset(nArray) {
  input = 1;
  inputnoches[nArray].value = input;
  numeronoches[nArray].innerText = `Por Noche`;
  let resetprecio = precio[nArray].id;
  precio[nArray].innerText = `$${resetprecio}`;
}

function suma(nArray) {
  input++;
  inputnoches[nArray].value = input;
  numeronoches[nArray].innerText = `Por ${input} Noche(s)`;
  calcularPrecio(input, nArray);
}

function calcularPrecio(noches, nArray) {
  let precioHabitacion = precio[nArray].id;
  total = noches * precioHabitacion;
  precio[nArray].innerText = `$${total}`;
}

function mostrarmodal(nArray) {
  const modaltemp = template[nArray];
  let iconos = generadorlabelIco(modaltemp.icons, modaltemp.incluido);
  modal.classList.replace("hidden", "fadeIn");

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
function generadorlabelIco(icon, desc) {
  let descripcion = "";
  icon.forEach((ico, n) => {
    descripcion += `<i class="far fa-${ico}"> <span class="incluye-habitacion-p-content">${desc[n]}</span></i
  >`;
  });
  return descripcion;
}

function btnselector() {
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
