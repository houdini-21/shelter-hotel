const selector = document.getElementById("selector");

selector.addEventListener("change", valor);
let habitacionTemp = "";
let result = "";
let input = 1;

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
        (reset(i)))
      : div.id === options
      ? (div.classList.remove("hidden"),
        estadia.classList.remove("hidden"),
        (reset(i)))
      : (div.classList.add("hidden"),
        estadia.classList.add("hidden"),
        (reset(i)));
  }
}

template.forEach((card) => {
  generadorTemplate(card);
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
          <p>${cards.cantBanos}</p>
          <i class="far fa-toilet"></i>
        </div>
        <p class="tittle-icon">Baño(s)</p>
      </div>
    </div>
    <div class="datos-habitacion">
      <h2 class="nombre-habitacion">${cards.name}</h2>
      <p class='disponible-tag'>${cards.disponible} Disponibles</p>
      <p class="descripcion-habitacion">
        ${cards.description}
      </p>
      <div class="iconos-box">
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

btnRestar.forEach((btnres, u) => {
  btnres.addEventListener("click", () => {
    resta(btnres, u);
  });
});

btnSumar.forEach((btnsum, u) => {
  btnsum.addEventListener("click", () => {
    suma(btnsum, u);
  });
});

function resta(res, d) {
  input--;
  if (input < 1) {
    input = 1;
  }
  inputnoches[d].value = input;
  numeronoches[d].innerText = `Por ${input} Noche(s)`;

  calcularPrecio(input, d);
}
function reset(i){
  input = 1;
  inputnoches[i].value = input;
  numeronoches[i].innerText = `Por Noche`;
  let resetprecio = precio[i].id;
  precio[i].innerText = `$${resetprecio}`
}

function suma(sum, o) {
  input++;
  inputnoches[o].value = input;
  numeronoches[o].innerText = `Por ${input} Noche(s)`;
  calcularPrecio(input, o);
}

function calcularPrecio(noches, uid) {
  let precioHabitacion = precio[uid].id;
  let total = noches * precioHabitacion;
  precio[uid].innerText = `$${total}`
}

