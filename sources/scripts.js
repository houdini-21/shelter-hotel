const selector = document.getElementById("selector");
const inputnoches = document.querySelectorAll(".noches-input");
const precio = document.querySelectorAll(".precio");
const numeronoches = document.querySelectorAll(".subtittle");
const btnSumar = document.querySelectorAll("#sumar");
const btnRestar = document.querySelectorAll("#restar");
let priceChange = true;
let price, inputvalor;
let noches = 0;
selector.addEventListener("change", habitacion);

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
  noches--;
  inputnoches[d].value = noches;
  numeronoches[d].innerText = `Por ${noches} Noche(s)`;
  typing(noches, d);
}

function suma(su, o) {
  noches++;
  inputnoches[o].value = noches;
  numeronoches[o].innerText = `Por ${noches} Noche(s)`;
  typing(noches, o);
}

function typing(cont, nu) {
  let nochesEstadia = cont;
  let ideArray = nu;
  if (priceChange) {
    price = precio[ideArray].innerHTML.replace(/[&\/\\$]/g, "");
    priceChange = false;
  }
  let precioFinal = price;
  let total = nochesEstadia * precioFinal;
  numeronoches[ideArray].innerText = `Por ${nochesEstadia} Noche(s)`;
  priceChange = false;

  if (total === 0) {
    precio[ideArray].innerText = `$${price}`;
  } else {
    precio[ideArray].innerText = `$${total}`;
  }
}

function habitacion() {
  const options = selector.value;
  let cards = document.querySelectorAll(".card");
  let estadiabox = document.querySelectorAll(".container-total-estadia");
  for (i = 0; i < cards.length; i++) {
    const div = cards[i];
    const estadia = estadiabox[i];
    ocultarMostrarHabitacionYbtn(options, div, estadia);
  }
}


function ocultarMostrarHabitacionYbtn(opt, card, est) {
  opt === "0"
    ? (card.classList.remove("hidden"),
      est.classList.add("hidden"),
      (priceChange = true),
      (noches = 0))
    : card.id === opt
    ? (card.classList.remove("hidden"),
      est.classList.remove("hidden"),
      (priceChange = true),
      (noches = 0))
    : (card.classList.add("hidden"),
      est.classList.add("hidden"),
      (priceChange = true),
      (noches = 0));
}

/*
inputnoches.forEach((input, z) => {
  input.addEventListener("keyup", () => {
    typing(input.value, z);
  });
});

btnSumarRestar.forEach((id, x) => {
  id.addEventListener('click', ()=> {
    sumarRestarOp(id.id, x)
  })
})

function sumarRestarOp(i, u){
  
}

/**
 * 
 
 */
