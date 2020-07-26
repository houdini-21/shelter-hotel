let result = "";
let cantNoches = 1;
let precioTotal = 0

class TemplateHabitacion {
  generarTemplate(habitacion) {
    let iconos = this.generarIconos(habitacion.icons);
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

  generarIconos(ico) {
    let iconos = "";
    ico.forEach((icon) => {
      iconos += `<i class='far fa-${icon}'></i>`;
    });
    return iconos;
  }
}

class FuncionalidadesBtns {
  ocultaryMostrarCards(optionselect) {
    let cardHabitacion = document.querySelectorAll(".card");
    let btnEstadia = document.querySelectorAll(".container-total-estadia");

    for (let i = 0; i < cardHabitacion.length; i++) {
      const divHabitacion = cardHabitacion[i];
      const btnControlEstadia = btnEstadia[i];
      this.reset(i)
      optionselect === "0"
        ? (this.mostrarHabitacion(divHabitacion),
          this.ocultarBtnsEstadia(btnControlEstadia))
        : optionselect === divHabitacion.id
        ? (this.mostrarHabitacion(divHabitacion),
          this.mostrarHabitacion(btnControlEstadia))
        : (this.ocultarHabitacion(divHabitacion),
          this.ocultarBtnsEstadia(btnControlEstadia));
    }
  }
  ocultarHabitacion(div) {
    div.classList.add("hidden");
  }
  mostrarHabitacion(div) {
    div.classList.remove("hidden");
  }
  ocultarBtnsEstadia(div) {
    div.classList.add("hidden");
  }
  mostrarBtnsEstadia(div) {
    div.classList.remove("hidden");
  }

  restarInput(nArray) {
    cantNoches--;
    if(cantNoches < 1){
      cantNoches = 1
    }
    this.calcularPrecio(cantNoches, nArray)
    inputValue[nArray].value = cantNoches;
    subtituloCantNoches[nArray].innerText = `Por ${cantNoches} Noche(s)`
  }

  sumarInput(nArray) {
    cantNoches++;
    this.calcularPrecio(cantNoches, nArray)
    inputValue[nArray].value = cantNoches;
    subtituloCantNoches[nArray].innerText = `Por ${cantNoches} Noche(s)`
  }

  calcularPrecio(noches, nArray){
    let price = precioHabitacion[nArray].id;
    precioTotal = noches * price;
    precioHabitacion[nArray].innerText = `$${precioTotal}`;
  }

  reset(nArray) {
    cantNoches = 1;
    inputValue[nArray].value = cantNoches;
    subtituloCantNoches[nArray].innerText = `Por Noche(s)`
    let precioReiniciado = precioHabitacion[nArray].id
    precioHabitacion[nArray].innerText = `$${precioReiniciado}`
  }
}

const selector = document.getElementById("selector");
const ui = new TemplateHabitacion();
const botones = new FuncionalidadesBtns();

template.forEach((card) => {
  ui.generarTemplate(card);
});

selector.addEventListener("change", () => {
  const selectedOption = selector.value;
  botones.ocultaryMostrarCards(selectedOption);
});

const btnSumarDias = document.querySelectorAll("#sumar");
const btnRestarDias = document.querySelectorAll("#restar");
const inputValue = document.querySelectorAll(".noches-input");
const subtituloCantNoches = document.querySelectorAll(".subtittle");
const precioHabitacion = document.querySelectorAll('.precio')

btnSumarDias.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    botones.sumarInput(nArray);
  });
});

btnRestarDias.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    botones.restarInput(nArray);
  });
});
