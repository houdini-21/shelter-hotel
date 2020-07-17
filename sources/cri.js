const selector = document.getElementById("selector");
const inputnoches = document.querySelectorAll(".noches-input");
const precio = document.querySelectorAll(".precio");
const numeronoches = document.querySelectorAll(".subtittle");
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