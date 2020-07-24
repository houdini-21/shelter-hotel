const selector = document.getElementById("selector");
let result = "";

selector.addEventListener("change", btnselector);

class UI {
  generarTemplate(habitacion) {
    let iconos = this.icongenerador(habitacion.icons);
    let habitacionTemp = `<article id="${habitacion.id}" class="card">
          <div class="card-habitacion">
            <div class="imagenes-habitacion">
              <img class="img" src="${habitacion.img}" />
            </div>
            <div class="contenedor-icon-data">
              <div class="cantidad">
                <div class="number-icon">
                  <p>${habitacion.cantCamas}</p>
                  <i class="far fa-bed-alt"></i>
                </div>
                <p class="tittle-icon">Cama(s)</p>
              </div>
              <div class="cantidad">
                <div class="number-icon">
                  <p>${habitacion.cantPersonas}</p>
                  <i class="far fa-users"></i>
                </div>
                <p class="tittle-icon">Persona(s)</p>
              </div>
            </div>
            <div class="datos-habitacion">
              <h2 class="nombre-habitacion">${habitacion.name}</h2>
              <p class='disponible-tag'>${habitacion.disponible} Disponibles</p>
              <p class="descripcion-habitacion">
                ${habitacion.description}
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
              <h2 class="precio" id="${habitacion.price}">$${habitacion.price}</h2>
              <p class="subtittle">Por Noche(s)</p>
              <button type="button" class="btn-aceptar">Aceptar</button>
            </div>
          </div>
        </article>`;

    result += habitacionTemp;
    document.getElementById("habitaciones").innerHTML = result;
  }

  icongenerador(ico) {
    let iconos = "";
    ico.forEach((icon) => {
      iconos += `<i class='far fa-${icon}'></i>`;
    });
    return iconos;
  }
}

function btnselector() {
  const options = selector.value;
  let card = document.querySelectorAll(".card");
  let estadiabox = document.querySelectorAll(".container-total-estadia");

  for (i = 0; i < card.length; i++) {
    const div = card[i];
    const estadia = estadiabox[i];
    options === "0"
      ? (div.classList.remove("hidden"), estadia.classList.add("hidden"))
      : div.id === options
      ? (div.classList.remove("hidden"), estadia.classList.remove("hidden"))
      : (div.classList.add("hidden"), estadia.classList.add("hidden"));
  }
}

template.forEach((card) => {
  const ui = new UI();
  ui.generarTemplate(card);
});
