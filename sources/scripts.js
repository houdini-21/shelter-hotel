const selector = document.getElementById("selector");

selector.addEventListener("change", valor);

function valor() {
  const options = selector.value;
  let ocultarDiv = document.querySelectorAll(".card");
  for (i = 0; i < ocultarDiv.length; i++) {
    const div = ocultarDiv[i];
    if (options == "todos") {
        div.classList.remove('hidden')
      console.log("seleccionaste todas", div);
    } else {
      if (div.id === options) {
        div.classList.remove("hidden");
      } else {
        div.classList.add("hidden");
      }
    }
  }
}
