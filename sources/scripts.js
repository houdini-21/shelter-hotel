const selector = document.getElementById("selector");

selector.addEventListener("change", valor);

function valor() {
  const options = selector.value;
  let cards = document.querySelectorAll(".card");
  for (i = 0; i < cards.length; i++) {
    const div = cards[i];
    if (options === "0") {
      div.classList.remove("hidden");
    } else {
      div.id === options
        ? div.classList.remove("hidden")
        : div.classList.add("hidden");
    }
  }
}
