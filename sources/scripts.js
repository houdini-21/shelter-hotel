const selector = document.getElementById("selector");
let habitacionTemp = "";
let result = "";
let input = 1;
let total;

selector.addEventListener("change", valor);

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
cerrar = document.getElementById("cerrar");
modal = document.getElementById("myModal");
btnAceptar = document.querySelectorAll(".btn-aceptar");
imagenModal = document.getElementById("imagen-modal");
nombreModal = document.getElementById("name-modal");
descripcionModal = document.getElementById("description-modal");
precioModal = document.getElementById("precio-modal");
estadiaModal = document.getElementById("noches-modal");
totalModal = document.getElementById("total-modal");
iconosModal = document.getElementById("iconos-modal");
reservado = document.getElementById('reservado')

reservado.addEventListener('click', () => {
  alert('click')
})

function mostrarmodal(e) {
  const modaltemp = template[e];
  modal.classList.remove("hidden");
  imagenModal.innerHTML = `<img class='img-habitacion-modal' src="${modaltemp.img}">`;
  nombreModal.innerText = `${modaltemp.name}`;
  descripcionModal.innerText = `${modaltemp.description}`;
  precioModal.innerText = `$${modaltemp.price}`;
  if (input != 1) {
    estadiaModal.innerText = `${input} Noches`;
    totalModal.innerText = `$${total} Por ${input} noches`;
  } else {
    estadiaModal.innerText = `1 Noche`;
    totalModal.innerText = `$${modaltemp.price} Por Noche`;
  }
  iconosModal.innerHTML = `${modaltemp.icons}`;
}

btnAceptar.forEach((btnaceptar, j) => {
  btnaceptar.addEventListener("click", () => {
    mostrarmodal(j);
  });
});

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
  total = noches * precioHabitacion;
  precio[uid].innerText = `$${total}`;
}
