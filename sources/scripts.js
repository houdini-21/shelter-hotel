const selector = document.getElementById("selector");
const inputnoches = document.querySelectorAll(".noches-input");
const precio = document.querySelectorAll(".precio");
const numeronoches = document.querySelectorAll(".subtittle");
let priceChange = true;
let price;
selector.addEventListener("change", valor);

inputnoches.forEach((input, z) => {
  input.addEventListener("keyup", () => {
    typing(input.value, z);
  });
});

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
    precio[ideArray].innerText = `$${price}`
  } else {
    precio[ideArray].innerText = `$${total}`;
  }
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
        (priceChange = true))
      : div.id === options
      ? (div.classList.remove("hidden"),
        estadia.classList.remove("hidden"),
        (priceChange = true))
      : (div.classList.add("hidden"),
        estadia.classList.add("hidden"),
        (priceChange = true));
  }
}
